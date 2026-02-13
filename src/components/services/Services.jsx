import React, { useState, useRef } from "react";
import { SERVICES } from "../../constants/data";
import { AnimatePresence, motion, useInView } from "framer-motion";

// Accordion Item Component
const AccordionItem = ({ service, index, isOpen, onClick }) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.button
        className={`w-full p-6 md:p-8 flex items-center justify-between gap-4 glass-card rounded-2xl transition-all duration-300 ${
          isOpen ? "border-accent/50 glow" : "hover:border-white/20"
        }`}
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-4 md:gap-6">
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              isOpen ? "bg-accent text-white" : "bg-dark-700 text-zinc-400"
            }`}
          >
            <i className={`${service.icon} text-2xl`} />
          </div>

          {/* Title */}
          <div className="text-left">
            <h3
              className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                isOpen ? "text-accent" : "text-white"
              }`}
            >
              {service.title}
            </h3>
            <p className="text-sm text-zinc-500 hidden md:block">
              {service.points.length} services included
            </p>
          </div>
        </div>

        {/* Arrow Icon */}
        <motion.div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isOpen ? "bg-accent/20 text-accent" : "bg-dark-700 text-zinc-400"
          }`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 pt-4">
              <div className="pl-20 md:pl-24">
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <span className="mt-1">
                        <svg
                          className="w-5 h-5 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <span className="text-zinc-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-dark-700 hover:bg-accent/20 border border-dark-600 hover:border-accent/50 rounded-xl text-sm font-medium text-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-purple/5 blur-[120px] rounded-full" />

      <motion.div
        ref={containerRef}
        className="container mx-auto max-w-4xl relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-mono text-accent mb-4">
            // What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {SERVICES.map((service, index) => (
            <AccordionItem
              key={service.title}
              service={service}
              index={index}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-zinc-500 mb-4">
            Need something specific? Let's discuss your project.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark rounded-2xl font-semibold text-white transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a Conversation
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
