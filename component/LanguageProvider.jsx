"use client";
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children, initialLang = "ar" }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("lang");
    if (stored === "ar" || stored === "en") {
      setLang(stored);
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (newLang === "ar" || newLang === "en") {
      setLang(newLang);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("lang", newLang);
        window.dispatchEvent(new CustomEvent("languageChange", { 
          detail: { lang: newLang } 
        }));
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
