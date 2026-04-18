import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/My photo.jpg';
import NetworkBackground from './NetworkBackground';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0f172a] text-white relative overflow-hidden">
            <NetworkBackground />
            {/* Background Glow */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Decorative Border/Frame */}
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-auto object-cover transform md:scale-100 group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            ABOUT ME...
                        </h2>

                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                My name Bhavy Talaviya. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and I am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
                            </p>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
