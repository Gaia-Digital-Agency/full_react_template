/**
 * ==========================================================================
 * PRODUCTS PAGE
 * ==========================================================================
 * 
 * Service offerings page featuring two main products:
 * 1. WordPress Development
 * 2. React Applications
 * 
 * Each product includes:
 * - Description and benefits
 * - Key features list
 * - Pricing/CTA
 * - Use cases
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  Code2, 
  Globe, 
  Zap,
  Shield,
  Palette,
  Smartphone,
  Layers
} from 'lucide-react';
import Card from '@/components/common/Card';

/**
 * Product data configuration
 */
const PRODUCTS = [
  {
    id: 'wordpress',
    name: 'WordPress Development',
    tagline: 'Powerful, Flexible, Easy to Manage',
    description: 'Custom WordPress solutions that give you full control over your content. Perfect for businesses that need a professional web presence with easy content management.',
    icon: Globe,
    color: 'primary',
    features: [
      'Custom theme development from scratch',
      'WooCommerce e-commerce integration',
      'Plugin development & customization',
      'Speed optimization & caching',
      'SEO-ready architecture',
      'Mobile-responsive design',
      'Security hardening',
      'Content migration services',
    ],
    benefits: [
      {
        icon: Palette,
        title: 'Easy Content Management',
        description: 'Update your website content without any technical knowledge using the intuitive WordPress dashboard.',
      },
      {
        icon: Shield,
        title: 'Proven & Secure',
        description: 'WordPress powers 40%+ of the web. We implement best security practices to keep your site safe.',
      },
      {
        icon: Zap,
        title: 'Cost-Effective',
        description: 'Lower development and maintenance costs compared to custom solutions, with extensive plugin ecosystem.',
      },
    ],
    useCases: [
      'Corporate websites',
      'Blogs & news sites',
      'E-commerce stores',
      'Portfolio sites',
      'Membership sites',
      'Educational platforms',
    ],
    startingPrice: '$2,500',
    ctaText: 'Start WordPress Project',
  },
  {
    id: 'react',
    name: 'React Applications',
    tagline: 'Modern, Fast, Scalable',
    description: 'High-performance web applications built with React and modern JavaScript. Ideal for complex interfaces, dashboards, and interactive experiences.',
    icon: Code2,
    color: 'accent',
    features: [
      'Single Page Applications (SPA)',
      'Server-Side Rendering (Next.js)',
      'Progressive Web Apps (PWA)',
      'Real-time features & WebSockets',
      'REST & GraphQL API integration',
      'State management (Redux, Zustand)',
      'TypeScript development',
      'Automated testing & CI/CD',
    ],
    benefits: [
      {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'React\'s virtual DOM and optimized rendering deliver exceptionally fast user experiences.',
      },
      {
        icon: Layers,
        title: 'Scalable Architecture',
        description: 'Component-based architecture makes it easy to scale and maintain as your application grows.',
      },
      {
        icon: Smartphone,
        title: 'Cross-Platform',
        description: 'With React Native, we can also build native mobile apps sharing code with your web application.',
      },
    ],
    useCases: [
      'SaaS platforms',
      'Admin dashboards',
      'Data visualization',
      'Real-time apps',
      'Complex web apps',
      'Progressive Web Apps',
    ],
    startingPrice: '$5,000',
    ctaText: 'Start React Project',
  },
];

/**
 * FAQ data
 */
const FAQS = [
  {
    question: 'How do I choose between WordPress and React?',
    answer: 'WordPress is ideal for content-heavy websites where non-technical users need to manage content. React is better for complex, interactive applications with custom functionality. We can help you decide based on your specific needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'WordPress sites typically take 4-8 weeks, while React applications range from 8-16 weeks depending on complexity. We provide detailed timelines after understanding your requirements.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'Yes, we offer maintenance packages for both WordPress and React projects. This includes security updates, bug fixes, performance monitoring, and feature enhancements.',
  },
  {
    question: 'Can you migrate my existing website?',
    answer: 'Absolutely! We have experience migrating sites from various platforms to WordPress or rebuilding them as React applications while preserving SEO rankings.',
  },
];

/**
 * Products Page Component
 */
export default function Products(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('wordpress');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeProduct = PRODUCTS.find(p => p.id === activeTab)!;

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
              Our Services
            </span>
            <h1 className="text-display-lg font-display font-bold text-neutral-900 dark:text-white mb-6">
              Solutions That{' '}
              <span className="gradient-text">Power Your Business</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Choose the right technology for your project. We specialize in 
              WordPress and React development to cover all your web needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ----- Product Tabs ----- */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-2xl">
              {PRODUCTS.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === product.id
                      ? 'text-white'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {activeTab === product.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-xl ${
                        product.color === 'primary' ? 'bg-primary-500' : 'bg-accent-500'
                      }`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <product.icon className="w-5 h-5" />
                    {product.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Product Info */}
                <div>
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl mb-6 ${
                    activeProduct.color === 'primary' 
                      ? 'bg-primary-100 dark:bg-primary-900/30' 
                      : 'bg-accent-100 dark:bg-accent-900/30'
                  }`}>
                    <activeProduct.icon className={`w-6 h-6 ${
                      activeProduct.color === 'primary' 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'text-accent-600 dark:text-accent-400'
                    }`} />
                    <span className={`font-medium ${
                      activeProduct.color === 'primary' 
                        ? 'text-primary-700 dark:text-primary-300' 
                        : 'text-accent-700 dark:text-accent-300'
                    }`}>
                      {activeProduct.tagline}
                    </span>
                  </div>

                  <h2 className="text-display-sm font-display font-bold text-neutral-900 dark:text-white mb-4">
                    {activeProduct.name}
                  </h2>

                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                    {activeProduct.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-6 mb-8">
                    {activeProduct.benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-4">
                        <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${
                          activeProduct.color === 'primary'
                            ? 'bg-primary-100 dark:bg-primary-900/30'
                            : 'bg-accent-100 dark:bg-accent-900/30'
                        }`}>
                          <benefit.icon className={`w-6 h-6 ${
                            activeProduct.color === 'primary'
                              ? 'text-primary-600 dark:text-primary-400'
                              : 'text-accent-600 dark:text-accent-400'
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-400">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-500">Starting from</p>
                      <p className="text-3xl font-display font-bold text-neutral-900 dark:text-white">
                        {activeProduct.startingPrice}
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                        activeProduct.color === 'primary'
                          ? 'btn-primary'
                          : 'btn-accent'
                      }`}
                    >
                      {activeProduct.ctaText}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Right: Features & Use Cases */}
                <div className="space-y-8">
                  {/* Features Card */}
                  <Card className="overflow-hidden">
                    <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {activeProduct.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            activeProduct.color === 'primary'
                              ? 'text-primary-500'
                              : 'text-accent-500'
                          }`} />
                          <span className="text-neutral-700 dark:text-neutral-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </Card>

                  {/* Use Cases Card */}
                  <Card className="bg-neutral-50 dark:bg-neutral-800/50 border-0">
                    <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-white mb-4">
                      Best For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeProduct.useCases.map((useCase, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-700 text-sm text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ----- Comparison Section ----- */}
      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">Compare Solutions</h2>
            <p className="section-subheading mx-auto">
              A quick overview to help you choose the right solution
            </p>
          </motion.div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="text-left py-4 px-4 font-medium text-neutral-500">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary-600 dark:text-primary-400">WordPress</th>
                  <th className="text-center py-4 px-4 font-semibold text-accent-600 dark:text-accent-400">React</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                {[
                  ['Content Management', '★★★★★', '★★★☆☆'],
                  ['Custom Functionality', '★★★☆☆', '★★★★★'],
                  ['Performance', '★★★★☆', '★★★★★'],
                  ['Learning Curve', '★★★★★', '★★☆☆☆'],
                  ['Scalability', '★★★☆☆', '★★★★★'],
                  ['Cost', '★★★★★', '★★★☆☆'],
                ].map(([feature, wp, react], index) => (
                  <tr key={index}>
                    <td className="py-4 px-4 text-neutral-700 dark:text-neutral-300">{feature}</td>
                    <td className="py-4 px-4 text-center text-primary-500">{wp}</td>
                    <td className="py-4 px-4 text-center text-accent-500">{react}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ----- FAQ Section ----- */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading mx-auto">
              Common questions about our development services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-neutral-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    <span className={`text-2xl transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </div>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 text-neutral-600 dark:text-neutral-400 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- CTA Section ----- */}
      <section className="section bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-display-sm font-display font-bold mb-6">
              Not Sure Which to Choose?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss your project requirements. We'll recommend the best 
              solution for your specific needs and budget.
            </p>
            <Link
              to="/contact"
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
