"use client";
// components/Download.jsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import appStore from "../public/images/appStore.svg";
import playStore2 from "../public/images/playStore2.png";
import textureBg from "../public/images/textureBg.png";
import styles from "@/styles/style";


export default function Download({ lang = "ar" }) {
  
 

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
      className={`${styles.padding} bg-[#fff] flex justify-center items-center`}
    >
      {/* Container */}
      <div className="relative w-full max-w-[1250px] flex flex-col gap-5
      justify-center items-center text-center rounded-[40px]
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

        <div className="shape_download_container z-0" />


        {/* Title && Text */}
        <h1 className={`${styles.title} max-w-[650px] z-20 text-white`}>{t.title}</h1>
        <p className={`${styles.paragraph} max-w-[650px] z-20 text-white`}>{t.p1}</p>
        <p className={`${styles.paragraph} max-w-[650px] z-20 text-white`}>{t.p2}</p>

        {/* Download Buttons */}
        <div className="flex gap-4 flex-wrap justify-center z-20">
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

