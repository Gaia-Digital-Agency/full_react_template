/**
 * ==========================================================================
 * FOOTER COMPONENT
 * ==========================================================================
 * 
 * Site footer with:
 * - Company branding and description
 * - Navigation link sections
 * - Social media links
 * - Visitor statistics (count, location, current time)
 * - Copyright notice
 * 
 * Features:
 * - Responsive grid layout
 * - Live updating time display
 * - Geolocation-based visitor info
 */

import { Link } from 'react-router-dom';
import { 
  Code2, 
  MapPin, 
  Clock, 
  Users, 
  Mail, 
  Phone,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight
} from 'lucide-react';
import { useVisitorInfo } from '@/hooks/useVisitorInfo';
import { formatNumber } from '@/utils/helpers';
import { NavSection } from '@/types';

/**
 * Footer navigation sections configuration
 */
const FOOTER_SECTIONS: NavSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'WordPress Development', href: '/products' },
      { label: 'React Applications', href: '/products' },
      { label: 'Web Design', href: '/products' },
      { label: 'Maintenance', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Portfolio', href: '/about' },
      { label: 'Clients', href: '/about' },
      { label: 'Careers', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/contact' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

/**
 * Social media links configuration
 */
const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

/**
 * Visitor Stats Component
 * Displays visitor count, location, and current time
 */
function VisitorStats(): JSX.Element {
  const { visitorCount, location, currentTime, isLoading } = useVisitorInfo();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-neutral-800/50 rounded-2xl">
      {/* ----- Visitor Count ----- */}
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
          <Users className="w-5 h-5 text-primary-400" />
        </div>
        <div>
          <p className="text-xs text-neutral-400 uppercase tracking-wide">Visitors</p>
          <p className="text-lg font-semibold text-white">
            {isLoading ? '...' : formatNumber(visitorCount)}
          </p>
        </div>
      </div>

      {/* ----- Location ----- */}
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center">
          <MapPin className="w-5 h-5 text-accent-400" />
        </div>
        <div>
          <p className="text-xs text-neutral-400 uppercase tracking-wide">Your Location</p>
          <p className="text-lg font-semibold text-white">
            {isLoading ? 'Loading...' : location ? `${location.city}, ${location.countryCode}` : 'Unknown'}
          </p>
        </div>
      </div>

      {/* ----- Current Time ----- */}
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="w-10 h-10 rounded-xl bg-secondary-500/20 flex items-center justify-center">
          <Clock className="w-5 h-5 text-secondary-400" />
        </div>
        <div>
          <p className="text-xs text-neutral-400 uppercase tracking-wide">Local Time</p>
          <p className="text-lg font-semibold text-white font-mono">
            {currentTime || '--:--:--'}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Footer Component
 */
export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* ----- Main Footer Content ----- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* ----- Brand Column ----- */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-xl font-display font-bold text-white mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span>
                Web<span className="text-primary-400">Dev</span>
              </span>
            </Link>

            {/* Description */}
            <p className="text-neutral-400 mb-6 max-w-sm">
              We craft high-performance digital experiences that connect your brand 
              with your audience. Expert WordPress and React development for businesses 
              that want to stand out.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:hello@webdev.com"
                className="flex items-center gap-2 text-sm hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@webdev.com
              </a>
              <a 
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ----- Navigation Columns ----- */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-neutral-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        {link.external && (
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ----- Visitor Stats Column ----- */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4">
              Live Stats
            </h3>
            <VisitorStats />
          </div>
        </div>
      </div>

      {/* ----- Bottom Bar ----- */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-neutral-500">
              © {currentYear} WebDev Agency. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link 
                to="#" 
                className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="#" 
                className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="#" 
                className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
