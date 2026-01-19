import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-slate-950 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2 text-center md:text-left">
                            Areeba Saqib.
                        </h2>
                        <p className="text-gray-500 max-w-xs leading-relaxed text-center md:text-left">
                            Focused on delivering high-quality, scalable frontend solutions for modern businesses.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <a href="#home" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">About</a>
                        <a href="#projects" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-sm text-gray-500 mb-1">© 2026 Karachi, Pakistan</p>
                        <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">Built with React & Framer Motion</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
