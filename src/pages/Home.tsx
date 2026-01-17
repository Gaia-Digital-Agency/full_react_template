/**
 * ==========================================================================
 * HOME PAGE
 * ==========================================================================
 * 
 * Landing page showcasing the web development agency:
 * - Hero section with headline and CTAs
 * - Services overview section
 * - Call-to-action section
 * 
 * This is the main entry point for visitors to understand
 * what the company offers and how to get started.
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';

/**
 * Features list for the "Why Choose Us" section
 */
const FEATURES = [
  'Custom solutions tailored to your needs',
  'Modern tech stack (React, WordPress)',
  'Mobile-first responsive design',
  'SEO optimized from day one',
  'Ongoing support & maintenance',
  'Fast turnaround times',
];

/**
 * Home Page Component
 */
export default function Home(): JSX.Element {
  return (
    <>
      {/* ----- Hero Section ----- */}
      <Hero />

      {/* ----- Services Section ----- */}
      <Services />

      {/* ----- Why Choose Us Section ----- */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4">
                Why Choose Us
              </span>

              <h2 className="text-display-md font-display font-bold text-neutral-900 dark:text-white mb-6">
                We Build Websites That{' '}
                <span className="text-primary-500">Actually Work</span>
              </h2>

              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                Our team combines technical expertise with creative design to deliver 
                websites that not only look great but also drive real business results. 
                We focus on performance, usability, and conversions.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {FEATURES.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <Link
                to="/about"
                className="btn-secondary inline-flex items-center gap-2 group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right: Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Main visual container */}
              <div className="relative bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-900/10 rounded-3xl p-8 lg:p-12">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '150+', label: 'Projects Completed' },
                    { value: '50+', label: 'Happy Clients' },
                    { value: '5+', label: 'Years Experience' },
                    { value: '99%', label: 'Client Satisfaction' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-white dark:bg-neutral-800 rounded-2xl p-6 text-center shadow-soft"
                    >
                      <div className="text-3xl lg:text-4xl font-display font-bold text-primary-500 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500 rounded-2xl opacity-20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500 rounded-full opacity-20 blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----- CTA Section ----- */}
      <section className="section bg-neutral-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(30, 168, 158, 0.5) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-display-md font-display font-bold mb-6">
              Ready to Start Your{' '}
              <span className="text-primary-400">Project?</span>
            </h2>

            <p className="text-xl text-neutral-400 mb-10">
              Let's discuss how we can help transform your digital presence. 
              Get a free consultation and quote for your project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Free Quote
              </Link>
              <Link
                to="/products"
                className="btn-secondary text-lg px-8 py-4 border-white/20 text-white hover:bg-white hover:text-neutral-900"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
