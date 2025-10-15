"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import "../i18n";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Or a loading spinner, to avoid hydration mismatch
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/main_bg_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
        <Header />
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-end text-white pb-10">
          <div className="w-full flex flex-col items-center text-center md:items-start md:text-start px-4 md:px-20 lg:px-40 mb-20">
            <div className="mb-10 md:mb-20">
              <div className="mb-5">
                <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-tight font-montserrat mb-2">
                  {t("main_title")}
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-2xl font-extrabold leading-normal font-pretendard whitespace-pre-line text-center md:text-start">
                  모든 순간을 함께하는 프리미엄&nbsp;
                  <span className="font-medium text-lg md:text-2xl font-pretendard leading-normal">
                    AI Caddie
                  </span>
                </p>
              </div>
              <p className="max-w-2xl mx-auto text-lg md:text-xl font-normal leading-normal font-pretendard whitespace-pre-line text-center md:text-start">
                {t("description")}
              </p>
            </div>
            <button
              className="w-full md:w-[296px] h-[58px] px-7 py-3 border-2 border-white rounded-full bg-transparent text-white font-medium text-[24px] leading-[140%] tracking-[0%] font-montserrat hover:bg-white hover:text-black transition-colors duration-300"
              onClick={() => (window.location.href = "/product")}
            >
              Explore&nbsp;
              <span className="font-black text-[24px] leading-[140%] tracking-[0%] font-montserrat">
                FieldBook
              </span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
