'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Mass Schedule', href: '/mass-schedule' },
    { name: 'Events', href: '/events' },
  ];

  const ministries = [
    { name: 'Youth Ministry', href: '/ministries#youth' },
    { name: 'Choir', href: '/ministries#choir' },
    { name: 'Altar Servers', href: '/ministries#altar' },
    { name: 'Catechism', href: '/ministries#catechism' },
  ];

  const resources = [
    { name: 'Contact', href: '/contact' },
    { name: 'Donate', href: '/donate' },
    { name: 'Sermons', href: '/sermons' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiYoutube, href: '#', label: 'YouTube' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className="bg-navy text-cream pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 pb-12 border-b border-gold border-opacity-20"
        >
          {/* Church Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy font-bold">✦</span>
              </div>
              <h3 className="font-bold text-lg">St. Rita's Church</h3>
            </div>
            <p className="text-cream text-opacity-80 text-sm mb-4">
              A place of worship, faith, and community. Growing together in Christ.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gold bg-opacity-10 hover:bg-gold hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all text-gold"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream text-opacity-80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ministries */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gold mb-4">Ministries</h4>
            <ul className="space-y-2">
              {ministries.map((ministry) => (
                <li key={ministry.name}>
                  <Link
                    href={ministry.href}
                    className="text-cream text-opacity-80 hover:text-gold transition-colors text-sm"
                  >
                    {ministry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-cream text-opacity-80 hover:text-gold transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-gold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <p className="text-cream text-opacity-80">Dakwo, Abuja, Nigeria</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-4 h-4 text-gold" />
                <p className="text-cream text-opacity-80">+234 (0) 123 456 7890</p>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-gold" />
                <p className="text-cream text-opacity-80">info@strita.ng</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-cream text-opacity-60 text-sm">
            © {currentYear} St. Rita's Catholic Church Dakwo. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-cream text-opacity-60 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-cream text-opacity-60 hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-cream text-opacity-60 hover:text-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
