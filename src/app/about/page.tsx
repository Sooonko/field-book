'use client';

import Image from 'next/image';
import PageLayout from '../../components/PageLayout';

const AboutUPage = () => {
  return (
    <PageLayout>
      <main className="container mx-auto px-20 max-w-[1200px] text-gray-800">
        {/* --- Header Section --- */}
        <section className="text-center md:text-left py-20">
          <Image src="/Group.svg" alt="Portrush Logo" width={370} height={46} className="mx-auto md:mx-0" />
          <h1 className="text-gray-700 mt-2 text-lg font-medium text-[40px] font-montserrat">
            AI mobility + Trusted Technology + Smart Golf
          </h1>

          <p className="mt-9 text-[15px] md:text-[32px] leading-relaxed font-semibold text-gray-900">
            (주)포트러시는 검증된 기술력과 축적된 필드 경험으로, 골프장의 운영 효율과 골퍼의 만족을 동시에 높입니다.
          </p>
          <p className="mt-4  leading-relaxed text-gray-600 text-[24px]">
            우리는 AI 비전·GNSS·모바일 연동 기술을 기반으로 스마트 골프 모빌리티를 개발·제공합니다.
            <br /> 정밀 기술과 운영 안정성을 바탕으로 국내외 골프장의 ‘신뢰할 수 있는 파트너’로 자리잡고 있습니다.
          </p>

          <div className="mt-10 rounded-4xl overflow-hidden ">
            <Image
              src="./Frame87.svg"
              alt="Golf Field"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* --- Our Goal Section --- */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-[100px] items-start">
            {/* 1st column: heading */}
            <div className="md:pr-6">
              <h2 className="text-[28px] md:text-[32px] font-extrabold text-gray-900">Our Goal</h2>
            
            </div>

            {/* 2nd column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">신뢰성</h3>
                <p className="text-sm text-gray-600 mt-1">
                  안정성이 검증된 내구성과 안전 제어로,<br></br> 언제나 믿을 수 있는 파트너가 됩니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">지능형</h3>
                <p className="text-sm text-gray-600 mt-1">
                  딥러닝 비전과 정밀 GPS를 기반으로,<br></br> 스마트한 라운드를 제공합니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">연결성</h3>
                <p className="text-sm text-gray-600 mt-1">
                  카트·앱·서버를 하나로 이어,<br></br>
                  운영자와 골퍼 모두에게 매끄러운 경험을 제공합니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">안전</h3>
                <p className="text-sm text-gray-600 mt-1">
                  No-Go Zone과 장애물 감지,<br></br>
                  지능형 제동으로 모든 라운드에서 안전을 최우선으로 합니다.
                </p>
              </div>
            </div>

            {/* 3rd column: images */}
            <div className="relative w-full flex ">
              {/* Background image (том зураг) */}
              <div className="relative w-[371px] rounded-3xl overflow-hidden shadow-md ">
                <Image
                  src="/Frame88.svg"
                  alt="Golf image 1 (background)"
                  width={371}
                  height={485}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Small image: foreground (дээд давхарга) */}
              <div
                className="absolute bottom-[-40px] right-6 md:right-16 
                 rounded-3xl overflow-hidden shadow-md "
                aria-hidden="true"
              >
                <Image
                  src="/Frame89.svg"
                  alt="Golf image 2 (foreground)"
                  width={200}
                  height={383}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </section>


        {/* --- Product Section --- */}
        <section className="py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="./Frame90.svg"
                alt="FieldBOOK Product"
                width={550}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-gray-900">Product - FieldBOOK</h2>
            <p className="font-semibold text-gray-800 leading-relaxed">
              필드북(FieldBOOK)은 카트와 앱이 하나로 연결된 차세대 스마트 골프 솔루션입니다.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              AI 비전 기반 자동 주행, 정밀 GPS 시스템, 스윙 자동 녹화·추적, 스코어카드까지 골프의 모든 순간을 하나로 제공합니다.
            </p>
          </div>
        </section>

        {/* --- What We Deliver Section --- */}
        <section className="py-20 bg-gray-50 rounded-3xl mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12 text-gray-900">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <DeliverItem
              img="./Frame94.svg"
              title="운영 효율 및 비용 절감"
              desc="AI 비전-GNSS 기술로 카트 운영을 최적화하고 비용을 절감합니다."
            />
            <DeliverItem
              img="./Frame92.svg"
              title="수익 창출 및 부가가치 확대"
              desc="코스와 광고, 부가 정보 연동을 통해 새로운 수익 모델을 창출합니다."
            />
            <DeliverItem
              img="./Frame93.svg"
              title="클럽 브랜드 이미지 및 고객 경험 강화"
              desc="앱과 카트 연동을 통해 브랜드 경험을 강화하고 고객 만족도를 높입니다."
            />
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

/* --- Sub Components --- */
const GoalItem = ({ title, desc }: { title: string; desc: string }) => (
  <div>
    <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const DeliverItem = ({ img, title, desc }: { img: string; title: string; desc: string }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow">
    <Image src={img} alt={title} width={400} height={250} className="w-full h-[180px] object-cover" />
    <div className="p-6 text-left">
      <h3 className="font-bold text-gray-900 mb-2 text-lg">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default AboutUPage;