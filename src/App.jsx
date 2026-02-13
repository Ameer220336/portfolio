import React from "react";
import { motion } from "framer-motion";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function App() {
  return (
    <motion.div
      className="bg-dark-900 min-h-screen relative"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Header / Navigation */}
      <Header />

      {/* Main content */}
      <main className="relative">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}

export default App;
