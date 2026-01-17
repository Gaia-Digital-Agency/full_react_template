/**
 * ==========================================================================
 * HERO SECTION COMPONENT
 * ==========================================================================
 * 
 * Full-width hero section with:
 * - Large headline with gradient text
 * - Descriptive subheadline
 * - Call-to-action buttons
 * - Decorative background elements
 * - Animated entrance effects
 * 
 * Responsive design:
 * - Single column on mobile
 * - Content centered and readable on all devices
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

/**
 * Animation variants for staggered children
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Hero Section Component
 */
export default function Hero(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ----- Background Decorations ----- */}
      {/* Gradient blobs for visual interest */}
      <div className="absolute inset-0 -z-10">
        {/* Top-right gradient blob */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(30, 168, 158, 0.4) 0%, transparent 70%)',
          }}
        />
        {/* Bottom-left gradient blob */}
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(254, 79, 17, 0.3) 0%, transparent 70%)',
          }}
        />
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), 
                             linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ----- Main Content ----- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Professional Web Development
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-display-xl font-display font-bold text-neutral-900 dark:text-white mb-6"
          >
            Build Stunning{' '}
            <span className="gradient-text">Digital Experiences</span>{' '}
            That Convert
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10"
          >
            We specialize in crafting high-performance websites and applications 
            that help businesses stand out in the digital landscape.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/products"
              className="btn-secondary text-lg px-8 py-4 group"
            >
              <Play className="w-5 h-5" />
              View Our Work
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800"
          >
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-6">
              Trusted by companies worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {/* Placeholder logos - replace with actual client logos */}
              {['TechCorp', 'StartupX', 'MediaFlow', 'DataPro', 'CloudNet'].map(
                (company) => (
                  <div
                    key={company}
                    className="text-xl font-display font-bold text-neutral-400"
                  >
                    {company}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ----- Scroll Indicator ----- */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neutral-300 dark:border-neutral-700 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
