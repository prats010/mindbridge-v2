// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, ClipboardList, BarChart2, LogOut, Shield } from "lucide-react";
import { logOut, getTrustedContact } from "../firebase";
import TrustedContactModal from "./TrustedContactModal";

export default function Navbar({ user }) {
  const { pathname } = useLocation();
  const [showEdit, setShowEdit] = useState(false);
  const [contactData, setContactData] = useState(null);

  const links = [
    { to: "/chat", label: "Chat", icon: <MessageCircle className="w-4 h-4" /> },
    { to: "/assessment", label: "Assessment", icon: <ClipboardList className="w-4 h-4" /> },
    { to: "/dashboard", label: "Dashboard", icon: <BarChart2 className="w-4 h-4" /> },
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
      <nav className="fixed top-0 left-0 right-0 z-50 h-16"
        style={{ background: "rgba(10,15,30,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid #1E293B" }}>
        <div className="max-w-4xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/chat" className="flex items-center gap-2 font-bold text-lg group">
            <span className="animate-float inline-block">🧠</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">MindBridge</span>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${active
                      ? "text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {l.icon}
                  <span className="hidden sm:inline">{l.label}</span>
                  {/* Animated underline for active link */}
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-indigo-400 animate-stagger-in" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side: shield + avatar + logout */}
          <div className="flex items-center gap-2">
            {/* Shield — opens trusted contact editor */}
            <button
              onClick={openEdit}
              title="Edit trusted contact"
              className="p-2 rounded-lg text-teal-400 hover:text-teal-300 hover:bg-teal-900/30 transition-all duration-200 group"
            >
              <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Avatar */}
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-teal-600/60 hover:border-teal-400 transition-all"
              />
            )}

            {/* Logout */}
            <button
              onClick={logOut}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

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
