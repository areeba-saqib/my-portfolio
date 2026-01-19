import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Car, Calculator, Coffee, HelpCircle, BookOpen, Globe } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Modern Car Showcase',
            description: 'A sleek, interactive car landing page featuring high-quality visuals and responsive design.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://areeba-saqib.github.io/car/',
            github: 'https://github.com/areeba-saqib/car',
            icon: <Car className="text-blue-500" size={32} />
        },
        {
            id: 2,
            title: 'Advanced Calculator',
            description: 'A fully functional, elegantly designed calculator with a focus on precision and UX.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://areeba-saqib.github.io/caluclater/',
            github: 'https://github.com/areeba-saqib/caluclater',
            icon: <Calculator className="text-purple-500" size={32} />
        },
        {
            id: 3,
            title: 'Premium Coffee Shop',
            description: 'A stunning coffee shop landing page with a warm aesthetic and intuitive navigation.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://areeba-saqib.github.io/coffee/',
            github: 'https://github.com/areeba-saqib/coffee',
            icon: <Coffee className="text-orange-500" size={32} />
        },
        {
            id: 4,
            title: 'Interactive Quiz App',
            description: 'A dynamic quiz platform with real-time score tracking and interactive elements.',
            tech: ['React', 'JavaScript', 'Tailwind'],
            link: 'https://areeba-saqib.github.io/Quiz/',
            github: 'https://github.com/areeba-saqib/Quiz',
            icon: <HelpCircle className="text-emerald-500" size={32} />
        },
        {
            id: 5,
            title: 'Personal Blog Platform',
            description: 'A clean and professional blog interface designed for content readability and performance.',
            tech: ['HTML', 'CSS', 'JS'],
            link: 'https://areeba-saqib.github.io/bolg/',
            github: 'https://github.com/areeba-saqib/bolg',
            icon: <BookOpen className="text-pink-500" size={32} />
        },
        {
            id: 6,
            title: 'Weather App',
            description: 'A real-time weather application providing accurate forecast data with a clean UI.',
            tech: ['React', 'API', 'Tailwind'],
            link: 'https://areeba-saqib.github.io/weather-app/',
            github: 'https://github.com/areeba-saqib/weather-app',
            icon: <Globe className="text-cyan-500" size={32} />
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-900/50 shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        My Creations
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col h-full bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 transition-all duration-300 group shadow-lg"
                        >
                            <div className="mb-6 h-12 w-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                {project.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-semibold text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                                >
                                    <Github size={18} /> Code
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
