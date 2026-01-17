/**
 * ==========================================================================
 * MAIN ENTRY POINT
 * ==========================================================================
 * 
 * This is the application's main entry point where React mounts to the DOM.
 * 
 * Responsibilities:
 * - Import global styles
 * - Configure React StrictMode for development checks
 * - Mount the root App component to the DOM
 * 
 * StrictMode helps identify:
 * - Unsafe lifecycle methods
 * - Legacy API usage
 * - Unexpected side effects
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Import global styles (Tailwind + custom SCSS)
import './index.css';

// Import root App component
import App from './App';

/**
 * Get the root DOM element
 * The '!' asserts that the element exists (non-null assertion)
 */
const rootElement = document.getElementById('root')!;

/**
 * Create React root and render the application
 * 
 * Structure:
 * - StrictMode: Development mode checks
 * - BrowserRouter: Enables client-side routing
 * - App: Main application component
 */
createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
