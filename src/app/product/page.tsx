"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import FooterModal from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ProductFeatureList from "@/components/ProductFeatureList";

const features = [
  { icon: "/auto-follow.svg", title: "Auto-Follow" },
  { icon: "/club-guide.svg", title: "클럽 가이드" },
  { icon: "/rec.svg", title: "스윙 녹화/분석" },
  { icon: "/swing-record.svg", title: "장애물 감지" },
  { icon: "/obstacle-detect.svg", title: "경사/험로 주행" },
  { icon: "/hill-drive.svg", title: "IP5X 방진/방수" },
  { icon: "/ip5x.svg", title: "대용량 배터리" },
  { icon: "/fieldbookApp.png", title: "FieldBOOK App" },
  { icon: "/touchscreen.svg", title: "10.1인치 터치스크린" },
  { icon: "/golfmap.svg", title: "전 세계 4만개 코스맵" },
];

const navLinks = [
  {
    href: "#auto-follow",
    text: "Auto - Follow",
    description:
      "AI 비전으로 사용자를 실시간으로 인식해 완전한 핸즈프리 주행을 제공합니다.",
    url: "/videos/auto-follow.mp4",
  },
  {
    href: "#smart-guide",
    text: "스마트 클럽 가이드",
    description: "공략거리별 최적 클럽을 추천합니다.",
    url: "/videos/smart-guide.mp4",
  },
  {
    href: "#swing-analysis",
    text: "스윙 녹화/분석",
    description: "스윙과 샷 위치를 촬영·저장하고 언제든 재생하세요.",
    url: "/videos/save-analyse.mp4",
  },
  {
    href: "#no-go-zone",
    text: "No-Go Zone/장애물 감지",
    description:
      "AI 비전과 정밀 GPS로 장애물과 제한구역을 실시간 자동 감지·회피합니다.",
    url: "/videos/no-gozone.mp4",
  },
  {
    href: "#driving-history",
    text: "주행 능력",
    description:
      "고출력 모터로 최대 25° 경사를 등판합니다. 미끄럼 방지 전자식 브레이크로 언덕 주행을 안전하게 제어합니다.",
    url: "/videos/drive-history.mp4",
  },
  { href: "#ip5x", text: "IP5X 방진/방수" },
  { href: "#battery", text: "대용량 배터리" },
  { href: "#101screen", text: "10.1 인치 터치스크린" },
  { href: "#fieldbook-app", text: "FieldBOOK  App" },
  { href: "#jivon", text: "제원" },
  { href: "#jvyv", text: "주요 기능" },
];
const specs = [
  {
    title: "Dimensions",
    value: "W70 × D120 × H90 (cm)",
  },
  {
    title: "Screen",
    value: "10.1” Touch LCD",
  },
  {
    title: "Weight",
    value: "22 kg",
  },
  {
    title: "Follow Distance",
    value: "1.5M ~ 3M",
  },
  {
    title: "Input Power",
    value: "36 V",
  },
  {
    title: "Climbing Slope (Max)",
    value: "30°",
  },
  {
    title: "Battery Capacity",
    value: "720 Wh",
  },
  {
    title: "Charging Time",
    value: "8 h",
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
  const [isSticky, setIsSticky] = useState(false);
  const asideRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const aside = asideRef.current;
      const footer = document.getElementById("sideContent");
      if (!aside) return;

      const asideRect = aside.getBoundingClientRect();
      const footerTop = footer ? footer.getBoundingClientRect().top : 0;

      // aside дэлгэцийн дээд талд очоогүй бол fixed биш

      if (asideRect.top > 0) {
        setIsFixed(false);
        setIsBottom(false);
        return;
      }
      if (footerTop > 0) {
        setIsFixed(false);
        setIsBottom(false);
      } else {
        setIsFixed(true);
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
      if (!asideRef.current) return;

      const asideTop = asideRef.current.offsetTop; // aside эхлэх байрлал
      const asideHeight = asideRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Slider + Features хэсэг дууссаны дараа stick болох логик
      if (
        scrollY > asideTop &&
        scrollY + windowHeight < asideTop + asideHeight + 100
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
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
        <div className="flex justify-center w-full bg-white py-12 md:py-24 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-16 ">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-row md:flex-col items-center md:items-center justify-start md:justify-center space-x-4 md:space-x-0 md:space-y-4"
              >
                {item.icon.endsWith(".png") ? (
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-lg">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ) : (
                  <div className="relative w-[60px] h-[60px] md:w-[120px] md:h-[120px] bg-gray-100 rounded-lg flex items-center justify-center p-4 md:p-7">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={64}
                      height={64}
                      objectFit="contain"
                    />
                  </div>
                )}

                <p className="font-pretendard font-medium text-base md:text-lg leading-[140%] text-gray-900 text-left md:text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 md:bg-[#FBFBFE]">
        <div className="w-full max-w-[1440px] flex flex-col lg:flex-row mt-10 md:gap-12 lg:gap-20 px-4 lg:px-10 mx-auto">
          <aside
            ref={asideRef}
            className={`w-full lg:w-[336px] max-w-full lg:max-w-[336px] py-2 lg:py-0 transition-all duration-300
          ${
            isFixed
              ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md p-4"
              : ""
          }
          ${isBottom ? "relative" : ""}
          lg:sticky lg:top-10 h-auto lg:h-screen self-start`}
          >
            <h2 className="flex text-2xl md:text-[28px] leading-[140%] tracking-[0%] mb-0 lg:mb-12">
              <span className="font-montserrat font-extrabold text-gray-900">
                FieldBOOK
              </span>
              <span className="font-montserrat font-medium text-gray-900">
                {"\u00A0"}Technology
              </span>
            </h2>

            {/* Desktop list (хуучин) */}
            <ul
              className={`hidden lg:flex flex-col gap-6 text-base mt-6 lg:mt-0`}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      const id = link.href.substring(1);
                      const target = document.getElementById(id);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`transition-all duration-300 ease-in-out block align-middle ${
                      activeSection === link.href.substring(1)
                        ? "font-pretendard font-black text-xl md:text-2xl lg:text-[26px] leading-[140%] underline text-gray-900"
                        : "font-pretendard font-medium text-lg md:text-xl lg:text-[20px] leading-[140%] text-gray-500"
                    }`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile horizontal scroll */}
            <ul
              className={`flex lg:hidden overflow-x-auto gap-[12px] py-[19px] w-[375px] h-[60px] `}
            >
              {navLinks.map((link) => (
                <li key={link.href} className="flex-shrink-0">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault(); // default jump-ыг болиулна
                      setOpen(false);

                      const sectionId = link.href.substring(1);
                      const target = document.getElementById(sectionId);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`flex items-center justify-center h-full text-center transition-all duration-300 ease-in-out ${
                      activeSection === link.href.substring(1)
                        ? "font-pretendard font-black text-[15px] leading-[140%] underline text-gray-900"
                        : "font-pretendard font-medium text-[15px] leading-[140%] text-[#626262]"
                    }`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <main
            id="sideContent"
            className="flex-1 min-w-0 w-full mx-auto md:py-8"
          >
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
                  className="w-full  rounded-[20px] max-w-[964px] md:mx-auto py-6 md:p-9"
                >
                  <div className="w-full aspect-video rounded-2xl bg-gray-100 p-4 md:p-10 shadow-lg overflow-hidden relative">
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src={link.url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false} // 필요시 true로 변경 가능
                    >
                      귀하의 브라우저는 이 게시물을 지원하지 않습니다.
                    </video>
                  </div>{" "}
                  <h3 className="font-montserrat font-[800] text-2xl md:text-3xl leading-[140%] tracking-[0%] text-[#222222] mt-8 mb-4">
                    {link.text}
                  </h3>
                  <p className="font-pretendard font-[500] text-base md:text-lg lg:text-xl leading-[140%] tracking-[0%] text-[#626262]">
                    {link.description}
                  </p>
                </section>
              )
            )}
            <section
              key={"ip5x"}
              id={"ip5x"}
              className="w-full  rounded-[20px]  max-w-[964px] mx-auto py-6 md:p-9"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
                <div className="w-full h-[410px] lg:w-1/3 aspect-square rounded-2xl bg-gray-100 shadow-lg overflow-hidden">
                  <img
                    src="/ip5x-section.svg"
                    alt="description"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full lg:w-2/3 text-start lg:text-left">
                  <h2 className="font-montserrat font-[800] text-[20px] leading-[140%] tracking-[0%] text-[#222222] mt-8 mb-4 md:text-[32px] md:leading-[140%]">
                    IP5X 방진/방수
                  </h2>
                  <h3 className="font-pretendard font-[500] text-[16px] leading-[140%] tracking-[0%] text-[#222222] mb-6 md:text-[24px] md:leading-[140%]">
                    IP5X 방진/방수 설계로 어디서나 안정적으로 주행합니다.
                  </h3>

                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-[15px] md:text-[20px] font-[700] leading-[140%] text-[#626262]  flex flex-wrap">
                      · 먼지 차단 설계&nbsp;{"  "}
                      <span className="font-[400] text-[#626262] ">
                        - 미세먼지 유입 최소화
                      </span>
                    </p>

                    <p className="text-[15px] md:text-[20px] font-[700] leading-[140%] text-[#626262]  flex flex-wrap">
                      · 내구성 강화&nbsp;{" "}
                      <span className="font-[400] text-[#626262] ">
                        - 사계절에 최적화된 견고한 설계
                      </span>
                    </p>

                    <p className="text-[15px] md:text-[20px] font-[700] leading-[140%] text-[#626262]  flex flex-wrap">
                      · 현장 신뢰성&nbsp;{" "}
                      <span className="font-[400] text-[#626262] ">
                        - 전 구간에서 안정적으로 작동
                      </span>
                    </p>

                    <p className="text-[15px] md:text-[20px]  font-[700] leading-[140%] text-[#626262]  flex flex-wrap">
                      · 간편한 유지관리&nbsp;{" "}
                      <span className="font-[400] text-[#626262]">
                        - 내부 오염 감소로 점검·유지 비용 최소화
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              key={"battery"}
              id={"battery"}
              className="w-full rounded-[20px] max-w-[964px] mx-auto py-6 md:p-9 "
            >
              <div
                className="flex flex-col lg:flex-row-reverse  items-center
 justify-center gap-6 lg:gap-14"
              >
                <div className="relative w-full lg:w-1/3 h-[200px] md:h-auto lg:h-auto aspect-square rounded-[20px] lg:rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg">
                  <Image
                    src="/battery.svg"
                    alt="대용량 배터리"
                    layout="fill"
                    objectFit="contain"
                    className="md:p-8"
                  />
                </div>

                <div className="w-full lg:w-2/3 text-start lg:text-left">
                  <h3 className="font-montserrat font-[800] text-[20px] md:text-[32px] leading-[140%] tracking-[0%] text-[#222222] mt-8 mb-4">
                    대용량 배터리
                  </h3>
                  <h3 className="font-pretendard font-[500] text-[16px] md:text-[24px] leading-[140%] tracking-[0%] text-[#222222] mb-6">
                    대용량 탈착식 배터리로 1회 충전 시<br />
                    36홀 이상 연속 플레이가 가능합니다.
                  </h3>

                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-[15px] md:text-[20px]  font-[700] leading-[140%] text-[#626262] flex flex-wrap">
                      · 긴 사용 시간&nbsp;&nbsp;
                      <span className="font-[400] text-[#626262]">
                        - 한 번 충전만으로 36홀 이상 연속 플레이
                      </span>
                    </p>

                    <p className="text-[15px] md:text-[20px]  font-[700] leading-[140%] text-[#626262] flex flex-wrap">
                      · 탈착식 설계&nbsp;&nbsp;
                      <span className="font-[400] text-[#626262]">
                        - 예비 배터리 교체로 무중단 운용
                      </span>
                    </p>

                    <div className="flex flex-col gap-2 items-start">
                      <p className="text-[15px] md:text-[20px]  font-[700] leading-[140%] text-[#626262]">
                        · 고출력·안정 전원 공급{" "}
                        <span className="font-[400] leading-[140%] text-[#626262]">
                          - 주행·녹화·통신을 동시에 안정적으로 지원
                        </span>
                      </p>
                    </div>

                    <p className="text-[15px] md:text-[20px] font-[700] leading-[140%] text-[#626262] flex flex-wrap">
                      · 간편한 충전·관리&nbsp;&nbsp;
                      <span className="font-[400] text-[#626262]">
                        - 충전 부담을 줄이는 실용적 솔루션
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              key={"101screen"}
              id={"101screen"}
              className="w-full  rounded-[20px] max-w-[964px] mx-auto py-6 md:p-9"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                <div className="relative w-[400px]  rounded-[48px] bg-gray-100 overflow-hidden flex justify-center items-end ">
                  <Image
                    src="/101screen.svg"
                    alt="10.1인치 터치스크린"
                    width={396}
                    height={278}
                    className="object-contain opacity-100"
                  />
                </div>

                <div className="w-full lg:w-3/5 text-start lg:text-left ">
                  <h3 className="font-montserrat font-[800] text-[20px] md:text-[32px] leading-[140%] tracking-[0%] text-[#222222] md:mt-8 md:mb-4 mb-2">
                    10.1인치 터치스크린
                  </h3>

                  <p className="font-pretendard font-medium text-base text-[16px] md:text-[20px] lg:text-xl leading-[140%] tracking-[0%] text-[#626262]">
                    10.1인치 대형 터치스크린으로 전 세계 4만 개 코스를
                    제공합니다.
                  </p>
                </div>
              </div>
            </section>
            <section
              key={"fieldbook-app"}
              id={"fieldbook-app"}
              className="w-full  rounded-[20px] max-w-[964px] mx-auto py-6 md:p-9"
            >
              <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16">
                <div className="relative w-full lg:w-1/3 h-[420px] lg:h-[530px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/product_fb_app.svg"
                    alt="10.1인치 터치스크린"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="w-full lg:w-2/3 text-start lg:text-left">
                  <h2 className="font-montserrat font-extrabold text-[20px] md:text-[32px] leading-[140%] text-gray-900 mb-3">
                    FieldBOOK App
                  </h2>
                  <h3 className="font-pretendard font-[500] text-[16px] leading-[140%] tracking-[0%] text-[#222222] mb-6 md:text-[24px] md:leading-[140%]">
                    클럽 거리·카트 자동 연동, 스코어·스윙 영상 재생·분석까지 한
                    번에 제공합니다.
                  </h3>

                  <p className="font-pretendard text-[15px] md:text-[20px] leading-[140%] text-[#626262]">
                    <span className="font-bold text-[#626262]">
                      · 간편 로그인·대시보드
                    </span>{" "}
                    - 오늘의 라운드와 최근 기록 한눈에 확인
                    <br />
                    <span className="font-bold ">· 정밀 스코어보드</span> - 홀별
                    스코어 및 전체 통계 제공
                    <br />
                    <span className="font-bold ">· 지도 기반 녹화·재생</span> -
                    코스 맵 녹화 지점 표시 및 즉시 재생
                    <br />
                    <span className="font-bold ">· 원탭 공유</span> - 하이라이트
                    영상을 링크로 즉시 전송
                  </p>
                </div>
              </div>
            </section>
            <section
              key={"jivon"}
              id={"jivon"}
              className="w-full rounded-[20px] max-w-[964px] mx-auto py-6 md:p-9"
            >
              <div className="mb-12 text-start">
                <h2 className="font-montserrat font-extrabold text-[20px] md:text-[32px] leading-[140%] text-gray-900 mb-3">
                  제원
                </h2>
                <h3 className="font-pretendard font-[600] text-[16px] leading-[140%] tracking-[0%] text-[#222222] mb-6 md:text-[24px] md:leading-[140%]">
                  상세 사양과 성능 지표를 한눈에 확인하세요.
                </h3>

                <p className="font-pretendard font-normal text-[15px] md:text-[20px] lg:text-xl leading-[140%] text-gray-700 mt-3">
                  강력한 배터리로 하루 종일 운행하고, 고출력 구동과 정밀 제어로
                  가파른 경사와 험로에서도 안정적으로 주행합니다. IP5X 방진
                  설계와 실시간 연결성으로 야외 환경에서도 신뢰할 수 있는 운영을
                  제공합니다.
                </p>
              </div>
              <div className="rounded-[20px] pb-7 md:p-9 bg-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 md:gap-y-10 md:py-[16px] md:px-[20px] py-[10px] px-[12px] rounded-[20px]">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <p className="text-sm text-gray-700 font-medium">{spec.title}</p>
                      <p
                        className="text-base text-gray-900 font-medium leading-[140%]"
                        style={{
                          fontFamily: "Pretendard, sans-serif",
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
              className="w-full  rounded-[20px] max-w-[964px] mx-auto py-6 md:p-9"
            >
              <div className="mb-12 text-start">
                <h2 className="font-montserrat font-extrabold text-[20px] md:text-[32px] leading-[140%] text-gray-900 mb-3">
                  주요 기능
                </h2>

                <p className="font-pretendard font-normal text-[16px] md:text-[24px] lg:text-xl leading-[140%] text-gray-700 mt-3">
                  필드북이 제공하는 25가지 스마트 기능.
                  <br />
                  플레이 부터 운영까지, 현장에 필요한 기능을 쉽게 확인할 수
                  있습니다.
                </p>
              </div>
              <ProductFeatureList />
            </section>
            <div>
              {" "}
              <FooterModal isOpen={true} onClose={() => {}} />
            </div>
          </main>
        </div>
      </div>

      {!showButton ? null : (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed z-20 w-[52px] h-[52px] right-[16px] bottom-[16px] lg:right-[32px] lg:bottom-[32px] bg-[#EFEFEF] rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition"
        >
          <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
        </button>
      )}
    </div>
  );
};

export default ProductPage;
