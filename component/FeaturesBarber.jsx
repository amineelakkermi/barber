"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import mockup4 from "../public/images/mockup4.png";
import checkIcon from "../public/images/checkIcon.png";
import chatIcon from "../public/images/chatIcon.png";
import reserveIcon from "../public/images/reserveIcon.png";
import moneyIcon from "../public/images/moneyIcon.png";
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

export default function FeaturesBarber({ lang = "ar" }) {

 

  const t =
    lang === "en"
      ? {
          heading: " 💈 Barber – Organize your appointments and increase your customers",
          reserveTitle: "Receive orders instantly",
          reserveText: "Activate your account and start receiving bookings near you.",
          checkTitle: "Manage appointments easily",
          checkText: "Adjust opening times, and accept or reject bookings with the click of a button.",
          chatTitle: "Communicate directly with customers",
          chatText: "Chat with them to sort out details or respond to queries.",
          moneyTitle: "Track your income as you go",
          moneyText: " Get daily and weekly reports of your earnings.",
        }
      : {
          heading: "💈 للحلاق – نظّم مواعيدك وزِد عملاءك",
          reserveTitle: "استقبل الطلبات فورًا",
          reserveText: "فعّل حسابك وابدأ بتلقي الحجوزات القريبة منك.",
          checkTitle: "إدارة المواعيد بسهولة",
          checkText: "عدّل أوقات العمل، وقم بقبول أو رفض الحجوزات بضغطة زر.",
          chatTitle: "تواصل مباشر مع العملاء",
          chatText: "دردش معهم لترتيب التفاصيل أو الرد على الاستفسارات.",
          moneyTitle: "تابع دخلك أولاً بأول",
          moneyText: " احصل على تقارير يومية وأسبوعية بأرباحك.",
        };

  return (
    <section
      id="featuresBarber"
      className={`relative overflow-hidden bg-white w-full min-h-[100vh] ${styles.padding}`}
    >
      <div
        className={`${layout.sectionReverse} 
        max-w-7xl mx-auto z-40 
        flex justify-center items-center gap-16 xl:gap-0`}
      >
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
              src={mockup4}
              alt="App Screen 3"
              className="absolute bottom-0 object-contain 
              w-[250px] xs:w-[300px] sm:w-[350px] lg:w-[400px] 
              h-[450px] xs:h-[500px] sm:h-[550px] lg:h-[600px]"
              priority
            />
          </div>
        </div>

         {/* Texte */}
         <div className={`flex-1 ${styles.flexCenter} flex-col gap-5`}>
          <h1 className={`${styles.title} text-[#202641] max-w-[650px]`}>
            {t.heading}
          </h1>

          <div className="flex flex-col gap-4 mt-8">
            <FeatureCard icon={reserveIcon} title={t.reserveTitle} text={t.reserveText} />
            <FeatureCard icon={checkIcon} title={t.checkTitle} text={t.checkText} />
            <FeatureCard icon={chatIcon} title={t.chatTitle} text={t.chatText} />
            <FeatureCard icon={moneyIcon} title={t.moneyTitle} text={t.moneyText} />
          </div>
        </div>
      </div>
    </section>
  );
}
