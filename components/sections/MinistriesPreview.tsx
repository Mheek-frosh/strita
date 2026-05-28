'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiMusic, FiUsers, FiBook, FiHeart } from 'react-icons/fi';

export default function MinistriesPreview() {
  const ministries = [
    {
      icon: FiMusic,
      name: 'Choir Ministry',
      description: 'Enhancing worship through sacred music and harmony',
      color: 'from-burgundy to-burgundy',
    },
    {
      icon: FiUsers,
      name: 'Youth Ministry',
      description: 'Empowering young people in faith and fellowship',
      color: 'from-gold to-orange',
    },
    {
      icon: FiBook,
      name: 'Catechism',
      description: 'Teaching Catholic faith to all ages',
      color: 'from-navy to-blue',
    },
    {
      icon: FiHeart,
      name: 'Charity Outreach',
      description: 'Serving the poor and vulnerable in our community',
      color: 'from-sage to-green',
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
    <section className="py-16 md:py-24 bg-cream dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-4">
              Our Ministries
            </h2>
            <p className="text-lg text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 max-w-2xl mx-auto">
              Get involved and serve in a ministry that speaks to your heart
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {ministries.map((ministry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-navy-dark rounded-2xl p-6 hover:shadow-2xl hover-lift transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${ministry.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <ministry.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-cream mb-2">
                  {ministry.name}
                </h3>
                <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 text-sm mb-4">
                  {ministry.description}
                </p>
                <Link
                  href="/ministries"
                  className="inline-flex items-center gap-1 text-gold hover:translate-x-1 transition-transform"
                >
                  Learn more <FiArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/ministries"
              className="inline-flex items-center gap-2 px-8 py-4 bg-burgundy text-cream rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Explore All Ministries <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
