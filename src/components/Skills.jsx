import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Layout, Terminal } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            title: "Frontend Development",
            icon: <Globe className="text-blue-400" />,
            skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Bootstrap"]
        },
        {
            title: "UI / Design",
            icon: <Layout className="text-purple-400" />,
            skills: ["Figma", "Responsive Design", "UI/UX Principles"]
        },
        {
            title: "Core Technologies",
            icon: <Terminal className="text-emerald-400" />,
            skills: ["JavaScript (ES6+)", "HTML5", "CSS3 / SCSS", "REST APIs"]
        },
        {
            title: "Tools & Testing",
            icon: <Cpu className="text-orange-400" />,
            skills: ["Git / GitHub", "Vite", "React Testing Library", "Chrome DevTools"]
        }
    ];

    return (
        <section id="skills" className="py-32 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                                    {group.icon}
                                </div>
                                <h3 className="text-2xl font-bold">{group.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-gray-400 font-bold hover:text-white hover:border-slate-600 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
