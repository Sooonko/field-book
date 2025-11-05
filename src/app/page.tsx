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

  if (!isMounted) return null;

  return (
    <div className="bg-black min-h-screen">
      <div className="relative min-h-screen">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/main.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <Header />

        {/* Main Hero Section */}
        <main className="relative z-10 min-h-screen flex flex-col items-start justify-end text-white pb-10">
          <div className="w-full px-5 flex flex-col items-start text-center md:items-start md:text-left md:px-20 lg:px-40 mb-14 md:mb-24">
            <h1
              className="font-montserrat font-black text-[#FFFFFF] 
  text-[32px] leading-[140%] tracking-[0%]
  sm:text-[40px] md:text-[50px] lg:text-[60px]
  mb-[4px] md:mb-[8px]"
            >
              {t("main_title")}
            </h1>

            <p
              className="max-w-2xl text-start
  font-pretendard font-extrabold text-[#FFFFFF]
  text-[24px] leading-[140%] tracking-[0%]
  md:text-[32px]
  mb-6"
            >
              모든 순간을 함께하는 <br className="block md:hidden" />
              프리미엄{" "}
              <span
                className="font-montserrat font-black 
    text-[26px] md:text-[36px] 
    leading-[140%] tracking-tight text-[#FFFFFF]"
              >
                AI Caddie
              </span>
            </p>

            <p
              className="
    max-w-4xl text-start
    text-[15px] md:text-[24px]      /* font size: 15px on mobile, 24px on desktop */
    font-pretendard font-normal     /* Pretendard Regular (400) */
    leading-[140%] tracking-[0%]
    text-white mb-10
  "
            >
              딥러닝 비전과 GPS 기술을 활용하여 실시간 골퍼 추적,
              <br className="block md:hidden" /> 맞춤 클럽 추천,{" "}
              <br className="hidden md:block" />
              플레이 영상 자동 저장을 제공함으로써
              <br className="block md:hidden" /> 골프장의 운영 효율성과 고객
              만족도를 높입니다.
            </p>

            <button
              className="
    w-[193px] h-[44px] 
    md:w-[296px] md:h-[58px] 
    border-[1.5px] border-white 
    rounded-[1000px] 
    bg-transparent 
    text-white 
    font-montserrat font-medium 
    text-[14px] md:text-[24px]
    leading-[140%] tracking-[0%]
    flex items-center justify-center text-center
    md:gap-[10px]
    pt-[12px] pb-[12px] md:*:pr-[28px] md:pl-[28px]
    hover:bg-white hover:text-black 
    transition-colors
  "
              onClick={() => (window.location.href = "/product")}
            >
              Explore
              <span className="font-montserrat md:font-black text-[14px] md:text-[24px] leading-[140%] tracking-[0%] ml-1">
                FieldBOOK
              </span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
