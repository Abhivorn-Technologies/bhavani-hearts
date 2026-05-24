import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');
const clientDir = path.join(__dirname, '../dist/client');

let cachedServer = null;

async function loadServer() {
  if (cachedServer) {
    return cachedServer;
  }

  try {
    const serverModule = await import('../dist/server/server.js');
    cachedServer = serverModule.default || serverModule;
    return cachedServer;
  } catch (error) {
    console.error('Failed to load server module:', error);
    throw error;
  }
}

async function serveStaticFile(pathname) {
  // Check if it's a static asset file
  if (pathname.startsWith('/assets/')) {
    try {
      // Try to find the file in dist/client/assets first
      let filePath = path.join(clientDir, pathname);
      let content;
      
      try {
        content = await fs.readFile(filePath);
      } catch {
        // Fall back to dist/assets if not found in client
        filePath = path.join(distDir, pathname);
        content = await fs.readFile(filePath);
      }
      
      // Prevent directory traversal
      if (!filePath.startsWith(distDir)) {
        return null;
      }
      
      const ext = path.extname(pathname).toLowerCase();
      const mimeTypes = {
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
      };
      return {
        status: 200,
        content,
        contentType: mimeTypes[ext] || 'application/octet-stream',
      };
    } catch (error) {
      console.error(`Static file not found: ${pathname}`, error.message);
      return null;
    }
  }
  return null;
}

export default async (req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host}`);
    const pathname = url.pathname;

    // Try to serve static files first
    const staticFile = await serveStaticFile(pathname);
    if (staticFile) {
      res.statusCode = staticFile.status;
      res.setHeader('Content-Type', staticFile.contentType);
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      res.end(staticFile.content);
      return;
    }

    // Fall through to SSR server for dynamic routes
    const server = await loadServer();

    if (!server || typeof server.fetch !== 'function') {
      console.error('Server fetch handler not found');
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/html');
      res.end('<h1>500 - Server Not Initialized</h1>');
      return;
    }

    // Build the full URL
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const fullUrl = `${protocol}://${host}${req.url}`;

    // Convert Node.js request to Fetch API Request
    let body;
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      body = req;
    }

    const fetchRequest = new Request(fullUrl, {
      method: req.method,
      headers: req.headers,
      body: body,
    });

    // Call the server handler
    const response = await server.fetch(fetchRequest, {}, {});

    // Set response status and headers
    res.statusCode = response.status;
    
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    // Send response body
    const text = await response.text();
    res.end(text);
  } catch (error) {
    console.error('Server error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>500 - Internal Server Error</h1><pre>' + error.message + '</pre>');
  }
};


