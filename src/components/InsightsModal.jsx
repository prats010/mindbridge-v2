// src/components/InsightsModal.jsx
import { useState } from "react";
import { X, Sparkles, TrendingUp, Lightbulb, ListChecks, Star, Target, Save, Loader2, CheckCircle } from "lucide-react";
import { saveInsights } from "../firebase";

const SECTIONS = [
    { key: "PATTERN", label: "Pattern", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-900/20 border-blue-800" },
    { key: "INSIGHTS", label: "Insights", icon: Lightbulb, color: "text-yellow-400", bg: "bg-yellow-900/20 border-yellow-800" },
    { key: "ACTION PLAN", label: "Action Plan", icon: ListChecks, color: "text-teal-400", bg: "bg-teal-900/20 border-teal-800" },
    { key: "PROGRESS", label: "Progress", icon: Star, color: "text-purple-400", bg: "bg-purple-900/20 border-purple-800" },
    { key: "FOCUS THIS WEEK", label: "Focus This Week", icon: Target, color: "text-orange-400", bg: "bg-orange-900/20 border-orange-800" },
];

// Bulletproof parser: handles numbered sections, bold markdown, and keyword headers
function parseInsights(raw) {
    const result = {};
    SECTIONS.forEach(s => { result[s.key] = ''; });
    if (!raw) return result;

    const text = raw.replace(/\*\*/g, '').replace(/\*/g, '');
    const lines = text.replace(/\r\n/g, '\n').split('\n');

    let currentKey = null;
    const buf = {};
    SECTIONS.forEach(s => { buf[s.key] = []; });

    for (const line of lines) {
        const trimmed = line.trim();
        let matched = false;

        for (const section of SECTIONS) {
            const kw = section.key;
            // Case-insensitive match at start of line
            if (trimmed.toUpperCase().startsWith(kw)) {
                currentKey = kw;
                // Grab everything after the keyword and optional colon
                const afterKw = trimmed.slice(kw.length).replace(/^[\s:]+/, '').trim();
                if (afterKw) buf[currentKey].push(afterKw);
                matched = true;
                break;
            }
        }

        if (!matched && currentKey) {
            buf[currentKey].push(line);
        }
    }

    SECTIONS.forEach(s => {
        result[s.key] = buf[s.key].join('\n').trim();
    });

    // Safety net: if ALL sections are empty, dump raw text into the first section
    if (Object.values(result).every(s => !s)) {
        result[SECTIONS[0].key] = raw.trim();
    }

    return result;
}


export default function InsightsModal({ userId, text, loading, onClose }) {
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const parsed = text ? parseInsights(text) : {};

    const handleSave = async () => {
        if (saving || saved) return;
        setSaving(true);
        try {
            await saveInsights(userId, text);
            setSaved(true);
        } catch (err) {
            console.error("Failed to save insights:", err);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9997] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}>

            <div className="relative bg-[#0F172A] border border-[#1E293B] rounded-2xl w-full max-w-2xl max-h-[88vh] flex flex-col shadow-2xl animate-slide-up">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#1E293B] flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-teal-600 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-white font-bold text-lg">My AI Insights</h2>
                            <p className="text-slate-500 text-xs">Powered by Gemini AI</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-slate-700 transition-all">
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {loading ? (
                        /* Loading skeleton */
                        <div className="space-y-4">
                            <div className="flex flex-col items-center justify-center py-12 gap-4">
                                <div className="spinner-orbital" />
                                <p className="text-teal-400 text-sm font-medium animate-pulse">
                                    Gemini is analysing your journey…
                                </p>
                                <p className="text-slate-600 text-xs text-center max-w-xs">
                                    Reviewing mood patterns, assessment scores, and crafting personalised insights
                                </p>
                            </div>
                            {[180, 120, 240, 100, 80].map((w, i) => (
                                <div key={i} className="rounded-xl p-4 border border-[#1E293B] animate-pulse space-y-2">
                                    <div className="h-3 bg-slate-700 rounded w-1/4" />
                                    <div className="h-2 bg-slate-800 rounded" style={{ width: `${w}px` }} />
                                    <div className="h-2 bg-slate-800 rounded w-full" />
                                    <div className="h-2 bg-slate-800 rounded w-3/4" />
                                </div>
                            ))}
                        </div>
                    ) : text ? (
                        /* Parsed sections */
                        (Object.values(parsed).some(v => v) ? (
                            SECTIONS.map(({ key, label, icon: Icon, color, bg }) => {
                                const content = parsed[key];
                                if (!content) return null;
                                return (
                                    <div key={key} className={`border rounded-xl p-5 ${bg} animate-fade-in`}>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Icon className={`w-4 h-4 ${color}`} />
                                            <h3 className={`font-semibold text-sm ${color}`}>{label}</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="border rounded-xl p-5 bg-slate-900/50 border-slate-700 animate-fade-in">
                                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{text}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-slate-500 text-center py-12">No insights generated yet.</p>
                    )}
                </div>

                {/* Footer */}
                {!loading && text && (
                    <div className="p-6 border-t border-[#1E293B] flex-shrink-0">
                        <button
                            onClick={handleSave}
                            disabled={saving || saved}
                            className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all
                         ${saved
                                    ? "bg-green-800/40 border border-green-700 text-green-400"
                                    : "bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white shadow-lg"
                                }`}
                        >
                            {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving…</>
                                : saved ? <><CheckCircle className="w-4 h-4" /> Saved to Dashboard</>
                                    : <><Save className="w-4 h-4" /> Save Insights</>
                            }
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
