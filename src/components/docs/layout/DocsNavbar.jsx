import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Github, Menu } from "lucide-react";

export function DocsNavbar({ setMobileOpen, openSearch }) {
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 h-14 z-40 transition-all duration-200 flex items-center justify-between px-4 lg:px-8
        ${scrolled
                    ? "bg-[#111827]/80 backdrop-blur-md border-b border-[#1F2937]"
                    : "bg-[#111827] border-b border-transparent"
                }`}
        >
            <div className="flex items-center gap-3 w-1/3">
                <button
                    onClick={() => setMobileOpen(true)}
                    className="lg:hidden p-1.5 -ml-1.5 text-slate-400 hover:text-white rounded-md transition-colors"
                >
                    <Menu className="w-5 h-5" />
                </button>

                {/* Only show logo here on mobile, or on desktop if sidebar is hidden (but sidebar is fixed) */}
                <Link to="/docs/what-is-mindbridge" className="flex items-center gap-2 lg:hidden font-semibold text-white tracking-tight">
                    <span className="text-xl">🧠</span>
                    MindBridge Docs
                </Link>
            </div>

            <div className="hidden lg:flex flex-1 justify-center">
                {/* Center typically empty in GitBook style, unless breadcrumbs go here */}
            </div>

            <div className="flex items-center justify-end gap-2 sm:gap-4 w-1/3">
                <button
                    onClick={openSearch}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white px-2 sm:px-3 py-1.5 rounded-md hover:bg-[#1E293B] transition-colors bg-transparent border border-transparent"
                >
                    <Search className="w-4 h-4" />
                    <span className="hidden sm:inline">Search...</span>
                    <kbd className="hidden md:inline-flex items-center gap-1 font-mono text-[10px] bg-[#1E293B] border border-[#1F2937] px-1.5 py-0.5 rounded text-slate-500 ml-2">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </button>

                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-1.5 text-slate-400 hover:text-white transition-colors hidden sm:block">
                    <Github className="w-4 h-4" />
                </a>

                <a
                    href="http://localhost:5173"
                    className="ml-2 text-xs sm:text-sm font-medium bg-teal-600 hover:bg-teal-500 text-white px-3 sm:px-4 py-1.5 rounded-full transition-colors whitespace-nowrap"
                >
                    Try MindBridge
                </a>
            </div>
        </nav>
    );
}
