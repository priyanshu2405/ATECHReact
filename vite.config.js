import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize build output
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Set to true for production debugging
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
      },
    },
    rollupOptions: {
      output: {
        // Chunk strategy for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
  },
  server: {
    // Development server configuration
    strictPort: false,
  },
  preview: {
    port: 4173,
    allowedHosts: ['atechreact-3.onrender.com'],
  },
})
