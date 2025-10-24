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
            <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              {t("main_title")}
            </h1>

            <p className="max-w-2xl text-lg md:text-2xl font-extrabold leading-snug font-pretendard mb-6">
              모든 순간을 함께하는 프리미엄{" "}
              <span className="font-black font-montserrat text-xl md:text-3xl tracking-tight">
                AI Caddie
              </span>
            </p>
            <p className="max-w-4xl text-start md:text-xl font-normal leading-snug text-white mb-10 md:text-left font-pretendard">
              딥러닝 비전과 GPS 기술을 활용하여 실시간 골퍼 추적,
              <br /> 맞춤 클럽 추천, 플레이 영상 자동 저장을 제공함으로써
              골프장의 운영 효율성과 고객 만족도를 높입니다.
            </p>

            <button
              className="w-full md:w-[296px] h-[58px] border-2 border-white rounded-full bg-transparent text-white font-medium text-lg md:text-xl font-montserrat hover:bg-white hover:text-black transition-colors"
              onClick={() => (window.location.href = "/product")}
            >
              Explore <span className="font-black ml-1">FieldBook</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
