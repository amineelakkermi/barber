"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../public/images/logo.png";
import { FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  // Helper: smooth scroll to section id
  const scrollToSection = (id) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  // Data
  const currentYear = new Date().getFullYear();
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("lang");
    if (stored === "ar" || stored === "en") setLang(stored);
    const onLangChange = (e) => {
      if (e?.detail?.lang) setLang(e.detail.lang);
    };
    window.addEventListener("languageChange", onLangChange);
    return () => window.removeEventListener("languageChange", onLangChange);
  }, []);

  const t =
    lang === "en"
      ? {
          home: "Home",
          features: "Application Features",
          download: "Download the app",
          importantLinks: "Important Links",
          followUs: "Follow us on social media",
          emailAria: "Email",
          whatsappAria: "WhatsApp",
          rights: `© ${currentYear} All rights reserved`,
          ariaHome: "Home",
        }
      : {
          home: "الرئيسية",
          features: "مميزات التطبيق",
          download: "تحميل التطبيق",
          importantLinks: "روابط مهمة",
          followUs: "تابعنا على منصات التواصل الاجتماعي",
          emailAria: "البريد الإلكتروني",
          whatsappAria: "واتساب",
          rights: `© ${currentYear} جميع الحقوق محفوظة`,
          ariaHome: "الرئيسية",
        };

  const links = [
    { href: "/#hero", key: "home" },
    { href: "/#featuresClient", key: "features" },
    { href: "/#download", key: "download" },
  ];
  const socials = [
    { href: "#", alt: "Facebook", src: "/images/facebook.png" },
    { href: "#", alt: "Twitter", src: "/images/twitter.png" },
    { href: "#", alt: "Instagram", src: "/images/instagram.png" },
    { href: "#", alt: "YouTube", src: "/images/youtube.png" },
  ];
  return (
    <footer dir={lang === "en" ? "ltr" : "rtl"} className="bg-[#202641] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          {/* LOGO && DESCRIPTION */}
          <div className="min-w-[260px] max-w-md">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              aria-label={t.ariaHome}
            >
              <Image
                src={logo}
                alt="BarberApp Logo"
                width={140}
                height={40}
                priority
                className="h-10 w-auto object-contain"
              />
            </a>
            <div className="mt-5 flex flex-col gap-5 text-[16px] font-normal">
              <a href="mailto:help@test.com" className="flex items-center gap-5 text-white hover:text-white/80" aria-label={t.emailAria}>
                <FiMail size={24} color="#E1BD80" />
                <span>help@test.com</span>
              </a>
              <a href="https://wa.me/966000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-white hover:text-white/80" aria-label={t.whatsappAria}>
                <FiPhone size={24} color="#E1BD80" />
                <span>+966XXXXXXX</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="min-w-[200px]">
            <h4 className="mb-4 text-[18px] font-semibold text-white">{t.importantLinks}</h4>
            <ul className="space-y-3 text-[17px] font-normal">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/80 hover:text-white">{t[l.key]}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="min-w-[220px]">
            <h4 className="mb-4 text-base font-semibold text-white">{t.followUs}</h4>
            <div className="mb-4 flex items-center gap-5">
              {socials.map((s) => (
                <a key={s.alt} href={s.href} aria-label={s.alt} className="inline-flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                  <Image src={s.src} alt={s.alt} width={24} height={24} className="object-cover" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-[16px] text-white">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
