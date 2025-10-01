'use client';

import Image from 'next/image';

const THEME = {
    primaryGlow: '#1E90FF',
    secondaryGlow: '#20B2AA',
    gradient: 'from-teal-400 via-blue-400 to-indigo-500',
};

export default function AboutMe() {
    return (
        <section
            id="about"
            className="relative text-white py-20 overflow-hidden bg-black pb-20" // Adjusted for buffer
            aria-labelledby="about-heading"
        >


            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
                {/* Left Content - Text */}
                <div className="space-y-6">
                    <h2
                        id="about-me-heading"
                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk
                    bg-blue-400  bg-clip-text text-transparent`}
                    >
                        About Me
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-inter">
                        Hi, I&apos;m <span className="text-blue-400 font-semibold">Daffa</span>,
                        a passionate web developer who loves building modern, responsive, and user-friendly web applications.
                        My focus is on crafting clean, maintainable code and delivering intuitive user experiences
                        that bring real value to businesses and users.
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-inter">
                        I specialize in working with technologies like
                        <span className="text-blue-400"> React</span>,
                        <span className="text-cyan-400"> Next.js</span>, and
                        <span className="text-sky-400"> TypeScript</span>.
                        I&apos;m always excited to explore new tools and frameworks
                        to push my skills further.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a
                            href="#projects"
                            className={`px-6 py-3 bg-blue-500 hover:bg-blue-600
                         hover:scale-105 transition rounded-lg font-semibold shadow-lg`}
                            aria-label="View Daffa's projects"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
                {/* Right Content - Avatar */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[16rem] sm:max-w-[20rem] aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <Image
                            src="/me.png"
                            alt="Portrait of Daffa, a web developer specializing in modern web technologies"
                            fill
                            sizes="(max-width: 640px) 100vw, 320px"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-cyan-400/20 to-sky-400/20 mix-blend-overlay" />
                    </div>
                </div>
            </div>

        </section>
    );
}