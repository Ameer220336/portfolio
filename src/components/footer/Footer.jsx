import React from "react";
import { PERSONAL_INFO, NAV_LINKS, SOCIAL_LINKS } from "../../constants/data";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-white/5 pt-20 pb-32">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center font-display font-bold text-white text-xl">
                A
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-xl">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-sm text-zinc-500">{PERSONAL_INFO.title}</p>
              </div>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Building scalable, efficient web applications and data-driven
              solutions from Sydney, Australia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-dark-500 group-hover:bg-accent transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ameerbajracharya2022@gmail.com"
                  className="text-zinc-400 hover:text-accent transition-colors flex items-center gap-3"
                >
                  <i className="bx bx-mail-send text-xl" />
                  ameerbajracharya2022@gmail.com
                </a>
              </li>
              <li className="text-zinc-400 flex items-center gap-3">
                <i className="bx bx-map text-xl" />
                Sydney, Australia
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-dark-700 border border-dark-600 flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`${link.icon} text-lg`} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <p className="text-sm text-zinc-600 flex items-center gap-2">
            Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
