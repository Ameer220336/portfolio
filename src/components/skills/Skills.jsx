import React, { useRef } from "react";
import { SKILLS } from "../../constants/data";
import { motion, useInView } from "framer-motion";

// Skill Icons mapping
const skillIcons = {
  "HTML": "devicon-html5-plain colored",
  "CSS": "devicon-css3-plain colored",
  "Tailwind": "devicon-tailwindcss-plain colored",
  "Bootstrap": "devicon-bootstrap-plain colored",
  "Javascript": "devicon-javascript-plain colored",
  "GIT": "devicon-git-plain colored",
  "React": "devicon-react-original colored",
  "Vue JS": "devicon-vuejs-plain colored",
  "NEST JS": "devicon-nestjs-plain colored",
  "NEXT JS": "devicon-nextjs-original-wordmark",
  "PHP": "devicon-php-plain colored",
  "Python": "devicon-python-plain colored",
  "Laravel": "devicon-laravel-plain colored",
  "My SQL": "devicon-mysql-plain colored",
  "RESTful API": "devicon-fastapi-plain colored",
  "AJAX": "devicon-jquery-plain colored",
  "AWS": "devicon-amazonwebservices-plain-wordmark colored",
  "Docker": "devicon-docker-plain colored",
};

// Marquee Component
const Marquee = ({ skills, direction = "left", speed = 25 }) => {
  // Double the skills array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10" />
      
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, idx) => (
          <motion.div
            key={`${skill.name}-${idx}`}
            className="flex items-center gap-4 px-6 py-4 glass-card rounded-2xl group cursor-default min-w-max"
            whileHover={{ 
              scale: 1.05, 
              borderColor: "rgba(99, 102, 241, 0.5)",
              transition: { duration: 0.2 } 
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
              <i className={`${skillIcons[skill.name] || "devicon-devicon-plain"} text-2xl text-zinc-400 group-hover:text-accent transition-colors`} />
            </div>
            <div>
              <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
              <span className="text-xs text-zinc-500">{skill.level}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden" id="skills">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[150px] rounded-full" />
      
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
            // Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Frontend Marquee */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center gap-4 mb-4 px-4">
            <span className="text-sm font-mono text-accent">Frontend</span>
            <span className="h-[1px] flex-grow bg-gradient-to-r from-accent/50 to-transparent" />
          </div>
          <Marquee skills={SKILLS.frontend} direction="left" speed={30} />
        </motion.div>

        {/* Backend Marquee */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-4 mb-4 px-4">
            <span className="text-sm font-mono text-neon-purple">Backend</span>
            <span className="h-[1px] flex-grow bg-gradient-to-r from-neon-purple/50 to-transparent" />
          </div>
          <Marquee skills={SKILLS.backend} direction="right" speed={35} />
        </motion.div>

        {/* AI Marquee */}
        {/* <motion.div variants={itemVariants}>
          <div className="flex items-center gap-4 mb-4 px-4">
            <span className="text-sm font-mono text-neon-purple">AI</span>
            <span className="h-[1px] flex-grow bg-gradient-to-r from-neon-purple/50 to-transparent" />
          </div>
          <Marquee skills={SKILLS.AI} direction="right" speed={35} />
        </motion.div> */}

        {/* Skill Summary Cards */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { label: "Languages", count: "3+", icon: "💻" },
            { label: "Frameworks", count: "5+", icon: "⚡" },
            { label: "Tools", count: "10+", icon: "🛠️" },
            { label: "Databases", count: "3+", icon: "🗄️" },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.02, borderColor: "rgba(99, 102, 241, 0.3)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <p className="text-2xl font-display font-bold text-white">{item.count}</p>
              <p className="text-sm text-zinc-500">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Add Devicons CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/devicon.min.css" />
    </section>
  );
};

export default Skills;