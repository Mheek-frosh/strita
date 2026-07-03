'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiLock } from 'react-icons/fi';

export default function LoginPage() {
  return (
    <main className="pt-24 min-h-screen bg-cream dark:bg-navy text-navy dark:text-cream">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-navy to-navy-dark text-cream rounded-3xl p-12 shadow-2xl"
          >
            <h1 className="text-5xl font-bold mb-4">Parish Login</h1>
            <p className="text-lg text-cream text-opacity-80 mb-10">
              Access the admin dashboard, manage members, and oversee parish events.
            </p>
            <form className="space-y-6">
              <div className="space-y-3">
                <label className="block text-sm font-semibold">Email address</label>
                <div className="flex items-center gap-3 bg-white text-navy rounded-2xl px-4 py-3">
                  <FiMail className="w-5 h-5" />
                  <input
                    type="email"
                    placeholder="admin@strita.ng"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-semibold">Password</label>
                <div className="flex items-center gap-3 bg-white text-navy rounded-2xl px-4 py-3">
                  <FiLock className="w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>
              <button className="w-full px-6 py-4 bg-gold text-navy rounded-2xl font-semibold hover:shadow-lg transition-all">
                Sign In
              </button>
            </form>
            <p className="mt-8 text-sm text-cream text-opacity-80">
              Not an admin? <Link href="/register" className="text-gold underline">Register as a new parish member</Link>.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
