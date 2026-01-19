import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8"
                >
                    <Sparkles size={16} />
                    <span>Frontend Developer & UI Specialist</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-black mb-8 tracking-tight text-white"
                >
                    I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Areeba Saqib</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Crafting pixel-perfect, high-performance web applications with a focus on user experience and modern aesthetics.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center gap-3 shadow-xl shadow-blue-500/25"
                    >
                        Explore Projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full border border-slate-700 text-white font-bold transition-all glass hover:bg-white/5"
                    >
                        Let's Collaborate
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 flex justify-center gap-8"
                >
                    {[Github, Linkedin, Twitter].map((Icon, i) => (
                        <a key={i} href="#" className="p-3 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-white transition-all hover:scale-110">
                            <Icon size={24} />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
