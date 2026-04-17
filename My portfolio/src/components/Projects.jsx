import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaGithub, FaYoutube } from 'react-icons/fa';
import NetworkBackground from './NetworkBackground';
import dreamgameImage from '../assets/dreamgame.png';
import olipopImage from '../assets/olipop.png';
import bitcoincashImage from '../assets/bitcoincash.png';
import peakdesignImage from '../assets/peakdesign.png';
import tictactoeImage from '../assets/tictactoe.png';
import typingspeedImage from '../assets/typingspeed.png';

const Projects = () => {
    const projects = [
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
                </div>
            </div>
        </section >
    );
};

export default Projects;
