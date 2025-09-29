'use client';

import LogoLoop from '@/components/LogoLoop';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiPython,
    SiFastapi,
    SiSpring,
    SiDotnet,
    SiAndroid,
} from 'react-icons/si';
import Particles from "@/components/Particles";

const techLogos = [
    { node: <SiPython />, title: 'Python', href: 'https://www.python.org' },
    { node: <SiFastapi />, title: 'FastAPI', href: 'https://fastapi.tiangolo.com' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    { node: <SiAndroid />, title: 'Jetpack Compose', href: 'https://developer.android.com/jetpack/compose' },
    { node: <SiSpring />, title: 'Spring', href: 'https://spring.io' },
    { node: <SiDotnet />, title: '.NET', href: 'https://dotnet.microsoft.com' },
];

const THEME = {
    primaryGlow: '#1E90FF',
    secondaryGlow: '#20B2AA',
    gradient: 'from-teal-400 via-blue-400 to-indigo-500',
};

export default function TechStack() {
    return (
        <section
            id="techstack"
            className="relative bg-black text-white overflow-hidden py-20 pt-20" // Adjusted for buffer
            aria-labelledby="techstack-heading"
        >
            {/* Background particles (stars) */}
            <div className="absolute inset-0 z-0">
                <Particles
                    particleColors={['#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-10 relative z-10">
                <h2
                    id="techstack-heading"
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk
                     bg-gradient-to-r ${THEME.gradient} bg-clip-text text-transparent`}
                >
                    Tech Stack
                </h2>
                <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto">
                    Tools and technologies I work with to build modern applications
                </p>
                <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-6 shadow-xl">
                    <LogoLoop
                        logos={techLogos}
                        speed={120}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#"
                        ariaLabel="Technologies I use"
                    />
                </div>
            </div>
        </section>
    );
}