"use client";
import { useLanguage } from "./LanguageProvider";
import FeaturesBarber from "./FeaturesBarber";

export default function FeaturesBarberWrapper() {
  const { lang } = useLanguage();
  return <FeaturesBarber lang={lang} />;
}
