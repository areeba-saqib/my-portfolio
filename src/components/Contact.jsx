import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative glass rounded-3xl overflow-hidden border border-white/10">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/5 to-transparent pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 items-stretch">
                        {/* CTA Section */}
                        <div className="p-12 lg:p-20 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    Let’s Build Something <br />
                                    <span className="text-blue-500">Extraordinary.</span>
                                </h2>
                                <p className="text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
                                    Have a specific project in mind or just want to say hi? I'm always open to new opportunities.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-6 group">
                                        <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Email Me</p>
                                            <p className="text-lg font-bold text-white">areebasaqib999@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 group">
                                        <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Location</p>
                                            <p className="text-lg font-bold text-white">Sialkot, Pakistan</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 flex gap-4">
                                    {[Github, Linkedin, Twitter].map((Icon, idx) => (
                                        <a key={idx} href="#" className="p-3 rounded-xl border border-slate-700 bg-slate-800/30 text-gray-400 hover:text-white hover:border-blue-500 transition-all">
                                            <Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Form Section */}
                        <div className="p-12 lg:p-20 bg-slate-900/50 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-1">NAME</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-1">EMAIL</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-all"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 ml-1">MESSAGE</label>
                                    <textarea
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2"
                                >
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
