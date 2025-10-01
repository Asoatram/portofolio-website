"use client";
import StaggeredMenu from './StaggeredMenu';

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' },
];

const socialItems = [
    { label: 'GitHub', link: 'https://github.com/Asoatram' },
    { label: 'LinkedIn', link: 'www.linkedin.com/in/muhamad-daffa-azfa-rabbani-07274424b'}
];

export default function Header() {
    return (
        <header className="fixed top-0 right-0 z-50 bg-transparent">
            <div className="h-screen w-64 flex justify-end">
                <StaggeredMenu
                    position="right"
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials={true}
                    displayItemNumbering={true}
                    menuButtonColor="#ffffff"
                    openMenuButtonColor="#000000"
                    changeMenuColorOnOpen={true}
                    colors={['#1E90FF', '#1E90FF']}
                    logoUrl="/path-to-your-logo.svg"
                    accentColor="#1E90FF"
                    onMenuOpen={() => console.log('Menu opened')}
                    onMenuClose={() => console.log('Menu closed')}
                />
            </div>
        </header>
    );
}