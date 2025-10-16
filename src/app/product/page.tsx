"use client";

import { useState, useEffect } from "react";
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

const navLinks = [
  {
    href: "#auto-follow",
    text: "Auto - Follow",
    description:
      "AI 비전으로 사용자를 실시간 인식하여 완전한 핸즈프리 주행을 제공합니다.",
  },
  {
    href: "#smart-guide",
    text: "스마트 클럽 가이드",
    description: "공략 거리 별 최적의 클럽 추천을 제공합니다.",
  },
  {
    href: "#swing-analysis",
    text: "스윙 녹화 / 분석",
    description: "스윙과 샷 위치를 촬영·저장 후 언제든 재생하세요.",
  },
  {
    href: "#no-go-zone",
    text: "장애물 감지",
    description:
      "AI 비전과 정밀 GPS로 장애물을 감지하고 제한 구역을 자동 회피합니다.",
  },
  {
    href: "#driving-history",
    text: "주행 능력",
    description:
      "최대 25° 경사도 등판이 가능한 고출력 모터와 미끄럼 방지 전자식 브레이크로 언덕 주행을 안전하게 제어합니다.",
  },
  { href: "#ip5x", text: "IP5X 방수" },
  { href: "#battery", text: "대용량 배터리" },
  { href: "#101screen", text: "10.1 인치 터치 스크린" },
  { href: "#fieldbook-app", text: "FieldBOOK  App" },
  { href: "#jivon", text: "제원" },
  { href: "#jvyv", text: "주요 기능" },
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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -75% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [navLinks]);

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
      {/* end_nem */}
      <div className="container mx-auto flex mt-10 gap-[100px]">
        {/* Sticky Sidebar */}
        <aside className="w-1/4 py-8 sticky top-24 h-screen self-start">
          <h2 className="font-sans text-[28px] leading-[1.4] tracking-normal mb-[48px]">
            <span className="font-extrabold">FieldBook</span>
            <span className="font-medium"> Technology</span>
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`hover:text-black transition-all duration-300 ease-in-out ${
                    activeSection === link.href.substring(1)
                      ? "font-pretes font-black text-[26px] leading-[1.4] tracking-normal underline text-black"
                      : "font-pretes font-medium text-[20px] leading-[1.4] tracking-normal text-gray-600"
                  }`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 py-8 ">
          {navLinks.map((link) => (
            <section key={link.href} id={link.href.substring(1)}>
              <div
                className="w-[964px] h-[542px] rounded-[20px] bg-gray-100 p-10 "
                style={{ marginTop: "160px" }}
              ></div>
              <h3
                style={{ marginTop: "32px" }}
                className="font-sans font-extrabold text-[32px] leading-[1.4] tracking-normal pb-3"
              >
                {link.text}
              </h3>
              <p className="font-pretes font-medium text-xl leading-[1.4] tracking-normal text-[#626262]">
                {link.description}
              </p>
            </section>
          ))}
        </main>
      </div>
    </PageLayout>
  );
};

export default ProductPage;
