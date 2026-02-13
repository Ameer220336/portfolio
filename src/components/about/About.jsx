import React, { useRef, useEffect, useState } from "react";
import { PERSONAL_INFO, ABOUT_STATS } from "../../constants/data";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(parseInt(value));
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

// 3D Tilt Card Component - Simplified with Framer Motion
const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    rotateX.set(-mouseY / 20);
    rotateY.set(mouseX / 20);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isOnline, setIsOnline] = useState(false);

  // Check if current time is within support hours (9am - 8pm AEST, Mon-Fri)
  useEffect(() => {
    const checkOnlineStatus = () => {
      const now = new Date();
      // Convert to AEST (UTC+11)
      const aestTime = new Date(now.toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
      const day = aestTime.getDay(); // 0 = Sunday, 6 = Saturday
      const hour = aestTime.getHours();
      
      // Check if Mon-Fri (1-5) and between 9am-8pm (9-20)
      const isWeekday = day >= 1 && day <= 5;
      const isBusinessHours = hour >= 9 && hour < 20;
      
      setIsOnline(isWeekday && isBusinessHours);
    };

    checkOnlineStatus();
    // Update every minute
    const interval = setInterval(checkOnlineStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="section-padding bg-dark-900 relative" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      
      <motion.div
        ref={containerRef}
        className="container mx-auto max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-mono text-accent mb-4">
            // About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            My <span className="gradient-text">Introduction</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Large Card - About Text */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <TiltCard className="bento-card h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Who I Am</h3>
                    <p className="text-sm text-zinc-500">Full Stack Developer</p>
                  </div>
                </div>
                
                <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {PERSONAL_INFO.aboutDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {["React", "Laravel", "Docker", "Node.js", "Python"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-dark-700 text-xs text-zinc-400 border border-dark-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Experience Card */}
          <motion.div variants={itemVariants}>
            <TiltCard className="bento-card h-full min-h-[200px]">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <motion.div
                  className="text-5xl md:text-6xl font-display font-bold gradient-text mb-2"
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{ delay: 0.1, type: "spring" }}
                >
                  <AnimatedCounter value="5" suffix="+" />
                </motion.div>
                <p className="text-zinc-400 text-sm">Years Experience</p>
                <i className="bx bx-award text-3xl text-accent/30 mt-4" />
              </div>
            </TiltCard>
          </motion.div>

          {/* Projects Card */}
          <motion.div variants={itemVariants}>
            <TiltCard className="bento-card h-full min-h-[200px]">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <motion.div
                  className="text-5xl md:text-6xl font-display font-bold gradient-text mb-2"
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  <AnimatedCounter value="12" suffix="+" />
                </motion.div>
                <p className="text-zinc-400 text-sm">Systems Built</p>
                <i className="bx bx-briefcase-alt text-3xl text-accent/30 mt-4" />
              </div>
            </TiltCard>
          </motion.div>

          {/* Support Card */}
          <motion.div variants={itemVariants}>
            <TiltCard className="bento-card h-full">
              <div className="flex flex-col h-full">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  isOnline ? "bg-green-500/10" : "bg-red-500/10"
                }`}>
                  <i className={`bx bx-support text-2xl ${
                    isOnline ? "text-green-400" : "text-red-400"
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                <p className="text-sm text-zinc-500">Mon - Fri</p>
                <p className="text-sm text-zinc-400">9am - 8pm AEST</p>
                <div className="mt-auto pt-4">
                  <span className={`inline-flex items-center gap-2 text-xs ${
                    isOnline ? "text-green-400" : "text-red-400"
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      isOnline ? "bg-green-400 animate-pulse" : "bg-red-400"
                    }`} />
                    {isOnline ? "Currently Online" : "Currently Offline"}
                  </span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Location Card */}
          <motion.div variants={itemVariants}>
            <TiltCard className="bento-card h-full">
              <div className="flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-xl">🌏</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-sm text-zinc-500">Sydney</p>
                <p className="text-sm text-zinc-400">Australia</p>
                <div className="mt-auto pt-4">
                  <span className="text-xs text-zinc-500">UTC+11</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Download CV Button */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.a
            href={PERSONAL_INFO.cv}
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-dark-700 hover:bg-dark-600 border border-dark-600 hover:border-accent/30 rounded-2xl font-semibold text-white transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
