"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltedCard from '@/components/TiltedCard';

const projects = [
    {
        imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
        altText: "Kendrick Lamar - GNX Album Cover",
        captionText: "Kendrick Lamar - GNX",
        containerHeight: "400px",
        containerWidth: "300px",
        imageHeight: "300px",
        imageWidth: "300px",
        rotateAmplitude: 12,
        scaleOnHover: 1.2,
        showMobileWarning: false,
        showTooltip: true,
        displayOverlayContent: true,
        overlayContent: <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>,
    },
    {
        imageSrc: "https://i.scdn.co/image/ab67616d0000b273f3a4e7b5d9e8f2c1a7b3d4e5",
        altText: "Drake - Certified Lover Boy Album Cover",
        captionText: "Drake - Certified Lover Boy",
        containerHeight: "300px",
        containerWidth: "300px",
        imageHeight: "300px",
        imageWidth: "300px",
        rotateAmplitude: 12,
        scaleOnHover: 1.2,
        showMobileWarning: false,
        showTooltip: true,
        displayOverlayContent: true,
        overlayContent: <p className="tilted-card-demo-text" style={{ color: "#00FF7F" }}>Drake - Certified Lover Boy</p>,
    },
    {
        imageSrc: "https://i.scdn.co/image/ab67616d0000b273e6f2a3d4b7c9e1f5a8d2b3c4",
        altText: "Taylor Swift - Evermore Album Cover",
        captionText: "Taylor Swift - Evermore",
        containerHeight: "300px",
        containerWidth: "300px",
        imageHeight: "300px",
        imageWidth: "300px",
        rotateAmplitude: 12,
        scaleOnHover: 1.2,
        showMobileWarning: false,
        showTooltip: true,
        displayOverlayContent: true,
        overlayContent: <p className="tilted-card-demo-text" style={{ color: "#00FF7F" }}>Taylor Swift - Evermore</p>,
    },
    {
        imageSrc: "https://i.scdn.co/image/ab67616d0000b273b1c2d3e4f5a6b7c8d9e0f1a2",
        altText: "Beyoncé - Renaissance Album Cover",
        captionText: "Beyoncé - Renaissance",
        containerHeight: "300px",
        containerWidth: "300px",
        imageHeight: "300px",
        imageWidth: "300px",
        rotateAmplitude: 12,
        scaleOnHover: 1.2,
        showMobileWarning: false,
        showTooltip: true,
        displayOverlayContent: true,
        overlayContent: <p className="tilted-card-demo-text" style={{ color: "#00FF7F" }}>Beyoncé - Renaissance</p>,
    },
    {
        imageSrc: "https://i.scdn.co/image/ab67616d0000b273c3d4e5f6a7b8c9d0e1f2a3b4",
        altText: "The Weeknd - Dawn FM Album Cover",
        captionText: "The Weeknd - Dawn FM",
        containerHeight: "300px",
        containerWidth: "300px",
        imageHeight: "300px",
        imageWidth: "300px",
        rotateAmplitude: 12,
        scaleOnHover: 1.2,
        showMobileWarning: false,
        showTooltip: true,
        displayOverlayContent: true,
        overlayContent: <p className="tilted-card-demo-text" style={{ color: "#00FF7F" }}>The Weeknd - Dawn FM</p>,
    },
];

// Animation variants for the carousel items
const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5, ease: "easeIn" } },
};

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalProjects = projects.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalProjects - itemsPerPage + 1));
        }, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, [totalProjects]);

    const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <section className="pt-20 bg-gradient-to-b from-black via-blue-950 to-black min-h-[80%]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-blue-400 mb-12 text-center`}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    My Projects
                </motion.h2>
                <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="flex justify-center gap-6"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {visibleProjects.map((project, index) => (
                                <TiltedCard
                                    key={index}
                                    imageSrc={project.imageSrc}
                                    altText={project.altText}
                                    captionText={project.captionText}
                                    containerHeight={project.containerHeight}
                                    containerWidth={project.containerWidth}
                                    imageHeight={project.imageHeight}
                                    imageWidth={project.imageWidth}
                                    rotateAmplitude={project.rotateAmplitude}
                                    scaleOnHover={project.scaleOnHover}
                                    showMobileWarning={project.showMobileWarning}
                                    showTooltip={project.showTooltip}
                                    displayOverlayContent={project.displayOverlayContent}
                                    overlayContent={project.overlayContent}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;