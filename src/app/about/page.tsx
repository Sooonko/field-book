'use client';

import PageLayout from '../../components/PageLayout';
import Image from 'next/image';

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
        <section className="py-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900">Our Goal</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Goals list */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">신뢰성</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  현장에서 검증된 내구성과 안전 제어로, 언제나 믿을 수 있는 파트너가 됩니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">지능화</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  비전 인식과 정밀 GPS를 기반으로, 플레이를 기록하고 분석하며 더 스마트한 라운드를 만듭니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">연결성</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  카트·앱·서버를 하나로 이어, 운영자와 골퍼 모두에게 매끄러운 경험을 제공합니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">안전</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  No-Go Zone과 장애를 감지, 지능형 제동으로 모든 라운드에서 안전을 최우선으로 합니다.
                </p>
              </div>
            </div>

            {/* Right: Overlapping images */}
            <div className="relative">
              <div className="relative h-[420px] w-full">
                <Image
                  src="/BI.svg"
                  alt="Golf ball on green"
                  fill
                  className="rounded-3xl object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-10 right-0 w-[220px] md:w-[260px] h-[320px] md:h-[360px]">
                <Image
                  src="/BI.svg"
                  alt="Golf hole with flag"
                  fill
                  className="rounded-2xl object-cover shadow-2xl ring-1 ring-black/5 bg-white"
                />
              </div>
            </div>
          </div>
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
