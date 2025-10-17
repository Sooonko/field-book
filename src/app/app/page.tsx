"use client";
import Image from "next/image";
import PageLayout from "../../components/PageLayout";

// Placeholder for social media icons
const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
    {children}
  </div>
);

const AppStoreButton = () => (
  <button>
    {" "}
    <img
      src="/app-store-badge.svg"
      alt="App store"
      className="w-full h-auto object-contain"
    />
  </button>
);

const GooglePlayButton = () => (
  <button>
    <img
      src="/google-play-badge.svg"
      alt="Play store"
      className="w-full h-auto object-contain"
    />
  </button>
);

const AppInfoSection = ({
  title,
  description,
  children,
  reverse = false,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  reverse?: boolean;
}) => (
  <section
    className={`py-12 container mx-auto flex flex-col md:flex-row items-center ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className="md:w-1/2 p-4">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="md:w-1/2 p-4">{children}</div>
  </section>
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
      <header className="bg-[#1E5E61] text-white  h-[800px] opacity-100">
        <div className="max-w-[1400px] mx-auto h-full flex items-end justify-between px-12">
          {/* Left: Phone Mockup */}
          <div className="w-1/2 flex justify-center">
            <div className="rounded-[40px] shadow-xl flex items-center justify-center">
              <img
                src="/app_bnnr_img.svg"
                alt="App Mockup"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: Text and Buttons */}
          <div className="w-1/2 pl-12 pb-20">
            <h1 className="text-4xl font-bold leading-snug">
              FieldBOOK 앱과 함께라면
              <br />
              플레이의 여운은 계속됩니다.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-100">
              그날의 스코어를 다시 확인하고, 기억에 남는 순간을 스윙지점과 함께
              영상으로 제공합니다. 지금 FieldBOOK 앱을 다운로드 하세요.
            </p>
            <div className="mt-8 flex space-x-4">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="w-full h-[600px] flex items-end justify-center px-16">
          <div className="max-w-[1400px] w-full flex items-center justify-center">
            <div className="flex space-x-10">
              <div
                className="rounded-[40px]  shadow-xl flex items-center justify-center"
                style={{ width: "320px" }}
              >
                <img src="/score_card_1.svg" alt="Score Detail" />
              </div>
              <div
                className="rounded-[40px] shadow-xl flex items-center justify-center"
                style={{ width: "320px" }}
              >
                <img src="/score_card_2.svg" alt="Round Record" />
              </div>
            </div>

            {/* Right: Text */}
            <div className="w-[450px] pl-12 flex flex-col gap-3">
              <h2 className="font-pretendard font-extrabold text-[40px] leading-[140%] tracking-[0%] text-[#222222]">
                스코어 카드
              </h2>
              <p className="font-pretendard font-medium text-[22px] leading-[140%] tracking-[0%] text-[#626262]">
                라운드별 스코어와 통계로 플레이를 다시 보고, 기억하고 싶은
                순간까지 간직하세요
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold">녹화 영상 재생</h2>
          <p className="text-gray-600 mt-2">
            오늘의 라운드가 끝나도, 그날의 스윙과 퍼팅을 앱 속에 간직하세요.
          </p>

          <div className="relative container mx-auto mt-8 w-full max-w-2xl h-96 flex items-center justify-center">
            {/* Phone frame background */}
            <img
              src="/phone_frame.svg"
              alt="Phone Frame"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />

            {/* Video inside the screen */}
            <video
              className="absolute rounded-lg"
              style={{
                top: "15%", // 👈 adjust this depending on your frame's screen position
                left: "11%", // 👈 adjust this too
                width: "78%", // 👈 width and height of the actual screen area
                height: "70%",
                objectFit: "cover",
              }}
              src="/main_bg_video.mp4"
              controls
            />
          </div>
        </section>

        <section className="py-20 bg-white flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 ">
          {/* LEFT TEXT SECTION */}
          <div className="max-w-[1400px] w-full flex items-center justify-start">
            <div className="text-center lg:text-left max-w-[462px] mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold">위치 기반 재생</h2>
              <p className="text-gray-600 mt-2">
                녹화된 영상은 코스 맵의 해당 지점에 자동 태그됩니다. 지도에서
                마커를 눌러 그 순간의 영상과 라운드 정보를 바로 확인하세요.
              </p>
            </div>

            <div className="relative flex items-end justify-center gap-0">
              {/* Left image */}
              <img
                src="/lbp_1.svg"
                alt="App Screenshot 1"
                className="w-56 h-auto object-contain translate-y-6 z-0"
              />

              {/* Middle image */}
              <img
                src="/lbp_2.svg"
                alt="App Screenshot 2"
                className="w-56 h-auto object-contain z-10 ml-[200px]"
              />

              {/* Right image slightly forward */}
              <img
                src="/lbp_3.svg"
                alt="App Screenshot 3"
                className="w-56 h-auto object-contain translate-y-6 z-20 ml-[-450px]"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 flex flex-col items-center justify-center text-center">
          <div className="flex space-x-10 mb-10">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="w-20 h-20 flex items-center justify-center"
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

          <h2 className="text-3xl font-bold">간편 공유</h2>
          <p className="text-gray-600 mt-2">
            최고의 순간을 하이라이트로 간편하게 저장하고 SNS로 나누세요.
          </p>
        </section>

        <section className="relative flex flex-col md:flex-row items-center justify-center w-full  py-15 px-6 md:px-20">
          {/* Left: Phone Image */}
          <div className="relative flex justify-center md:justify-end w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative w-[300px] md:w-[400px]">
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
          <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-6">
              라운드는 끝나도 <br />
              <span className="font-extrabold">그날의 여운은 계속됩니다.</span>
            </h2>

            <div className="flex justify-center md:justify-start items-center space-x-4">
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={140}
                height={45}
                className="object-contain"
              />
              <Image
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                width={140}
                height={45}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-10 absolute bottom-3 right-4">
            © 주식회사 포트버시 ALL RIGHTS RESERVED
          </p>
        </section>
      </main>
    </PageLayout>
  );
};

export default AppPage;
