"use client";

import { useState } from "react";
import PageLayout from "../../components/PageLayout";
import Image from "next/image";

const features = [
  { icon: "/auto-follow.svg", title: "Auto-Follow" },
  { icon: "/club-guide.svg", title: "클럽 가이드" },
  { icon: "/swing-record.svg", title: "스윙 녹화/분석" },
  { icon: "/obstacle-detect.svg", title: "장애물 감지" },
  { icon: "/hill-drive.svg", title: "경사/험로 주행" },
  { icon: "/ip5x.svg", title: "IP5X 방수" },
  { icon: "/battery.svg", title: "대용량 배터리" },
  { icon: "/fieldbook.svg", title: "FieldBOOK App" },
  { icon: "/touchscreen.svg", title: "10.1인치 터치 스크린" },
  { icon: "/golfmap.svg", title: "전 세계 4만개 코스맵" },
];

// Placeholder for icons used in the page
const IconPlaceholder = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
    <span className="text-xs">{name}</span>
  </div>
);

const ProductPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <PageLayout isSolid={true}>
      <section className="relative w-full h-[800px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute text-white z-10"
          style={{
            left: "180px",
            top: "583px",
          }}
        >
          <h1 className="text-4xl font-pretendard font-black text-[48px] leading-[140%] tracking-[0%]">
            AI로 골퍼의 모든 순간을
          </h1>
          <p className="text-lg mt-2 font-pretendard font-medium text-[24px] leading-[140%] tracking-[0%]">
            가장 쉬운 골프 비서, 필드북과 모든 라운딩을 함께 하세요.
          </p>
        </div>

        {/* 🌑 Overlay (optional for better contrast) */}
        <div className="absolute inset-0 bg-black/20" />
      </section>

      <div className="relative w-full">
        {/* 🔼 Toggle arrow button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-20 -translate-x-1/2 top-5 z-20 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </button>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex justify-center w-full bg-white py-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[40px] text-center">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-3"
                >
                  <div className="relative w-[120px] h-[120px] bg-[#F5F5F5] rounded-[12px] flex items-center justify-center opacity-100">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={65}
                      height={68}
                      className="object-contain opacity-100"
                    />
                  </div>
                  <p className="font-pretendard font-medium text-[18px] leading-[140%] text-center text-gray-800 tracking-normal">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex mt-10">
        {/* Sticky Sidebar */}
        <aside className="w-1/4 py-8 pr-8 sticky top-24 h-screen self-start">
          <h2 className="font-bold mb-4">FieldBook Technology</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <a href="#auto-follow" className="hover:text-black">
                Auto - Follow
              </a>
            </li>
            <li>
              <a href="#smart-guide" className="hover:text-black">
                스마트 클럽 가이드
              </a>
            </li>
            <li>
              <a href="#swing-analysis" className="hover:text-black">
                스윙 녹화/분석
              </a>
            </li>
            <li>
              <a href="#no-go-zone" className="hover:text-black">
                No-Go Zone / 장애물 감지
              </a>
            </li>
            <li>
              <a href="#driving-history" className="hover:text-black">
                주행 이력
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 py-8">
          <section id="auto-follow" className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Auto - Follow</h3>
            <p className="text-gray-600 mb-4">
              카트가 플레이어를 자동으로 따라다니며 촬영합니다.
            </p>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </section>
          <section id="smart-guide" className="mb-16">
            <h3 className="text-2xl font-bold mb-4">스마트 클럽 가이드</h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </section>
          <section id="swing-analysis" className="mb-16">
            <h3 className="text-2xl font-bold mb-4">스윙 녹화 / 분석</h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </section>
          <section id="no-go-zone" className="mb-16">
            <h3 className="text-2xl font-bold mb-4">
              No-Go Zone / 장애물 감지
            </h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </section>
          <section id="driving-history" className="mb-16">
            <h3 className="text-2xl font-bold mb-4">주행 이력</h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
};

export default ProductPage;
