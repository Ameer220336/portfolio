import React, { useRef } from "react";
import { TESTIMONIALS } from "../../constants/data";
import { motion, useInView } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Quote Icon Component
const QuoteIcon = () => (
  <svg className="w-12 h-12 text-accent/20" fill="currentColor" viewBox="0 0 32 32">
    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
  </svg>
);

const Testimonials = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden" id="testimonials">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full" />

      <motion.div
        ref={containerRef}
        className="container mx-auto max-w-6xl relative z-10"
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
            // Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure to work with
          </p>
        </motion.div>

        {/* Card Stack Swiper */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Swiper Container */}
          <motion.div
            className="w-full max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Swiper
              grabCursor={true}
              modules={[Pagination, Autoplay]}
              className="w-full"
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-custom",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              {TESTIMONIALS.map(({ id, image, title, description }) => (
                <SwiperSlide key={id}>
                  <div className="glass-card p-8 flex flex-col rounded-3xl border-accent/20 min-h-[380px]">
                    {/* Quote Icon */}
                    <QuoteIcon />

                    {/* Testimonial Text */}
                    <p className="text-lg text-zinc-300 leading-relaxed my-6 flex-grow italic">
                      "{description}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-neon-purple flex items-center justify-center text-white font-bold text-lg">
                        {title.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{title}</h4>
                        <p className="text-sm text-zinc-500">Colleague</p>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center gap-2 mt-8" />
          </motion.div>

          {/* Stats / Info Side */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="glass-card p-6 text-center">
                  <p className="text-4xl font-display font-bold gradient-text">100%</p>
                  <p className="text-sm text-zinc-500 mt-1">Client Satisfaction</p>
                </div>
                <div className="glass-card p-6 text-center">
                  <p className="text-4xl font-display font-bold gradient-text">12+</p>
                  <p className="text-sm text-zinc-500 mt-1">Projects Delivered</p>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-md mx-auto lg:mx-0">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Building Lasting Relationships
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  I believe in transparent communication and delivering beyond expectations. 
                  Every project is an opportunity to create something meaningful and build 
                  trust that lasts beyond the project timeline.
                </p>
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-xl text-white font-medium hover:border-accent/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Let's Work Together</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
