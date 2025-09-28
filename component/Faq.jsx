"use client";
import styles from "@/styles/style";
import React, { useEffect, useState } from "react";

const Accordion = () => {
  const [lang, setLang] = useState("ar");

  // Sync language with localStorage and global event
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
          title: "Frequently Asked Questions (FAQ)",
          items: [
            {
              header: "1. How can I book an appointment with a barber?",
              text: "Enter the app, choose the right barber according to the location or rating, then select the time and click Book Now",
            },
            {
              header: "2. Can I pay electronically?",
              text: "Yes, the application supports secure and local electronic payment methods, in addition to cash if available from the barber.",
            },
            {
              header: "2. Can I pay electronically?",
              text: "Yes, the application supports secure and local electronic payment methods, in addition to cash if available from the barber.",
            },
            {
              header: "2. Can I pay electronically?",
              text: "Yes, the application supports secure and local electronic payment methods, in addition to cash if available from the barber.",
            },
          ],
        }
      : {
          title: "الأسئلة الشائعة (FAQ)",
          items: [
            {
              header: "1. كيف يمكنني حجز موعد مع حلاق؟",
              text: "ادخل التطبيق، اختر الحلاق المناسب حسب الموقع أو التقييم، ثم حدد الوقت واضغط ‘احجز الآن’.",
            },
            {
              header: "2. هل أستطيع الدفع إلكترونيًا؟",
              text: "نعم، يدعم التطبيق طرق دفع إلكترونية آمنة ومحلية، بالإضافة للدفع نقدًا إذا كان متاحًا من الحلاق.",
            },
            {
              header: "3. هل يمكنني تعديل أو إلغاء الحجز؟",
              text: "يمكنك التعديل أو الإلغاء ضمن المهلة المحددة وفق سياسة الحلاق.",
            },
            {
              header: "4. كيف أتواصل مع الحلاق؟",
              text: "يمكنك التواصل مع الحلاق مباشرة من خلال التطبيق عبر نظام الرسائل المدمج، أو الاتصال به عبر رقم الهاتف المتوفر في ملفه الشخصي.",
            },
          ],
        };

  return (
    <section dir={lang === "en" ? "ltr" : "rtl"} className={`relative z-20 overflow-hidden bg-white ${styles.padding}`}>
      <div className={`${styles.marginY} max-w-7xl mx-auto`}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[720px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">{t.title}</h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {t.items.map((it, idx) => (
              <AccordionItem key={`${lang}-${idx}`} header={it.header} text={it.text} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text, lang }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setActive((prev) => !prev);
  };

  const rowDir = lang === "en" ? "flex-row text-left" : "flex-row-reverse text-right";
  const iconMargin = lang === "en" ? "mr-5" : "ml-5";
  const headerAlign = lang === "en" ? "text-left" : "text-right";
  const textAlign = lang === "en" ? "text-left" : "text-right";

  return (
    <div className="mb-8 w-full rounded-[16px] bg-white p-4 border border-[#EEEEEE] sm:p-4 lg:px-4 xl:px-4" style={{boxSizing: 'border-box', display: 'flex', justifyContent: 'center' , alignItems: 'start' ,   flexDirection: 'column', gap: '10px', maxWidth: '1240px', minHeight: '97px'}}>
      <button className={`faq-btn flex w-full ${rowDir}`} onClick={handleToggle}>
        <div className={`${iconMargin} flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#0C0B0B] bg-primary/5 text-[#0C0B0B]`}>
          {active ? (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.51953 4.14014L5.03125 0.651856C5.01364 0.634249 4.9844 0.634249 4.9668 0.651856L1.47949 4.14014C1.47443 4.14521 1.47069 4.15004 1.46875 4.15479C1.46668 4.15989 1.46582 4.16617 1.46582 4.17236C1.46586 4.18428 1.46993 4.19481 1.47852 4.20361C1.49612 4.22122 1.52536 4.22122 1.54297 4.20361L4.9541 0.792481L4.9541 11.3159C4.95416 11.3407 4.97423 11.3608 4.99902 11.3608C5.02381 11.3608 5.04388 11.3407 5.04395 11.3159L5.04394 0.792481L5.89746 1.646L8.45508 4.20459C8.47269 4.22209 8.50196 4.22216 8.51953 4.20459C8.53706 4.18706 8.53699 4.15771 8.51953 4.14014Z" fill="#0C0B0B" stroke="#0C0B0B"/>
            </svg>
          ) : (
            <svg className="transform rotate-180" width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M8.51953 4.14014L5.03125 0.651856C5.01364 0.634249 4.9844 0.634249 4.9668 0.651856L1.47949 4.14014C1.47443 4.14521 1.47069 4.15004 1.46875 4.15479C1.46668 4.15989 1.46582 4.16617 1.46582 4.17236C1.46586 4.18428 1.46993 4.19481 1.47852 4.20361C1.49612 4.22122 1.52536 4.22122 1.54297 4.20361L4.9541 0.792481L4.9541 11.3159C4.95416 11.3407 4.97423 11.3608 4.99902 11.3608C5.02381 11.3608 5.04388 11.3407 5.04395 11.3159L5.04394 0.792481L5.89746 1.646L8.45508 4.20459C8.47269 4.22209 8.50196 4.22216 8.51953 4.20459C8.53706 4.18706 8.53699 4.15771 8.51953 4.14014Z" fill="#0C0B0B" stroke="#0C0B0B"/>
            </svg>
          )}
        </div>

        <div className={`w-full ${headerAlign}`}>
          <h4 className="text-[20px] font-semibold text-[#0C0B0B]">{header}</h4>
        </div>
      </button>

      <div className={`${textAlign} duration-200 ease-in-out ${active ? "block" : "hidden"}`}>
        <p className="text-[16px] font-normal leading-relaxed text-[#7E7E7E]">{text}</p>
      </div>
    </div>
  );
};