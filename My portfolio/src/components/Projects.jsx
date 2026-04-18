import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaGithub, FaYoutube, FaFigma, FaArrowRight } from 'react-icons/fa';
import NetworkBackground from './NetworkBackground';
import dreamgameImage from '../assets/dreamgame.png';
import olipopImage from '../assets/olipop.png';
import bitcoincashImage from '../assets/bitcoincash.png';
import peakdesignImage from '../assets/peakdesign.png';
import tictactoeImage from '../assets/tictactoe.png';
import typingspeedImage from '../assets/typingspeed.png';
import figmaDashstack from '../assets/figma_dashstack.png';
import figmaFashionMall from '../assets/figma_fashion_mall.png';
import figmaInflux from '../assets/figma_influx.png';

const Projects = () => {
    const [showFigma, setShowFigma] = useState(false);

    const projects = [
        // ... (existing projects remain the same)
        {
            title: "DreamGame Website Clone",
            description: "A high-fidelity clone of the DreamGame website, focused on responsive design, clean UI, and real-world functionality using modern web technologies.",
            image: dreamgameImage,
            live: "https://dreamgame-website-clone.netlify.app/",
            github: "https://github.com/Bhavy-Talaviya/DreamGame-websiteclone",
            video: "https://youtu.be/hwibRip837Q?si=XvdHaAzXYuCSH8EN"
        },
        {
            title: "Olipop Website Clone",
            description: "A visually stunning clone of the Olipop website, featuring vibrant colors, smooth animations, and a responsive layout that captures the brand's aesthetic.",
            image: olipopImage,
            live: "https://olipop-clone.netlify.app/",
            github: "https://github.com/Bhavy-Talaviya/olipop-Websiteclone",
            video: "https://youtu.be/in5TzMqYff8?si=XQLFZhpTWAx9X9MX"
        },
        {
            title: "BitcoinCash Website Clone",
            description: "A detailed clone of the BitcoinCash website, featuring a professional financial interface with real-world design patterns and responsive layouts.",
            image: bitcoincashImage,
            live: "https://bitcoin-cash-clone.netlify.app/",
            github: "https://github.com/Bhavy-Talaviya/BitcoinCash-WebsiteClone",
            video: "https://youtu.be/n3sdqX42QOk?si=Fa7fm6jUOrL0e8YB"
        },
        {
            title: "Peak Design Website Clone",
            description: "A sleek and responsive clone of the Peak Design website, focusing on e-commerce product display, clean typography, and a modern aesthetic.",
            image: peakdesignImage,
            live: "https://peakdesign-websiteclone.netlify.app/",
            github: "https://github.com/Bhavy-Talaviya/Peakdesign-Websiteclone",
            video: "https://youtu.be/KA9HUxR_x9c?si=btVTYXyjyb6AdO3b"
        },
        {
            title: "Tic-Tac-Toe Game",
            description: "A classic Tic-Tac-Toe game with a clean, modern interface and smooth gameplay. Features a responsive design for both mobile and desktop play.",
            image: tictactoeImage,
            live: "https://minda-chokdi-game.netlify.app/",
            github: "https://github.com/Bhavy-Talaviya/Tic-Tac-Toe-Game"
        },
        {
            title: "Typing Speed Test",
            description: "An interactive application to measure and improve typing speed and accuracy. Features real-time statistics, multiple time modes, and a clean, user-friendly interface.",
            image: typingspeedImage,
            live: "https://typing-speed-check-game.netlify.app/",
            github: "https://github.com/Bhavy-Talaviya/Typing-Speed-Check-Game"
        }
    ];

    const figmaProjects = [
        {
            title: "DashStack - Dashboard UI",
            image: figmaDashstack,
            description: "A comprehensive admin dashboard featuring sales analytics, user management, and real-time data visualization with a clean, modern aesthetic."
        },
        {
            title: "Fashion Mall - E-commerce",
            image: figmaFashionMall,
            description: "A trendy fashion landing page focused on visual storytelling, featuring large high-quality imagery, smooth transitions, and brand integration."
        },
        {
            title: "Influx - Business Solutions",
            image: figmaInflux,
            description: "A corporate landing page design emphasizing clarity and professionalism, with sections for service offerings, team collaboration, and client trust."
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-20 bg-[#0f172a] text-white relative overflow-hidden">
            <NetworkBackground />
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-neon-pink/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-purple-600 mb-6">
                        Featured Projects
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neon-pink to-purple-600 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore some of my recent work, featuring clones of popular platforms and interactive games.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center py-6 px-4">
                    {projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative"
                                >
                                    <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-neon-pink/20">

                                        {/* Image Container - Clickable */}
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="aspect-video w-full overflow-hidden relative block"
                                        >
                                            {/* Image or Gradient Placeholder */}
                                            {typeof project.image === 'string' && project.image.startsWith('from-') ? (
                                                <div className={`absolute inset-0 bg-gradient-to-br ${project.image} transition-transform duration-700 group-hover:scale-110`} />
                                            ) : (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            )}

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                        </a>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-pink transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed flex-grow">
                                                {project.description}
                                            </p>

                                            {/* Buttons */}
                                            <div className="mt-auto pt-4 flex flex-wrap gap-3">
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-neon-pink to-purple-600 text-white font-bold text-xs shadow-lg shadow-neon-pink/20 transition-transform hover:scale-105 active:scale-95"
                                                >
                                                    <FaExternalLinkAlt /> Live
                                                </a>
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/20 transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                                                >
                                                    <FaGithub /> GitHub
                                                </a>
                                                {project.video && (
                                                    <a
                                                        href={project.video}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-600/20 text-red-500 font-bold text-xs border border-red-500/20 transition-all hover:bg-red-600/30 hover:scale-105 active:scale-95"
                                                    >
                                                        <FaYoutube /> Watch Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 max-w-lg w-full"
                        >
                            <div className="w-20 h-20 bg-gradient-to-r from-neon-pink to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-neon-pink/20">
                                <FaCode className="text-4xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Innovation in Progress</h3>
                            <p className="text-gray-400 text-lg mb-8">
                                I'm currently working on some exciting new projects. Check back soon to see my latest work!
                            </p>
                            <div className="inline-flex items-center gap-2 text-neon-pink font-semibold">
                                <span className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
                                Coming Soon
                            </div>
                        </motion.div>
                    )}

                    {/* View Figma Project Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-16 text-center"
                    >
                        <button
                            onClick={() => setShowFigma(!showFigma)}
                            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all shadow-xl hover:shadow-neon-pink/20 border-b-2 border-b-neon-pink"
                        >
                            <FaFigma className="text-neon-pink text-2xl group-hover:rotate-12 transition-transform" />
                            {showFigma ? "Hide Figma Designs" : "View Figma Project"}
                            <FaArrowRight className={`ml-2 transition-transform duration-300 ${showFigma ? '-rotate-90' : 'rotate-90 group-hover:translate-y-1'}`} />
                        </button>
                    </motion.div>

                    {/* Figma Projects Section */}
                    <AnimatePresence>
                        {showFigma && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 40 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="w-full overflow-hidden"
                            >
                                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-2xl">
                                    <div className="text-center mb-10">
                                        <h3 className="text-3xl font-bold text-white mb-4">UI/UX Design Portfolio</h3>
                                        <p className="text-gray-400 max-w-3xl mx-auto">
                                            A showcase of my design process, focusing on user-centric interfaces, high-fidelity prototyping, and modern design systems.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {figmaProjects.map((design, idx) => (
                                            <motion.a
                                                key={idx}
                                                href="https://www.figma.com/design/CyiyxcK05S2dwKRAHJ8EW2/Untitled?node-id=68-2&t=5Y96G1nHrXL8W8i3-1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                                className="group block"
                                            >
                                                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-neon-pink/50">
                                                    <div className="aspect-[4/3] overflow-hidden relative">
                                                        <img
                                                            src={design.image}
                                                            alt={design.title}
                                                            loading="lazy"
                                                            decoding="async"
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                            <FaFigma className="text-white text-4xl drop-shadow-lg" />
                                                        </div>
                                                    </div>
                                                    <div className="p-6">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <h4 className="text-xl font-bold text-white group-hover:text-neon-pink transition-colors">
                                                                {design.title}
                                                            </h4>
                                                            <FaExternalLinkAlt className="text-neon-pink text-xs mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <p className="text-gray-400 text-sm leading-relaxed">
                                                            {design.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>

                                    <div className="mt-12 text-center">
                                        <a
                                            href="https://www.figma.com/design/CyiyxcK05S2dwKRAHJ8EW2/Untitled?node-id=68-2&t=5Y96G1nHrXL8W8i3-1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-neon-pink hover:underline font-bold text-lg"
                                        >
                                            Explore more on my Figma Profile <FaExternalLinkAlt className="text-sm" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section >
    );
};

export default Projects;
