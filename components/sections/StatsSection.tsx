'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiCalendar, FiHeart, FiAward } from 'react-icons/fi';

export default function StatsSection() {
  const stats = [
    {
      icon: FiUsers,
      value: '5,000+',
      label: 'Active Members',
    },
    {
      icon: FiCalendar,
      value: '25+',
      label: 'Years Serving',
    },
    {
      icon: FiHeart,
      value: '100%',
      label: 'Community Driven',
    },
    {
      icon: FiAward,
      value: '15+',
      label: 'Ministries',
    },
  ];

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

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-navy-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 bg-cream dark:bg-navy text-center rounded-2xl hover:shadow-xl hover-lift transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold bg-opacity-20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-4xl font-bold text-navy dark:text-cream mb-2">
                {stat.value}
              </h3>
              <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
