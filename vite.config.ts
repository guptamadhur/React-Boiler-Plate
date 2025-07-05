import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png'
      ],
      manifest: {
        name: 'Personal Website — Madhur Gupta',
        short_name: 'MG',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          }
        ]
      }
    })
  ],
  base: '/',     
  // base: process.env.NODE_ENV === 'production' ? '/React-Boiler-Plate/' : '/',
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist/client'
  // emptyOutDir: true
  //   rollupOptions: {
  //     input: './index.html'
    },
  //   ssrManifest: true
  // },
  // ssr: {
    // outDir: 'dist/server'
  //   noExternal: ['react', 'react-dom']
  // },
  // root: '.',
  // publicDir: 'public'
});
