import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ALL_DOC_LINKS } from "../../../docsData";

export function DocsRightSidebar({ headings }) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        // Intersection observer for highlighting the active section
        if (headings.length === 0) return;

        const elements = headings.map(h => document.getElementById(h.id)).filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-80px 0px -60% 0px", threshold: 1.0 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <div className="hidden xl:block w-[220px] shrink-0 pl-8 pt-10 pb-20 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
            <h5 className="text-[12px] font-semibold text-slate-100 uppercase tracking-widest mb-4">On this page</h5>
            <ul className="space-y-2.5 text-[13px]">
                {headings.map((h, i) => {
                    const isActive = activeId === h.id || (!activeId && i === 0);
                    return (
                        <li key={h.id} className={h.level === 3 ? "pl-3" : ""}>
                            <a
                                href={`#${h.id}`}
                                className={`block transition-colors leading-snug border-l-2 py-0.5 pl-3 -ml-3
                  ${isActive
                                        ? "text-teal-400 font-medium border-teal-500"
                                        : "text-slate-400 hover:text-slate-200 border-transparent hover:border-slate-600"
                                    }`}
                            >
                                {h.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
