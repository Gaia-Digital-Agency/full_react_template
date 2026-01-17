/**
 * ==========================================================================
 * CARD COMPONENT
 * ==========================================================================
 * 
 * Flexible card component for displaying content in a container:
 * - Clean design with subtle shadow
 * - Optional hover effects
 * - Configurable padding
 * - Support for dark mode
 * 
 * Use cases:
 * - Product/service cards
 * - Feature highlights
 * - Team member profiles
 * - Portfolio items
 */

import { cn } from '@/utils/helpers';
import { CardProps } from '@/types';

/**
 * Card padding size configuration
 */
const PADDING_STYLES = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const;

/**
 * Card Component
 * 
 * @example
 * // Basic card
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content here</p>
 * </Card>
 * 
 * // Hoverable card with large padding
 * <Card hoverable padding="lg">
 *   <CardContent />
 * </Card>
 */
export default function Card({
  children,
  hoverable = false,
  padding = 'md',
  className,
}: CardProps): JSX.Element {
  return (
    <div
      className={cn(
        // Base styles
        'bg-white dark:bg-neutral-900',
        'rounded-2xl',
        'border border-neutral-100 dark:border-neutral-800',
        'shadow-soft',
        'transition-all duration-300',
        // Padding
        PADDING_STYLES[padding],
        // Hover effect (optional)
        hoverable && 'hover:-translate-y-1 hover:shadow-soft-lg hover:border-neutral-200 dark:hover:border-neutral-700',
        // Custom classes
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * ==========================================================================
 * CARD SUBCOMPONENTS
 * ==========================================================================
 * Optional subcomponents for structured card content
 */

/**
 * Card Header - For title and optional actions
 */
export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

/**
 * Card Title - Styled heading for cards
 */
export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <h3 
      className={cn(
        'text-xl font-display font-semibold',
        'text-neutral-900 dark:text-white',
        className
      )}
    >
      {children}
    </h3>
  );
}

/**
 * Card Description - Secondary text for cards
 */
export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <p 
      className={cn(
        'text-neutral-600 dark:text-neutral-400',
        'mt-2',
        className
      )}
    >
      {children}
    </p>
  );
}

/**
 * Card Content - Main body content area
 */
export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}

/**
 * Card Footer - For actions/buttons at the bottom
 */
export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div 
      className={cn(
        'mt-6 pt-4',
        'border-t border-neutral-100 dark:border-neutral-800',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Card Image - For displaying images with proper aspect ratio
 */
export function CardImage({
  src,
  alt,
  aspectRatio = '16/9',
  className,
}: {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}): JSX.Element {
  return (
    <div 
      className={cn(
        'relative overflow-hidden rounded-xl',
        '-mx-6 -mt-6 mb-6',
        className
      )}
      style={{ aspectRatio }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
