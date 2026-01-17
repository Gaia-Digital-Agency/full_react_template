/**
 * ==========================================================================
 * SERVICES SECTION COMPONENT
 * ==========================================================================
 * 
 * Showcases the main services offered:
 * - Grid of service cards
 * - Icon, title, description for each service
 * - Animated entrance on scroll
 * 
 * Used on the Home page to give an overview of capabilities
 */

import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Rocket, 
  Shield, 
  Headphones,
  BarChart3 
} from 'lucide-react';

/**
 * Services data configuration
 */
const SERVICES = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and WordPress.',
    color: 'primary',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive, engaging experiences for your customers.',
    color: 'accent',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimized, fast-loading websites that rank well in search engines and convert visitors.',
    color: 'primary',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Secure coding practices and regular updates to protect your website and user data.',
    color: 'accent',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated support team to help you with any issues or questions about your website.',
    color: 'primary',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Data-driven insights to understand your audience and improve conversion rates.',
    color: 'accent',
  },
];

/**
 * Color configuration for service icons
 */
const COLOR_STYLES = {
  primary: {
    bg: 'bg-primary-100 dark:bg-primary-900/30',
    icon: 'text-primary-600 dark:text-primary-400',
  },
  accent: {
    bg: 'bg-accent-100 dark:bg-accent-900/30',
    icon: 'text-accent-600 dark:text-accent-400',
  },
};

/**
 * Animation variants
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Services Section Component
 */
export default function Services(): JSX.Element {
  return (
    <section className="section bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ----- Section Header ----- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4"
          >
            What We Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading"
          >
            Services That Drive Results
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subheading mx-auto"
          >
            From concept to launch, we provide comprehensive web development 
            services to help your business succeed online.
          </motion.p>
        </div>

        {/* ----- Services Grid ----- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => {
            const colorStyle = COLOR_STYLES[service.color as keyof typeof COLOR_STYLES];
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 hover:shadow-soft-lg"
              >
                {/* Icon */}
                <div 
                  className={`w-14 h-14 rounded-xl ${colorStyle.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-7 h-7 ${colorStyle.icon}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
