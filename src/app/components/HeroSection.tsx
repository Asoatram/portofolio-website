'use client'
import PixelBlast from "@/components/PixelBlast";
import TextType from "@/components/TextType";

export default function HeroSection() {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* PixelBlast Background */}
            <div className="absolute inset-0 z-0">
                <PixelBlast
                    variant="circle"
                    pixelSize={6}
                    color="#38bdf8"
                    patternScale={3}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.6}
                    edgeFade={0.25}
                    transparent
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
                <p className="text-gray-400 text-sm font-semibold tracking-wider uppercase">
                    Full-Featured Web Services
                </p>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-space-grotesk mb-6">
                    Hi, I&apos;m Daffa.<br />
                    <span className="block mt-2">
                        I build&nbsp;
                        <TextType
                            text={["Digital Products", "Web Applications", "Creative Solutions"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </span>
                </h1>

                <p className="text-lg text-white/90 max-w-2xl leading-relaxed font-inter mb-8">
                    I&apos;m a web developer focused on creating modern, responsive websites and web applications.
                    I help businesses bring their ideas to life through clean code and intuitive user experiences.
                </p>

                <button className="bg-white hover:cursor-pointer font-space-grotesk text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                    Contact
                </button>
            </div>
        </div>
    );
}
