"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import FooterModal from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ProductFeatureList from "@/components/ProductFeatureList";

const features = [
  { icon: "/auto-follow.svg", title: "Auto-Follow" },
  { icon: "/club-guide.svg", title: "클럽 가이드" },
  { icon: "/swing-record.svg", title: "스윙 녹화/분석" },
  { icon: "/obstacle-detect.svg", title: "장애물 감지" },
  { icon: "/hill-drive.svg", title: "경사/험로 주행" },
  { icon: "/ip5x.svg", title: "IP5X 방수" },
  { icon: "/battery.svg", title: "대용량 배터리" },
  { icon: "/fieldbookApp.png", title: "FieldBOOK App" },
  { icon: "/touchscreen.svg", title: "10.1인치 터치 스크린" },
  { icon: "/golfmap.svg", title: "전 세계 4만개 코스맵" },
];

const navLinks = [
  {
    href: "#auto-follow",
    text: "Auto - Follow",
    description:
      "AI 비전으로 사용자를 실시간으로 인식해 완전한 핸즈프리 주행을 제공합니다.",
  },
  {
    href: "#smart-guide",
    text: "스마트 클럽 가이드",
    description: "공략거리별 최적 클럽을 추천합니다.",
  },
  {
    href: "#swing-analysis",
    text: "스윙 녹화 / 분석",
    description: "스윙과 샷 위치를 촬영·저장하고 언제든 재생하세요.",
  },
  {
    href: "#no-go-zone",
    text: "장애물 감지",
    description:
      "AI 비전과 정밀 GPS로 장애물과 제한구역을 실시간 자동 감지·회피합니다.",
  },
  {
    href: "#driving-history",
    text: "주행 능력",
    description:
      "고출력 모터로 최대 25° 경사를 등판합니다. 미끄럼 방지 전자식 브레이크로 언덕 주 행을 안전하게 제어합니다.",
  },
  { href: "#ip5x", text: "IP5X 방수" },
  { href: "#battery", text: "대용량 배터리" },
  { href: "#101screen", text: "10.1 인치 터치 스크린" },
  { href: "#fieldbook-app", text: "FieldBOOK  App" },
  { href: "#jivon", text: "제원" },
  { href: "#jvyv", text: "주요 기능" },
];
const specs = [
  {
    title: "Dimensions",
    value: "XX × XX × XX cm",
  },
  {
    title: "Screen",
    value: "10.1” Touch LCD",
  },
  {
    title: "Weight",
    value: "XX kg",
  },
  {
    title: "Follow Distance",
    value: "XX × XX × XX cm",
  },
  {
    title: "Input Power",
    value: "XX V",
  },
  {
    title: "Climbing Slope (Max)",
    value: "30°",
  },
  {
    title: "Battery Capacity",
    value: "XX Wh",
  },
  {
    title: "Charging Time",
    value: "XX h",
  },
  {
    title: "Waterproof / Dust",
    value: "IP5X",
  },
  {
    title: "Max Speed",
    value: "8 km/h",
  },
  {
    title: "Endurance",
    value: "36 holes per charging",
  },
  {
    title: "App Compatibility",
    value: "iOS & Android",
  },
  {
    title: "Connectivity",
    value: "LTE Cat-M1, Wi-Fi",
  },
  {
    title: "Braking",
    value: "Automatic EBS",
  },
];

const ProductPage = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showButton, setShowButton] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <section className="relative w-full overflow-hidden">
        <Header variant={"solid"} />
        <main className=" flex flex-col items-center mt-[70px]">
          <HeroSlider />
        </main>
      </section>
      <div
        className={`transition-all duration-500 overflow-hidden opacity-100" 
          }`}
      >
        <div className="flex justify-center w-full bg-white py-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16 text-center">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-[150px] h-[161px] space-y-4"
              >
                {item.icon.endsWith(".png") ? (
                  <div className="relative w-[120px] h-[120px] bg-gray-100 rounded-[12px]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={41}
                      height={72}
                      className="absolute top-[24px] left-[40px]"
                    />
                  </div>
                ) : (
                  <div className="relative w-[120px] h-[120px] bg-gray-100 rounded-lg flex items-center justify-center p-7">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={64} // adjust as needed
                      height={64} // adjust as needed
                      objectFit="contain"
                    />
                  </div>
                )}

                <p className="font-pret font-medium text-[18px] leading-[140%] text-gray-900 text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 lg:px-10 bg-[#FBFBFE]">
        <div className="w-full max-w-[1440px] flex flex-col lg:flex-row mt-10 gap-12 lg:gap-20 px-4 lg:px-10 mx-auto">
          <aside className="w-full lg:w-[336px] max-w-[336px] py-2 sticky h-auto lg:h-screen self-start top-10">
            <div className="flex justify-between items-center lg:block">
              <h2 className="flex text-[28px] leading-[140%] tracking-[0%] mb-0 lg:mb-12">
                <span className="font-montserrat font-extrabold text-gray-900">
                  FieldBook
                </span>
                <span className="font-montserrat font-medium text-gray-900">
                  {" \u00A0"}Technology
                </span>
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
              className={`flex flex-col gap-6 text-base mt-6 lg:mt-0 ${
                open ? "block" : "hidden"
              } lg:flex`}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)} // Close menu on link click for mobile
                    className={`transition-all duration-300 ease-in-out block align-middle ${
                      activeSection === link.href.substring(1)
                        ? "font-pretendard font-black text-[26px] leading-[140%] underline text-gray-900"
                        : "font-pretendard font-medium text-[20px] leading-[140%] text-gray-500"
                    }`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          <main className="flex-1 min-w-0 w-full mx-auto py-8">
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
                  className="w-full  rounded-[20px] max-w-[964px] mx-auto p-6 md:p-9"
                >
                  <div className="w-full aspect-video rounded-2xl bg-gray-100 p-4 md:p-10 shadow-lg"></div>
                  <h3 className="font-montserrat font-[800] text-[32px] leading-[140%] tracking-[0%] text-[#222222] mt-8 mb-4">
                    {link.text}
                  </h3>
                  <p className="font-pretendard font-[500] text-[20px] leading-[140%] tracking-[0%] text-[#626262]">
                    {link.description}
                  </p>
                </section>
              )
            )}
            <section
              key={"ip5x"}
              id={"ip5x"}
              className="w-full  rounded-[20px] max-w-[964px] mx-auto p-6 md:p-9"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
                <div
                  className="w-full lg:w-1/3 aspect-square rounded-2xl bg-gray-100 shadow-lg"
                  style={{ height: "440px" }}
                />
                <div className="w-full lg:w-2/3 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                    IP5X 방수
                  </h2>
                  <h3 className="font-pretendard font-[500] text-[24px] leading-[140%] tracking-[0%] text-[#222222] mb-6">
                    IP5X 방진·방수 설계로 어디서나 안정적으로 주행합니다.
                  </h3>
                  <p className="font-pretendard text-[20px] leading-[140%] text-gray-700">
                    <span className="font-bold text-gray-900">
                      · 먼지 차단 설계
                    </span>{" "}
                    - 미세먼지 유입 최소화
                    <br />
                    <span className="font-bold text-gray-900">
                      · 내구성 강화
                    </span>{" "}
                    - 사계절에 최적화된 견고한 설계
                    <br />
                    <span className="font-bold text-gray-900">
                      · 현장 신뢰성
                    </span>{" "}
                    - 전 구간에서 안정적으로 작동
                    <br />
                    <span className="font-bold text-gray-900">
                      · 간편한 유지관리
                    </span>{" "}
                    - 내부 오염 감소로 점검·유지 비용 최소화
                  </p>
                </div>
              </div>
            </section>
            <section
              key={"battery"}
              id={"battery"}
              className="w-full rounded-[20px] max-w-[964px] mx-auto p-6 md:p-9"
            >
              <div className="flex flex-col lg:flex-row-reverse items-start justify-center gap-6 lg:gap-14">
                <div className="relative w-full lg:w-1/3 h-auto aspect-square rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
                  <Image
                    src="/battery.svg"
                    alt="대용량 배터리"
                    layout="fill"
                    objectFit="contain"
                    className="p-8"
                  />
                </div>
                <div className="w-full lg:w-2/3 text-center lg:text-left">
                  <h3 className="font-montserrat font-[800] text-[32px] leading-[140%] tracking-[0%] text-[#222222] mt-8 mb-4">
                    대용량 배터리
                  </h3>
                  <h3 className="text-xl md:text-2xl font-medium mb-6">
                    대용량 탈착식 배터리로 1회 충전 시<br />
                    36홀 이상 연속 플레이가 가능 합니다.
                  </h3>
                  <p className="font-pretendard text-[20px] leading-[140%] text-gray-700">
                    <span className="font-bold text-gray-900">
                      · 긴 사용 시간
                    </span>{" "}
                    - 한 번 충전만으로 36홀 이상 연속 플레이
                    <br />
                    <span className="font-bold text-gray-900">
                      · 탈착식 설계
                    </span>{" "}
                    - 예비 배터리 교체로 무중단 운용
                    <br />
                    <span className="font-bold text-gray-900">
                      · 고출력·안정 전원 공급
                    </span>{" "}
                    - 주행·녹화·통신을 동시에 안정적으로 지원
                    <br />
                    <span className="font-bold text-gray-900">
                      · 간편한 충전·관리
                    </span>{" "}
                    - 충전 부담을 줄이는 실용적 솔루션
                  </p>
                </div>
              </div>
            </section>
            <section
              key={"101screen"}
              id={"101screen"}
              className="w-full  rounded-[20px] max-w-[964px] mx-auto p-6 md:p-9"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                <div className="relative w-full lg:w-2/5 h-auto aspect-square rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
                  <Image
                    src="/101screen.svg"
                    alt="10.1인치 터치 스크린"
                    layout="fill"
                    objectFit="contain"
                    className="p-8"
                  />
                </div>
                <div className="w-full lg:w-3/5 text-center lg:text-left">
                  <h2 className="font-pretendard font-extrabold text-[32px] leading-[140%] tracking-[0%] text-[#222222] mb-3">
                    10.1인치 터치스크린
                  </h2>
                  <p className="font-pretendard font-medium text-[20px] leading-[140%] tracking-[0%] text-[#626262]">
                    10.1인치 대형 터치스크린으로 <br />전 세계 4만 개 코스를
                    제공합니다.
                  </p>
                </div>
              </div>
            </section>
            <section
              key={"fieldbook-app"}
              id={"fieldbook-app"}
              className="w-full  rounded-[20px] max-w-[964px] mx-auto p-6 md:p-9"
            >
              <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16">
                <div className="relative w-full lg:w-1/3 h-[530px] lg:h-[530px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/product_fb_app.svg"
                    alt="10.1인치 터치 스크린"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="w-full lg:w-2/3 text-center lg:text-left">
                  <h2 className="font-montserrat font-extrabold text-[32px] leading-[140%] text-gray-900 mb-3">
                    FieldBOOK App
                  </h2>

                  <h3 className="font-pretendard font-medium text-[24px] leading-[140%] text-gray-900 mb-6">
                    클럽 거리·카트 자동 연동, 스코어·스윙 영상 재생·분석까지 한
                    번에 제공합니다.
                  </h3>

                  <p className="font-pretendard text-[20px] leading-[140%] text-gray-700">
                    <span className="font-bold text-gray-900">
                      · 간편 로그인·대시보드
                    </span>{" "}
                    - 오늘의 라운드와 최근 기록 한눈에 확인
                    <br />
                    <span className="font-bold text-gray-900">
                      · 정밀 스코어보드
                    </span>{" "}
                    - 홀별 스코어 및 전체 통계 제공
                    <br />
                    <span className="font-bold text-gray-900">
                      · 지도 기반 녹화·재생
                    </span>{" "}
                    - 코스 맵 녹화 지점 표시 및 즉시 재생
                    <br />
                    <span className="font-bold text-gray-900">
                      · 원탭 공유
                    </span>{" "}
                    - 하이라이트 영상을 링크로 즉시 전송
                  </p>
                </div>
              </div>
            </section>
            <section
              key={"jivon"}
              id={"jivon"}
              className="w-full rounded-[20px] max-w-[964px] mx-auto p-6 md:p-9"
            >
              <div className="mb-12 text-start">
                <h2 className="font-pretendard font-extrabold text-[32px] leading-[140%] text-gray-900 mb-4">
                  제원
                </h2>
                <p className="font-pretendard font-medium text-[24px] leading-[140%] text-gray-900">
                  상세 사양과 성능 지표를 한눈에 확인하세요.
                </p>
                <p className="font-pretendard font-normal text-[20px] leading-[140%] text-gray-700 mt-3">
                  강력한 배터리로 하루 종일 운행하고, 고출력 구동과 정밀 제어로
                  가파른 경사와 험로에서도 안정적으로 주행합니다. IP5X 방진
                  설계와 실시간 연결성으로 야외 환경에서도 신뢰할 수 있는 운영을
                  제공합니다.
                </p>
              </div>
              <div
                className=" rounded-[20px] opacity-100"
                style={{
                  width: "964px",
                  height: "384px",
                  paddingTop: "28px",
                  paddingRight: "36px",
                  paddingBottom: "28px",
                  paddingLeft: "36px",
                }}
              >
                <div className="grid grid-cols-4 gap-x-12 gap-y-[48px]">
                  {specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-[4px]"
                      style={{
                        width: "223px",
                        height: "46px",
                        opacity: 1,
                      }}
                    >
                      <p
                        className="text-[14px] text-gray-700 font-[500] leading-[140%]"
                        style={{
                          fontFamily: "Pretendard, sans-serif",
                          fontStyle: "Medium",
                          letterSpacing: "0%",
                        }}
                      >
                        {spec.title}
                      </p>
                      <p
                        className="text-[16px] text-gray-900 font-[500] leading-[140%]"
                        style={{
                          fontFamily: "Pretendard, sans-serif",
                          fontStyle: "Medium",
                          letterSpacing: "0%",
                        }}
                      >
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section
              key={"jvyv"}
              id={"jvyv"}
              className="w-full  rounded-[20px] max-w-[964px] mx-auto p-6 md:p-9"
            >
              <div className="mb-12 text-start">
                <h2 className="font-pretendard font-extrabold text-[32px] leading-[140%] text-gray-900 mb-4">
                  주요 기능
                </h2>
                <p className="font-pretendard font-medium text-[24px] leading-[140%] text-gray-700">
                  필드북이 제공하는 25가지 스마트 기능.
                  <br />
                  플레이 부터 운영까지, 현장에 필요한 기능을 쉽게 확인할 수
                  있습니다.
                </p>
              </div>
              <ProductFeatureList />
            </section>
            <div style={{ marginRight: "30px" }}>
              {" "}
              <FooterModal isOpen={true} onClose={() => {}} />
            </div>
          </main>
        </div>
      </div>

      {!showButton ? null : (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed z-20 w-[52px] h-[52px] right-[32px] bottom-[32px] bg-[#EFEFEF] rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition"
        >
          <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
        </button>
      )}
    </div>
  );
};

export default ProductPage;
