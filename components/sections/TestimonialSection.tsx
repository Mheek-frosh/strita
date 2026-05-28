"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Mary Okafor",
      role: "Choir Member",
      text: "St. Rita's has become my spiritual home. The warmth, community, and deep faith here have transformed my life in ways I never imagined.",
    },
    {
      name: "John Adeleke",
      role: "Youth Ministry Leader",
      text: "Being part of this parish has given me purpose and meaning. Our youth ministry is truly making a difference in young lives.",
    },
    {
      name: "Grace Chioma",
      role: "Long-time Parishioner",
      text: "For over 15 years, this church has been the anchor of my family's faith journey. I'm grateful for the pastors and community.",
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

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-navy-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-cream mb-3">
              Testimonies of Faith
            </h2>
            <p className="text-base md:text-lg text-navy text-opacity-70 dark:text-cream dark:text-opacity-70 max-w-2xl mx-auto">
              Hear from members of our parish community
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-2xl text-center group hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gold text-navy font-bold flex items-center justify-center mx-auto text-lg mb-4">
                  {getInitials(testimonial.name)}
                </div>
                <div className="flex gap-1 justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-navy dark:text-cream text-opacity-80 mb-4 italic leading-relaxed text-sm md:text-base">
                  "{testimonial.text}"
                </blockquote>
                <h4 className="font-bold text-navy dark:text-cream">
                  {testimonial.name}
                </h4>
                <p className="text-gold text-sm font-semibold">{testimonial.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
