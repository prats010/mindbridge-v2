import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import { DOCS_NAV } from "../../../docsData";

export function DocsSidebar({ mobileOpen, setMobileOpen }) {
    const { pathname } = useLocation();

    return (
        <>
            {/* Mobile Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileOpen(false)}
            />

            <aside
                className={`fixed top-0 left-0 bottom-0 w-[260px] bg-[#0F172A] border-r border-[#1F2937] z-50 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
            >
                {/* Logo Area */}
                <div className="h-14 flex items-center px-6 shrink-0 border-b border-transparent">
                    <Link to="/docs/what-is-mindbridge" className="flex items-center gap-2 font-semibold text-white tracking-tight hover:opacity-80 transition-opacity">
                        <span className="text-xl">🧠</span>
                        MindBridge Docs
                    </Link>
                </div>

                {/* Scrollable Nav Area */}
                <div className="flex-1 overflow-y-auto pt-6 pb-20 px-4 scrollbar-hide hide-scrollbar">
                    {DOCS_NAV.map((section, idx) => (
                        <div key={idx} className="mb-8">
                            <h4 className="text-[11px] font-bold text-slate-500 tracking-[0.15em] uppercase mb-3 px-2 flex items-center justify-between group cursor-pointer hover:text-slate-400 transition-colors">
                                {section.title}
                                <ChevronRight className="w-3 h-3 rotate-90" />
                            </h4>
                            <ul className="space-y-0.5">
                                {section.links.map((link) => {
                                    const active = pathname === link.href || pathname === link.href + "/";
                                    return (
                                        <li key={link.href}>
                                            <Link
                                                to={link.href}
                                                onClick={() => setMobileOpen(false)}
                                                className={`block px-3 py-1.5 text-[14px] rounded-lg transition-colors relative group
                          ${active
                                                        ? "text-teal-400 font-medium bg-teal-500/10"
                                                        : "text-slate-400 hover:text-slate-200 hover:bg-[#1E293B]"
                                                    }`}
                                            >
                                                {/* Active Left Border */}
                                                {active && (
                                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-teal-500 rounded-r-full" />
                                                )}
                                                {link.title}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer App Link */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0F172A] via-[#0F172A] to-transparent shrink-0">
                    <a
                        href="http://localhost:5173"
                        className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#1E293B] border border-[#1F2937] text-[13px] font-medium text-slate-300 hover:text-white hover:border-teal-500/30 transition-all shadow-sm group"
                    >
                        Open MindBridge App
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors group-hover:translate-x-0.5 transform duration-300" />
                    </a>
                </div>
            </aside>
        </>
    );
}
