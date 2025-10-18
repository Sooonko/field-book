"use client";

import { useState, useEffect } from "react";
import PageLayout from "../../components/PageLayout";
import Image from "next/image";
import Header from "@/components/Header";

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
const specs = [
  { label: "Dimensions", value: "XX × XX × XX cm" },
  { label: "Screen", value: '10.1" Touch LCD' },
  { label: "Weight", value: "XX kg" },
  { label: "Follow Distance", value: "XX ~ XX cm" },
  { label: "Input Power", value: "XX V" },
  { label: "Climbing Slope (Max)", value: "30°" },
  { label: "Battery Capacity", value: "XX Wh" },
  { label: "Charging Time", value: "XX h" },
  { label: "Waterproof / Dust", value: "IPX5" },
  { label: "Max Speed", value: "8 km/h" },
  { label: "Braking", value: "36 holes per charging" },
  { label: "App Compatibility", value: "iOS & Android" },
  { label: "Connectivity", value: "LTE Cat-M1, Wi-Fi" },
  { label: "Braking", value: "Automatic EBS" },
];
const featureSections = [
  {
    title: "디자인 및 디스플레이",
    items: [
      "10.1” LCD 터치 스크린",
      "원터치 탈부착 화면",
      "패널 위치 조정 가능",
    ],
  },
  {
    title: "주행 성능 및 안전",
    items: [
      "AI 센서 기반 주차 추적",
      "3500 고유관제 회로",
      "원격 모드 및 긴급 기능",
      "No-Zone 감지 및 브레이크",
      "자동 안전벨트 감지",
    ],
  },
  {
    title: "GPS 및 코스 내비게이션",
    items: [
      "고정밀 GPS 기반 코스 표시",
      "그래픽 맵 화면 표시 (옵션)",
      "Full Hole View & 좌표 감지",
      "빠른 GPS 연결",
      "40,000여 홀 데이터 제공",
    ],
  },
  {
    title: "플레이 분석 및 영상 기능",
    items: [
      "스윙 분석 자동 기록",
      "특정 구간 스윙 저장",
      "스윙의 데이터 기록 가능",
      "영상 미리보기 제공",
      "SNS 공유 가능",
    ],
  },
  {
    title: "스마트 툴팁 가이드 & UI",
    items: [
      "직관적 화면 전환 기능",
      "편리한 메뉴 탐색",
      "멀티터치 디스플레이",
      "iOS/Android 앱 연동",
    ],
  },
  {
    title: "배터리 및 연결성",
    items: [
      "36홀 이상 주행 가능한 대용량 배터리",
      "OTA 무선 업데이트 지원",
      "Wi-Fi 및 LTE Cat-M1 내장",
    ],
  },
];

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
    <div>
      <section className="relative w-full h-screen overflow-hidden">
        <Header variant={"transparent"} />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-16 left-4 sm:bottom-20 sm:left-8 md:bottom-24 md:left-16 lg:bottom-[150px] lg:left-[150px] z-10 flex flex-col items-start text-white px-4">
          <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-snug sm:leading-tight md:leading-[130%] lg:leading-[140%] tracking-normal lg:tracking-[0%]">
            AI로 골퍼의 모든 순간을
          </h1>

          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-2xl font-medium leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
            가장 쉬운 골프 비서, 필드북과 모든 라운딩을 함께 하세요.
          </p>
        </div>
      </section>

      <div className="relative w-full">
        {/* 🔼 Toggle arrow button */}

        <div
          className={`transition-all duration-500 overflow-hidden  "max-h-[1000px] opacity-100" 
          }`}
        >
          <div className="flex justify-center w-full bg-white py-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 text-center">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-3"
                >
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-[#F5F5F5] rounded-lg flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      layout="fill"
                      objectFit="contain"
                      className="p-4"
                    />
                  </div>
                  <p className="font-pretendard font-medium text-base md:text-lg text-center text-gray-800">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* end_nem */}
      <div className="w-full flex flex-col lg:flex-row mt-10 gap-8 lg:gap-12 px-4 lg:px-10 bg-[#FBFBFE]">
        <div className="container w-full flex flex-col lg:flex-row mt-10 gap-8 lg:gap-12 px-4 lg:px-10 mx-auto">
          <aside className="w-full lg:w-[336px] max-w-[336px] py-2 sticky h-auto lg:h-screen self-start top-10">
            <div className="flex justify-between items-center lg:block">
              <h2 className="font-sans flex text-2xl lg:text-3xl leading-normal tracking-normal mb-0 lg:mb-12">
                <span className="font-extrabold">FieldBook</span>
                <span className="font-medium">{" \u00A0"}Technology</span>
              </h2>
              <button
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>

            <ul
              className={`flex flex-col gap-6 text-base text-gray-600 mt-6 lg:mt-0 ${
                open ? "block" : "hidden"
              } lg:flex`}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)} // Close menu on link click for mobile
                    className={`hover:text-black transition-all duration-300 ease-in-out block ${
                      activeSection === link.href.substring(1)
                        ? "font-bold text-xl lg:text-2xl underline text-black"
                        : "font-medium text-lg lg:text-xl text-gray-500"
                    }`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className=" w-full mx-auto py-8">
            {navLinks.map((link) =>
              link.href.includes("jivon") ||
              link.href.includes("jvyv") ||
              link.href.includes("ip5x") ||
              link.href.includes("battery") ||
              link.href.includes("101screen") ||
              link.href.includes("fieldbook-app") ? null : (
                <section
                  key={link.href}
                  id={link.href.substring(1)}
                  className="mb-24 scroll-mt-20"
                >
                  <div className="w-full aspect-video rounded-2xl bg-gray-100 p-4 md:p-10 shadow-lg"></div>
                  <h3 className="font-sans font-extrabold text-2xl md:text-3xl mt-8 mb-4">
                    {link.text}
                  </h3>
                  <p className="font-pretes font-medium text-lg md:text-xl text-gray-600">
                    {link.description}
                  </p>
                </section>
              )
            )}
            <section
              key={"ip5x"}
              id={"ip5x"}
              className="py-12 lg:py-24 scroll-mt-20"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                <div className="w-full lg:w-1/2 h-auto aspect-square rounded-2xl bg-gray-100 shadow-lg" />
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                    IP5X 방수
                  </h2>
                  <h3 className="text-xl md:text-2xl font-medium mb-6">
                    IP5X 방진·방수 설계로 어디서나 안정적으로 주행합니다.
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    · 먼지 차단 설계: 미세먼지 유입 최소화로 내구성 강화
                    <br />· 사계절 최적화: 견고한 설계로 현장 신뢰성 보장
                    <br />· 간편 유지관리: 내부 오염 감소로 점검 비용 최소화
                  </p>
                </div>
              </div>
            </section>
            <section
              key={"battery"}
              id={"battery"}
              className="py-12 lg:py-24 scroll-mt-20"
            >
              <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16">
                <div className="relative w-full lg:w-1/2 h-auto aspect-square rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
                  <Image
                    src="/battery.svg"
                    alt="대용량 배터리"
                    layout="fill"
                    objectFit="contain"
                    className="p-8"
                  />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                    대용량 배터리
                  </h2>
                  <h3 className="text-xl md:text-2xl font-medium mb-6">
                    1회 충전으로 36홀 이상 연속 플레이가 가능합니다.
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    · 긴 사용시간: 한 번 충전으로 36홀 이상 연속 주행
                    <br />· 탈착식 설계: 예비 배터리 교체로 무중단 운영
                    <br />· 고출력 안정공급: 주행, 녹화, 통신 동시 지원
                    <br />· 간편 충전: 실용적인 충전 솔루션
                  </p>
                </div>
              </div>
            </section>
            <section
              key={"101screen"}
              id={"101screen"}
              className="py-12 lg:py-24 scroll-mt-20"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                <div className="relative w-full lg:w-1/2 h-auto aspect-square rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
                  <Image
                    src="/101screen.svg"
                    alt="10.1인치 터치 스크린"
                    layout="fill"
                    objectFit="contain"
                    className="p-8"
                  />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                    10.1인치 터치 스크린
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    10.1인치 대형 터치 스크린을 통해 전세계 4만개 코스를
                    제공합니다.
                  </p>
                </div>
              </div>
            </section>
            <section
              key={"fieldbook-app"}
              id={"fieldbook-app"}
              className="py-12 lg:py-24 scroll-mt-20"
            >
              <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16">
                <div className="relative w-full lg:w-1/2 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/fieldBookApp.svg"
                    alt="FieldBOOK App"
                    layout="fill"
                    objectFit="contain"
                    className="p-8"
                  />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                    FieldBOOK App
                  </h2>
                  <h3 className="text-xl md:text-2xl font-medium mb-6">
                    스코어 기록부터 스윙 영상 분석까지 한 번에 제공합니다.
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    · 간편 로그인: 오늘의 라운드와 최근 기록 확인
                    <br />· 정밀 스코어보드: 홀별 스코어와 전체 통계 제공
                    <br />· 지도 기반 영상 재생: 코스 맵에 녹화 지점 표시 및
                    즉시 재생
                    <br />· 영상 공유: 링크로 간편하게 공유
                  </p>
                </div>
              </div>
            </section>
            <section
              key={"jivon"}
              id={"jivon"}
              className="px-4 md:px-8 py-12 lg:py-24 bg-gray-50 rounded-2xl scroll-mt-20"
            >
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-extrabold mb-4">제원</h2>
                <p className="text-lg text-gray-600">
                  상세 사양과 성능 지표를 한눈에 확인하세요.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
                {specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between p-5 border-b-2 border-gray-200"
                  >
                    <span className="font-medium text-gray-700">
                      {spec.label}
                    </span>
                    <span className="font-semibold text-gray-900">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
            <section
              key={"jvyv"}
              id={"jvyv"}
              className="px-4 md:px-8 py-12 lg:py-24 scroll-mt-20"
            >
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-extrabold mb-4">주요 기능</h2>
                <p className="text-lg text-gray-600">
                  필드북이 제공하는 25가지 스마트 기능. 플레이 부터 운영까지,
                  전방에 필요한 기능을 쉽게 확인할 수 있습니다.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featureSections.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-6 border rounded-lg bg-gray-50 shadow-md hover:shadow-xl transition-shadow"
                  >
                    <h3 className="font-bold text-xl mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {feature.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-20 bottom-20 z-20 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition"
      >
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
      </button>
    </div>
  );
};

export default ProductPage;
