import React, { useRef } from "react";
import { QUALIFICATIONS } from "../../constants/data";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Timeline Item Component
const TimelineItem = ({ item, index, isLeft, progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-4 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Content Card */}
      <motion.div
        className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="glass-card p-6 md:p-8 group hover:border-accent/30 transition-all duration-300">
          <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:justify-end" : ""}`}>
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <i className={`${item.type === "education" ? "uil uil-graduation-cap" : "uil uil-briefcase-alt"} text-xl text-accent`} />
            </div>
            <span className="px-3 py-1 rounded-full bg-dark-700 text-xs text-zinc-400 font-mono">
              {item.calendar}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          <p className="text-zinc-400">{item.subtitle}</p>
          
          {item.location && (
            <div className={`flex items-center gap-2 mt-4 text-sm text-zinc-500 ${isLeft ? "md:justify-end" : ""}`}>
              <i className="uil uil-location-point" />
              {item.location}
            </div>
          )}
        </div>
      </motion.div>

      {/* Center Dot */}
      <div className="relative z-10 hidden md:flex items-center justify-center">
        <motion.div
          className="w-4 h-4 rounded-full bg-accent glow-sm"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
        />
        <motion.div
          className="absolute w-8 h-8 rounded-full border-2 border-accent/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
        />
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

const Qualification = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Transform scroll progress to line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Combine education and experience with type markers
  const allQualifications = [
    ...QUALIFICATIONS.education.map((item) => ({ ...item, type: "education" })),
    ...QUALIFICATIONS.experience.map((item) => ({ ...item, type: "experience" })),
  ].sort((a, b) => {
    // Sort by year (newest first)
    const yearA = parseInt(a.calendar.split(" - ")[0]) || parseInt(a.calendar);
    const yearB = parseInt(b.calendar.split(" - ")[0]) || parseInt(b.calendar);
    return yearB - yearA;
  });

  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden" id="portfolio">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark-900 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-900 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-mono text-accent mb-4">
            // My Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Qualification & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From Nepal to Sydney — my academic and professional journey
          </p>
        </motion.div>

        {/* Journey Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
            <span className="text-xl">🇳🇵</span>
            <span className="text-sm text-zinc-400">Nepal</span>
            <span className="text-zinc-600">→</span>
            <span className="text-xl">🇦🇺</span>
            <span className="text-sm text-zinc-400">Australia</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
            <i className="uil uil-graduation-cap text-accent" />
            <span className="text-sm text-zinc-400">Education</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
            <i className="uil uil-briefcase-alt text-neon-purple" />
            <span className="text-sm text-zinc-400">Experience</span>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Present Day Marker - At Top */}
          <motion.div
            className="flex flex-col items-center mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-neon-purple flex items-center justify-center glow">
              <i className="uil uil-star text-white text-sm" />
            </div>
            <span className="text-xs text-zinc-400 mt-2 font-mono">Present Day</span>
          </motion.div>

          {/* Animated Center Line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-16 bottom-20 w-[2px] md:-ml-[1px] bg-dark-600"
          >
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent via-neon-purple to-neon-cyan"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12 pl-12 md:pl-0">
            {allQualifications.map((item, index) => (
              <TimelineItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
                progress={scrollYProgress}
              />
            ))}
          </div>

          {/* Journey Start Marker - At Bottom */}
          <motion.div
            className="flex flex-col items-center mt-12 relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <div className="w-6 h-6 rounded-full bg-dark-600 border-2 border-dark-500 flex items-center justify-center">
              <i className="uil uil-rocket text-zinc-500 text-xs" />
            </div>
            <span className="text-xs text-zinc-600 mt-2 font-mono">The Beginning</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
