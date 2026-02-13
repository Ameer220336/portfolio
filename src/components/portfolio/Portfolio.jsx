import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../../constants/data";

const Portfolio = () => {
  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden" id="portfolio">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-accent/5 blur-[140px] rounded-full" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-mono text-accent mb-4">
            // Recent Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A few projects I have worked on across web applications and business systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              className="bento-card h-full flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-6 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={`${project.title}-${item}`}
                    className="px-3 py-1 rounded-full bg-dark-700 text-zinc-300 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="text-accent hover:text-accent-light transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    className="text-zinc-300 hover:text-white transition-colors"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;