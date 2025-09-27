"use client";
import { useLanguage } from "./LanguageProvider";
import Hero from "./Hero";

export default function HeroWrapper() {
  const { lang } = useLanguage();
  return <Hero lang={lang} />;
}
