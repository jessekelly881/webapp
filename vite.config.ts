/// <reference types="vitest" />


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import progress from 'vite-plugin-progress';
import handlebars from 'vite-plugin-handlebars';
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from 'vite-plugin-pwa'
import { qrcode } from 'vite-plugin-qrcode';
import config from "./src/config";



export default defineConfig({
  plugins: [
    handlebars({
      context: {
        title: config.name,
        description: config.description
      },
    }),
    react(),
    tsconfigPaths(),
    progress(),
    qrcode(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: config.name,
        short_name: config.name,
        description: config.description,
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
        ]
      },
      devOptions: {
        enabled: true
      },
    }),
    visualizer({ // last
      emitFile: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    host: true
  },
  define: {
    'process.env': process.env
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom'
  },
})
