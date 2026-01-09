import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimized code splitting for lazy-loaded layout sections
    rollupOptions: {
      output: {
        // Each lazy-loaded component gets its own chunk with optimized names
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    // Minification with console/debugger removal for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      output: {
        comments: false
      }
    },
    // CSS optimizations
    cssCodeSplit: true,
    cssMinify: true,
    // Increase chunk size warning threshold for our lazy-loaded chunks
    chunkSizeWarningLimit: 500,
    // Don't report compressed size for faster builds
    reportCompressedSize: false
  }
})
