import profileImg from '../assets/profile.png';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-32 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                        <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 aspect-[4/5] flex items-center justify-center">
                            <img
                                src={profileImg}
                                alt="Areeba Saqib"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border border-white/10">
                                <p className="text-white font-bold text-lg mb-1">Areeba Saqib</p>
                                <p className="text-blue-400 text-sm">Passionate Frontend Developer</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl font-bold mb-6">About Me</h2>
                            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
                            <p className="text-xl text-gray-400 leading-relaxed mb-6">
                                I'm a Frontend Developer with 3+ years of experience in building modern web applications.
                                I specialize in creating interactive and intuitive user interfaces using React and the latest web technologies.
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                My journey started with a fascination for design and code, which led me to bridge the gap between
                                aesthetics and functionality. I love solving complex problems with clean, efficient code.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { icon: <Code2 size={24} />, title: "Clean Code", desc: "Writing maintainable and scalable code.", color: "blue" },
                                { icon: <Palette size={24} />, title: "Creative Design", desc: "Blending creativity with precision.", color: "purple" },
                                { icon: <Zap size={24} />, title: "Performance", desc: "Optimized for speed and accessibility.", color: "emerald" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-colors">
                                    <div className={`p-3 rounded-xl bg-${item.color}-500/10 text-${item.color}-400`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
