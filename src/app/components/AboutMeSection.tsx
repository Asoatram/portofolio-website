'use client'

export default function AboutMe() {
    return (
        <section id="about" className="relative bg-black text-white py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content - Text */}
                <div className="space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk">
                        About Me
                    </h2>

                    <p className="text-lg text-gray-300 leading-relaxed font-inter">
                        Hi, I&apos;m <span className="text-pink-400 font-semibold">Daffa</span>,
                        a passionate web developer who loves building modern, responsive, and user-friendly web applications.
                        My focus is on crafting clean, maintainable code and delivering intuitive user experiences
                        that bring real value to businesses and users.
                    </p>

                    <p className="text-lg text-gray-300 leading-relaxed font-inter">
                        I specialize in working with technologies like
                        <span className="text-blue-400"> React</span>,
                        <span className="text-green-400"> Node.js</span>, and
                        <span className="text-purple-400"> Next.js</span>,
                        and I&apos;m always excited to learn new tools and frameworks to
                        push my skills further.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <a href="#projects" className="px-6 py-3 bg-pink-500 hover:bg-pink-600 transition rounded-lg font-semibold shadow-md">
                            View My Work
                        </a>
                        <a href="#contact" className="px-6 py-3 border border-gray-600 hover:border-pink-400 hover:text-pink-400 transition rounded-lg font-semibold">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right Content - Image / Avatar */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border border-white/10">
                        <img
                            src="/me.png"
                            alt="Portrait of Daffa, web developer"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Centered, less-wide Glassy Divider */}
        </section>
    );
}
