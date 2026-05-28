'use client';

import { motion } from 'framer-motion';
import { FiPlay, FiDownload } from 'react-icons/fi';

export default function SermonsPage() {
  const sermons = [
    {
      title: 'Faith in Uncertain Times',
      preacher: 'Rev. Fr. Emmanuel Okoro',
      date: 'May 26, 2026',
      duration: '28:45',
      type: 'Video',
    },
    {
      title: 'The Power of Prayer',
      preacher: 'Rev. Fr. Augustine Nwosu',
      date: 'May 19, 2026',
      duration: '32:10',
      type: 'Video',
    },
    {
      title: 'Living as Christ\'s Disciples',
      preacher: 'Rev. Fr. Emmanuel Okoro',
      date: 'May 12, 2026',
      duration: '25:30',
      type: 'Video',
    },
    {
      title: 'God\'s Infinite Mercy',
      preacher: 'Rev. Fr. Augustine Nwosu',
      date: 'May 5, 2026',
      duration: '30:15',
      type: 'Video',
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <FiPlay className="inline w-12 h-12 mr-3 text-gold" />
            Sermons & Teachings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream text-opacity-90"
          >
            Watch and listen to inspirational messages from our clergy
          </motion.p>
        </div>
      </section>

      {/* Live Stream */}
      <section className="py-16 md:py-24 bg-cream dark:bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-burgundy to-navy rounded-2xl p-8 md:p-12 text-cream text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Watch Live Mass
            </h2>
            <p className="text-lg text-cream text-opacity-90 mb-8">
              Join us for live streaming every Sunday at 10:00 AM
            </p>
            <button className="px-8 py-4 bg-gold text-navy rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
              <FiPlay className="w-5 h-5" /> Watch Live Stream
            </button>
          </motion.div>

          {/* Sermons Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {sermons.map((sermon, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-navy-dark rounded-2xl overflow-hidden hover:shadow-2xl hover-lift transition-all"
              >
                {/* Thumbnail */}
                <div className="relative w-full h-48 bg-gradient-to-br from-burgundy to-gold flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                  <FiPlay className="w-16 h-16 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-burgundy text-cream text-xs font-bold rounded-full">
                    {sermon.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy dark:text-cream mb-2">
                    {sermon.title}
                  </h3>
                  <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 text-sm mb-4">
                    by {sermon.preacher}
                  </p>
                  <p className="text-navy text-opacity-60 dark:text-cream dark:text-opacity-60 text-sm mb-6">
                    {sermon.date}
                  </p>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-gold text-navy rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                      <FiPlay className="w-4 h-4" /> Play
                    </button>
                    <button className="px-4 py-2 border-2 border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:text-navy transition-all inline-flex items-center justify-center gap-2">
                      <FiDownload className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-navy-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy dark:text-cream mb-6">
              Subscribe to Our Podcast
            </h2>
            <p className="text-lg text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 mb-8">
              Listen to sermons on your favorite podcast platform
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Spotify', 'Apple Podcasts', 'Google Podcasts', 'YouTube'].map((platform) => (
                <button
                  key={platform}
                  className="px-6 py-3 border-2 border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:text-navy transition-all"
                >
                  {platform}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
