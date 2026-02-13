import React, { useRef, useState } from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../constants/data";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ProfileImg from "../../assets/profile.jpg";

// Magnetic Button Component
const MagneticButton = ({ children, className, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

// Interactive Title with cursor tracking
const InteractiveTitle = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative cursor-default"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 50%)`,
      }}
    >
      {children}
    </motion.div>
  );
};

// Floating Orbs Background
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-accent/20 to-neon-purple/20 blur-[100px]"
      animate={{
        x: [0, 100, 0],
        y: [0, -50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{ top: "10%", left: "10%" }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10 blur-[80px]"
      animate={{
        x: [0, -80, 0],
        y: [0, 80, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{ bottom: "20%", right: "10%" }}
    />
  </div>
);

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
      id="home"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      
      {/* Floating Orbs */}
      <FloatingOrbs />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <motion.div
        className="container mx-auto px-4 md:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left pt-16 md:pt-0">
            {/* Main Title */}
            <motion.div variants={itemVariants}>
              <InteractiveTitle>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-6">
                  <span className="text-white">{PERSONAL_INFO.name.split(" ")[0]}</span>
                  <br />
                  <span className="gradient-text">{PERSONAL_INFO.name.split(" ")[1]}</span>
                </h1>
              </InteractiveTitle>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mb-6 justify-center lg:justify-start"
            >
              <span className="h-[2px] w-12 bg-gradient-to-r from-accent to-transparent" />
              <h2 className="text-xl md:text-2xl font-mono text-accent font-medium">
                {PERSONAL_INFO.title}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed mb-10 mx-auto lg:mx-0"
            >
              {PERSONAL_INFO.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
            >
              <MagneticButton
                href="#contact"
                className="group relative px-8 py-4 bg-accent rounded-2xl font-semibold text-white overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Say Hello
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-purple to-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </MagneticButton>

              <MagneticButton
                href={PERSONAL_INFO.cv}
                className="group px-8 py-4 glass-card rounded-2xl font-semibold text-white border border-white/10 hover:border-accent/50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  Download CV
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-12 justify-center lg:justify-start"
            >
              {SOCIAL_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + idx * 0.1 }}
                >
                  <i className={`${link.icon} text-xl`} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative">
              {/* Animated Morphing Border - Background Layer */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-accent via-neon-purple to-neon-cyan"
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70%/60% 30% 70% 40%",
                    "30% 60% 70% 40%/50% 60% 30% 60%",
                    "60% 40% 30% 70%/60% 30% 70% 40%"
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "blur(4px)" }}
              />

              {/* Clean Profile Image */}
              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden"
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70%/60% 30% 70% 40%",
                    "30% 60% 70% 40%/50% 60% 30% 60%",
                    "60% 40% 30% 70%/60% 30% 70% 40%"
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  backgroundImage: `url(${ProfileImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{ scale: 1.02 }}
              />

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-8 glass-card px-4 py-2 rounded-2xl glow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="text-xs text-zinc-400">Based in</p>
                    <p className="text-sm font-semibold text-white">Sydney, AU</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Years Badge */}
              <motion.div
                className="absolute -top-4 -left-4 md:top-4 md:-left-8 glass-card px-4 py-2 rounded-2xl glow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-xs text-zinc-400">Experience</p>
                    <p className="text-sm font-semibold text-white">5+ Years</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs text-zinc-500 font-mono">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-accent rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
