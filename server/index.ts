// server.ts
import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isProd = process.env.NODE_ENV === 'production';
const resolve = (p: string) => path.resolve(__dirname, p);

async function startServer() {
  const app = express();

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);

    app.use('*', async (req, res) => {
      try {
        const url = req.originalUrl;

        let template = fs.readFileSync(resolve('../public/index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

        const stream = render(url); // Pass the URL here
        res.status(200).set({ 'Content-Type': 'text/html' });
        stream.pipe(res);
      } catch (e: any) {
        vite?.ssrFixStacktrace(e);
        console.error(e);
        res.status(500).end(e.message);
      }
    });
  } else {
    app.use(express.static(resolve('../dist/client')));
    const { render } = await import(resolve('../dist/server/entry-server.js'));

    app.use('*', async (req, res) => {
      const url = req.originalUrl;
      const stream = render(url); // Pass the URL here
      res.status(200).set({ 'Content-Type': 'text/html' });
      stream.pipe(res);
    });
  }

  const port = process.env.PORT || 5173;
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}

startServer();
