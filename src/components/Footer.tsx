const Footer = () => {
    return (
        <footer className="relative z-[10] p-10 border-t-2 border-gray-400/10 bg-gradient-to-r from-black via-[#111111] to-black text-gray-400">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <p className="text-sm">
                    © {new Date().getFullYear()} Muhamad Daffa Azfa Rabbani. All rights reserved.
                </p>
                <div className="mt-6 flex justify-start gap-8">
                    <a
                        href="https://github.com/Asoatram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="www.linkedin.com/in/muhamad-daffa-azfa-rabbani-07274424b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:you@example.com"
                        className="hover:text-white transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
