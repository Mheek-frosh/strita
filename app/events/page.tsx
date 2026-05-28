'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCalendar, FiClock, FiMapPin, FiUsers, FiArrowRight } from 'react-icons/fi';

export default function EventsPage() {
  const events = [
    {
      title: 'Pentecost Celebration',
      date: '19 May 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Church & Courtyard',
      description: 'Join us for a special celebration of Pentecost with special music, prayers, and community fellowship.',
      category: 'Celebration',
      attendees: '200+',
    },
    {
      title: 'Youth Retreat Weekend',
      date: '2-4 June 2026',
      time: 'Full Weekend',
      location: 'Church Retreat Center',
      description: 'Three days of spiritual growth, games, worship, and fellowship for young people aged 13-25.',
      category: 'Retreat',
      attendees: '150+',
    },
    {
      title: 'Corpus Christi Procession',
      date: '6 June 2026',
      time: '4:00 PM',
      location: 'Starting at Church',
      description: 'Traditional procession honoring the Blessed Sacrament through our community.',
      category: 'Procession',
      attendees: '300+',
    },
    {
      title: 'Marriage Blessing Ceremony',
      date: '15 June 2026',
      time: '2:00 PM',
      location: 'Main Sanctuary',
      description: 'Renewal of marriage vows for couples celebrating their 25+ years of marriage.',
      category: 'Ceremony',
      attendees: '100+',
    },
    {
      title: 'Family Fun Day',
      date: '22 June 2026',
      time: '9:00 AM - 5:00 PM',
      location: 'Church Grounds',
      description: 'Games, food, music, and activities for the whole family. Free entry!',
      category: 'Family Event',
      attendees: '500+',
    },
    {
      title: 'Adult Bible Study Retreat',
      date: '13-15 July 2026',
      time: 'Weekend',
      location: 'Retreat Center',
      description: 'Deep dive into Scripture with expert facilitators and meaningful discussions.',
      category: 'Study Retreat',
      attendees: '80+',
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
            <FiCalendar className="inline w-12 h-12 mr-3 text-gold" />
            Events & Celebrations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream text-opacity-90"
          >
            Celebrate faith and community with us
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24 bg-cream dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-navy-dark rounded-2xl overflow-hidden hover:shadow-2xl hover-lift transition-all"
              >
                {/* Header */}
                <div className="h-1 bg-gradient-to-r from-burgundy to-gold" />

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gold bg-opacity-20 text-gold text-xs font-bold rounded-full mb-3">
                    {event.category}
                  </span>

                  <h3 className="text-xl font-bold text-navy dark:text-cream mb-4">
                    {event.title}
                  </h3>

                  <div className="space-y-3 mb-6 text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 text-sm">
                    <div className="flex items-start gap-3">
                      <FiCalendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiClock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiMapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FiUsers className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Expected: {event.attendees}</span>
                    </div>
                  </div>

                  <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 text-sm mb-6">
                    {event.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-gold hover:translate-x-1 transition-transform font-semibold">
                    Learn More <FiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Notice */}
      <section className="py-16 md:py-24 bg-white dark:bg-navy-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy dark:text-cream mb-6">
              More Events Coming Soon
            </h2>
            <p className="text-lg text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 mb-8">
              Subscribe to our newsletter to stay updated on all upcoming events and celebrations.
            </p>
            <Link
              href="/#newsletter"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Subscribe to Newsletter <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
