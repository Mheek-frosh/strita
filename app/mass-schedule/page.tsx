'use client';

import { motion } from 'framer-motion';
import { FiClock, FiHeart, FiBook } from 'react-icons/fi';

export default function MassSchedulePage() {
  const schedules = [
    {
      title: 'Sunday Masses',
      icon: FiClock,
      times: [
        { time: '6:00 AM', note: 'Early Morning Mass' },
        { time: '8:00 AM', note: 'Family Mass' },
        { time: '10:00 AM', note: 'Main Solemn Mass' },
        { time: '5:00 PM', note: 'Evening Mass' },
      ],
    },
    {
      title: 'Weekday Masses',
      icon: FiBook,
      times: [
        { time: '6:30 AM', note: 'Monday - Friday' },
        { time: '5:30 PM', note: 'Monday - Friday' },
      ],
    },
    {
      title: 'Confession & Adoration',
      icon: FiHeart,
      times: [
        { time: '5:00 - 5:45 PM', note: 'Friday Confessions' },
        { time: '7:00 - 8:00 PM', note: 'Eucharistic Adoration (Thursday)' },
        { time: 'By appointment', note: 'Confessions available' },
      ],
    },
  ];

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
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Mass Schedule
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream text-opacity-90"
          >
            Join us for weekly Mass and spiritual celebrations
          </motion.p>
        </div>
      </section>

      {/* Schedule Cards */}
      <section className="py-16 md:py-24 bg-cream dark:bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {schedules.map((schedule, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white dark:bg-navy-dark rounded-2xl p-8 hover:shadow-2xl hover-lift transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <schedule.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy dark:text-cream">
                    {schedule.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {schedule.times.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 bg-cream dark:bg-navy rounded-lg border-l-4 border-gold"
                    >
                      <p className="text-lg font-bold text-navy dark:text-cream">
                        {item.time}
                      </p>
                      <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 text-sm">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="glass p-8 rounded-2xl max-w-3xl mx-auto"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-navy dark:text-cream mb-4"
            >
              Important Information
            </motion.h3>
            <motion.ul
              variants={containerVariants}
              className="space-y-3 text-navy text-opacity-80 dark:text-cream dark:text-opacity-80"
            >
              <motion.li variants={itemVariants}>
                • Mass duration is typically 45 minutes to 1 hour
              </motion.li>
              <motion.li variants={itemVariants}>
                • Children are welcome at all Masses
              </motion.li>
              <motion.li variants={itemVariants}>
                • Weekday Masses may change on feast days and holidays
              </motion.li>
              <motion.li variants={itemVariants}>
                • Confessions are available by appointment
              </motion.li>
              <motion.li variants={itemVariants}>
                • For special circumstances or illness, please contact the parish office
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Holiday Schedule */}
      <section className="py-16 md:py-24 bg-white dark:bg-navy-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-navy dark:text-cream mb-12 text-center"
            >
              Special Feast Days & Holidays
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {[
                { date: 'Jan 1', name: 'Solemnity of Mary' },
                { date: 'Feb 14', name: 'Ash Wednesday' },
                { date: 'Apr 9', name: 'Easter Sunday' },
                { date: 'May 1', name: 'Feast of St. Joseph' },
                { date: 'Aug 15', name: 'Assumption of Mary' },
                { date: 'Nov 1', name: 'All Saints Day' },
                { date: 'Dec 25', name: 'Christmas Day' },
              ].map((holiday, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 bg-gold bg-opacity-10 rounded-lg border-l-4 border-gold"
                >
                  <span className="font-bold text-gold min-w-fit">{holiday.date}</span>
                  <span className="text-navy dark:text-cream font-semibold">
                    {holiday.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
