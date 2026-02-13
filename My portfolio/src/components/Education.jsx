import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate } from 'react-icons/fa';
import NetworkBackground from './NetworkBackground';

const Education = () => {
    // Specific data requested by user
    const educationData = [
        {
            year: "2025 - Present",
            degree: "BACHELOR DEGREE",
            institution: "Swaminarayan University x codingGita",
        },
        {
            year: "2024 - 2025",
            degree: "HIGHER SECONDARY CERTIFICATE",
            institution: "Vidhyaguru Science School",
        },
        {
            year: "2022 - 2023",
            degree: "SECONDARY SCHOOL CERTIFICATE",
            institution: "Gyandipvidhya Mandir(Amreli)",
        }
    ];

    return (
        <section id="education" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white py-20 relative overflow-hidden">
            <NetworkBackground />

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">

                {/* Top Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-purple-600 mb-4">
                        MY EDUCATION
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neon-pink to-purple-600 mx-auto rounded-full" />
                </motion.div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Isometric Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-lg">
                            {/* Glowing effect behind image */}
                            <div className="absolute inset-0 bg-neon-pink/20 blur-[100px] rounded-full" />
                            <img
                                src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974925-2477356.png"
                                alt="Isometric Tech Illustration"
                                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Right Side: Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col space-y-8"
                    >
                        <div className="space-y-6 relative">
                            {/* Vertical Line for Timeline */}
                            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-green-400 via-emerald-500 to-transparent opacity-30 hidden sm:block" />

                            {educationData.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="group relative flex items-start gap-6 pl-0 sm:pl-8"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[21px] top-6 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981] z-10 hidden sm:block group-hover:scale-150 transition-transform duration-300" />

                                    <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 transform hover:-translate-y-1 group-hover:scale-[1.02]">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <span className="text-emerald-400 text-sm font-bold tracking-wide block mb-1">
                                                    {edu.year}
                                                </span>
                                                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-gray-400 font-medium text-lg flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block" />
                                                    {edu.institution}
                                                </p>
                                            </div>

                                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-emerald-500/20 transition-all">
                                                <FaUserGraduate size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Education;
