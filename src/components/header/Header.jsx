import React, { useState } from "react";
import { NAV_LINKS } from "../../constants/data";
import { motion } from "framer-motion";

const Header = () => {
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-max px-4">
            <nav className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl rounded-full px-4 md:px-6 py-3 flex gap-4 md:gap-8 items-center justify-between supports-[backdrop-filter]:bg-white/60">
                {NAV_LINKS.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        className={`relative text-xl md:text-2xl text-slate-500 hover:text-slate-900 transition-colors flex flex-col items-center gap-1 p-2 ${activeNav === link.href ? "text-slate-900" : ""}`}
                        onClick={() => setActiveNav(link.href)}
                    >
                        <i className={link.icon}></i>
                        {activeNav === link.href && (
                             <motion.span 
                                layoutId="nav-dot"
                                className="absolute -bottom-1 w-1 h-1 bg-slate-900 rounded-full"
                             />
                        )}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;
