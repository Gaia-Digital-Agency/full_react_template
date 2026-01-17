/**
 * ==========================================================================
 * TYPE DEFINITIONS
 * ==========================================================================
 * 
 * Centralized TypeScript type definitions for the application.
 * Includes:
 * - Component prop types
 * - Data model interfaces
 * - Utility types
 * - API response types
 */

// ==========================================================================
// NAVIGATION TYPES
// ==========================================================================

/**
 * Navigation link item
 * Used in Navbar and Footer components
 */
export interface NavLink {
  /** Display text for the link */
  label: string;
  /** Route path or external URL */
  href: string;
  /** Whether the link opens in a new tab */
  external?: boolean;
  /** Optional icon component */
  icon?: React.ReactNode;
}

/**
 * Navigation section for grouped links
 * Used in Footer for organizing link categories
 */
export interface NavSection {
  /** Section title */
  title: string;
  /** Links within this section */
  links: NavLink[];
}

// ==========================================================================
// CONTENT TYPES
// ==========================================================================

/**
 * Service/Product item
 * Used on Products page
 */
export interface Product {
  /** Unique identifier */
  id: string;
  /** Product name */
  name: string;
  /** Short description */
  description: string;
  /** Detailed features list */
  features: string[];
  /** Product icon or image */
  icon: React.ReactNode;
  /** Price or pricing tier (optional) */
  price?: string;
  /** CTA button text */
  ctaText: string;
  /** CTA link destination */
  ctaLink: string;
  /** Highlight badge text (optional) */
  badge?: string;
}

/**
 * Portfolio/Client item
 * Used on About page
 */
export interface PortfolioItem {
  /** Unique identifier */
  id: string;
  /** Client/Project name */
  name: string;
  /** Project description */
  description: string;
  /** Thumbnail image URL */
  imageUrl: string;
  /** Project category/tag */
  category: string;
  /** External link to live project (optional) */
  liveUrl?: string;
}

/**
 * Timeline/History event
 * Used on About page
 */
export interface TimelineEvent {
  /** Year of the event */
  year: string;
  /** Event title */
  title: string;
  /** Event description */
  description: string;
}

/**
 * Team member profile
 * Used on About page (optional)
 */
export interface TeamMember {
  /** Member name */
  name: string;
  /** Job title/role */
  role: string;
  /** Profile image URL */
  imageUrl: string;
  /** Social media links */
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// ==========================================================================
// CONTACT & FORM TYPES
// ==========================================================================

/**
 * Contact form data
 */
export interface ContactFormData {
  /** Full name */
  name: string;
  /** Email address */
  email: string;
  /** Company name (optional) */
  company?: string;
  /** Subject/Topic */
  subject: string;
  /** Message content */
  message: string;
}

/**
 * Contact information item
 */
export interface ContactInfo {
  /** Info type (address, email, phone) */
  type: 'address' | 'email' | 'phone';
  /** Display label */
  label: string;
  /** Value (address text, email, phone number) */
  value: string;
  /** Link href (mailto:, tel:, maps URL) */
  href?: string;
  /** Icon component */
  icon: React.ReactNode;
}

// ==========================================================================
// VISITOR INFO TYPES
// ==========================================================================

/**
 * Visitor location data
 * Retrieved from IP geolocation API
 */
export interface VisitorLocation {
  /** City name */
  city: string;
  /** Country name */
  country: string;
  /** Country code (ISO 3166-1 alpha-2) */
  countryCode: string;
  /** Region/State */
  region: string;
  /** Timezone identifier */
  timezone: string;
}

/**
 * Complete visitor information
 * Used in Footer component
 */
export interface VisitorInfo {
  /** Current visitor count (session-based or mock) */
  visitorCount: number;
  /** Visitor's geolocation */
  location: VisitorLocation | null;
  /** Current local time string */
  currentTime: string;
  /** Loading state */
  isLoading: boolean;
  /** Error message if fetch failed */
  error: string | null;
}

// ==========================================================================
// COMPONENT PROP TYPES
// ==========================================================================

/**
 * Button component props
 */
export interface ButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Full width button */
  fullWidth?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Icon (displayed on right by default) */
  icon?: React.ReactNode;
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon */
  rightIcon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card component props
 */
export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Enable hover effect */
  hoverable?: boolean;
  /** Card padding size */
  padding?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Section component props
 */
export interface SectionProps {
  /** Section content */
  children: React.ReactNode;
  /** Section ID for anchor links */
  id?: string;
  /** Background color variant */
  bg?: 'white' | 'gray' | 'primary' | 'dark';
  /** Additional CSS classes */
  className?: string;
}

// ==========================================================================
// UTILITY TYPES
// ==========================================================================

/**
 * Extract props type from a component
 */
export type PropsOf<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * Make certain props required
 */
export type RequiredProps<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Optional children prop
 */
export type WithChildren<T = {}> = T & { children?: React.ReactNode };
