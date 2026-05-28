'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiMusic, FiUsers, FiBook, FiHeart, FiTrendingUp, FiUserCheck } from 'react-icons/fi';

export default function MinistriesPage() {
  const ministries = [
    {
      id: 'choir',
      icon: FiMusic,
      title: 'Choir Ministry',
      description: 'Enhance worship through sacred music, harmony, and spiritual songs.',
      leader: 'Mrs. Chioma Okafor',
      meetingTime: 'Saturdays, 2:00 PM',
      contact: 'choir@strita.ng',
    },
    {
      id: 'youth',
      icon: FiUsers,
      title: 'Youth Ministry',
      description: 'Empower young people (13-35) in faith, fellowship, and service.',
      leader: 'Fr. Augustine Nwosu',
      meetingTime: 'Fridays, 6:00 PM',
      contact: 'youth@strita.ng',
    },
    {
      id: 'catechism',
      icon: FiBook,
      title: 'Catechism Program',
      description: 'Teach Catholic faith to children and adults throughout the year.',
      leader: 'Mr. David Okonkwo',
      meetingTime: 'Sundays, 11:30 AM',
      contact: 'catechism@strita.ng',
    },
    {
      id: 'charity',
      icon: FiHeart,
      title: 'Charity Outreach',
      description: 'Serve the poor, sick, and vulnerable in our community.',
      leader: 'Mrs. Grace Adeleke',
      meetingTime: 'Thursdays, 4:00 PM',
      contact: 'charity@strita.ng',
    },
    {
      id: 'altar',
      icon: FiTrendingUp,
      title: 'Altar Servers',
      description: 'Assist with sacred liturgy and learn deeper faith traditions.',
      leader: 'Fr. Emmanuel Okoro',
      meetingTime: 'Sundays, 9:00 AM',
      contact: 'altar@strita.ng',
    },
    {
      id: 'cwa',
      icon: FiUserCheck,
      title: 'Catholic Women Organization',
      description: 'Support women in faith journey and community engagement.',
      leader: 'Mrs. Uchenna Okeke',
      meetingTime: 'Wednesdays, 5:00 PM',
      contact: 'cwo@strita.ng',
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
            Our <span className="text-gold">Ministries</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream text-opacity-90"
          >
            Find a ministry that matches your gifts and passion for serving Christ
          </motion.p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 md:py-24 bg-cream dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {ministries.map((ministry) => (
              <motion.div
                key={ministry.id}
                variants={itemVariants}
                className="group bg-white dark:bg-navy-dark rounded-2xl overflow-hidden hover:shadow-2xl hover-lift transition-all"
              >
                {/* Top accent */}
                <div className="h-1 bg-gradient-to-r from-burgundy to-gold" />

                <div className="p-8">
                  <div className="w-14 h-14 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ministry.icon className="w-7 h-7 text-gold" />
                  </div>

                  <h3 className="text-2xl font-bold text-navy dark:text-cream mb-3">
                    {ministry.title}
                  </h3>

                  <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 mb-6">
                    {ministry.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 text-sm mb-6 py-4 border-t border-b border-gold border-opacity-20">
                    <p className="text-navy dark:text-cream">
                      <span className="font-semibold">Leader:</span> {ministry.leader}
                    </p>
                    <p className="text-navy dark:text-cream">
                      <span className="font-semibold">Meets:</span> {ministry.meetingTime}
                    </p>
                  </div>

                  <Link
                    href={`/ministries#${ministry.id}`}
                    className="inline-flex items-center gap-2 text-gold hover:translate-x-1 transition-transform font-semibold"
                  >
                    Join This Ministry <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-burgundy to-navy text-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Serve?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Every talent is needed. Whether you can sing, teach, serve, or simply show up with a willing heart, there's a place for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Register Your Interest <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
