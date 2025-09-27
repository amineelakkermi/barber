"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import mockup3 from "../public/images/mockup3.png";
import starIcon from "../public/images/starIcon.png";
import truckIcon from "../public/images/truckIcon.png";
import reserveIcon from "../public/images/reserveIcon.png";
import searchIcon from "../public/images/searchIcon.png";
import styles, { layout } from "@/styles/style";

function FeatureCard({ icon, title, text }) {
  return (
    <div
      className="group lg:max-w-[400px] xl:max-w-[624px] 
      flex items-center gap-6 px-6 lg:px-8 py-6 
      rounded-[32px] shadow-md bg-white cursor-pointer 
      transition-all duration-300 ease-in-out 
      hover:bg-gradient-to-bl hover:from-[#1E2E56] hover:to-[#4B5791]"
    >
      {/* Icône */}
      <div
        className="w-[60px] h-[60px] shrink-0 
        flex justify-center items-center 
        rounded-full bg-[#F5F5F5] 
        transition-colors duration-300 
        group-hover:bg-white"
      >
        <Image src={icon} alt={title} className="w-[30px] h-[30px]" />
      </div>

      {/* Texte */}
      <div className="flex flex-col gap-1">
        <h3
          className="text-[20px] lg:text-[22px] font-bold text-[#2B323B] 
          transition-colors duration-300 group-hover:text-white"
        >
          {title}
        </h3>
        <p
          className="text-[15px] lg:text-[16px] text-[#2B323B] 
          transition-colors duration-300 group-hover:text-white"
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesClient() {
  const [lang, setLang] = useState("ar");

  // Initialize language and listen for changes from Navbar
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
          heading: " 👤 For the customer – Book your barber anytime, anywhere",
          searchTitle: "Search easily",
          searchText: "View the list of barbers by location, rating, or type of service.",
          reserveTitle: "Book within seconds",
          reserveText: "Choose a date that suits you and pay online securely.",
          truckTitle: "Mobile service",
          truckText: " Ask for a barber to be delivered to your door or location.",
          starTitle: "Trusted Reviews",
          starText: "Read user experiences to choose with confidence.",
        }
      : {
          heading: "👤 للعميل – احجز حلاقك في أي وقت ومن أي مكان",
          searchTitle: "ابحث بسهولة",
          searchText: "استعرض قائمة الحلاقين حسب الموقع، التقييم، أو نوع الخدمة.",
          reserveTitle: "احجز خلال ثوانٍ",
          reserveText: "اختر الموعد المناسب لك وادفع إلكترونيًا بكل أمان.",
          truckTitle: "خدمة متنقلة",
          truckText: "اطلب حلاق يصلك إلى باب منزلك أو موقعك الحالي.",
          starTitle: "تقييمات موثوقة",
          starText: "اقرأ تجارب المستخدمين لتختار بثقة.",
        };

  return (
    <section
      id="featuresClient"
      className={`relative overflow-hidden bg-white w-full min-h-[100vh] ${styles.padding}`}
    >
      <div
        className={`${layout.sectionRow} ${styles.marginY} 
        max-w-7xl mx-auto z-40 
        flex justify-start items-center xl:items-end gap-16 xl:gap-0`}
      >
        {/* Texte */}
        <div className={`${layout.sectionInfo}`}>
          <h1 className={`${styles.title} text-[#202641] max-w-[650px]`}>
            {t.heading}
          </h1>

          <div className="flex flex-col gap-4 mt-8">
            <FeatureCard icon={searchIcon} title={t.searchTitle} text={t.searchText} />
            <FeatureCard icon={reserveIcon} title={t.reserveTitle} text={t.reserveText} />
            <FeatureCard icon={truckIcon} title={t.truckTitle} text={t.truckText} />
            <FeatureCard icon={starIcon} title={t.starTitle} text={t.starText} />
          </div>
        </div>

        {/* Mockup */}
        <div className={`${layout.sectionImg} relative`}>
          <div
            className="relative mx-auto 
            flex justify-center 
            w-[300px] xs:w-[350px] sm:w-[400px] lg:w-[450px] 
            h-[350px] xs:h-[400px] sm:h-[450px] lg:h-[500px] 
            rounded-[20px] lg:rounded-[40px] 
            bg-gradient-to-b from-[#1E2E56] to-[#4B5791] 
            shadow-xl overflow-visible"
          >
            <Image
              src={mockup3}
              alt="App Screen 3"
              className="absolute bottom-0 object-contain 
              w-[250px] xs:w-[300px] sm:w-[350px] lg:w-[400px] 
              h-[450px] xs:h-[500px] sm:h-[550px] lg:h-[600px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
