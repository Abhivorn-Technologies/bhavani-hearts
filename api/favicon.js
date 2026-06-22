import fs from 'fs';
import path from 'path';

export default (req, res) => {
  try {
    const filePath = path.join(process.cwd(), 'api/favicon.png');
    const favicon = fs.readFileSync(filePath);
    
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.end(favicon);
  } catch (error) {
    console.error('Failed to serve favicon:', error);
    res.statusCode = 500;
    res.end();
  }
};
