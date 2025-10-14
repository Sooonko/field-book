'use client';

import PageLayout from '../../components/PageLayout';

const AboutUsPage = () => {
  return (
    <PageLayout>
      <main className="container mx-auto px-6">
        {/* Portrush Section */}
        <section className="py-16">
          <h1 className="text-4xl font-bold">PORTRUSH</h1>
          <p className="text-lg mt-2">AI mobility + Trusted Technology + Smart Golf</p>
          <p className="max-w-3xl mx-auto mt-4 text-gray-600">
            (주)포트러시는 검증된 기술력과 축적된 필드 경험으로, 골프장의 운영 효율과 골퍼의 만족을 동시에 높입니다. 우리는 AI 비전-GNSS 모바일 연동 기술을 기반으로 스마트 골프 모빌리티를 개발, 제공합니다.
          </p>
          <div className="mt-8 w-full h-64 bg-gray-300 rounded-lg"></div>
        </section>

        {/* Our Goal Section */}
        <section className="py-16 flex items-center">
          <div className="w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-8">Our Goal</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">신뢰성</h3>
                <p className="text-sm text-gray-600">안정성이 검증된 내구성과 안전 제어로...</p>
              </div>
              <div>
                <h3 className="font-bold">지능형</h3>
                <p className="text-sm text-gray-600">딥러닝 비전과 정밀 GPS를 기반으로...</p>
              </div>
              <div>
                <h3 className="font-bold">편의성</h3>
                <p className="text-sm text-gray-600">카트 앱 서버를 하나로 이어...</p>
              </div>
              <div>
                <h3 className="font-bold">안전</h3>
                <p className="text-sm text-gray-600">No-Go Zone과 장애물 감지...</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-80 bg-gray-300 rounded-lg"></div>
        </section>

        {/* Product - FieldBOOK Section */}
        <section className="py-16 flex items-center flex-row-reverse">
          <div className="w-1/2 pl-8">
            <h2 className="text-3xl font-bold mb-4">Product - FieldBOOK</h2>
            <p className="text-gray-600">필드북(FieldBOOK)은 카트와 앱이 하나로 연결된 차세대 스마트 골프 솔루션입니다.</p>
          </div>
          <div className="w-1/2 h-80 bg-gray-300 rounded-lg"></div>
        </section>

        {/* What We Deliver Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold mb-8">What We Deliver</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="font-bold">운영 효율 및 비용 절감</h3>
              <p className="text-sm text-gray-600">AI 비전-GNSS 기술을 이용한 카트...</p>
            </div>
            <div>
              <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="font-bold">수익 창출 및 부가가치 확대</h3>
              <p className="text-sm text-gray-600">골프 코스 및 주변 정보...</p>
            </div>
            <div>
              <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="font-bold">클럽 브랜드 이미지 및 고객 경험 강화</h3>
              <p className="text-sm text-gray-600">앱과 카트 연동을 통해...</p>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default AboutUsPage;
