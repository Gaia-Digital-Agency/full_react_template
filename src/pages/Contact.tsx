/**
 * ==========================================================================
 * CONTACT PAGE
 * ==========================================================================
 * 
 * Contact information and inquiry form page featuring:
 * - Contact form with validation
 * - Company address and location map
 * - Email and phone contact details
 * - Social media links
 * - Office hours information
 * 
 * Designed to make it easy for potential clients to reach out
 */

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Twitter,
  Instagram,
  Github
} from 'lucide-react';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import type { ContactFormData } from '@/types';

/**
 * Contact information data
 */
const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Innovation Drive, Suite 456',
    subValue: 'Tech District, Singapore 123456',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@yourcompany.com',
    href: 'mailto:hello@yourcompany.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+65 1234 5678',
    href: 'tel:+6512345678',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    subValue: 'Sat: 10:00 AM - 2:00 PM',
  },
];

/**
 * Social media links
 */
const SOCIAL_LINKS = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
];

/**
 * Form validation helper
 * Validates email format using regex
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Animation variants for staggered animations
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

/**
 * Contact Page Component
 * Handles form submission and displays contact information
 */
export default function Contact(): JSX.Element {
  // ===== Form State Management =====
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  /**
   * Handle input changes
   * Updates form data state and clears errors for the field
   */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  /**
   * Validate form data
   * Returns true if valid, false otherwise
   */
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    // Name validation - required, min 2 characters
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation - required, valid format
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation - required
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    // Message validation - required, min 10 characters
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   * Validates and simulates API call
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log form data (replace with actual API call)
      console.log('Form submitted:', formData);
      
      // Show success state
      setIsSubmitted(true);
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact Us
            </span>
            <h1 className="text-display-lg font-display font-bold text-neutral-900 dark:text-white mb-6">
              Let's Start a{' '}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Have a project in mind? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ----- Main Contact Section ----- */}
      <section className="section bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* ----- Contact Form Column ----- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-2">
                Send us a Message
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Full Name <span className="text-accent-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Email Address <span className="text-accent-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company Field (Optional) */}
                <div>
                  <label 
                    htmlFor="company" 
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Company <span className="text-neutral-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="input-field"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Subject <span className="text-accent-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`input-field ${errors.subject ? 'border-red-500 focus:ring-red-500' : ''}`}
                    disabled={isSubmitting}
                  >
                    <option value="">Select a topic</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="react">React Development</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Message <span className="text-accent-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  icon={isSubmitted ? <CheckCircle className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                  className={isSubmitted ? 'bg-green-500 hover:bg-green-600' : ''}
                >
                  {isSubmitted ? 'Message Sent!' : isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                  >
                    <p className="text-green-700 dark:text-green-400 text-center">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* ----- Contact Info Column ----- */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-2">
                  Contact Information
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                  Reach out through any of the following channels.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {CONTACT_INFO.map((info) => (
                  <motion.div key={info.label} variants={itemVariants}>
                    <Card className="flex items-start gap-4 p-5" hoverable>
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary-500" />
                      </div>
                      
                      {/* Info Content */}
                      <div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-lg font-medium text-neutral-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium text-neutral-900 dark:text-white">
                            {info.value}
                          </p>
                        )}
                        {info.subValue && (
                          <p className="text-neutral-600 dark:text-neutral-400">
                            {info.subValue}
                          </p>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden p-0">
                  <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                    {/* Placeholder for Google Maps embed */}
                    <div className="text-center p-8">
                      <MapPin className="w-12 h-12 mx-auto text-neutral-300 dark:text-neutral-600 mb-4" />
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Map integration placeholder
                      </p>
                      <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-2">
                        Replace with Google Maps or similar embed
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----- FAQ Section ----- */}
      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What is your typical response time?',
                a: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.',
              },
              {
                q: 'Do you work with international clients?',
                a: 'Yes! We work with clients worldwide and are experienced in managing projects across different time zones.',
              },
              {
                q: 'What information should I include in my inquiry?',
                a: 'Please include details about your project scope, timeline, budget range, and any specific requirements or preferences.',
              },
              {
                q: 'Do you offer free consultations?',
                a: 'Yes, we offer a free 30-minute consultation to discuss your project needs and determine if we\'re a good fit.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {faq.a}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
