/**
 * ==========================================================================
 * VITE CONFIGURATION
 * ==========================================================================
 * 
 * This configuration file sets up Vite with:
 * - React plugin for JSX/TSX support
 * - SCSS preprocessing
 * - Path aliases for cleaner imports
 * - Development server settings
 * - Build optimizations for production
 * 
 * @see https://vitejs.dev/config/
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  /* ----- Plugins Configuration ----- */
  /* React plugin enables JSX transformation and Fast Refresh for HMR */
  plugins: [react()],

  /* ----- Path Resolution ----- */
  /* Aliases allow cleaner imports like '@/components' instead of '../../../components' */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },

  /* ----- CSS/SCSS Configuration ----- */
  css: {
    /* Enable CSS modules for scoped styling */
    modules: {
      localsConvention: 'camelCase',
    },
    /* SCSS preprocessor options */
    preprocessorOptions: {
      scss: {
        /* Auto-import SCSS variables/mixins in all files */
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    },
  },

  /* ----- Development Server Settings ----- */
  server: {
    port: 3000,           /* Default dev server port */
    open: true,           /* Auto-open browser on start */
    host: true,           /* Listen on all network interfaces */
    strictPort: false,    /* Try next port if 3000 is in use */
  },

  /* ----- Production Build Configuration ----- */
  build: {
    outDir: 'dist',                    /* Output directory for build */
    sourcemap: true,                   /* Generate source maps for debugging */
    minify: 'esbuild',                 /* Use esbuild for minification (built-in, fast) */
    target: 'es2020',                  /* Target modern browsers */
    rollupOptions: {
      output: {
        /* Split vendor chunks for better caching */
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
        },
      },
    },
  },

  /* ----- Preview Server (for testing production builds locally) ----- */
  preview: {
    port: 4173,
    open: true,
  },
});
