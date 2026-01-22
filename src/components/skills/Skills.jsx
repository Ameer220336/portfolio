import React from "react";
import { SKILLS } from "../../constants/data";

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-slate-50" id="skills">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Skills</h2>
                <span className="text-slate-500">Technical Level</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Frontend */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h3 className="text-center text-xl font-medium mb-8 text-slate-800">Frontend Development</h3>
                    <div className="grid grid-cols-2 gap-y-6">
                        {SKILLS.frontend.map((skill) => (
                            <div key={skill.name} className="flex gap-2 items-start">
                                <i className="bx bx-badge-check text-slate-900 mt-1"></i>
                                <div>
                                    <h3 className="font-medium text-slate-900 leading-none mb-1">{skill.name}</h3>
                                    <span className="text-xs text-slate-400">{skill.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h3 className="text-center text-xl font-medium mb-8 text-slate-800">Backend Development</h3>
                    <div className="grid grid-cols-2 gap-y-6">
                        {SKILLS.backend.map((skill) => (
                            <div key={skill.name} className="flex gap-2 items-start">
                                <i className="bx bx-badge-check text-slate-900 mt-1"></i>
                                <div>
                                    <h3 className="font-medium text-slate-900 leading-none mb-1">{skill.name}</h3>
                                    <span className="text-xs text-slate-400">{skill.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;