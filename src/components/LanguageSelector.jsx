// src/components/LanguageSelector.jsx
import { useLanguage } from "../context/LanguageContext";

const LANGS = [
  { code: "en", label: "EN", full: "English" },
  { code: "hi", label: "हिं", full: "हिंदी" },
  { code: "mr", label: "मर", full: "मराठी" },
];

/**
 * LanguageSelector
 * variant="sidebar" → compact pill row, dark bg (for sidebar)
 * variant="navbar"  → compact pill row, for marketing navbar
 */
export default function LanguageSelector({ variant = "sidebar" }) {
  const { lang, setLang } = useLanguage();

  if (variant === "sidebar") {
    return (
      <div className="flex items-center gap-1 px-2 py-1">
        <span className="text-xs text-slate-500 mr-1">🌐</span>
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            title={l.full}
            className={`text-xs px-2 py-1 rounded-md font-medium transition-all duration-150 ${
              lang === l.code
                ? "bg-teal-600/30 text-teal-300 border border-teal-600/50"
                : "text-slate-500 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    );
  }

  // navbar variant
  return (
    <div className="flex items-center gap-1 bg-[#0D1117] border border-[#1A1F2E] rounded-full px-2 py-1">
      <span className="text-xs text-[#8B949E] mr-0.5">🌐</span>
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          title={l.full}
          className={`text-xs px-2 py-0.5 rounded-full font-medium transition-all duration-150 ${
            lang === l.code
              ? "bg-[#0D9488]/20 text-[#0D9488] border border-[#0D9488]/40"
              : "text-[#8B949E] hover:text-[#F0F6FC]"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
