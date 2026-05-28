'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';

export default function DonationCTA() {
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-burgundy to-navy text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute inset-0 text-9xl font-bold text-cream flex items-center justify-center pointer-events-none"
      >
        
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <FiHeart className="w-16 h-16 text-gold fill-current" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Support Our Mission
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-cream text-opacity-90 mb-4 leading-relaxed"
          >
            Your generous donations help us maintain our church, support community outreach, and nurture spiritual growth for generations to come.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-cream text-opacity-80 mb-12"
          >
            Every gift, no matter the size, makes a meaningful difference.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/donate"
              className="px-8 py-4 bg-gold text-navy rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <FiHeart className="w-5 h-5" /> Make a Donation
            </Link>
            <button className="px-8 py-4 border-2 border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:bg-opacity-10 transition-all">
              Learn About Giving
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
