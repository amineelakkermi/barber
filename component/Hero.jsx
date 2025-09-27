"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import mockup1 from "../public/images/mockup1.png";
import mockup2 from "../public/images/mockup2.png";
import playStore from "../public/images/playStore.svg";
import appStore from "../public/images/appStore.svg";
import arrowTitle from "../public/images/arrowTitle.png";
import arrowDownload from "../public/images/arrowDownload.svg";
import styles, { layout } from "@/styles/style";

export default function Hero() {
  const [lang, setLang] = useState("ar");

  // Initialize lang from localStorage and listen to language changes
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
          title: "Book or receive bookings With ease",
          paragraph1:
            "A smart application that combines customers and barbers in one easy and fast platform.",
          paragraph2:
            "Whether you are looking for a barber near you or running your salon and want to organize your appointments, our app is the perfect solution.",
        }
      : {
          title: "احجز أو استقبل الحجوزات بكل سهولة",
          paragraph1:
            "تطبيق ذكي يجمع بين العملاء والحلاقين في منصة واحدة سهلة وسريعة.",
          paragraph2:
            "سواء كنت تبحث عن حلاق قريب منك أو تدير صالونك وتريد تنظيم مواعيدك، تطبيقنا هو الحل الأمثل.",
        };

  return (
    <section
      id="hero"
      className={`relative overflow-hidden bg-[#202641] flex justify-center items-center w-full min-h-[100vh] ${styles.padding}`}
    >
      {/* Shape */}
      {lang === "en" ? <>
        <div className="shape1_en" />
      </> : 
      <>
      <div className="shape1" />
      <div className="shape2" />
      </>
      
      }

      {/* Content */}
      <div
        className={`${layout.sectionRow} z-40 justify-center items-center max-w-7xl mx-auto`}
      >
        {/* Text */}
        <div className={`${layout.sectionInfo} relative`}>
          {/* Arrow */}
          <div
            className={`absolute top-8 xl:top-16 ${lang === "en" ? "right-8 xl:right-20 rotate-90" : "left-8 xl:left-20"} w-[50px] h-[50px]`}
          >
            <Image
              src={arrowTitle}
              alt="Arrow Title"
              priority
              className="object-contain w-full h-full"
            />
          </div>

          <h1 className={`${styles.title} max-w-[500px] mt-24 text-white`}>
            {t.title}
          </h1>
          <p className={`${styles.paragraph} max-w-[550px] text-gray-200`}>
            {t.paragraph1}
          </p>
          <p className={`${styles.paragraph} mb-8 max-w-[550px]  text-gray-200`}>
            {t.paragraph2}
          </p>

          {/* Download Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start relative">
            {/* Arrow */}
            <div className={`absolute -top-20 ${lang === "en" ? "-right-32 rotate-90" : "-left-32"} w-[100px] h-[100px]`}>
              <Image
                src={arrowDownload}
                alt="Arrow Download"
                priority
                className="object-contain w-full h-full"
              />
            </div>

            <a
              href="#"
              className="block duration-300 hover:scale-105 transition-transform"
            >
              <Image src={appStore} alt="App Store" className="h-12 w-auto" />
            </a>
            <a
              href="#"
              className="block duration-300 hover:scale-105 transition-transform"
            >
              <Image
                src={playStore}
                alt="Google Play"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Mockups */}
        <div className={`${layout.sectionImg} relative`}>
          {lang === "en" ? (
            <>
              <Image
                src={mockup1}
                alt="App Screen 1"
                width={312}
                className="object-cover"
              />
              <Image
                src={mockup2}
                alt="App Screen 2"
                width={312}
                className="object-cover -ml-[15%]"
              />
            </>
          ) : (
            <>
              <Image
                src={mockup1}
                alt="App Screen 1"
                width={312}
                className="object-cover"
              />
              <Image
                src={mockup2}
                alt="App Screen 2"
                width={312}
                className="object-cover -mr-[15%]"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
