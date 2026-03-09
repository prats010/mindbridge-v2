// src/components/Sidebar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, ClipboardList, BarChart2, LogOut, Shield, X, HelpCircle, BookOpen, Info } from "lucide-react";
import { logOut, getTrustedContact } from "../firebase";
import TrustedContactModal from "./TrustedContactModal";

export default function Sidebar({ user, mobileOpen, setMobileOpen }) {
    const { pathname } = useLocation();
    const [showEdit, setShowEdit] = useState(false);
    const [contactData, setContactData] = useState(null);

    const links = [
        { to: "/chat", label: "MindBridge AI", icon: <MessageCircle className="w-[18px] h-[18px]" /> },
        { to: "/dashboard", label: "Dashboard", icon: <BarChart2 className="w-[18px] h-[18px]" /> },
        { to: "/assessment", label: "Assessments", icon: <ClipboardList className="w-[18px] h-[18px]" /> },
        { to: "/docs/depression", label: "Mental Health Guides", icon: <BookOpen className="w-[18px] h-[18px]" /> },
        { to: "/docs/mission", label: "About Us", icon: <Info className="w-[18px] h-[18px]" /> },
    ];

    const openEdit = async () => {
        try {
            const tc = await getTrustedContact(user.uid);
            setContactData(tc);
        } catch {
            setContactData(null);
        }
        setShowEdit(true);
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 md:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileOpen(false)}
            />

            <aside className={`fixed top-0 left-0 h-full w-[260px] bg-[var(--bg-sidebar)] border-r border-[var(--border)] z-50 transform transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] md:translate-x-0 flex flex-col ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                {/* Header / Logo */}
                <div className="h-16 flex items-center justify-between px-5 py-4 shrink-0">
                    <Link to="/chat" className="flex items-center gap-3 font-semibold text-base hover:opacity-80 transition-opacity">
                        <span className="text-xl leading-none">🧠</span>
                        <span className="text-[var(--text-main)] font-medium tracking-tight">MindBridge</span>
                    </Link>
                    <button className="md:hidden text-[var(--text-muted)] hover:text-white p-1" onClick={() => setMobileOpen(false)}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
                    {links.map((l) => {
                        const active = pathname === l.to;
                        return (
                            <Link
                                key={l.to}
                                to={l.to}
                                onClick={() => setMobileOpen(false)}
                                className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 relative ${active
                                    ? "bg-[rgba(255,255,255,0.06)] text-white font-medium"
                                    : "text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-slate-200"
                                    }`}
                            >
                                {/* Active Indicator Line */}
                                {active && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-teal-500 rounded-r-full" />
                                )}

                                <span className={`transition-colors duration-200 ${active ? "text-teal-400" : "text-slate-500 group-hover:text-slate-300"}`}>
                                    {l.icon}
                                </span>
                                <span>{l.label}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Footer / User Actions */}
                <div className="shrink-0 p-4 pt-3 pb-5 mt-auto">
                    {/* Action Links */}
                    <div className="px-2 mb-4 space-y-0.5 border-t border-[var(--border)] pt-4">
                        <button
                            onClick={openEdit}
                            className="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-white transition-colors text-sm font-medium"
                        >
                            <Shield className="w-4 h-4 text-slate-500" />
                            Trusted Contact
                        </button>
                        <Link
                            to="/docs/what-is-mindbridge"
                            onClick={() => setMobileOpen(false)}
                            className="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-white transition-colors text-sm font-medium"
                        >
                            <HelpCircle className="w-4 h-4 text-slate-500" />
                            Help & Support
                        </Link>
                    </div>

                    {/* User Profile Block */}
                    <div className="flex items-center gap-3 px-2 py-2 rounded-xl group hover:bg-[var(--bg-hover)] transition-colors cursor-pointer border border-transparent hover:border-[var(--border)]">
                        {user.photoURL ? (
                            <img src={user.photoURL} alt="" className="w-9 h-9 rounded-full shrink-0 object-cover" />
                        ) : (
                            <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 text-sm font-medium shrink-0">
                                {user.displayName?.charAt(0) || user.email?.charAt(0) || "?"}
                            </div>
                        )}
                        <div className="flex flex-col overflow-hidden flex-1">
                            <span className="text-sm font-medium text-[var(--text-main)] truncate">
                                {user.displayName || "User"}
                            </span>
                            <span className="text-xs text-[var(--text-muted)] truncate">
                                {user.email || ""}
                            </span>
                        </div>
                        <button
                            onClick={(e) => { e.stopPropagation(); logOut(); }}
                            className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors shrink-0 opacity-0 group-hover:opacity-100"
                            title="Logout"
                        >
                            <LogOut className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Edit trusted contact modal */}
            {showEdit && (
                <TrustedContactModal
                    userId={user.uid}
                    editMode={true}
                    existingData={contactData}
                    onSaved={() => setShowEdit(false)}
                    onClose={() => setShowEdit(false)}
                />
            )}
        </>
    );
}
