/// <reference types="vitest" />


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import progress from 'vite-plugin-progress';
import handlebars from 'vite-plugin-handlebars';
import { visualizer } from "rollup-plugin-visualizer";


export default defineConfig({
  plugins: [
    handlebars({
      context: {
        title: "Template",
      },
    }),
    react(),
    tsconfigPaths(),
    progress(),
    visualizer({
      emitFile: true,
    })
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
