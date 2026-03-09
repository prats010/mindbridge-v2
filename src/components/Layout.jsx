// src/components/Layout.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

export default function Layout({ user, children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--bg-dark)] flex text-[var(--text-main)] font-sans antialiased selection:bg-teal-500/30 selection:text-teal-100">
            {user && <Sidebar user={user} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />}

            <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${user ? "md:pl-[260px]" : ""}`}>
                {/* Mobile Header */}
                {user && (
                    <div className="md:hidden h-14 border-b border-[var(--border)] flex items-center px-4 bg-[var(--bg-dark)]/80 backdrop-blur-md sticky top-0 z-30">
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="p-2 -ml-2 text-[var(--text-muted)] hover:text-white transition-colors"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <span className="ml-2 font-medium text-slate-100 flex items-center gap-2">
                            <span className="text-lg">🧠</span>
                            MindBridge
                        </span>
                    </div>
                )}

                {/* Main Content Area */}
                <main className={`flex-1 w-full flex flex-col ${user ? "max-w-[1000px] mx-auto w-full px-4 sm:px-8 py-6 md:py-12" : "h-screen"}`}>
                    {children}
                </main>
            </div>
        </div>
    );
}
