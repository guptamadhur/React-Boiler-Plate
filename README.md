# React SSR Boilerplate with Vite, Express, and PWA

A modern starter kit for building server-side rendered (SSR) React applications using Vite, Express, React Router, and TypeScript. Includes Progressive Web App (PWA) support and is ready for deployment.

---

## Features

- ⚡️ **Vite** for fast development and builds
- ⚛️ **React 19** with TypeScript
- 🛣️ **React Router** for client-side routing
- 🖥️ **Server-Side Rendering (SSR)** via Express and vite-plugin-ssr
- 📱 **PWA** support with VitePWA
- 🧪 **TypeScript** and PropTypes for type safety
- 🗂️ Clean, scalable project structure

---

## Getting Started

1. **Install [Node.js 18+](https://nodejs.org) and npm 9+**
2. **Clone this repo and navigate to the project root**
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## Scripts

| Command         | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start dev server with SSR and hot reload      |
| `npm run build` | Build client and server bundles for prod      |
| `npm run serve` | Serve the production build                    |
| `npm run deploy`| Deploy the client build to GitHub Pages       |

---

## Project Structure

```
├── public/                # Static assets (index.html, icons, etc.)
├── src/
│   ├── App.tsx            # Main React app
│   ├── entry-client.tsx   # Client entry (hydrates React)
│   ├── entry-server.tsx   # Server entry (SSR)
│   └── pages/             # React Router pages (Home, About, etc.)
├── server/
│   └── index.ts           # Express server for SSR
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Troubleshooting

- If you see errors about missing files, ensure all files exist as described above.
- If SSR routes (like `/about`) do not load on refresh, make sure your Express server passes the correct URL to the SSR render function.
- For issues with dependencies, try deleting `node_modules` and running `npm install` again.

---

## License

MIT © Madhur Gupta
