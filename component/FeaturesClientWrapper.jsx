"use client";
import { useLanguage } from "./LanguageProvider";
import FeaturesClient from "./FeaturesClient";

export default function FeaturesClientWrapper() {
  const { lang } = useLanguage();
  return <FeaturesClient lang={lang} />;
}
