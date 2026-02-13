import React from 'react';
import { motion } from 'framer-motion';
import NetworkBackground from './NetworkBackground';

const Skills = () => {
    // Map skills to their icons
    const skillsData = [
        { name: 'HTML', icon: 'html' },
        { name: 'CSS', icon: 'css' },
        { name: 'JavaScript', icon: 'js' },
        { name: 'React', icon: 'react' },
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Express', icon: 'express' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'Tailwind', icon: 'tailwind' },
        { name: 'Git', icon: 'git' },
        { name: 'Redux', icon: 'redux' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'TypeScript', icon: 'ts' },
        { name: 'SQL', icon: 'mysql' },
        { name: 'Python', icon: 'py' },
        { name: 'Docker', icon: 'docker' },
        { name: 'AWS', icon: 'aws' },
        { name: 'GraphQL', icon: 'graphql' },
        { name: 'Postman', icon: 'postman' },
        { name: 'Java', icon: 'java' },
        { name: 'Flutter', icon: 'flutter' },
        { name: 'Firebase', icon: 'firebase' },
        { name: 'Kubernetes', icon: 'kubernetes' }
    ];



    return (
        <section id="skills" className="min-h-screen w-full bg-[#0f172a] text-white relative overflow-hidden flex flex-col items-center justify-center">
            <NetworkBackground />

            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-[100px] pointer-events-none z-10" />

            <div className="relative z-20 w-full flex flex-col items-center">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-purple-600 mb-4"
                >
                    MY SKILLS
                </motion.h2>
                <div className="h-1 w-24 bg-gradient-to-r from-neon-pink to-purple-600 mx-auto rounded-full mb-12" />

                {/* Skills Grid */}
                <div className="w-full max-w-7xl px-4 md:px-8 py-10">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
                        {skillsData.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="flex flex-col items-center justify-center group cursor-pointer"
                            >
                                <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110">
                                    <div className="absolute inset-0 bg-white/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <img
                                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                        alt={skill.name}
                                        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_#D946EF]"
                                    />
                                </div>
                                <span className="mt-3 text-gray-400 text-sm font-medium group-hover:text-neon-pink transition-colors">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Reverse Marquee (Optional 2nd row for variety?) No, let's stick to one clean one first or maybe two rows. User said "horizantal and scrool it". One is safer. */}
            </div>
        </section>
    );
};

export default Skills;
