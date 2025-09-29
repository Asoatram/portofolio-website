"use client"
import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps{
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoLink: string;
    repoLink: string;
}

const projects: CardProps[] = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce web app with user authentication, product filtering, and secure payments.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://via.placeholder.com/400x200?text=Project+1",
        demoLink: "https://example.com/demo1",
        repoLink: "https://github.com/example/repo1",
    },
    {
        title: "Task Management App",
        description: "A productivity app for managing tasks with real-time collaboration and notifications.",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        image: "https://via.placeholder.com/400x200?text=Project+2",
        demoLink: "https://example.com/demo2",
        repoLink: "https://github.com/example/repo2",
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio showcasing projects with a modern, responsive design.",
        technologies: ["React", "Tailwind CSS", "Vite"],
        image: "https://via.placeholder.com/400x200?text=Project+3",
        demoLink: "https://example.com/demo3",
        repoLink: "https://github.com/example/repo3",
    },
];

// Animation variants for the project card
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", transition: { duration: 0.3 } },
};

// Animation variants for the container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger each card's animation
        },
    },
};

const ProjectCard = ({ title, description, technologies, image, demoLink, repoLink }:CardProps) => {
    return (
        <motion.div
            className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-white/20"
            style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            }}
            variants={cardVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
        >
            <motion.img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            />
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-200 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <motion.span
                            key={index}
                            className="px-3 py-1 bg-white/10 dark:bg-gray-700/10 text-white rounded-full text-sm"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <motion.a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600/80 text-white rounded hover:bg-blue-700/80"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Live Demo
                    </motion.a>
                    <motion.a
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-600/50 text-white rounded hover:bg-gray-700/50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        View Code
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center text-white mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My Projects
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            image={project.image}
                            demoLink={project.demoLink}
                            repoLink={project.repoLink}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;