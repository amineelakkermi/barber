import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import FeaturesClient from "@/component/FeaturesClient";
import FeaturesBarber from "@/component/FeaturesBarber";
import Download from "@/component/Download";
import Faq from "@/component/Faq";
import Image from "next/image";
import textureBg from "../public/images/textureBg.png";

export default function Page() {
  return (
    <main>
      {/* Background فقط للـ Navbar + Hero */}
      <div className="relative">
        {/* Background */}
        <div className="absolute inset-0 z-10">
          <Image
            src={textureBg}
            alt="Background texture"
            fill
            className="object-cover opacity-60 mix-blend-soft-light"
            priority
          />
        </div>

        {/* Navbar + Hero */}
        <Navbar />
        <Hero />
      </div>

      <FeaturesClient />
      <FeaturesBarber />
      <Download />
      <Faq />
    </main>
  );
}
