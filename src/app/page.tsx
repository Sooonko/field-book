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
                <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-tight font-montserrat mb-2 text-justify">
                  {t("main_title")}
                </h1>
                <p
                  className="text-justify max-w-2xl font-pretendard  text-xl md:text-2xl lg:text-3xl font-extrabold leading-[140%] tracking-[0%] md:text-start"
                  style={{ fontStyle: "ExtraBold" }}
                >
                  모든 순간을 함께하는 프리미엄&nbsp;
                  <span
                    className="font-black font-montserrat text-xl md:text-2xl lg:text-3xl leading-[140%] tracking-[0%]"
                    style={{ fontStyle: "Black" }}
                  >
                    AI Caddie
                  </span>
                </p>
              </div>
              <p
                className="text-justify font-pretendard  mx-auto text-lg md:text-xl lg:text-2xl font-normal leading-[140%] tracking-[0%] text-white md:text-start font-pretendard"
                style={{ fontStyle: "Regular" }}
              >
                딥러닝 비전과 GPS 기술을 활용하여 실시간 골퍼 추적, 맞춤 클럽
                추천, <br />
                플레이 영상 자동 저장을 제공함으로써 골프장의 운영 효율성과 고객
                만족도를 높입니다.
              </p>
            </div>
            <button
              className="w-full md:w-[296px] h-[58px] px-7 py-3 border-2 border-white rounded-full bg-transparent text-white font-medium text-lg md:text-xl lg:text-2xl leading-[140%] tracking-[0%] font-montserrat hover:bg-white hover:text-black transition-colors duration-300"
              onClick={() => (window.location.href = "/product")}
            >
              Explore&nbsp;
              <span className="font-black text-lg md:text-xl lg:text-2xl leading-[140%] tracking-[0%] font-montserrat">
                FieldBook
              </span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
