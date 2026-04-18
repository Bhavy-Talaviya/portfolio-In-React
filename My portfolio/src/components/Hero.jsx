import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFigma } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-router-dom'
import NetworkBackground from './NetworkBackground'

// Resume hosted on Google Drive
const RESUME_URL = 'https://drive.google.com/file/d/17P-rn20eUxF2kdn2VEkFGiwts-gJ-6EW/view?usp=sharing'

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden relative">
            <NetworkBackground />

            {/* Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-pink/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-neon-green/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left Side: Text & Actions */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left space-y-6"
                >
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                        Hello,
                    </h2>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                        <span className="text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,204,0.5)]">
                            BHAVY TALAVIYA
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-200">
                        I'm a Professional{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 font-extrabold drop-shadow-sm">
                            FullStack Developer
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Passionate about building scalable web applications and crafting intuitive user experiences using modern technologies.
                    </p>

                    <div className="flex justify-center lg:justify-start gap-6 text-2xl text-gray-400">
                        {[
                            { Icon: FaGithub,   href: "https://github.com/Bhavy-Talaviya",                                                                              label: "GitHub profile" },
                            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/bhavy-talaviya-9961673a1/",                                                          label: "LinkedIn profile" },
                            { Icon: FaYoutube,  href: "https://www.youtube.com/@BhavyTalaviya04",                                                                       label: "YouTube channel" },
                            { Icon: SiLeetcode, href: "https://leetcode.com/u/n3WlMDVyNf/",                                                                             label: "LeetCode profile" },
                            { Icon: FaFigma,    href: "https://www.figma.com/design/CyiyxcK05S2dwKRAHJ8EW2/Untitled?node-id=68-2&t=5Y96G1nHrXL8W8i3-1",               label: "Figma designs" },
                            { Icon: FaTwitter,  href: "https://x.com/BhavyTalaviya04",                                                                                  label: "Twitter / X profile" },
                        ].map(({ Icon, href, label }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="hover:text-neon-pink hover:scale-110 transition-all duration-300"
                            >
                                <Icon aria-hidden="true" />
                            </a>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link to="#contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-pink to-purple-600 text-white font-bold shadow-lg shadow-neon-pink/30 hover:shadow-neon-pink/50 transform hover:-translate-y-1 transition-all text-center">
                            Contact Me
                        </Link>
                        <a
                            href={RESUME_URL}
                            target='_blank'
                            rel="noopener noreferrer"
                            aria-label="View Bhavy Talaviya's resume on Google Drive"
                            className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold shadow-lg hover:bg-white/20 hover:scale-105 transition-all text-center cursor-pointer"
                        >
                            View Resume
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Glassmorphism Code Editor */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative rounded-xl overflow-hidden bg-glass-bg backdrop-blur-xl border border-white/10 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">

                        {/* Window Controls */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <div className="ml-auto text-xs text-gray-500 font-mono">Profile.js</div>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
                            <div className="flex">
                                <span className="text-pink-400 mr-2">const</span>
                                <span className="text-yellow-400">developer</span>
                                <span className="text-gray-400 mx-2">=</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div className="pl-6">
                                <div className="group hover:bg-white/5 transition-colors">
                                    <span className="text-purple-400">name:</span>
                                    <span className="text-green-400 ml-2">'Bhavy Talaviya'</span>,
                                </div>
                                <div className="group hover:bg-white/5 transition-colors">
                                    <span className="text-purple-400">role:</span>
                                    <span className="text-green-400 ml-2">'FullStack Developer'</span>,
                                </div>
                                <div className="group hover:bg-white/5 transition-colors">
                                    <span className="text-purple-400">skills:</span>
                                    <span className="text-gray-400 ml-2">['React', 'Node', 'Next.js', 'Docker', 'AWS']</span>,
                                </div>
                                <div className="group hover:bg-white/5 transition-colors">
                                    <span className="text-purple-400">hardWorker:</span>
                                    <span className="text-orange-400 ml-2">true</span>,
                                </div>
                                <div className="group hover:bg-white/5 transition-colors">
                                    <span className="text-purple-400">quickLearner:</span>
                                    <span className="text-orange-400 ml-2">true</span>,
                                </div>
                                <div className="group hover:bg-white/5 transition-colors">
                                    <span className="text-purple-400">problemSolver:</span>
                                    <span className="text-orange-400 ml-2">true</span>,
                                </div>
                                <div className="group hover:bg-white/5 transition-colors">
                                    <span className="text-purple-400">hireable:</span>
                                    <span className="text-blue-400 ml-2">function</span>
                                    <span className="text-gray-400">() {'{'}</span>
                                </div>
                                <div className="pl-6 text-gray-400 group hover:bg-white/5 transition-colors">
                                    <span className="text-pink-400">return</span>
                                    <span className="text-gray-400 ml-2">(</span>
                                </div>
                                <div className="pl-12 text-gray-400 group hover:bg-white/5 transition-colors">
                                    <span className="text-cyan-400">this.</span>
                                    <span className="text-white">hardWorker</span>
                                    <span className="text-pink-400 ml-2">&&</span>
                                </div>
                                <div className="pl-12 text-gray-400 group hover:bg-white/5 transition-colors">
                                    <span className="text-cyan-400">this.</span>
                                    <span className="text-white">problemSolver</span>
                                    <span className="text-pink-400 ml-2">&&</span>
                                </div>
                                <div className="pl-12 text-gray-400 group hover:bg-white/5 transition-colors">
                                    <span className="text-cyan-400">this.</span>
                                    <span className="text-white">skills.length</span>
                                    <span className="text-pink-400 ml-2">&gt;=</span>
                                    <span className="text-orange-400 ml-2">5</span>
                                </div>
                                <div className="pl-6 text-gray-400 group hover:bg-white/5 transition-colors">
                                    <span className="text-gray-400">);</span>
                                </div>
                                <div className="text-gray-400">{'}'}</div>
                            </div>
                            <div className="text-gray-400">{'}'};</div>
                        </div>

                        {/* Glowing Corner */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon-green/20 rounded-full blur-2xl" />
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Hero
