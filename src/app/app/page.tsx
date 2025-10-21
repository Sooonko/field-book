"use client";
import Image from "next/image";
import PageLayout from "../../components/PageLayout";
import FooterModal from "@/components/Footer";

const AppStoreButton = () => (
  <button className="w-36 md:w-auto">
    <img
      src="/app-store-badge.svg"
      alt="App store"
      className="w-full h-auto object-contain"
    />
  </button>
);

const GooglePlayButton = () => (
  <button className="w-36 md:w-auto">
    <img
      src="/google-play-badge.svg"
      alt="Play store"
      className="w-full h-auto object-contain"
    />
  </button>
);

const logos = [
  { src: "/fb_logo.svg", alt: "Facebook" },
  { src: "/insta_logo.svg", alt: "Instagram" },
  { src: "/tiktok_logo.svg", alt: "TikTok" },
  { src: "/x_logo.svg", alt: "X" },
  { src: "/youtube_logo.svg", alt: "YouTube" },
];

const AppPage = () => {
  return (
    <PageLayout isSolid={true}>
      <header className="bg-[#1E5E61] text-white h-auto lg:h-[800px] py-16 lg:py-0">
        <div className="max-w-[1400px] mx-auto h-full flex flex-col lg:flex-row items-end justify-center lg:justify-between px-6 sm:px-12">
          {/* Left: Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="rounded-[40px] shadow-xl flex items-center justify-center max-w-sm md:max-w-md lg:max-w-full">
              <img
                src="/app_bnnr_img.svg"
                alt="App Mockup"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: Text and Buttons */}
          <div className="w-full lg:w-1/2 lg:pl-12 pb-0 lg:pb-20 text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              FieldBOOK 앱과 함께라면
              <br />
              플레이의 여운은 계속됩니다.
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-100">
              그날의 스코어를 다시 확인하고, 기억에 남는 순간을 스윙지점과 함께
              영상으로 제공합니다. 지금 FieldBOOK 앱을 다운로드 하세요.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="w-full pt-16 lg:py-0 lg:h-[600px] flex items-end justify-center px-4 md:px-16">
          <div className="max-w-[1400px] w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
            {/* Left: Score Cards */}
            <div className="flex flex-col sm:flex-row items-end gap-6 sm:gap-10 order-2 lg:order-1 mt-8 lg:mt-0">
              <div className="rounded-[40px] shadow-xl w-[280px] sm:w-[320px]">
                <img
                  src="/score_card_1.svg"
                  alt="Score Detail"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-[40px] shadow-xl w-[280px] sm:w-[320px]">
                <img
                  src="/score_card_2.svg"
                  alt="Round Record"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-[450px] lg:pl-12 flex flex-col gap-3 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold"> 스코어 카드</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                라운드별 스코어와 통계로 플레이를 다시 보고, 기억하고 싶은
                순간까지 간직하세요
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-100 text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold">녹화 영상 재생</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            오늘의 라운드가 끝나도, 그날의 스윙과 퍼팅을 앱 속에 간직하세요.
          </p>

          <div className="relative container mx-auto mt-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl aspect-[9/16] sm:aspect-video flex items-center justify-center">
            {/* Phone frame background */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/phone_frame.svg"
                alt="Phone Frame"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>

            {/* Video inside the screen */}
            {/* <div className="absolute w-[78%] h-[70%] top-[15%] left-[11%]">
              <video
                className="w-full h-full object-cover rounded-lg"
                src="/main_bg_video.mp4"
                controls
              />
            </div> */}
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 gap-12">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-12">
            <div className="text-center lg:text-left max-w-[462px] w-full order-1 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold">위치 기반 재생</h2>
              <p className="text-gray-600 mt-2">
                녹화된 영상은 코스 맵의 해당 지점에 자동 태그됩니다. 지도에서
                마커를 눌러 그 순간의 영상과 라운드 정보를 바로 확인하세요.
              </p>
            </div>

            <div className="w-full lg:w-auto order-2 lg:order-2 flex justify-center">
              <img
                src="/3layer_.png"
                alt="App Screenshot 1"
                className="w-full max-w-md md:max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 md:py-20 flex flex-col items-center justify-center text-center px-4">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold">간편 공유</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            최고의 순간을 하이라이트로 간편하게 저장하고 SNS로 나누세요.
          </p>
        </section>

        <section className="relative w-full py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
            {/* Left: Phone Image */}
            <div className="relative flex justify-center md:justify-end w-full md:w-1/2 mb-10 md:mb-0">
              <div className="relative w-[250px] sm:w-[300px] md:w-[400px]">
                <Image
                  src="/phone_1.svg"
                  alt="App Screenshot"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: Text and Buttons */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:pl-10 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-6">
                라운드는 끝나도 <br />
                <span className="font-extrabold">
                  그날의 여운은 계속됩니다.
                </span>
              </h2>

              <div className="flex justify-center md:justify-start items-center space-x-4">
                <button className="w-36 md:w-auto">
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={140}
                    height={45}
                    className="object-contain"
                  />
                </button>
                <button className="w-36 md:w-auto">
                  <Image
                    src="/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={140}
                    height={45}
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-10 text-center md:text-right w-full max-w-7xl mx-auto pr-4">
            © 주식회사 포트버시 ALL RIGHTS RESERVED
          </p>
        </section>
        <FooterModal isOpen={true} onClose={() => { }} />
      </main>
    </PageLayout>
  );
};

export default AppPage;
