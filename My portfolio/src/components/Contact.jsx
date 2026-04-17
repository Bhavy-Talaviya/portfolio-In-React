import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone, FaBriefcase, FaWhatsapp } from 'react-icons/fa';
import NetworkBackground from './NetworkBackground';

const Contact = () => {
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Using FormSubmit.co - WORKS AUTOMATICALLY (No Key Needed!)
            const response = await fetch("https://formsubmit.co/ajax/bhavytalaviya04@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name, // This shows the person's name
                    email: formData.email, // This lets you reply
                    subject: formData.subject,
                    message: formData.message,
                    _subject: `New Message from ${formData.name}: ${formData.subject}`, // This shows their name in your inbox
                    _template: "basic", // Cleaner, easier-to-read template
                    _captcha: "false"
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

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
                        I am currently <span className="text-green-400 font-medium">Available for Work</span>! Have a project in mind or just want to say hi? Feel free to send me a message!
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
                                <div className="flex items-start space-x-4 text-gray-300 hover:text-white transition-colors">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-green-400 relative mt-1 flex-shrink-0">
                                        <FaBriefcase size={20} />
                                        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-[#1e293b]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Availability</p>
                                        <p className="text-lg font-medium">Available for Work</p>
                                    </div>
                                </div>
                                <a href="mailto:bhavytalaviya04@gmail.com" className="flex items-start space-x-4 text-gray-300 hover:text-neon-pink transition-colors group">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-neon-pink group-hover:bg-neon-pink/20 transition-all mt-1 flex-shrink-0">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">Email</p>
                                        <p className="text-lg font-medium break-all">bhavytalaviya04@gmail.com</p>
                                    </div>
                                </a>
                                <a href="tel:+919429218355" className="flex items-start space-x-4 text-gray-300 hover:text-purple-400 transition-colors group">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-400/20 transition-all mt-1 flex-shrink-0">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">Phone</p>
                                        <p className="text-lg font-medium">+91 9429218355</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/919429218355" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 text-gray-300 hover:text-green-400 transition-colors group">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/20 transition-all mt-1 flex-shrink-0">
                                        <FaWhatsapp size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">WhatsApp</p>
                                        <p className="text-lg font-medium">+91 9429218355</p>
                                    </div>
                                </a>
                                <div className="flex items-start space-x-4 text-gray-300 hover:text-white transition-colors">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cyan-400 mt-1 flex-shrink-0">
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
                        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="w-full px-4 py-3 bg-black/20 rounded-xl border border-white/10 focus:border-neon-pink focus:outline-none text-white placeholder-gray-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Youremail@example.com"
                                        required
                                        className="w-full px-4 py-3 bg-black/20 rounded-xl border border-white/10 focus:border-neon-pink focus:outline-none text-white placeholder-gray-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry"
                                    required
                                    className="w-full px-4 py-3 bg-black/20 rounded-xl border border-white/10 focus:border-neon-pink focus:outline-none text-white placeholder-gray-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Your message here..."
                                    required
                                    className="w-full px-4 py-3 bg-black/20 rounded-xl border border-white/10 focus:border-neon-pink focus:outline-none text-white placeholder-gray-500 transition-colors resize-none"
                                />
                                <div className="flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest px-1">
                                    <span>Live Preview</span>
                                    <span>{formData.message.length} Characters</span>
                                </div>
                                {formData.message && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="p-4 bg-white/5 rounded-xl border border-dashed border-white/10 text-sm text-gray-400 italic"
                                    >
                                        <p className="line-clamp-3">"{formData.message}"</p>
                                    </motion.div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className={`w-full py-4 rounded-xl bg-gradient-to-r from-neon-pink to-purple-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-neon-pink/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane /> Send Message
                                        </>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-green-400 text-center font-medium"
                                    >
                                        Message sent successfully! I'll get back to you soon.
                                    </motion.p>
                                )}

                                {status === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-center font-medium"
                                    >
                                        Oops! Something went wrong. Please try again.
                                    </motion.p>
                                )}
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
