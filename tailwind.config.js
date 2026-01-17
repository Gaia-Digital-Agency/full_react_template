/**
 * ==========================================================================
 * TAILWIND CSS CONFIGURATION
 * ==========================================================================
 * 
 * Custom Tailwind configuration for the WebDev branding template.
 * Includes:
 * - Custom color palette with brand colors
 * - Extended typography with custom fonts
 * - Custom spacing and sizing utilities
 * - Animation presets for micro-interactions
 * - Responsive breakpoints for all devices
 * 
 * @see https://tailwindcss.com/docs/configuration
 */

/** @type {import('tailwindcss').Config} */
export default {
  /* ----- Content Paths for Purging Unused CSS ----- */
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  /* ----- Dark Mode Configuration ----- */
  darkMode: 'class',  /* Use 'class' strategy for manual dark mode toggle */

  /* ----- Theme Extensions ----- */
  theme: {
    /* Custom responsive breakpoints for all device types */
    screens: {
      'xs': '375px',      /* Small phones (iPhone SE, etc.) */
      'sm': '640px',      /* Large phones / small tablets */
      'md': '768px',      /* Tablets (iPad Mini, etc.) */
      'lg': '1024px',     /* Small laptops / tablets landscape */
      'xl': '1280px',     /* Desktop monitors */
      '2xl': '1536px',    /* Large desktop monitors */
    },

    extend: {
      /* ----- Custom Color Palette ----- */
      colors: {
        /* Primary brand color - Deep teal for professionalism */
        primary: {
          50: '#edfcf9',
          100: '#d2f7f0',
          200: '#a9eee2',
          300: '#72ded0',
          400: '#3ac6b8',
          500: '#1ea89e',   /* Main brand color */
          600: '#158882',
          700: '#156d69',
          800: '#165755',
          900: '#174847',
          950: '#072b2b',
        },
        /* Secondary color - Warm slate for text and backgrounds */
        secondary: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b1bac8',
          400: '#8695aa',
          500: '#67788f',
          600: '#526076',
          700: '#434e60',
          800: '#3a4351',
          900: '#343b46',
          950: '#22262e',
        },
        /* Accent color - Vibrant coral for CTAs and highlights */
        accent: {
          50: '#fff4ed',
          100: '#ffe6d4',
          200: '#ffc9a8',
          300: '#ffa371',
          400: '#ff7038',
          500: '#fe4f11',   /* Main accent color */
          600: '#ef3507',
          700: '#c62308',
          800: '#9d1e0f',
          900: '#7e1c10',
          950: '#440a06',
        },
        /* Neutral grays for backgrounds and borders */
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },

      /* ----- Custom Font Families ----- */
      fontFamily: {
        /* Display font for headings - Modern, clean sans-serif */
        display: ['Sora', 'system-ui', 'sans-serif'],
        /* Body font for readable text */
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        /* Mono font for code snippets */
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },

      /* ----- Custom Font Sizes ----- */
      fontSize: {
        /* Fluid typography for responsive design */
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },

      /* ----- Custom Spacing ----- */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '128': '32rem',
        '144': '36rem',
      },

      /* ----- Custom Border Radius ----- */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      /* ----- Custom Box Shadows ----- */
      boxShadow: {
        'soft': '0 4px 30px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 50px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 40px rgba(30, 168, 158, 0.15)',
        'glow-accent': '0 0 40px rgba(254, 79, 17, 0.15)',
      },

      /* ----- Custom Animations ----- */
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },

      /* ----- Custom Keyframes ----- */
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      /* ----- Backdrop Blur Values ----- */
      backdropBlur: {
        xs: '2px',
      },

      /* ----- Z-Index Scale ----- */
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },

  /* ----- Tailwind Plugins ----- */
  plugins: [],
};
