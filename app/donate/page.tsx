'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiCreditCard, FiGlobe, FiHeart, FiShield } from 'react-icons/fi';

export default function DonatePage() {
  const donationMethods = [
    {
      title: 'Online Giving',
      description: 'Give securely through our preferred payment gateways.',
      icon: FiCreditCard,
    },
    {
      title: 'Bank Transfer',
      description: 'Deposit directly to our parish bank account.',
      icon: FiShield,
    },
    {
      title: 'Tithe Offering',
      description: 'Support our weekly parish needs and ministries.',
      icon: FiHeart,
    },
    {
      title: 'Building Fund',
      description: 'Contribute to ongoing church improvement projects.',
      icon: FiGlobe,
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
    <main className="pt-24 min-h-screen pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Give with <span className="text-gold">Generosity</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream text-opacity-90"
          >
            Your support empowers ministry, outreach, and spiritual growth at St. Rita's.
          </motion.p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 md:py-24 bg-cream dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {donationMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-navy-dark p-8 rounded-2xl hover:shadow-2xl hover-lift transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold bg-opacity-20 rounded-full mb-5">
                  <method.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-navy dark:text-cream mb-4">
                  {method.title}
                </h3>
                <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 mb-6">
                  {method.description}
                </p>
                <button className="inline-flex items-center gap-2 text-gold font-semibold hover:translate-x-1 transition-transform">
                  Learn More <FiArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="glass p-8 rounded-3xl shadow-2xl text-navy dark:text-cream"
          >
            <h2 className="text-3xl font-bold mb-6">
              Secure Giving
            </h2>
            <p className="text-lg text-opacity-80 mb-4">
              We accept secure payment through Paystack and Flutterwave, with easy online checkout and full transparency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-cream dark:bg-navy p-6 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">Paystack</h3>
                <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70">
                  Trusted payment processing for safe donations.
                </p>
              </div>
              <div className="bg-cream dark:bg-navy p-6 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">Flutterwave</h3>
                <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70">
                  Fast and convenient giving for parishioners.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white dark:bg-navy p-6 border border-gold border-opacity-20">
                <h3 className="font-bold text-lg mb-2">Bank Transfer</h3>
                <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 mb-1">Account Name: St. Rita's Catholic Church Dakwo</p>
                <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 mb-1">Bank: Catholic Bank PLC</p>
                <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70">Account Number: 1234567890</p>
              </div>
              <div className="rounded-2xl bg-white dark:bg-navy p-6 border border-gold border-opacity-20">
                <h3 className="font-bold text-lg mb-2">Donation Progress</h3>
                <div className="w-full bg-navy bg-opacity-10 h-4 rounded-full overflow-hidden mb-3">
                  <div className="h-full w-3/4 bg-gold rounded-full" />
                </div>
                <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70">75% funded toward our new parish hall project.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
