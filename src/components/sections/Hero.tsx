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
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a73e8 0%, #0b57d0 100%)',
      }}
    >
      {/* ----- Background Logo Watermark ----- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <img
          src="/assets/gaia_logo.jpeg"
          alt=""
          className="w-[300px] md:w-[400px] lg:w-[500px] h-auto rounded-xl opacity-25"
        />
      </div>

      {/* ----- Main Content ----- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >

          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Professional Web Development
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-display-xl font-display font-bold text-white mb-6"
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            Build Stunning{' '}
            <span className="text-white/90">Digital Experiences</span>{' '}
            That Convert
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10"
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
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-4 rounded-lg font-semibold transition-all hover:-translate-y-0.5 shadow-lg group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-lg font-semibold transition-all group"
            >
              <Play className="w-5 h-5" />
              View Our Work
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-white/20"
          >
            <p className="text-sm text-white/70 mb-6">
              Trusted by companies worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {/* Placeholder logos - replace with actual client logos */}
              {['TechCorp', 'StartupX', 'MediaFlow', 'DataPro', 'CloudNet'].map(
                (company) => (
                  <div
                    key={company}
                    className="text-xl font-display font-bold text-white/50"
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
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
