import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import NetworkBackground from './NetworkBackground';
import olipopImage from '../assets/Project-img/olipop.png';
import dreamGameImage from '../assets/Project-img/DreamGame.png';
import cryptoImage from '../assets/Project-img/Bitcoin.png';
import byjusImage from '../assets/Project-img/Byjus.png';
import typingImage from '../assets/Project-img/Typing.png';
import tictactoeImage from '../assets/Project-img/TicTacToe.png';

const Projects = () => {
    const projects = [
        {
            title: "Olipop Clone",
            description: "A replica of the Olipop website, featuring vibrant colors and responsive design.",
            image: olipopImage,
            live: "https://olipop-clone.netlify.app/"
        },
        {
            title: "Dream Games Clone",
            description: "A clone of the Dream Games website, showcasing interactive elements and smooth animations.",
            image: dreamGameImage,
            live: "https://dreamgames-clone.netlify.app/"
        },
        {
            title: "Bitcoin Cash Clone",
            description: "A cryptocurrency dashboard clone tracking Bitcoin Cash trends and data.",
            image: cryptoImage,
            live: "https://bitcoin-cash-clone.netlify.app/"
        },
        {
            title: "Byju's Learning Clone",
            description: "An educational platform clone inspired by Byju's, focused on learning modules.",
            image: byjusImage,
            live: "https://byjus-learning-clone.netlify.app/"
        },
        {
            title: "Typing Speed Game",
            description: "A fun and interactive game to test and improve your typing speed.",
            image: typingImage,
            live: "https://typing-speed-check-game.netlify.app/"
        },
        {
            title: "Tic Tac Toe (Minda Chokdi)",
            description: "A classic Tic Tac Toe game implementing game logic and state management.",
            image: tictactoeImage,
            live: "https://minda-chokdi-game.netlify.app/"
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
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-purple-600 mb-6">
                        Featured Projects
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neon-pink to-purple-600 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore some of my recent work, featuring clones of popular platforms and interactive games.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                                    {/* Button */}
                                    <div className="mt-auto pt-3">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-neon-pink to-purple-600 text-white font-bold text-sm shadow-lg shadow-neon-pink/20 transition-transform hover:scale-105 active:scale-95"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Projects;
