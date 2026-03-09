import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function MarketingNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#080C14]/80 backdrop-blur-md border-[#1A1F2E]' : 'bg-transparent border-transparent'} px-6 h-16 flex items-center justify-between`}>
            <div className="flex items-center gap-2">
                <span className="text-xl">🧠</span>
                <span className="font-semibold text-[#F0F6FC] tracking-tight">MindBridge</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8B949E]">
                <button onClick={() => scrollToSection('features')} className="hover:text-[#F0F6FC] transition-colors">Features</button>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#F0F6FC] transition-colors">How it Works</button>
                <Link to="/docs" className="hover:text-[#F0F6FC] transition-colors">Documentation</Link>
            </div>

            <div className="flex items-center">
                <Link
                    to="/login"
                    className="text-sm font-medium text-[#F0F6FC] bg-[#0D1117] border border-[#0D9488]/40 hover:border-[#0D9488] px-4 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(13,148,136,0.15)] hover:shadow-[0_0_20px_rgba(13,148,136,0.3)]"
                >
                    Try for free &rarr;
                </Link>
            </div>
        </nav>
    );
}
