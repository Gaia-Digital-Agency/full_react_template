/**
 * ==========================================================================
 * NAVBAR COMPONENT
 * ==========================================================================
 * 
 * Responsive navigation bar with:
 * - Logo/brand link
 * - Desktop navigation links
 * - Mobile hamburger menu with slide-out drawer
 * - Scroll-aware styling (transparent -> solid background)
 * - Smooth animations using Framer Motion
 * 
 * Accessibility:
 * - Proper ARIA labels for mobile menu
 * - Keyboard navigation support
 * - Focus management when menu opens/closes
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { cn } from '@/utils/helpers';
import { NavLink } from '@/types';

/**
 * Navigation links configuration
 * Add or modify navigation items here
 */
const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Animation variants for mobile menu
 */
const menuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

/**
 * Staggered animation for menu items
 */
const menuItemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

/**
 * Navbar Component
 */
export default function Navbar(): JSX.Element {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Handle scroll event to change navbar appearance
   * Adds solid background when scrolled past threshold
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Close mobile menu when route changes
   */
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  /**
   * Lock body scroll when mobile menu is open
   */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  /**
   * Check if a link is currently active
   */
  const isActiveLink = (href: string): boolean => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ----- Logo / Brand ----- */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-display font-bold text-neutral-900 dark:text-white hover:text-primary-500 transition-colors"
          >
            {/* Logo Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            {/* Brand Name */}
            <span className="hidden sm:block">
              Web<span className="text-primary-500">Dev</span>
            </span>
          </Link>

          {/* ----- Desktop Navigation ----- */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'relative font-medium text-sm uppercase tracking-wide transition-colors py-2',
                  isActiveLink(link.href)
                    ? 'text-primary-500'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-500'
                )}
              >
                {link.label}
                {/* Active indicator line */}
                {isActiveLink(link.href) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              to="/contact"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Get Started
            </Link>
          </div>

          {/* ----- Mobile Menu Button ----- */}
          <button
            className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* ----- Mobile Menu Overlay ----- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-neutral-900 shadow-2xl md:hidden"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-100 dark:border-neutral-800">
                <span className="font-display font-bold text-lg">Menu</span>
                <button
                  className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="p-4">
                <ul className="space-y-2">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.href}
                      custom={index}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={link.href}
                        className={cn(
                          'block px-4 py-3 rounded-xl font-medium transition-all',
                          isActiveLink(link.href)
                            ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <motion.div
                  custom={NAV_LINKS.length}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800"
                >
                  <Link
                    to="/contact"
                    className="btn-primary w-full justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
