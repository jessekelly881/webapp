/// <reference types="vitest" />


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import progress from 'vite-plugin-progress'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    progress()
  ],
  server: {
    host: true
  },
  test: {
    watch: false,
    globals: true,
    environment: 'node'
  },
})
