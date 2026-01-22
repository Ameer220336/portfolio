import React from "react";
import { PERSONAL_INFO, ABOUT_STATS } from "../../constants/data";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-4 bg-white" id="about">
      <div className="container mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">About Me</h2>
            <span className="text-slate-500">My Introduction</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
                <img src={PERSONAL_INFO.aboutImg} alt="About" className="rounded-3xl shadow-lg w-full max-w-sm object-cover" />
            </div>

            <div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {ABOUT_STATS.map((stat, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                            <i className={`${stat.icon} text-2xl text-slate-700 mb-2 block`}></i>
                            <h3 className="font-semibold text-slate-900">{stat.title}</h3>
                            <span className="text-xs text-slate-500">{stat.subtitle}</span>
                        </div>
                    ))}
                </div>

                <p className="text-slate-600 leading-relaxed mb-8 text-center md:text-left">
                    {PERSONAL_INFO.aboutDescription}
                </p>

                <div className="flex justify-center md:justify-start">
                    <a href={PERSONAL_INFO.cv} download className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors">
                        Download CV
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
