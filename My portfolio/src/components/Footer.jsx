import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFigma } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-8 text-center text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">

                {/* Social Icons */}
                <div className="flex gap-6 text-xl" role="list" aria-label="Social media links">
                    <a href="https://github.com/Bhavy-Talaviya" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hover:text-neon-pink transition-colors duration-300">
                        <FaGithub aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/bhavy-talaviya-9961673a1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hover:text-neon-pink transition-colors duration-300">
                        <FaLinkedin aria-hidden="true" />
                    </a>
                    <a href="https://www.youtube.com/@BhavyTalaviya04" target="_blank" rel="noopener noreferrer" aria-label="YouTube channel" className="hover:text-neon-pink transition-colors duration-300">
                        <FaYoutube aria-hidden="true" />
                    </a>
                    <a href="https://leetcode.com/u/n3WlMDVyNf/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile" className="hover:text-neon-pink transition-colors duration-300">
                        <SiLeetcode aria-hidden="true" />
                    </a>
                    <a href="https://www.figma.com/design/CyiyxcK05S2dwKRAHJ8EW2/Untitled?node-id=68-2&t=5Y96G1nHrXL8W8i3-1" target="_blank" rel="noopener noreferrer" aria-label="Figma designs" className="hover:text-neon-pink transition-colors duration-300">
                        <FaFigma aria-hidden="true" />
                    </a>
                    <a href="https://x.com/BhavyTalaviya04" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X profile" className="hover:text-neon-pink transition-colors duration-300">
                        <FaTwitter aria-hidden="true" />
                    </a>
                </div>

                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Bhavy Talaviya. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
