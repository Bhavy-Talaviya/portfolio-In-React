import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import NetworkBackground from './NetworkBackground';
import adaniImage from '../assets/Certifications/Adani University.png';
import annaImage from '../assets/Certifications/Anna University.png';
import sureshImage from '../assets/Certifications/Suresh Gyan Vihar University.png';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = React.useState(null);

    const certificates = [
        {
            title: "Adani University",
            date: "26-01-2026",
            description: "This is a Participating in a hackathon(Adani University)",
            image: adaniImage,
            link: "#"
        },
        {
            title: "Anna University",
            date: "30-01-2026",
            description: "This is a Participating in a hackathon(Anna University)",
            image: annaImage,
            link: "#"
        },
        {
            title: "Suresh Gyan Vihar University",
            date: "04-02-2026",
            description: "This is a Participating in a hackathon(Suresh Gyan Vihar University)",
            image: sureshImage,
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

                                {/* Image/Gradient */}
                                <div className="w-full h-64 overflow-hidden relative group cursor-pointer">
                                    {typeof cert.image === 'string' && cert.image.startsWith('from-') ? (
                                        <div className={`absolute inset-0 bg-gradient-to-br ${cert.image} transition-transform duration-700 group-hover:scale-110`} />
                                    ) : (
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-contain bg-white/5 transition-transform duration-700 group-hover:scale-110"
                                        />
                                    )}


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
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative max-w-5xl w-full bg-[#1e293b] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 p-2 bg-black/50 rounded-full transition-colors"
                                onClick={() => setSelectedCert(null)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="bg-black/80 p-6 flex items-center justify-center min-h-[50vh]">
                                {typeof selectedCert.image === 'string' && selectedCert.image.startsWith('from-') ? (
                                    <div className={`w-full h-64 md:h-[60vh] rounded-lg bg-gradient-to-br ${selectedCert.image}`} />
                                ) : (
                                    <img
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                                    />
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
