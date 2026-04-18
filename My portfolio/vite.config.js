import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // CSS code splitting — each chunk gets its own CSS file,
    // so only the CSS needed for visible components is loaded first
    cssCodeSplit: true,

    // Target modern browsers for smaller output
    target: 'esnext',

    // Minify with esbuild (fast + effective)
    minify: 'esbuild',

    // Raise the inline limit so small assets get inlined (avoids extra requests)
    assetsInlineLimit: 4096,

    rollupOptions: {
      output: {
        // Split vendor chunks manually so the browser can cache them
        // separately from your own code
        manualChunks(id) {
          // React core — very stable, cache for a long time
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }
          // Framer Motion — large library, split out separately
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion'
          }
          // React Router
          if (id.includes('node_modules/react-router')) {
            return 'react-router'
          }
          // Three.js / 3D libs — largest dependency, load last
          if (
            id.includes('node_modules/three') ||
            id.includes('node_modules/@react-three')
          ) {
            return 'three-vendor'
          }
          // Icons — bundle separately from UI code
          if (id.includes('node_modules/react-icons')) {
            return 'react-icons'
          }
        },

        // Named output format for cache-busting
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
