"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiPlay, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img1 from "@/assets/1.png";

export default function HeroSection() {
  const slides = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[70vh] md:h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={slides[index]}
          alt={`Slide ${index + 1}`}
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream dark:to-navy opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 bg-gold bg-opacity-20 border border-gold text-gold rounded-full text-sm font-semibold mb-4">
            Welcome
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-navy dark:text-cream leading-tight"
        >
          St. Rita's Catholic Church Dakwo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-navy text-opacity-80 dark:text-cream dark:text-opacity-80 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Welcome to St. Rita's Catholic Church Dakwo — God is working wonders in our midst.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Link
            href="/register"
            className="px-6 py-3 bg-burgundy text-cream rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-flex items-center gap-2 justify-center"
          >
            Join Our Parish
          </Link>
          <button
            onClick={() => {
              const element = document.querySelector("main");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-gold bg-opacity-20 border-2 border-gold text-gold rounded-lg font-semibold hover:bg-opacity-30 transition-all inline-flex items-center gap-2"
          >
            <FiPlay className="w-4 h-4" /> Watch Live Mass
          </button>
          <Link
            href="/donate"
            className="px-6 py-3 bg-gold text-navy rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center"
          >
            Donate
          </Link>
        </motion.div>
      </div>

      {/* Carousel controls */}
      <button
        onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/40 p-2 rounded-full text-white"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setIndex((i) => (i + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/40 p-2 rounded-full text-white"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-32 h-32 border-2 border-gold opacity-10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-40 h-40 border-2 border-burgundy opacity-10 rounded-full"
      />
    </div>
  );
}
