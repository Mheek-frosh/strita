'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import MassSchedulePreview from '@/components/sections/MassSchedulePreview';
import MinistriesPreview from '@/components/sections/MinistriesPreview';
import TestimonialSection from '@/components/sections/TestimonialSection';
import NewsletterSignup from '@/components/sections/NewsletterSignup';
import DonationCTA from '@/components/sections/DonationCTA';
import EventsPreview from '@/components/sections/EventsPreview';
import GallerySection from '@/components/sections/GallerySection';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-cream dark:bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-navy dark:text-cream"
            >
              Welcome to <span className="text-gold">St. Rita's</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-navy text-opacity-80 dark:text-cream dark:text-opacity-80 mb-8 leading-relaxed"
            >
              For over two decades, St. Rita's Catholic Church has been a beacon of faith, hope, and charity in the Dakwo community. We are more than a church—we are a family united in Christ, dedicated to spiritual growth, community service, and building a better world.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/register"
                className="px-8 py-4 bg-burgundy text-cream rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-flex items-center gap-2 justify-center"
              >
                Join Our Parish <FiArrowRight />
              </Link>
              <Link
                href="/mass-schedule"
                className="px-8 py-4 border-2 border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:text-navy transition-all inline-flex items-center gap-2 justify-center"
              >
                <FiCalendar /> View Mass Times
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Priest Welcome Note */}
      <section className="py-16 md:py-24 bg-cream dark:bg-navy-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="glass p-8 md:p-12 rounded-2xl"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 flex items-center gap-4"
            >
              <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center">
                <span className="text-4xl">✝️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-cream">
                  Rev. Fr. Name
                </h3>
                <p className="text-gold font-semibold">Parish Priest</p>
              </div>
            </motion.div>

            <motion.blockquote
              variants={itemVariants}
              className="text-lg md:text-xl italic text-navy dark:text-cream leading-relaxed"
            >
              "It is my profound joy to serve this wonderful parish. Through our shared faith, dedicated service, and commitment to Christ's teachings, we continue to build a community where every soul is welcomed, valued, and invited to grow spiritually. Let us walk together in faith and love."
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Mass Schedule Preview */}
      <MassSchedulePreview />

      {/* Events Preview */}
      <EventsPreview />

      {/* Ministries Preview */}
      <MinistriesPreview />

      {/* Bible Verse Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-burgundy to-navy text-cream relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          className="absolute inset-0 text-9xl font-bold text-cream flex items-center justify-center pointer-events-none"
        >
          ✦
        </motion.div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.p
              variants={itemVariants}
              className="text-sm uppercase tracking-widest text-gold mb-4"
            >
              Daily Scripture
            </motion.p>

            <motion.blockquote
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed"
            >
              "I can do all things through Christ who strengthens me."
            </motion.blockquote>

            <motion.p
              variants={itemVariants}
              className="text-cream text-opacity-80"
            >
              Philippians 4:13
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Donation CTA */}
      <DonationCTA />

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
}
