import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import NetworkBackground from './NetworkBackground';

const Contact = () => {
    return (
        <section id="contact" className="py-20 pt-10 bg-[#0f172a] text-white relative overflow-hidden">
            <NetworkBackground />

            {/* Background Splashes */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-neon-pink/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-purple-600 mb-6">
                        Get In Touch
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neon-pink to-purple-600 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? Feel free to send me a message!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg hover:border-neon-pink/30 transition-colors">
                            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-neon-pink">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="text-lg font-medium">bhavytalaviya04@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-400">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="text-lg font-medium">+91 9429218355</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="text-lg font-medium">Gujarat, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <form className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 bg-black/20 rounded-xl border border-white/10 focus:border-neon-pink focus:outline-none text-white placeholder-gray-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Youremail@example.com"
                                        className="w-full px-4 py-3 bg-black/20 rounded-xl border border-white/10 focus:border-neon-pink focus:outline-none text-white placeholder-gray-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full px-4 py-3 bg-black/20 rounded-xl border border-white/10 focus:border-neon-pink focus:outline-none text-white placeholder-gray-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your message here..."
                                    className="w-full px-4 py-3 bg-black/20 rounded-xl border border-white/10 focus:border-neon-pink focus:outline-none text-white placeholder-gray-500 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-pink to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-neon-pink/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane /> Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
