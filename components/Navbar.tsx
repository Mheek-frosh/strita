'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Mass Schedule', href: '/mass-schedule' },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Events', href: '/events' },
    { name: 'Sermons', href: '/sermons' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream dark:bg-navy shadow-lg glass'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <span className="text-navy font-bold text-lg">✦</span>
            </div>
            <span className="hidden sm:inline font-bold text-navy dark:text-cream text-lg">
              St. Rita's
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-navy dark:text-cream hover:text-gold transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-200 dark:hover:bg-navy-600 rounded-lg transition-colors"
            >
              {isDark ? (
                <FiSun className="w-5 h-5 text-gold" />
              ) : (
                <FiMoon className="w-5 h-5 text-navy" />
              )}
            </button>
            
            <Link
              href="/register"
              className="px-4 py-2 bg-burgundy text-cream rounded-lg hover:bg-opacity-90 transition-all"
            >
              Register
            </Link>
            <Link
              href="/donate"
              className="px-4 py-2 bg-gold text-navy rounded-lg hover:shadow-lg transition-all"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="text-navy dark:text-cream p-2 hover:bg-gray-200 dark:hover:bg-navy-600 rounded-lg"
            >
              {isDark ? (
                <FiSun className="w-5 h-5 text-gold" />
              ) : (
                <FiMoon className="w-5 h-5 text-navy dark:text-cream" />
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy dark:text-cream p-2 hover:bg-gray-200 dark:hover:bg-navy-600 rounded-lg"
            >
              {isOpen ? (
                <FiX className="w-6 h-6 text-navy dark:text-cream" />
              ) : (
                <FiMenu className="w-6 h-6 text-navy dark:text-cream" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 border-t border-gold/20 dark:border-cream/20 bg-cream dark:bg-navy text-navy dark:text-cream space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-lg transition-colors text-navy dark:text-cream hover:bg-gold hover:bg-opacity-10 dark:hover:bg-cream dark:hover:bg-opacity-10"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-3 px-4 pt-2">
              <Link
                href="/register"
                className="flex-1 px-4 py-2 bg-burgundy text-cream rounded-lg text-center hover:bg-opacity-90"
              >
                Register
              </Link>
              <Link
                href="/donate"
                className="flex-1 px-4 py-2 bg-gold text-navy rounded-lg text-center hover:shadow-lg"
              >
                Donate
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
