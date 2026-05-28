'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiUsers, FiHeart, FiTarget } from 'react-icons/fi';

export default function AboutPage() {
  const values = [
    {
      icon: FiHeart,
      title: 'Faith',
      description: 'Grounded in Jesus Christ and Catholic traditions',
    },
    {
      icon: FiUsers,
      title: 'Community',
      description: 'United in worship, prayer, and service',
    },
    {
      icon: FiTarget,
      title: 'Service',
      description: 'Committed to helping those in need',
    },
  ];

  const clergy = [
    {
      name: 'Rev. Fr. Emmanuel Okoro',
      role: 'Parish Priest',
      bio: '20 years of pastoral service, dedicated to spiritual growth',
    },
    {
      name: 'Rev. Fr. Augustine Nwosu',
      role: 'Assistant Priest',
      bio: '10 years in ministry, passionate about youth engagement',
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
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About <span className="text-gold">St. Rita's</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream text-opacity-90"
          >
            Our history, mission, and commitment to faith and community
          </motion.p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 md:py-24 bg-cream dark:bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-navy dark:text-cream mb-8"
            >
              Our History
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-navy text-opacity-80 dark:text-cream dark:text-opacity-80 mb-6 leading-relaxed"
            >
              St. Rita's Catholic Church was established in 1998 in the heart of Dakwo, serving a growing Catholic community. What began as a small chapel has grown into a thriving parish, welcoming thousands of faithful members.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-navy text-opacity-80 dark:text-cream dark:text-opacity-80 mb-6 leading-relaxed"
            >
              Through decades of dedicated pastoral care, community engagement, and spiritual nurturing, we have become a beacon of faith and hope in our neighborhood. Our parish continues to evolve while maintaining the timeless values of the Catholic faith.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-navy text-opacity-80 dark:text-cream dark:text-opacity-80 leading-relaxed"
            >
              Today, St. Rita's stands as a testament to the power of community, faith, and love—principles that continue to guide our mission.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white dark:bg-navy-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-navy dark:text-cream mb-4">
                Our Mission
              </h3>
              <p className="text-navy text-opacity-80 dark:text-cream dark:text-opacity-80 text-lg leading-relaxed">
                To proclaim the Gospel of Jesus Christ, foster spiritual growth, build a welcoming community, and serve the poor and vulnerable through active faith and charitable works.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-navy dark:text-cream mb-4">
                Our Vision
              </h3>
              <p className="text-navy text-opacity-80 dark:text-cream dark:text-opacity-80 text-lg leading-relaxed">
                To be a vibrant, inclusive Catholic parish that transforms lives through faith, inspires hope, strengthens families, and witnesses Christ's love in our community.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-cream dark:bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-navy dark:text-cream text-center mb-16"
            >
              Our Core Values
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-navy-dark p-8 rounded-2xl text-center hover:shadow-xl hover-lift transition-all"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold bg-opacity-20 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy dark:text-cream mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-white dark:bg-navy-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-navy dark:text-cream text-center mb-16"
            >
              Our Pastoral Leadership
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {clergy.map((person, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-cream dark:bg-navy p-8 rounded-2xl"
                >
                  <div className="w-24 h-24 bg-gold rounded-full mb-6 flex items-center justify-center">
                    <span className="text-4xl">✝️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy dark:text-cream mb-1">
                    {person.name}
                  </h3>
                  <p className="text-gold font-semibold mb-3">{person.role}</p>
                  <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70">
                    {person.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-burgundy to-navy text-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            We welcome everyone to experience the warmth and spiritual nourishment of our parish.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/register"
              className="px-8 py-4 bg-gold text-navy rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
            >
              Register with Us <FiArrowRight />
            </Link>
            <Link
              href="/mass-schedule"
              className="px-8 py-4 border-2 border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:bg-opacity-10 transition-all"
            >
              View Mass Schedule
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
