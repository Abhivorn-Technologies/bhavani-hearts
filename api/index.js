import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

export default async (req, res) => {
  try {
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
    const url = `${protocol}://${host}${req.url}`;

    // Convert Node.js request to Fetch API Request
    let body;
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      body = req;
    }

    const fetchRequest = new Request(url, {
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


