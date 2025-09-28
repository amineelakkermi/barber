"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../public/images/logo.png";

// Composants SVG pour les icônes
const EmailIcon = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.875 5.33545H4.125C3.08947 5.33545 2.25 6.17492 2.25 7.21045V18.4604C2.25 19.496 3.08947 20.3354 4.125 20.3354H19.875C20.9105 20.3354 21.75 19.496 21.75 18.4604V7.21045C21.75 6.17492 20.9105 5.33545 19.875 5.33545Z" stroke="#E1BD80" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.25 8.33545L12 13.5854L18.75 8.33545" stroke="#E1BD80" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
);

const PhoneIcon = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6292 14.7269L17.0852 14.2739L16.0262 13.2099L15.5722 13.6629L16.6292 14.7269ZM18.6142 14.0839L20.5252 15.1229L21.2402 13.8049L19.3302 12.7669L18.6142 14.0839ZM20.8922 17.1869L19.4722 18.5999L20.5292 19.6629L21.9492 18.2509L20.8922 17.1869ZM18.6062 19.0539C17.1562 19.1899 13.4062 19.0689 9.34417 15.0309L8.28617 16.0939C12.7182 20.5009 16.9372 20.7169 18.7462 20.5479L18.6062 19.0539ZM9.34417 15.0309C5.47317 11.1809 4.83117 7.9439 4.75117 6.5389L3.25317 6.6239C3.35317 8.3919 4.14817 11.9799 8.28617 16.0939L9.34417 15.0309ZM10.7192 8.8509L11.0062 8.5649L9.95017 7.5019L9.66317 7.7869L10.7192 8.8509ZM11.2342 4.9299L9.97417 3.2459L8.77317 4.1459L10.0332 5.8289L11.2342 4.9299ZM5.73317 2.8789L4.16317 4.4389L5.22117 5.5029L6.79017 3.9429L5.73317 2.8789ZM10.1912 8.3189C9.66117 7.7869 9.66117 7.7869 9.66117 7.7889H9.65917L9.65617 7.7929C9.60865 7.84081 9.5661 7.89341 9.52917 7.9499C9.47517 8.0299 9.41617 8.1349 9.36617 8.2679C9.24445 8.61122 9.21412 8.98031 9.27817 9.3389C9.41217 10.2039 10.0082 11.3469 11.5342 12.8649L12.5922 11.8009C11.1632 10.3809 10.8232 9.5169 10.7602 9.1089C10.7302 8.9149 10.7612 8.8189 10.7702 8.7969C10.7762 8.78356 10.7762 8.78156 10.7702 8.7909C10.7613 8.8047 10.7512 8.81774 10.7402 8.8299L10.7302 8.8399L10.7202 8.8489L10.1912 8.3189ZM11.5342 12.8649C13.0612 14.3829 14.2102 14.9749 15.0762 15.1069C15.5192 15.1749 15.8762 15.1209 16.1472 15.0199C16.299 14.9644 16.4408 14.8847 16.5672 14.7839L16.6172 14.7389L16.6242 14.7329L16.6272 14.7299L16.6282 14.7279C16.6282 14.7279 16.6292 14.7269 16.1002 14.1949C15.5702 13.6629 15.5732 13.6619 15.5732 13.6619L15.5752 13.6599L15.5772 13.6579L15.5832 13.6529L15.5932 13.6429L15.6312 13.6129C15.6405 13.6069 15.6382 13.6076 15.6242 13.6149C15.5992 13.6239 15.5012 13.6549 15.3042 13.6249C14.8902 13.5609 14.0202 13.2209 12.5922 11.8009L11.5342 12.8649ZM9.97417 3.2449C8.95417 1.8849 6.95017 1.6689 5.73317 2.8789L6.79017 3.9429C7.32217 3.4139 8.26617 3.4689 8.77317 4.1459L9.97417 3.2449ZM4.75217 6.5399C4.73217 6.1939 4.89117 5.8319 5.22117 5.5039L4.16217 4.4399C3.62517 4.9739 3.20217 5.7299 3.25317 6.6239L4.75217 6.5399ZM19.4722 18.5999C19.1982 18.8739 18.9022 19.0279 18.6072 19.0549L18.7462 20.5479C19.4812 20.4789 20.0822 20.1089 20.5302 19.6639L19.4722 18.5999ZM11.0062 8.5649C11.9912 7.5859 12.0642 6.0389 11.2352 4.9309L10.0342 5.8299C10.4372 6.3689 10.3772 7.0759 9.94917 7.5029L11.0062 8.5649ZM20.5262 15.1239C21.3432 15.5679 21.4702 16.6139 20.8932 17.1879L21.9512 18.2509C23.2912 16.9179 22.8782 14.6949 21.2412 13.8059L20.5262 15.1239ZM17.0852 14.2749C17.4692 13.8929 18.0872 13.7989 18.6152 14.0849L19.3312 12.7679C18.2472 12.1779 16.9032 12.3409 16.0272 13.2109L17.0852 14.2749Z" fill="#E1BD80"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#E1BD80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_613_99732)">
      <mask id="mask0_613_99732" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <path d="M0 0H24V24H0V0Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_613_99732)">
        <path d="M18.9 1.125H22.5806L14.5406 10.3376L24 22.8759H16.5943L10.7897 15.273L4.15543 22.8759H0.471429L9.07029 13.0187L0 1.12671H7.59429L12.8331 8.07471L18.9 1.125ZM17.6057 20.6679H19.6457L6.48 3.21814H4.29257L17.6057 20.6679Z" fill="#E1BD80"/>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_613_99732">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const InstagramIcon = () => (
  <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_613_99727)">
      <path d="M5 11C5 7.229 5 5.343 6.172 4.172C7.344 3.001 9.229 3 13 3H15C18.771 3 20.657 3 21.828 4.172C22.999 5.344 23 7.229 23 11V13C23 16.771 23 18.657 21.828 19.828C20.656 20.999 18.771 21 15 21H13C9.229 21 7.343 21 6.172 19.828C5.001 18.656 5 16.771 5 13V11Z" stroke="#E1BD80" strokeWidth="2"/>
      <path d="M18.5 9C19.3284 9 20 8.32843 20 7.5C20 6.67157 19.3284 6 18.5 6C17.6716 6 17 6.67157 17 7.5C17 8.32843 17.6716 9 18.5 9Z" fill="#E1BD80"/>
      <path d="M14 15C15.6569 15 17 13.6569 17 12C17 10.3431 15.6569 9 14 9C12.3431 9 11 10.3431 11 12C11 13.6569 12.3431 15 14 15Z" stroke="#E1BD80" strokeWidth="2"/>
    </g>
    <defs>
      <filter id="filter0_d_613_99727" x="-2" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_613_99727"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_613_99727" result="shape"/>
      </filter>
    </defs>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.386 4.35696C9.2722 4.28865 9.1423 4.25176 9.00958 4.25006C8.87686 4.24837 8.74607 4.28192 8.63056 4.3473C8.51505 4.41268 8.41896 4.50755 8.3521 4.62221C8.28524 4.73687 8.25001 4.86723 8.25 4.99996V11C8.25001 11.1327 8.28524 11.263 8.3521 11.3777C8.41896 11.4924 8.51505 11.5872 8.63056 11.6526C8.74607 11.718 8.87686 11.7515 9.00958 11.7499C9.1423 11.7482 9.2722 11.7113 9.386 11.643L14.386 8.64296C14.497 8.57631 14.5889 8.48206 14.6526 8.36938C14.7164 8.2567 14.7499 8.12943 14.7499 7.99996C14.7499 7.87048 14.7164 7.74321 14.6526 7.63053C14.5889 7.51786 14.497 7.42361 14.386 7.35696L9.386 4.35696ZM12.542 7.99996L9.75 9.67496V6.32496L12.542 7.99996Z" fill="#E1BD80"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.0309 0.640766C12.6827 0.378859 9.3191 0.378859 5.97088 0.640766L3.72988 0.816766C3.06772 0.868383 2.44187 1.14009 1.95202 1.58862C1.46217 2.03715 1.1365 2.6367 1.02688 3.29177C0.506663 6.40888 0.506663 9.59066 1.02688 12.7078C1.1365 13.3628 1.46217 13.9624 1.95202 14.4109C2.44187 14.8594 3.06772 15.1312 3.72988 15.1828L5.96988 15.3588C9.31888 15.6208 12.6829 15.6208 16.0319 15.3588L18.2719 15.1828C18.9341 15.1312 19.5599 14.8594 20.0498 14.4109C20.5396 13.9624 20.8653 13.3628 20.9749 12.7078C21.4949 9.59077 21.4949 6.40877 20.9749 3.29177C20.8653 2.6367 20.5396 2.03715 20.0498 1.58862C19.5599 1.14009 18.9341 0.868383 18.2719 0.816766L16.0309 0.640766ZM6.08788 2.13677C9.35889 1.88085 12.6449 1.88085 15.9159 2.13677L18.1559 2.31177C18.8319 2.36477 19.3849 2.87177 19.4959 3.53977C19.9904 6.49254 19.9904 9.507 19.4959 12.4598C19.4417 12.7847 19.2804 13.0821 19.0375 13.3047C18.7947 13.5272 18.4843 13.6621 18.1559 13.6878L15.9159 13.8628C12.6449 14.1187 9.35889 14.1187 6.08788 13.8628L3.84788 13.6878C3.51948 13.6621 3.20912 13.5272 2.96626 13.3047C2.72341 13.0821 2.56204 12.7847 2.50788 12.4598C2.01334 9.507 2.01334 6.49254 2.50788 3.53977C2.56204 3.21484 2.72341 2.9174 2.96626 2.69485C3.20912 2.47229 3.51948 2.33743 3.84788 2.31177L6.08788 2.13677Z" fill="#E1BD80"/>
  </svg>
);

const Footer = () => {
  const scrollToSection = (id) => {
    const cleanId = id.replace(/^[\/#]+/, '');
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element not found: ${id}`);
    }
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
    { href: "#", alt: "Facebook", icon: <FacebookIcon /> },
    { href: "#", alt: "Twitter", icon: <TwitterIcon /> },
    { href: "#", alt: "Instagram", icon: <InstagramIcon /> },
    { href: "#", alt: "YouTube", icon: <YouTubeIcon /> },
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
                <EmailIcon />
                <span>help@test.com</span>
              </a>
              <a href="https://wa.me/966000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-white hover:text-white/80" aria-label={t.whatsappAria}>
                <PhoneIcon />
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
                  <a 
                    href={l.href} 
                    className="text-white/80 hover:text-white cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(l.href);
                    }}
                  >
                    {t[l.key]}
                  </a>
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
                  {s.icon}
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
