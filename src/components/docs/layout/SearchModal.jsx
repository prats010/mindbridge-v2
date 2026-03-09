import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search as SearchIcon, FileText, ChevronRight } from "lucide-react";
import { ALL_DOC_LINKS } from "../../../docsData";

export function SearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            setQuery("");
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }
        const q = query.toLowerCase();
        const matches = ALL_DOC_LINKS.filter(
            (link) => link.title.toLowerCase().includes(q) || link.href.toLowerCase().includes(q)
        );
        setResults(matches);
        setSelectedIndex(0);
    }, [query]);

    if (!isOpen) return null;

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prev) => (prev + 1) % results.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
        } else if (e.key === "Enter" && results[selectedIndex]) {
            e.preventDefault();
            navigate(results[selectedIndex].href);
            onClose();
        } else if (e.key === "Escape") {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#0A0C10]/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Search Box */}
            <div
                className="relative w-full max-w-[600px] bg-[#111827] border border-[#1F2937] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                style={{ animation: "fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
            >
                <div className="flex items-center px-4 border-b border-[#1F2937]">
                    <SearchIcon className="w-5 h-5 text-slate-400" />
                    <input
                        ref={inputRef}
                        type="text"
                        className="flex-1 bg-transparent text-white px-4 py-4 focus:outline-none text-[15px] placeholder-slate-500"
                        placeholder="Search documentation..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <kbd className="hidden sm:inline-flex items-center font-mono text-[10px] bg-[#1E293B] border border-[#1F2937] px-1.5 py-0.5 rounded text-slate-500">
                        ESC
                    </kbd>
                </div>

                {results.length > 0 && (
                    <div className="max-h-[350px] overflow-y-auto py-2 px-2 scroll-smooth">
                        {results.map((r, i) => (
                            <Link
                                key={r.href}
                                to={r.href}
                                onClick={onClose}
                                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${i === selectedIndex ? "bg-teal-500/10 text-teal-400" : "text-slate-300 hover:bg-[#1E293B]"
                                    }`}
                                onMouseEnter={() => setSelectedIndex(i)}
                            >
                                <div className="flex items-center gap-3">
                                    <FileText className={`w-4 h-4 ${i === selectedIndex ? "text-teal-400" : "text-slate-500"}`} />
                                    <span className="font-medium text-sm">{r.title}</span>
                                </div>
                                {i === selectedIndex && <ChevronRight className="w-4 h-4" />}
                            </Link>
                        ))}
                    </div>
                )}

                {query.trim() && results.length === 0 && (
                    <div className="py-12 text-center text-slate-500 text-sm">
                        No results found for "{query}"
                    </div>
                )}

                {!query.trim() && (
                    <div className="py-8 text-center text-slate-500 text-sm">
                        Search for guides, features, and tutorials.
                    </div>
                )}
            </div>
        </div>
    );
}
