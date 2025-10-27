"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Image from "next/image";

const slides = [
  {
    id: 0,
    title: "AI 로봇 팔의 모든 순간을",
    desc: "깊은 분석, 완벽한 제어, 그리고 보다 넓은 로봇의 가능성을 연다.",
    image: "/golf_0.svg",
  },
  {
    id: 1,
    title: "스마트 제어 시스템",
    desc: "AI 기반 알고리즘으로 정밀한 동작 제어와 안정성을 확보합니다.",
    image: "/golf_1.svg",
  },
  {
    id: 2,
    title: "인간 중심 디자인",
    desc: "직관적인 인터페이스와 자연스러운 협업이 가능한 로봇 솔루션.",
    image: "/golf_2.svg",
  },
  {
    id: 3,
    title: "모듈형 구조",
    desc: "다양한 환경과 산업에 맞춰 확장 가능한 구조를 제공합니다.",
    image: "/golf_3.svg",
  },
  {
    id: 4,
    title: "미래를 향한 기술",
    desc: "AI 로봇 제어 기술로 더 나은 자동화 세상을 만듭니다.",
    image: "/golf_5.svg",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const delay = 4000;

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      let start = Date.now();
      interval = setInterval(() => {
        const elapsed = Date.now() - start;
        setProgress((elapsed / delay) * 100);
        if (elapsed >= delay) start = Date.now();
      }, 50);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    if (isPlaying) swiperRef.current.autoplay.stop();
    else swiperRef.current.autoplay.start();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full overflow-visible py-16">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setProgress(0);
        }}
        centeredSlides
        slidesPerView={"auto"}
        spaceBetween={20} // Peek effect
        pagination={false}
        autoplay={{ delay, disableOnInteraction: false }}
        className="heroSwiper w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="!w-[85%] sm:!w-[85%] md:!w-[90%] transition-all duration-300 md:pt-2"
          >
            <div
              className="flex flex-col  md:flex-row items-center md:items-end justify-between rounded-[48px] overflow-hidden px-4 md:px-20 shadow-sm relative bg-gradient-to-r from-[#EAEAEA] via-[#FDFDFD] to-[#D3D3D3] py-14 min-h-[600px]"
              // style={{ height: "500px" }}
            >
              {/* Text */}
              <div className="flex flex-col gap-4 z-10 order-1 md:order-1 text-center md:text-left">
                <h2 className="text-[28px] md:text-[48px] leading-[1.4] font-black text-gray-900">
                  {slide.title}
                </h2>
                <p className="text-[18px] md:text-[24px] leading-[1.4] font-medium text-gray-900">
                  {slide.desc}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center md:justify-end items-center flex-shrink-0 mt-6 md:mt-0 order-2 md:order-2 w-full md:w-auto">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={420}
                  height={300}
                  className="w-full h-full max-h-[400px] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination */}
      <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-[10px] z-20">
        <div className="flex items-center gap-[12px] bg-gray-100 rounded-[1000px] px-[20px] py-[8px] w-[188px] h-[40px]">
          <div className="relative w-[80px] h-[8px] bg-gray-300 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gray-800 transition-all duration-75"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <button
          onClick={toggleAutoplay}
          className="flex items-center justify-center bg-gray-100 rounded-full w-[40px] h-[40px] hover:bg-gray-200 transition"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-[14px] h-[14px] text-gray-700"
            >
              <path d="M8 5h3v14H8V5zm5 0h3v14h-3V5z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-[14px] h-[14px] text-gray-700"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
