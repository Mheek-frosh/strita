'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdminPage() {
  const cards = [
    { title: 'Member Management', description: 'View, approve, and export parish members.' },
    { title: 'Event Management', description: 'Create, update, and publish upcoming church events.' },
    { title: 'Announcements', description: 'Share daily messages, notices, and community news.' },
    { title: 'Sermon Uploads', description: 'Upload sermons, livestream links, and audio homilies.' },
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
    <main className="pt-24 min-h-screen pb-16 bg-cream dark:bg-navy">
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Parish Admin <span className="text-gold">Dashboard</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream text-opacity-90"
          >
            Manage members, events, announcements, and media in one secure place.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {cards.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-navy-dark rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all"
            >
              <h3 className="text-2xl font-bold text-navy dark:text-cream mb-4">
                {item.title}
              </h3>
              <p className="text-navy text-opacity-75 dark:text-cream dark:text-opacity-75 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gold bg-opacity-10 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-navy mb-4">Secure Access Required</h2>
          <p className="text-navy text-opacity-80 mb-6">
            This area is reserved for clerical staff and administrators. Please sign in with a parish account.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-cream rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Access Admin Panel
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
