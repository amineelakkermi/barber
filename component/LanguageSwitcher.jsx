"use client";
import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage("ar")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          lang === "ar"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        العربية
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          lang === "en"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        English
      </button>
    </div>
  );
}
