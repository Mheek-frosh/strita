'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiPhone, FiMail, FiMapPin, FiSend, FiClock } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast.success('Message sent successfully! We will respond soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Location',
      details: 'Dakwo, Abuja, FCT, Nigeria',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      details: '+234 (0) 123 456 7890',
    },
    {
      icon: FiMail,
      title: 'Email',
      details: 'info@strita.ng',
    },
    {
      icon: FiClock,
      title: 'Office Hours',
      details: 'Mon-Fri: 8:00 AM - 5:00 PM',
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
            Get In <span className="text-gold">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream text-opacity-90"
          >
            We'd love to hear from you. Reach out with any questions or prayer requests.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-cream dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-navy-dark rounded-2xl p-6 text-center hover:shadow-xl hover-lift transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold bg-opacity-20 rounded-full mb-4">
                  <info.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-navy dark:text-cream mb-2">
                  {info.title}
                </h3>
                <p className="text-navy text-opacity-70 dark:text-cream dark:text-opacity-70">
                  {info.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-white dark:bg-navy-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-navy dark:text-cream mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-navy dark:text-cream font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-navy dark:text-cream"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-navy dark:text-cream font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-navy dark:text-cream"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-navy dark:text-cream font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-navy dark:text-cream"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-navy dark:text-cream font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-cream dark:bg-navy border-2 border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-navy dark:text-cream resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-4 bg-burgundy text-cream rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <FiSend className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Map & Info */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-navy dark:text-cream mb-8">
                Visit Us
              </h2>

              {/* Map Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-gold to-burgundy rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden">
                <div className="text-center text-cream">
                  <FiMapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">St. Rita's Church Dakwo</p>
                  <p className="text-sm text-opacity-80">Dakwo, Abuja</p>
                </div>
              </div>

              <div className="bg-cream dark:bg-navy p-6 rounded-2xl">
                <h3 className="font-bold text-navy dark:text-cream mb-4">
                  Service Times
                </h3>
                <ul className="space-y-2 text-navy text-opacity-70 dark:text-cream dark:text-opacity-70">
                  <li>• Sunday: 6:00 AM, 8:00 AM, 10:00 AM, 5:00 PM</li>
                  <li>• Weekdays: 6:30 AM, 5:30 PM</li>
                  <li>• Saturday: 6:30 AM, 5:30 PM (Vigil)</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-burgundy to-navy text-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Quick Chat via WhatsApp
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="px-8 py-4 bg-gold text-navy rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
          >
            💬 Chat on WhatsApp
          </motion.button>
        </div>
      </section>
    </main>
  );
}
