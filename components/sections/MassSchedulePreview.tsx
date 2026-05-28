'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiClock, FiArrowRight } from 'react-icons/fi';

export default function MassSchedulePreview() {
  const massSchedule = [
    {
      day: 'Sunday',
      times: ['6:00 AM', '8:00 AM', '10:00 AM', '5:00 PM'],
      highlight: true,
    },
    {
      day: 'Weekdays',
      times: ['6:30 AM', '5:30 PM'],
      highlight: false,
    },
    {
      day: 'Saturday',
      times: ['6:30 AM', '5:30 PM (Vigil)'],
      highlight: false,
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-white dark:from-navy dark:to-navy-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
              <FiClock className="inline w-10 h-10 mr-2 text-gold" />
              Sunday Mass Times
            </h2>
            <p className="text-lg text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 max-w-2xl mx-auto">
              Join us for our weekly celebrations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {massSchedule.map((schedule, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-2xl ${
                  schedule.highlight
                    ? 'bg-gradient-to-br from-burgundy to-navy text-cream shadow-2xl scale-105'
                    : 'bg-white dark:bg-navy text-navy dark:text-cream'
                }`}
              >
                <h3 className="text-2xl font-bold mb-6">{schedule.day}</h3>
                <div className="space-y-3">
                  {schedule.times.map((time, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FiClock className={schedule.highlight ? 'text-gold' : 'text-gold'} />
                      <span className="font-semibold">{time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/mass-schedule"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              View Full Schedule <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
