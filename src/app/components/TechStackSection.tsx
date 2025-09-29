'use client'

import LogoLoop from "@/components/LogoLoop";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiPython,
    SiFastapi,
    SiSpring,
    SiDotnet
} from 'react-icons/si';
import { SiAndroid } from 'react-icons/si'; // using Android icon for Jetpack Compose

const techLogos = [
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiAndroid />, title: "Jetpack Compose", href: "https://developer.android.com/jetpack/compose" },
    { node: <SiSpring />, title: "Spring", href: "https://spring.io" },
    { node: <SiDotnet />, title: ".NET", href: "https://dotnet.microsoft.com" },
];

export default function TechStack() {
    return (
        <section className="relative bg-black text-white py-20">
            <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
                <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk">
                    Tech Stack
                </h2>
                <p className="text-gray-300 text-lg">
                    Tools and technologies I work with to build modern applications
                </p>

                <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={120}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#000000"
                        ariaLabel="Technologies I use"
                    />
                </div>
            </div>
        </section>
    );
}
