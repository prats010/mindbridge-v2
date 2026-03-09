// src/components/TrustedContactModal.jsx
import { useState, useEffect } from "react";
import { Shield, X, Phone, User, Heart, Loader2 } from "lucide-react";
import { saveTrustedContact } from "../firebase";

const RELATIONSHIPS = ["Friend", "Parent", "Sibling", "Counsellor", "Partner", "Other"];

/**
 * Dual-mode trusted contact modal.
 * - Mandatory mode (editMode=false): No close button, user must fill in contact.
 * - Edit mode (editMode=true): Has a close button, pre-fills with existingData.
 */
export default function TrustedContactModal({ userId, onSaved, editMode = false, existingData = null, onClose }) {
    const [name, setName] = useState(existingData?.name ?? "");
    const [phone, setPhone] = useState(existingData?.phone ?? "");
    const [relationship, setRelationship] = useState(existingData?.relationship ?? "");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);

    // Trigger slide-up animation after mount
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 30);
        return () => clearTimeout(t);
    }, []);

    const isValid = name.trim() && phone.trim() && relationship;

    const handleSubmit = async () => {
        if (!isValid || saving) return;
        setSaving(true);
        setError("");
        try {
            await saveTrustedContact(userId, {
                name: name.trim(),
                phone: phone.trim(),
                relationship,
            });
            onSaved?.();
        } catch (err) {
            console.error("Failed to save trusted contact:", err);
            setError("Failed to save. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9998] flex items-end sm:items-center justify-center p-0 sm:p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}>

            <div
                className={`relative w-full sm:max-w-md bg-[#0F172A] border border-[#1E293B] rounded-t-3xl sm:rounded-2xl p-8 shadow-2xl
                    transition-all duration-500 ease-out
                    ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
            >
                {/* Close button — only in edit mode */}
                {editMode && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-lg text-slate-500 hover:text-white hover:bg-slate-700 transition-all"
                        aria-label="Close"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}

                {/* Shield icon with pulse */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping" style={{ animationDuration: "2.5s" }} />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center shadow-lg">
                            <Shield className="w-8 h-8 text-white animate-shield-pulse" style={{ animation: "shield-pulse 2.5s ease-in-out infinite" }} />
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white text-center mb-2">
                    {editMode ? "Edit Trusted Contact" : "Before we begin — add a trusted contact"}
                </h2>
                <p className="text-slate-400 text-sm text-center mb-7 leading-relaxed">
                    {editMode
                        ? "Update the person we can reach out to if you ever need support."
                        : "For your safety, please add someone we can reach out to if you ever need support. This is required to use MindBridge."}
                </p>

                {/* Fields */}
                <div className="space-y-4">
                    {/* Name */}
                    <div className="relative">
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">Contact Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-[#0A0F1E] border border-[#1E293B] rounded-xl text-white placeholder-slate-600 text-sm
                           focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50
                           transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">Phone Number</label>
                        <div className="flex gap-2">
                            <div className="flex items-center px-3 py-3 bg-[#0A0F1E] border border-[#1E293B] rounded-xl text-teal-400 text-sm font-semibold select-none min-w-[64px] justify-center">
                                🇮🇳 +91
                            </div>
                            <div className="relative flex-1">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                <input
                                    type="tel"
                                    placeholder="10-digit mobile"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                    className="w-full pl-10 pr-4 py-3 bg-[#0A0F1E] border border-[#1E293B] rounded-xl text-white placeholder-slate-600 text-sm
                             focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50
                             transition-all duration-200"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Relationship */}
                    <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">Relationship</label>
                        <div className="relative">
                            <Heart className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                            <select
                                value={relationship}
                                onChange={(e) => setRelationship(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-[#0A0F1E] border border-[#1E293B] rounded-xl text-sm
                           focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50
                           transition-all duration-200 appearance-none cursor-pointer
                           text-white"
                                style={{ colorScheme: "dark" }}
                            >
                                <option value="" disabled style={{ color: "#475569" }}>Select relationship…</option>
                                {RELATIONSHIPS.map((r) => (
                                    <option key={r} value={r}>{r}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <p className="mt-3 text-red-400 text-xs text-center">{error}</p>
                )}

                {/* Submit */}
                <button
                    onClick={handleSubmit}
                    disabled={!isValid || saving}
                    className={`mt-6 w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2
                      shimmer-btn transition-all duration-200
                      ${isValid && !saving
                            ? "bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white shadow-lg shadow-teal-900/40 hover:scale-[1.02]"
                            : "bg-slate-700 text-slate-500 cursor-not-allowed opacity-60"
                        }`}
                >
                    {saving
                        ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving…</>
                        : <>{editMode ? "Save Changes" : "Continue to MindBridge →"}</>
                    }
                </button>

                {!editMode && (
                    <p className="mt-4 text-center text-xs text-slate-600">
                        🔒 Your contact info is stored securely and never shared.
                    </p>
                )}
            </div>
        </div>
    );
}
