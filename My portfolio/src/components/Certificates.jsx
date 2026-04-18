import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import NetworkBackground from './NetworkBackground';
import adaniImage from '../assets/Certifications/Adani University.png';
import annaImage from '../assets/Certifications/Anna University.png';
import sureshImage from '../assets/Certifications/Suresh Gyan Vihar University.png';
import iiitSuratImage from '../assets/Certifications/IIIT Surat.png';
import iitKgpImage from '../assets/Certifications/IIT Kharagpur.png';
import jaipurCybrathonImage from '../assets/Certifications/Jaipur Cybrathon 2k25.png';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = React.useState(null);

    const certificates = [
        {
            title: "Odoo × Adani University",
            date: "26-01-2026",
            description: "Participated in the Odoo × Adani University hackathon.",
            image: adaniImage,
            link: "#"
        },
        {
            title: "Anna University",
            date: "30-01-2026",
            description: "Participated in a hackathon at Anna University.",
            image: annaImage,
            link: "#"
        },
        {
            title: "Suresh Gyan Vihar University",
            date: "04-02-2026",
            description: "Participated in a hackathon at Suresh Gyan Vihar University.",
            image: sureshImage,
            link: "#"
        },
        {
            title: "IIIT Surat",
            date: "10-02-2026",
            description: "Participated in a hackathon at IIIT Surat.",
            image: iiitSuratImage,
            link: "#"
        },
        {
            title: "IIT Kharagpur",
            date: "15-02-2026",
            description: "Participated in a prestigious hackathon at IIT Kharagpur.",
            image: iitKgpImage,
            link: "#"
        },
        {
            title: "Jaipur Cybrathon 2K25",
            date: "20-02-2025",
            description: "Participated in the Jaipur Cybrathon 2K25 hackathon event.",
            image: jaipurCybrathonImage,
            link: "#"
        }

    ];

    return (
        <section id="certificates" className="py-20 pb-10 bg-[#0f172a] text-white relative overflow-hidden">
            <NetworkBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-purple-600 mb-6">
                        Certifications
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neon-pink to-purple-600 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Recognitions and qualifications earned throughout my journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-neon-pink/20 h-auto">

                                {/* Image Container */}
                                <div className="w-full h-56 overflow-hidden relative cursor-pointer">
                                    {typeof cert.image === 'string' && cert.image.startsWith('from-') ? (
                                        <div className={`absolute inset-0 bg-gradient-to-br ${cert.image} transition-transform duration-700 group-hover:scale-110`} />
                                    ) : (
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-contain bg-slate-900/50 transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                                            View Details
                                        </span>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-pink transition-colors line-clamp-1">
                                        {cert.title}
                                    </h3>
                                    <div className="flex items-center text-gray-400 text-sm mb-4">
                                        <FaAward className="mr-2 text-purple-500" />
                                        <span>{cert.date}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative max-w-4xl w-full bg-[#1e293b] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-gray-400 hover:text-white z-20 p-2 bg-black/50 rounded-full transition-colors"
                                onClick={() => setSelectedCert(null)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Left: Image */}
                            <div className="md:w-3/5 bg-black/40 flex items-center justify-center p-4 overflow-hidden">
                                {typeof selectedCert.image === 'string' && selectedCert.image.startsWith('from-') ? (
                                    <div className={`w-full h-64 md:h-full rounded-lg bg-gradient-to-br ${selectedCert.image}`} />
                                ) : (
                                    <img
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="max-h-[50vh] md:max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
                                    />
                                )}
                            </div>

                            {/* Right: Info */}
                            <div className="md:w-2/5 p-8 flex flex-col justify-center bg-gradient-to-b from-[#1e293b] to-[#0f172a] overflow-y-auto">
                                <motion.h3
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-2xl md:text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-purple-600"
                                >
                                    {selectedCert.title}
                                </motion.h3>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-center text-gray-300 mb-6 gap-2"
                                >
                                    <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 flex items-center gap-2">
                                        <FaAward className="text-neon-pink" />
                                        <span className="text-sm">{selectedCert.date}</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                        <div className="h-1 w-6 bg-neon-pink rounded-full" />
                                        About Certification
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        {selectedCert.description}
                                    </p>
                                </motion.div>

                                {selectedCert.link !== "#" && (
                                    <motion.a
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        href={selectedCert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-pink to-purple-600 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-neon-pink/30 hover:scale-105 transition-all w-fit"
                                    >
                                        <FaExternalLinkAlt size={14} /> Verify Credential
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
