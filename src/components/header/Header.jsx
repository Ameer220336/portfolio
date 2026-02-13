import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "../../constants/data";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active nav based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = NAV_LINKS.map((link) =>
        document.querySelector(link.href)
      ).filter(Boolean);

      let current = "#home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
          current = `#${section.id}`;
        }
      });
      setActiveNav(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setActiveNav(href);
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Floating Nav */}
      <motion.header
        className={`fixed bottom-6 md:bottom-8 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? "scale-95" : "scale-100"
        }`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <nav className="hidden md:flex glass-card px-2 py-2 items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeNav === link.href
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {activeNav === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-accent rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <i className={`${link.icon} text-lg`} />
                <span className="hidden lg:inline">{link.name}</span>
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden glass-card p-4 rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            className="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              className="w-5 h-0.5 bg-white block origin-center"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-5 h-0.5 bg-white block"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
              className="w-5 h-0.5 bg-white block origin-center"
            />
          </motion.div>
        </button>
      </motion.header>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-dark-900/90 backdrop-blur-lg"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="absolute bottom-24 left-4 right-4 glass-card p-6 rounded-3xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <div className="grid grid-cols-3 gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${
                      activeNav === link.href
                        ? "bg-accent text-white"
                        : "text-zinc-400 hover:bg-dark-700"
                    }`}
                  >
                    <i className={`${link.icon} text-2xl`} />
                    <span className="text-xs">{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar with Logo */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-display font-bold text-white">
              A
            </div>
            <span className="hidden sm:block font-display font-semibold text-white">
              Ameer
            </span>
          </a>

          <motion.a
            href="#contact"
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
              scrolled
                ? "glass-card text-white hover:border-accent/50"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Talk
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
