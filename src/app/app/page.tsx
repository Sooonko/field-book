"use client";

import PageLayout from "../../components/PageLayout";

// Placeholder for social media icons
const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
    {children}
  </div>
);

const AppStoreButton = () => (
  <button className="bg-black text-white py-2 px-4 rounded-lg text-sm">
    App Store
  </button>
);

const GooglePlayButton = () => (
  <button className="bg-black text-white py-2 px-4 rounded-lg text-sm">
    Google Play
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

const AppPage = () => {
  return (
    <PageLayout isSolid={true}>
      <header className="bg-teal-600 text-white py-12">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold">
              FieldBOOK 앱과 함께라면
              <br />
              플레이의 여운은 계속됩니다.
            </h1>
            <p className="mt-4">
              모든 순간을 영상으로 즐기고 공유하세요. 지금 FieldBOOK 앱을
              다운로드하세요.
            </p>
            <div className="mt-6 space-x-4">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="w-48 h-96 bg-gray-200 rounded-3xl"></div>
          </div>
        </div>
      </header>

      <main>
        <AppInfoSection
          title="스코어 카드"
          description="라운딩 스코어의 통계를 플레이별 다시 보고, 스코어 카드 이미지를 저장하세요."
        >
          <div className="flex space-x-4">
            <div className="w-1/2 h-80 bg-gray-300 rounded-xl"></div>
            <div className="w-1/2 h-80 bg-gray-300 rounded-xl"></div>
          </div>
        </AppInfoSection>

        <section className="py-12 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold">녹화 영상 재생</h2>
          <p className="text-gray-600 mt-2">
            오늘의 라운드가 끝나도, 그날의 스윙과 퍼팅을 앱 속에 간직하세요.
          </p>
          <div className="container mx-auto mt-8 w-full h-96 bg-gray-300 rounded-lg"></div>
        </section>

        <AppInfoSection
          title="위치 기반 재생"
          description="녹화된 영상은 코스 맵의 해당 지점에 자동 태그됩니다. 핀치 투 줌으로 코스 맵을 확대/축소하고 라운드 정보를 바로 확인하세요."
          reverse={true}
        >
          <div className="flex space-x-4">
            <div className="w-1/2 h-80 bg-gray-300 rounded-xl"></div>
            <div className="w-1/2 h-80 bg-gray-300 rounded-xl"></div>
          </div>
        </AppInfoSection>

        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold">간편 공유</h2>
          <p className="text-gray-600 mt-2">
            최고의 순간을 하이라이트로 간단하게 공유하고 SNS로 나누세요.
          </p>
          <div className="container mx-auto mt-8 flex justify-center space-x-4">
            <SocialIcon>f</SocialIcon>
            <SocialIcon>ig</SocialIcon>
            <SocialIcon>t</SocialIcon>
            <SocialIcon>X</SocialIcon>
            <SocialIcon>yt</SocialIcon>
          </div>
        </section>

        <section className="py-12 bg-gray-100">
          <div className="container mx-auto flex items-center">
            <div className="w-1/2">
              <h2 className="text-4xl font-bold">
                라운드는 끝나도
                <br />
                그날의 여운은 계속됩니다.
              </h2>
              <div className="mt-6 space-x-4">
                <AppStoreButton />
                <GooglePlayButton />
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="w-48 h-96 bg-gray-200 rounded-3xl"></div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default AppPage;
