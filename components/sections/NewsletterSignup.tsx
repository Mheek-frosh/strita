'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiMail, FiArrowRight } from 'react-icons/fi';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast.success('Thank you for subscribing!');
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 bg-cream dark:bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-gradient-to-r from-gold to-gold_light dark:from-navy-dark dark:to-navy p-8 md:p-12 rounded-2xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-cream mb-3">
              Stay Connected
            </h2>
            <p className="text-navy text-opacity-80 dark:text-cream dark:text-opacity-80">
              Subscribe to our newsletter for Mass updates, event announcements, and spiritual inspiration.
            </p>
          </motion.div>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1 relative">
              <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy text-opacity-50 dark:text-cream dark:text-opacity-50" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-navy border border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-navy dark:text-cream placeholder-navy placeholder-opacity-50 dark:placeholder-cream dark:placeholder-opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-navy dark:bg-gold text-cream dark:text-navy rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
              <FiArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
