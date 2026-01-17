/**
 * ==========================================================================
 * POSTCSS CONFIGURATION
 * ==========================================================================
 * 
 * PostCSS processes CSS with plugins:
 * - tailwindcss: Generates utility classes from configuration
 * - autoprefixer: Adds vendor prefixes for cross-browser compatibility
 *   (supports Chrome, Safari, Firefox, Edge on Desktop, iOS, Android)
 */

export default {
  plugins: {
    /* Tailwind CSS plugin - processes @tailwind directives */
    tailwindcss: {},
    
    /* Autoprefixer - adds vendor prefixes based on browserslist in package.json */
    autoprefixer: {},
  },
};
