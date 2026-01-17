/**
 * ==========================================================================
 * ABOUT PAGE
 * ==========================================================================
 * 
 * Company information page featuring:
 * - Company history timeline
 * - Portfolio/Work samples
 * - Client logos/testimonials
 * - Company values/theme
 * 
 * Designed to build trust and showcase expertise
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Heart, 
  Zap, 
  Users,
  ExternalLink 
} from 'lucide-react';
import Card from '@/components/common/Card';

/**
 * Company history timeline data
 */
const TIMELINE = [
  {
    year: '2019',
    title: 'Founded',
    description: 'Started as a freelance web developer, focusing on WordPress solutions for small businesses.',
  },
  {
    year: '2020',
    title: 'Team Growth',
    description: 'Expanded to a team of 3, adding design and development capabilities.',
  },
  {
    year: '2021',
    title: 'React Expertise',
    description: 'Added React and modern JavaScript frameworks to our service offerings.',
  },
  {
    year: '2022',
    title: 'Major Clients',
    description: 'Partnered with enterprise clients and completed 100+ successful projects.',
  },
  {
    year: '2023',
    title: 'Global Reach',
    description: 'Expanded services internationally with clients across 15+ countries.',
  },
  {
    year: '2024',
    title: 'Innovation',
    description: 'Launched AI-powered development tools and advanced automation workflows.',
  },
];

/**
 * Portfolio items
 */
const PORTFOLIO = [
  {
    id: 1,
    name: 'TechStart Platform',
    category: 'React Application',
    description: 'A SaaS platform for startup management with real-time collaboration features.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Wellness Blog',
    category: 'WordPress',
    description: 'A high-traffic health and wellness blog with custom theme and plugins.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'E-Commerce Store',
    category: 'WooCommerce',
    description: 'A fashion e-commerce store with custom checkout and inventory management.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Corporate Website',
    category: 'React',
    description: 'A modern corporate website with interactive features and animations.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
];

/**
 * Client logos (placeholder names)
 */
const CLIENTS = [
  'TechCorp', 'InnovateLab', 'GrowthCo', 'MediaPro',
  'DataStream', 'CloudNine', 'StartupX', 'DigitalFlow',
];

/**
 * Company values
 */
const VALUES = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and that passion shows in the care we put into every detail.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients, treating every project as a true partnership.',
  },
];

/**
 * Animation variants
 */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

/**
 * About Page Component
 */
export default function About(): JSX.Element {
  return (
    <>
      {/* ----- Page Header ----- */}
      <section className="pt-32 pb-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-display-lg font-display font-bold text-neutral-900 dark:text-white mb-6">
              Building Digital Excellence{' '}
              <span className="gradient-text">Since 2019</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              We're a passionate team of developers and designers dedicated to 
              creating exceptional digital experiences that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ----- History Timeline Section ----- */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Journey</h2>
            <p className="section-subheading mx-auto">
              From humble beginnings to a trusted development partner
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary-200 dark:bg-primary-800 -translate-x-1/2" />

              {/* Timeline items */}
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year badge */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold z-10">
                    {item.year.slice(2)}
                  </div>

                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="relative">
                      <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {item.description}
                      </p>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----- Portfolio Section ----- */}
      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Work</h2>
            <p className="section-subheading mx-auto">
              A selection of projects we're proud to have delivered
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card hoverable className="overflow-hidden p-0">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <button className="flex items-center gap-2 text-white font-medium">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <span className="text-sm text-primary-500 font-medium">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white mt-1 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- Clients Section ----- */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-heading">Trusted By</h2>
            <p className="section-subheading mx-auto">
              Companies that have partnered with us to achieve their goals
            </p>
          </motion.div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CLIENTS.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl"
              >
                <span className="text-2xl font-display font-bold text-neutral-300 dark:text-neutral-600">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- Values Section ----- */}
      <section className="section bg-neutral-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-display-md font-display font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary-500/20 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Work With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
