/**
 * ==========================================================================
 * APP COMPONENT
 * ==========================================================================
 * 
 * Root application component that defines:
 * - Route configuration for all pages
 * - Global layout structure (Navbar, main content, Footer)
 * - Scroll restoration on route changes
 * 
 * This component wraps all pages with consistent navigation and footer.
 */

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Page Components
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Contact from '@/pages/Contact';

/**
 * ScrollToTop Component
 * Scrolls to top of page on route changes
 * Improves user experience when navigating between pages
 */
function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'instant', // Use 'instant' for route changes to avoid jarring animation
    });
  }, [pathname]);

  return null;
}

/**
 * Main App Component
 * 
 * Structure:
 * - Skip link for accessibility (keyboard navigation)
 * - Navbar (sticky header)
 * - Main content area with routes
 * - Footer with visitor info
 */
function App(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950">
      {/* ----- Skip Link for Accessibility ----- */}
      {/* Allows keyboard users to skip navigation and jump to main content */}
      <a 
        href="#main-content" 
        className="skip-link"
      >
        Skip to main content
      </a>

      {/* ----- Scroll Restoration ----- */}
      {/* Resets scroll position when navigating to new pages */}
      <ScrollToTop />

      {/* ----- Navigation Bar ----- */}
      {/* Sticky header with logo and navigation links */}
      <Navbar />

      {/* ----- Main Content Area ----- */}
      {/* flex-1 ensures main content fills available space (pushes footer down) */}
      <main 
        id="main-content" 
        className="flex-1"
        role="main"
      >
        {/* ----- Route Definitions ----- */}
        <Routes>
          {/* Home Page - Hero and services overview */}
          <Route path="/" element={<Home />} />
          
          {/* About Page - Company history, portfolio, clients */}
          <Route path="/about" element={<About />} />
          
          {/* Products Page - WordPress and React service details */}
          <Route path="/products" element={<Products />} />
          
          {/* Contact Page - Address, email, contact form */}
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Fallback - Redirect unknown routes to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* ----- Footer ----- */}
      {/* Contains links, visitor count, location, and current time */}
      <Footer />
    </div>
  );
}

export default App;
