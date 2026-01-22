import React, { useState } from "react";
import { QUALIFICATIONS } from "../../constants/data";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1); // 1 = Education, 2 = Experience

  return (
    <section className="py-20 px-4 bg-slate-50" id="portfolio">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Qualification</h2>
                <span className="text-slate-500">My Academic Journey</span>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="flex justify-center gap-8 mb-12">
                    <button 
                        className={`text-xl font-medium flex items-center gap-2 transition-colors ${toggleState === 1 ? "text-slate-900" : "text-slate-400"}`}
                        onClick={() => setToggleState(1)}
                    >
                        <i className="uil uil-graduation-cap text-2xl"></i>
                        Education
                    </button>
                    <button 
                        className={`text-xl font-medium flex items-center gap-2 transition-colors ${toggleState === 2 ? "text-slate-900" : "text-slate-400"}`}
                        onClick={() => setToggleState(2)}
                    >
                        <i className="uil uil-briefcase-alt text-2xl"></i>
                        Experience
                    </button>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 -ml-[1px] w-[2px] h-full bg-slate-200"></div>

                    {toggleState === 1 && QUALIFICATIONS.education.map((item, idx) => (
                        <div key={idx} className={`flex justify-between items-center mb-8 ${idx % 2 === 1 ? "flex-row-reverse" : ""}`}>
                            <div className={`w-[45%] ${idx % 2 === 1 ? "text-left" : "text-right"}`}>
                                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                                <span className="block text-sm text-slate-500 mb-2">{item.subtitle}</span>
                                <div className={`text-xs text-slate-400 flex items-center gap-1 ${idx % 2 === 1 ? "" : "justify-end"}`}>
                                    <i className="uil uil-calendar-alt"></i>
                                    {item.calendar}
                                </div>
                            </div>
                            
                            <div className="relative z-10 w-3 h-3 bg-slate-900 rounded-full border-4 border-slate-100 shadow-sm"></div>
                            
                            <div className="w-[45%]"></div>
                        </div>
                    ))}

                    {toggleState === 2 && QUALIFICATIONS.experience.map((item, idx) => (
                        <div key={idx} className={`flex justify-between items-center mb-8 ${idx % 2 === 1 ? "flex-row-reverse" : ""}`}>
                           <div className={`w-[45%] ${idx % 2 === 1 ? "text-left" : "text-right"}`}>
                                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                                <span className="block text-sm text-slate-500 mb-2">{item.subtitle}</span>
                                <div className={`text-xs text-slate-400 flex items-center gap-1 ${idx % 2 === 1 ? "" : "justify-end"}`}>
                                    <i className="uil uil-calendar-alt"></i>
                                    {item.calendar}
                                </div>
                            </div>
                            
                            <div className="relative z-10 w-3 h-3 bg-slate-900 rounded-full border-4 border-slate-100 shadow-sm"></div>
                            
                            <div className="w-[45%]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Qualification;
