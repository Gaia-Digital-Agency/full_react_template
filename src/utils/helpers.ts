/**
 * ==========================================================================
 * UTILITY HELPERS
 * ==========================================================================
 * 
 * Reusable utility functions for common operations:
 * - Class name merging
 * - Date/time formatting
 * - String manipulation
 * - Validation helpers
 * - Animation utilities
 */

// ==========================================================================
// CLASS NAME UTILITIES
// ==========================================================================

/**
 * Merges multiple class names, filtering out falsy values
 * Useful for conditional class application
 * 
 * @example
 * cn('base-class', isActive && 'active', size === 'lg' && 'text-lg')
 * // Returns: "base-class active text-lg" (if conditions are true)
 * 
 * @param classes - Array of class names or falsy values
 * @returns Merged class string
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Creates a class name generator with a base prefix
 * Useful for BEM-style naming or component-scoped classes
 * 
 * @example
 * const bem = createClassNames('card');
 * bem('header') // Returns: "card__header"
 * bem('button', 'primary') // Returns: "card__button--primary"
 * 
 * @param base - Base component name
 * @returns Function to generate namespaced classes
 */
export function createClassNames(base: string) {
  return (element?: string, modifier?: string): string => {
    let className = base;
    if (element) className += `__${element}`;
    if (modifier) className += `--${modifier}`;
    return className;
  };
}

// ==========================================================================
// DATE & TIME UTILITIES
// ==========================================================================

/**
 * Formats a date to a localized string
 * 
 * @param date - Date to format
 * @param options - Intl.DateTimeFormat options
 * @param locale - Locale string (default: browser locale)
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  locale?: string
): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Formats current time with timezone support
 * 
 * @param timezone - IANA timezone identifier
 * @param format - Time format options
 * @returns Formatted time string
 */
export function formatTime(
  timezone?: string,
  format: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }
): string {
  const options: Intl.DateTimeFormatOptions = {
    ...format,
    ...(timezone && { timeZone: timezone }),
  };
  return new Intl.DateTimeFormat(undefined, options).format(new Date());
}

/**
 * Returns a greeting based on the current time of day
 * 
 * @returns "Good morning", "Good afternoon", or "Good evening"
 */
export function getTimeGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

// ==========================================================================
// STRING UTILITIES
// ==========================================================================

/**
 * Truncates a string to a maximum length with ellipsis
 * 
 * @param str - String to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated string
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength - 3)}...`;
}

/**
 * Converts a string to URL-friendly slug
 * 
 * @param str - String to convert
 * @returns Slug string
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Capitalizes the first letter of a string
 * 
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ==========================================================================
// NUMBER UTILITIES
// ==========================================================================

/**
 * Formats a number with thousand separators
 * 
 * @param num - Number to format
 * @param locale - Locale for formatting
 * @returns Formatted number string
 */
export function formatNumber(num: number, locale?: string): string {
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * Generates a random number within a range
 * 
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns Random number
 */
export function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ==========================================================================
// VALIDATION UTILITIES
// ==========================================================================

/**
 * Validates an email address format
 * 
 * @param email - Email string to validate
 * @returns True if valid email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Checks if a string is empty or only whitespace
 * 
 * @param str - String to check
 * @returns True if string is empty
 */
export function isEmpty(str: string | null | undefined): boolean {
  return !str || str.trim().length === 0;
}

// ==========================================================================
// SCROLL UTILITIES
// ==========================================================================

/**
 * Smoothly scrolls to an element by ID
 * 
 * @param elementId - Target element ID
 * @param offset - Offset from top (for fixed headers)
 */
export function scrollToElement(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

/**
 * Scrolls to the top of the page
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// ==========================================================================
// STORAGE UTILITIES
// ==========================================================================

/**
 * Safely gets an item from localStorage
 * 
 * @param key - Storage key
 * @param defaultValue - Default value if not found
 * @returns Parsed value or default
 */
export function getStorageItem<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

/**
 * Safely sets an item in localStorage
 * 
 * @param key - Storage key
 * @param value - Value to store
 */
export function setStorageItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
  }
}

// ==========================================================================
// DEBOUNCE & THROTTLE
// ==========================================================================

/**
 * Creates a debounced version of a function
 * 
 * @param func - Function to debounce
 * @param wait - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), wait);
  };
}

/**
 * Creates a throttled version of a function
 * 
 * @param func - Function to throttle
 * @param limit - Minimum time between calls in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ==========================================================================
// MEDIA QUERY UTILITIES
// ==========================================================================

/**
 * Checks if the current viewport matches a media query
 * 
 * @param query - CSS media query string
 * @returns True if media query matches
 */
export function matchesMediaQuery(query: string): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(query).matches;
}

/**
 * Checks if the device prefers reduced motion
 * 
 * @returns True if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return matchesMediaQuery('(prefers-reduced-motion: reduce)');
}

/**
 * Checks if the device is in dark mode
 * 
 * @returns True if system is in dark mode
 */
export function prefersDarkMode(): boolean {
  return matchesMediaQuery('(prefers-color-scheme: dark)');
}
