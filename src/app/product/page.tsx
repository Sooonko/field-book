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
          {navLinks.map((link) =>
            link.href.includes("jivon") ||
            link.href.includes("jvyv") ||
            link.href.includes("ip5x") ||
            link.href.includes("battery") ||
            link.href.includes("101screen") ||
            link.href.includes("fieldbook-app") ? null : (
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
            )
          )}
          <section
            key={"ip5x"}
            id={"ip5x"}
            className="container mx-auto flex justify-center py-24"
          >
            <div className="flex flex-row items-center gap-[60px]">
              {/* Left Box */}
              <div className="w-[360px] h-[440px] rounded-[20px] bg-gray-100 flex-shrink-0" />

              {/* Right Content */}
              <div className="flex flex-col max-w-lg">
                <h2 className="font-montserrat font-extrabold text-[32px] leading-[140%] tracking-[0px] mb-2">
                  IP5X 방수
                </h2>
                <h3 className="font-pretendard font-medium text-[24px] leading-[140%] tracking-[0px] mb-5">
                  IP5X 방진·방수 설계로 어디서나 안정적으로 주행합니다.
                </h3>
                <p className="font-pretendard font-normal text-[20px] leading-[140%] tracking-[0px] text-gray-600">
                  · 먼지 차단 설계 <br />- 미세먼지 유입 최소화 · 내구성 강화{" "}
                  <br />- 사계절에 최적화 된 견고한 설계 · 현장 신뢰성 <br />-
                  라운드 전 구간에서 안전적 작동 보장 · 간편 유지관리 <br />-
                  내부 오염 감소로 점검·유지 비용 최소화
                </p>
              </div>
            </div>
          </section>
          <section
            key={"battery"}
            id={"battery"}
            className="container mx-auto flex justify-center py-24"
          >
            <div className="flex flex-row items-center gap-[60px]">
              {/* Right Content */}
              <div className="flex flex-col max-w-lg">
                <h2 className="font-montserrat font-extrabold text-[32px] leading-[140%] tracking-[0px] mb-2">
                  대용량 배터리
                </h2>
                <h3 className="font-pretendard font-medium text-[24px] leading-[140%] tracking-[0px] mb-5">
                  대용량 탈착식 배터리로 1회 충전 시 36홀 이상 연속 플레이가
                  가능 합니다.
                </h3>
                <p className="font-pretendard font-normal text-[20px] leading-[140%] tracking-[0px] text-gray-600">
                  · 긴 사용시간 - 한 번 충전으로 36홀 이상 연속 주행 가능
                  <br />· 탈착식 설계 - 예비 배터리 교체로 무중단 운영 가능{" "}
                  <br />· 고출력·안정공급 - 주행·녹화
                  <br />
                  ·통신을 동시에 안정 지원 <br />· 간편 충전·관리 - 충전 부담을
                  줄이는 실용적 충전 솔루션
                </p>
              </div>
              {/* Left Box */}
              <div className="w-[360px] h-[440px] rounded-[20px] bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/battery.svg"
                  alt="Description"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </section>
          <section
            key={"101screen"}
            id={"101screen"}
            className="container mx-auto flex justify-center py-24"
          >
            <div className="flex flex-row items-center gap-[60px]">
              {/* Left Box */}
              <div className="w-[360px] h-[440px] rounded-[20px] bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/101screen.svg"
                  alt="Description"
                  className="object-contain w-full h-full"
                />
              </div>
              {/* Right Content */}
              <div className="flex flex-col max-w-lg">
                <h2 className="font-montserrat font-extrabold text-[32px] leading-[140%] tracking-[0px] mb-2">
                  10.1인치 터치 스크린
                </h2>

                <p className="font-pretendard font-normal text-[20px] leading-[140%] tracking-[0px] text-gray-600">
                  10.1인치 대형 터치 스크린을 통해 전세계 4만개 코스를
                  제공합니다
                </p>
              </div>
            </div>
          </section>
          <section
            key={"fieldbook-app"}
            id={"fieldbook-app"}
            className="container mx-auto flex justify-center py-24"
          >
            <div className="flex flex-row items-center gap-[60px]">
              {/* Right Content */}
              <div className="flex flex-col max-w-lg">
                <h2 className="font-montserrat font-extrabold text-[32px] leading-[140%] tracking-[0px] mb-2">
                  FieldBOOK App
                </h2>
                <h3 className="font-pretendard font-medium text-[24px] leading-[140%] tracking-[0px] mb-5">
                  FieldBOOK 앱으로 사용자별 클럽 거리와 카트를 자동 연동하고,
                  스코어 기록부터 위치 기반 스윙 영상 재생·분석까지 한 번에
                  제공합니다.
                </h3>
                <p className="font-pretendard font-normal text-[20px] leading-[140%] tracking-[0px] text-gray-600">
                  · 간편한 로그인·대시보드 - 로그인하면 오늘의 라운드와 최근
                  기록을 한눈에 확인 <br />· 정밀 스코어보드 - 홀별 스코어와
                  전체 통계를 제공 <br />· 지도 기반 녹화 지점 및 영상 재생 -
                  코스 맵에 녹화 지점이 표시 및 즉시 재생 <br />· 바로 공유
                  가능한 영상·하이라이트 - 링크로 즉시 공유
                </p>
              </div>
              {/* Left Box */}
              <div className=" flex items-center justify-center overflow-hidden">
                <img
                  src="/fieldBookApp.svg"
                  alt="Description"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </section>
          <section
            key={"jivon"}
            id={"jivon"}
            className="px-6 md:px-16 py-12 bg-white text-gray-900"
          >
            {/* 제원 Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-extrabold mb-6">제원</h2>
              <p className="mb-8 text-gray-600">
                상세 사양과 성능 지표를 한눈에 확인하세요.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between p-4 border rounded-lg bg-gray-50"
                  >
                    <span className="font-medium">{spec.label}</span>
                    <span className="font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            key={"jvyv"}
            id={"jvyv"}
            className="px-6 md:px-16 py-12 bg-white text-gray-900"
          >
            {/* 주요 기능 Section */}
            <div>
              <h2 className="text-3xl font-extrabold mb-6">주요 기능</h2>
              <p className="mb-8 text-gray-600">
                필드북이 제공하는 25가지 스마트 기능. 플레이 부터 운영까지,
                전방에 필요한 기능을 쉽게 확인할 수 있습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featureSections.map((feature, idx) => (
                  <div key={idx} className="p-6 border rounded-lg bg-gray-50">
                    <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {feature.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
};

export default ProductPage;
