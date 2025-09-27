import Image from "next/image";
import textureBg from "../public/images/textureBg.png";
import { LanguageProvider } from "@/component/LanguageProvider";
import Navbar from "@/component/Navbar";
import HeroWrapper from "@/component/HeroWrapper";
import FeaturesClientWrapper from "@/component/FeaturesClientWrapper";
import Faq from "@/component/Faq";
import FeaturesBarberWrapper from "@/component/FeaturesBarberWrapper";
import DownloadWrapper from "@/component/DownloadWrapper";

export default function Page() {
  return (
    <LanguageProvider>
      <main>
        
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
          <HeroWrapper />
        </div>

        <FeaturesClientWrapper />
        <FeaturesBarberWrapper />
        <DownloadWrapper />
        <Faq />
      </main>
    </LanguageProvider>
  );
}
