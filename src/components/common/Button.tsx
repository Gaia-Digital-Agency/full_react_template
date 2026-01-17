/**
 * ==========================================================================
 * BUTTON COMPONENT
 * ==========================================================================
 * 
 * Reusable button component with multiple variants:
 * - Primary: Solid background, main CTA actions
 * - Secondary: Outline style, secondary actions
 * - Accent: High-emphasis with accent color
 * - Ghost: Minimal, text-only appearance
 * 
 * Features:
 * - Multiple size variants (sm, md, lg)
 * - Loading state with spinner
 * - Icon support (left/right)
 * - Full width option
 * - Accessible focus states
 */

import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/helpers';
import { ButtonProps } from '@/types';

/**
 * Button variant styles configuration
 * Maps variant names to Tailwind classes
 */
const VARIANT_STYLES = {
  primary: `
    bg-primary-500 text-white
    hover:bg-primary-600 hover:shadow-glow
    focus-visible:ring-primary-500
    disabled:bg-primary-300
  `,
  secondary: `
    border-2 border-primary-500 text-primary-500
    hover:bg-primary-500 hover:text-white
    focus-visible:ring-primary-500
    disabled:border-primary-300 disabled:text-primary-300
  `,
  accent: `
    bg-accent-500 text-white
    hover:bg-accent-600 hover:shadow-glow-accent
    focus-visible:ring-accent-500
    disabled:bg-accent-300
  `,
  ghost: `
    text-neutral-700 dark:text-neutral-300
    hover:bg-neutral-100 dark:hover:bg-neutral-800
    focus-visible:ring-neutral-400
  `,
} as const;

/**
 * Button size styles configuration
 * Maps size names to padding and text classes
 */
const SIZE_STYLES = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
} as const;

/**
 * Button Component
 * 
 * @example
 * // Primary button
 * <Button variant="primary">Click Me</Button>
 * 
 * // With icon
 * <Button leftIcon={<Mail />}>Send Email</Button>
 * 
 * // Loading state
 * <Button loading>Processing...</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      disabled = false,
      loading = false,
      icon,
      leftIcon,
      rightIcon,
      onClick,
      type = 'button',
      className,
      ...props
    },
    ref
  ) => {
    // Combine disabled states
    const isDisabled = disabled || loading;
    
    // Use icon as rightIcon if provided and rightIcon is not set
    const effectiveRightIcon = rightIcon ?? icon;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        onClick={onClick}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center',
          'font-medium rounded-xl',
          'transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          // Variant styles
          VARIANT_STYLES[variant],
          // Size styles
          SIZE_STYLES[size],
          // Full width
          fullWidth && 'w-full',
          // Custom classes
          className
        )}
        {...props}
      >
        {/* Loading Spinner (replaces left icon when loading) */}
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          leftIcon && <span className="flex-shrink-0">{leftIcon}</span>
        )}

        {/* Button Text */}
        <span>{children}</span>

        {/* Right Icon (hidden when loading) */}
        {effectiveRightIcon && !loading && (
          <span className="flex-shrink-0">{effectiveRightIcon}</span>
        )}
      </button>
    );
  }
);

// Display name for React DevTools
Button.displayName = 'Button';

export default Button;
