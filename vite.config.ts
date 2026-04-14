import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer': ['framer-motion'],
          'router': ['react-router-dom'],
          'three': ['three'],
          'globe': ['three-globe'],
        },
      },
    },
  },
})
