import React, { useState } from "react";
import { SERVICES } from "../../constants/data";
import { AnimatePresence, motion } from "framer-motion";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-20 px-4 bg-white" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Services</h2>
            <span className="text-slate-500">What I Offer</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {SERVICES.map((service, idx) => (
                <div key={idx} className="bg-white border border-slate-100 p-8 pt-16 rounded-[2rem] shadow-sm relative group hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-8 left-8">
                         <i className={`${service.icon} text-3xl text-slate-900`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                    <button 
                        onClick={() => setSelectedService(service)}
                        className="text-sm text-slate-500 flex items-center gap-1 group-hover:text-slate-900 transition-colors cursor-pointer"
                    >
                        View More 
                        <i className="uil uil-arrow-right list-none group-hover:translate-x-1 transition-transform"></i>
                    </button>
                </div>
            ))}
        </div>

        <AnimatePresence>
            {selectedService && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={() => setSelectedService(null)}
                >
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl"
                    >
                        <button 
                            onClick={() => setSelectedService(null)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
                        >
                            <i className="uil uil-times text-2xl"></i>
                        </button>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">{selectedService.title}</h3>
                        <p className="text-slate-500 text-center mb-8 text-sm">
                            {selectedService.description}
                        </p>

                        <ul className="space-y-3">
                            {selectedService.points.map((point, i) => (
                                <li key={i} className="flex gap-3 text-sm text-slate-700">
                                    <i className="uil uil-check-circle text-lg text-slate-900"></i>
                                    <p>{point}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
