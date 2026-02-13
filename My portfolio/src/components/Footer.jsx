import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-8 text-center text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">

                {/* Social Icons */}
                <div className="flex gap-6 text-xl">
                    <a href="https://github.com/Bhavy-Talaviya" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink transition-colors duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/bhavy-talaviya-9961673a1/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink transition-colors duration-300">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/BhavyTalaviya04" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink transition-colors duration-300">
                        <FaTwitter />
                    </a>
                    {/* Add more social links here if needed */}
                </div>

                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Bhavy Talaviya. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
