import { createServer } from 'https';
import { parse } from 'url';
import next from 'next';
import fs from 'fs';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Define paths for your certificate and key
const httpsOptions = {
  key: fs.readFileSync('./certs/localhost+3-key.pem'),
  cert: fs.readFileSync('./certs/localhost+3.pem'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, () => {
    console.log('> Ready on https://localhost:3000');
  });
});
