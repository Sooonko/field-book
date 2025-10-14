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
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <Header />
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center">
          <div
            className="absolute flex flex-col items-start"
            style={{ bottom: "80px", left: "76px" }}
          >
            <h1
              className="font-bold tracking-wider"
              style={{ fontSize: "60px", marginBottom: "8px" }}
            >
              {t("main_title")}
            </h1>
            <p className="text-xl md:text-2xl mt-4 mb-6 font-light">
              {t("subtitle")}
            </p>
            <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-8 whitespace-pre-line text-start">
              {t("description")}
            </p>
            <button
              className="bg-transparent border border-white rounded-full text-white font-bold py-3 px-8 text-sm hover:bg-white hover:text-black transition-colors duration-300"
              onClick={() => (window.location.href = "/product")}
            >
              {t("explore_button")}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
