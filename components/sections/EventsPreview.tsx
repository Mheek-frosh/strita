'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCalendar, FiArrowRight, FiClock, FiMapPin } from 'react-icons/fi';

export default function EventsPreview() {
  const events = [
    {
      title: 'Pentecost Celebration',
      date: '19 May 2026',
      time: '10:00 AM',
      location: 'Main Church Hall',
      description: 'Join us for a special celebration of Pentecost with special music and festivities.',
      category: 'Celebration',
    },
    {
      title: 'Youth Retreat Weekend',
      date: '2-4 June 2026',
      time: 'Weekend',
      location: 'Church Retreat Center',
      description: 'Three days of spiritual growth, games, and fellowship for young people aged 13-25.',
      category: 'Retreat',
    },
    {
      title: 'Marriage Blessing Ceremony',
      date: '15 June 2026',
      time: '2:00 PM',
      location: 'Main Sanctuary',
      description: 'Renewal of marriage vows for couples celebrating their 25+ years of marriage.',
      category: 'Ceremony',
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
    <section className="py-16 md:py-24 bg-white dark:bg-navy-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
              <FiCalendar className="inline w-10 h-10 mr-2 text-gold" />
              Upcoming Events
            </h2>
            <p className="text-lg text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 max-w-2xl mx-auto">
              Join us for these special events and celebrations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-cream dark:bg-navy rounded-2xl overflow-hidden hover:shadow-2xl hover-lift transition-all"
              >
                {/* Category Badge */}
                <div className="h-1 bg-gradient-to-r from-burgundy to-gold" />
                
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gold bg-opacity-20 text-gold text-xs font-bold rounded-full mb-3">
                    {event.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-navy dark:text-cream mb-4">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6 text-navy text-opacity-70 dark:text-cream dark:text-opacity-70">
                    <div className="flex items-center gap-3">
                      <FiCalendar className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiClock className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiMapPin className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 text-sm mb-6">
                    {event.description}
                  </p>
                  
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-gold hover:translate-x-1 transition-transform font-semibold"
                  >
                    Learn more <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-8 py-4 bg-burgundy text-cream rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              View All Events <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
