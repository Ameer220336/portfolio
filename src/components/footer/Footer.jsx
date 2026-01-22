import React from 'react';
import { PERSONAL_INFO, NAV_LINKS, SOCIAL_LINKS } from "../../constants/data";

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-24 text-white">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">{PERSONAL_INFO.name}</h1>
            <span className="block text-slate-400 mb-8">{PERSONAL_INFO.title}</span>

            <ul className="flex justify-center flex-wrap gap-8 mb-8">
                {NAV_LINKS.map(link => (
                    <li key={link.name}>
                        <a href={link.href} className="text-slate-300 hover:text-white transition-colors">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex justify-center gap-6 mb-12">
                {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-xl hover:bg-slate-700 transition-colors">
                        <i className={`${link.icon} text-lg`}></i>
                    </a>
                ))}
            </div>

            <span className="text-sm text-slate-500">
                &#169; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </span>
        </div>
    </footer>
  );
};

export default Footer;
