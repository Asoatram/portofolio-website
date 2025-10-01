"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactMe() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        // Build the mailto link
        const mailtoLink = `mailto:muhamaddaffaazfarabbani@mail.ugm.ac.id?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
            name
        )}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(
            email
        )}%0A%0A${encodeURIComponent(message)}`;

        // Open in user's email client
        window.location.href = mailtoLink;
    };

    return (
        <section className="bg-black flex items-center justify-center min-h-[60vh]">
            <div className="container px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-blue-400 text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Contact Me
                </motion.h2>
                <div className="max-w-lg mx-auto bg-gray-900/60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-800">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-2 bg-gray-800/70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                                placeholder="Your message here..."
                                required
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:cursor-pointer transition-colors duration-[250ms]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
}
