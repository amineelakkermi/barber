"use client";
// components/Download.jsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import appStore from "../public/images/appStore.svg";
import playStore2 from "../public/images/playStore2.png";
import textureBg from "../public/images/textureBg.png";
import styles from "@/styles/style";

const Download = () => {
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
          title: " 📥 Download the app now and start your experience",
          p1: "Join thousands of users who have chosen comfort and professionalism.",
          p2: "Whether you're a customer looking for premium service, or a barber looking to expand your business — our app is built for you.",
        }
      : {
          title: "📥 حمّل التطبيق الآن وابدأ تجربتك",
          p1: "انضم لآلاف المستخدمين الذين اختاروا الراحة والاحترافية.",
          p2: "سواء كنت عميلًا تبحث عن خدمة مميزة، أو حلاقًا تسعى لتوسيع عملك — تطبيقنا صُمم من أجلك.",
        };

  return (
    <section
      id="download"
      className={`${styles.padding} flex justify-center items-center`}
    >
      {/* ====== Container avec backgrounds ====== */}
      <div className="relative w-full max-w-[1250px] flex flex-col gap-5
      justify-center items-center text-center rounded-[40px]
      mx-12 lg:mx-0
      bg-[#202641] px-6 py-12 md:px-12 lg:py-16
      overflow-hidden">
        
        {/* TextureBg */}
        <div className="absolute z-30 top-0 left-0 w-[100%] h-[100%] opacity-100 mix-blend-soft-light pointer-events-none">
          <Image
            src={textureBg}
            alt="Background texture"
            fill
            className="object-cover rounded-[40px]"
            priority
          />
        </div>

       

        {/* Shape Right */}
        <div
          className="absolute z-20"
          style={{
            width: "100%",
            height: "100%",
            left: "-75%",
            top: "85%",
            background:
              "linear-gradient(95.62deg, #1E2E56 -14.12%, #4B5791 131.96%), #202641",
            filter: "blur(160px)",
            transform: "rotate(-90deg)",
          }}
        />

        {/* ====== محتوى النصوص والأزرار ====== */}
        <h1 className={`${styles.title} max-w-[650px] text-white`}>{t.title}</h1>
        <p className={`${styles.paragraph} max-w-[650px] text-white`}>{t.p1}</p>
        <p className={`${styles.paragraph} max-w-[650px] text-white`}>{t.p2}</p>

        {/* أزرار التحميل */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#"
            className="block duration-300 hover:scale-105 transition-transform"
          >
            <Image
              src={playStore2}
              alt="Google Play"
              className="h-12 w-auto md:h-14"
            />
          </a>
          <a
            href="#"
            className="block duration-300 hover:scale-105 transition-transform"
          >
            <Image
              src={appStore}
              alt="App Store"
              className="h-12 w-auto md:h-14"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
