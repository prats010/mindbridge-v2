// src/context/LanguageContext.jsx
import { createContext, useContext, useState, useCallback } from "react";
import translations from "../i18n/translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "mb_lang";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && translations[saved] ? saved : "en";
  });

  const setLang = useCallback((newLang) => {
    if (!translations[newLang]) return;
    localStorage.setItem(STORAGE_KEY, newLang);
    setLangState(newLang);
  }, []);

  /** t(key) — returns the translated string for the current language, fallback to English */
  const t = useCallback(
    (key) => {
      return translations[lang]?.[key] ?? translations["en"]?.[key] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Hook to use language context anywhere in the app */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
