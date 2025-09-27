"use client";
import { useLanguage } from "./LanguageProvider";
import Download from "./Download";

export default function DownloadWrapper() {
  const { lang } = useLanguage();
  return <Download lang={lang} />;
}
