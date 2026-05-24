import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let serverModule = null;

async function getServer() {
  if (!serverModule) {
    const { default: server } = await import('../dist/server/server.js');
    serverModule = server;
  }
  return serverModule;
}

export default async (req, res) => {
  try {
    const server = await getServer();
    
    // Create a Request object compatible with the server
    const url = new URL(req.url || '/', `http://${req.headers.host}`);
    const request = new Request(url.toString(), {
      method: req.method,
      headers: new Headers(req.headers),
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
    });

    // Call the server's fetch handler
    const response = await server.fetch(request, {}, {});

    // Set response headers
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    res.statusCode = response.status;
    const body = await response.text();
    res.end(body);
  } catch (error) {
    console.error('Server error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>500 Internal Server Error</h1>');
  }
};

