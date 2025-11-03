"use client";

import Image from "next/image";
import PageLayout from "../../components/PageLayout";
import FooterModal from "@/components/Footer";

const AboutUPage = () => {
  return (
    <PageLayout>
      <div>
        <div className="container mx-auto w-full text-gray-800  mt-[40px] md:mt-[179px] lg:mt-24 p-auto px-4 md:px-10 lg:px-14 ">
          {/* --- Header Section --- */}
          <section className="text-start md:text-left  py-15 m-auto px-4">
            <div className="w-[225.062255859375px] h-[28px] md:w-[370px] md:h-[46px]">
              <Image
                src="./Group.svg"
                alt="Portrush Logo"
                width={370} // desktop width
                height={46} // desktop height
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="font-montserrat font-normal text-[28px] md:text-4xl leading-[140%] tracking-[0%] text-[#222222] mt-[20px]">
              AI mobility + <br className="block md:hidden" /> Trusted
              Technology + <br className="block md:hidden" /> Smart Golf
            </h1>

            <p className="mt-6 md:mt-10 font-pretendard  font-bold text-xl md:text-3xl leading-[140%] tracking-[0%] text-[#222222]">
              (주)포트러시는 검증된 기술력과 축적된 필드 경험으로, 골프장의 운영
              효율과 골퍼의 만족을 동시에 높입니다.
            </p>
            <p className="mt-4 font-pretendard  font-normal text-base md:text-xl leading-[140%] tracking-[0%] text-[#626262]">
              우리는 AI 비전·GNSS·모바일 연동 기술을 기반으로 스마트 골프
              모빌리티를 개발·제공합니다. 정밀 기술과 운영 안정성을 바탕으로
              국내외 골프장의 ‘신뢰할 수 있는 파트너’로 자리잡고 있습니다.
            </p>

            <div className="mt-10 rounded-[24px] md:rounded-[48px] overflow-hidden ">
              <Image
                src="./Frame87.svg"
                alt="Golf Field"
                width={1200}
                height={500}
                className="w-full h-auto min-h-[120px] object-cover"
              />
            </div>
          </section>

          {/* --- Our Goal Section --- */}
          <section className="px-4 py-8  md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 items-start m-auto">
              {/* 1st column: heading */}
              <div className=" w-full md:w-[226px] ">
                <h2 className="font-montserrat font-black text-3xl md:text-5xl leading-[140%] tracking-[0%] text-[#222222]">
                  Our Goal
                </h2>
              </div>

              {/* 2nd column */}
              <div className="space-y-[28px]">
                <div className="">
                  <h3 className="font-pretendard  font-bold text-[20px] md:text-[24px] leading-[140%] tracking-[0%] text-[#222222]">
                    신뢰성
                  </h3>
                  <p className="font-pretendard  font-normal text-[16px] md:text-[20px] leading-[140%] tracking-[0%] text-[#626262] mt-1">
                    안정성이 검증된 내구성과 안전 제어로,
                    <br />
                    언제나 믿을 수 있는 파트너가 됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="font-pretendard  font-bold text-lg md:text-xl leading-[140%] tracking-[0%] text-[#222222]">
                    지능형
                  </h3>
                  <p className="font-pretendard  font-normal text-base md:text-lg leading-[140%] tracking-[0%] text-[#626262] mt-1">
                    딥러닝 비전과 정밀 GPS를 기반으로,<br></br> 스마트한
                    라운드를 제공합니다.
                  </p>
                </div>
                <div>
                  <h3 className="font-pretendard  font-bold text-lg md:text-xl leading-[140%] tracking-[0%] text-[#222222]">
                    연결성
                  </h3>
                  <p className="font-pretendard  font-normal text-base md:text-lg leading-[140%] tracking-[0%] text-[#626262] mt-1">
                    카트·앱·서버를 하나로 이어,<br></br>
                    운영자와 골퍼 모두에게 매끄러운 경험을 제공합니다.
                  </p>
                </div>
                <div>
                  <h3 className="font-pretendard  font-bold text-lg md:text-xl leading-[140%] tracking-[0%] text-[#222222]">
                    안전
                  </h3>
                  <p className="font-pretendard  font-normal text-base md:text-lg leading-[140%] tracking-[0%] text-[#626262] mt-1">
                    No-Go Zone과 장애물 감지,<br></br>
                    지능형 제동으로 모든 라운드에서 안전을 최우선으로 합니다.
                  </p>
                </div>
              </div>

              {/* 3rd column: images */}
              <div className="relative flex">
                {/* Background image */}
                <div className="relative w-[90vw] max-w-[500px]  overflow-hidden  mr-auto">
                  <Image
                    src="/Frame88.png"
                    alt="Golf image 1 (background)"
                    width={500}
                    height={485}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* --- Product Section --- */}
          <section className="pt-8 pb-8 md:pt-10 md:pb-20 flex flex-col md:flex-row items-center m-auto px-4 md:px-10 gap-2">
            <div className="order-1 md:order-2 py-8 md:py-20 ml-0 md:ml-[clamp(50px,4%,140px)] text-start md:text-left">
              <h2 className="font-montserrat font-black text-[24px] md:text-[48px] leading-[140%] tracking-[0%] text-gray-900 mb-4 md:mb-10">
                Product - FieldBOOK
              </h2>

              <p className="font-pretendard font-bold text-[19px] md:text-[28px] leading-[140%] tracking-[0%] text-gray-900">
                필드북(FieldBOOK)은 카트와 앱이 하나로 연결된 차세대 스마트 골프
                솔루션입니다.
              </p>

              <p className="mt-2 md:mt-3 font-pretendard font-normal  text-[16px] md:text-[22px] leading-[140%] tracking-[0%] text-gray-700">
                AI 비전 기반 자동 추종, 정밀 GPS 코스맵, 스윙 자동 녹화·재생,
                스코어카드까지 골프의 모든 순간을 하나로 제공합니다.
              </p>
            </div>

            {/* Left Column: Images (mobile дээр дараа нь гарах) */}
            <div className="order-2 md:order-1 relative w-full max-w-[508px] mx-auto mt-8 md:mt-0">
              {/* Background image */}
              <div className=" rounded-[28px] md:rounded-[48px] overflow-hidden">
                <Image
                  src="./Frame97.svg"
                  alt="FieldBOOK Product"
                  width={608}
                  height={430}
                  className="h-auto object-cover"
                />
              </div>

              {/* Foreground image (overlap) */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20%] md:bottom-[-150px] md:right-[-90px] w-[50%] md:w-[301px]">
                <Image
                  src="/Frame91.svg"
                  alt="Golf image 2 (foreground)"
                  width={350}
                  height={256}
                  className="h-auto object-cover"
                />
              </div>
            </div>
          </section>
        </div>
        <div className=" bg-gray-100 px-4 mt-[90px] md:mt-[160px]">
          <section className="pt-[80px] md:pt-[160px] bg-gray-100 mt-10 md:mt-20 lg:mt-24 m-auto p-auto container max-w-screen-xl">
            <h2 className="text-[30px] md:text[48px] font-extrabold text-center mb-6 md:mb-12 text-gray-900">
              What We Deliver
            </h2>

            <div className="grid md:grid-cols-3 gap-2 md:gap-10">
              <DeliverItem
                img="./Frame94.svg"
                title="운영 효율 및 비용 절감"
                desc="AI 캐디로 인력 부담을 줄이고 운영 효율을 극대화
              충돌 방지·No-Go Zone 기술로 안전사고 예방 및 코스 보호"
                type="1"
              />
              <DeliverItem
                img="./Frame92.svg"
                title="수익 창출 및 부가가치 확대"
                desc="골프장 안의 디지털 매출 허브
              시설 교체 없는 스마트 전환
              광고·스토어·데이터로 새 수익원 확보"
                type="2"
              />
              <DeliverItem
                img="./Frame93.svg"
                title="클럽 브랜드 이미지 및 고객 경험 강화"
                desc="스마트 골프코스로 도약
                SNS를 통한 바이럴 마케팅
                필드 위에서 실천하는 ESG 가치
                고객 만족도 및 재방문율 상승"
                type="3"
              />
            </div>
      
          </section>
          <div className="ml-[82px] md:mr-[60px] pb-[60px] md:mb-0">
            <FooterModal isOpen={true} onClose={() => { }} />
          </div>
        </div>
      </div>
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
const TextItem = ({ text }: { text: string }) => (
  <div className="flex flex-col items-center space-y-1 text-center">
    <p className="text-[16px] md:text-base font-pretendard  text-gray-700">
      {text}
    </p>
  </div>
);

const DeliverItem = ({
  img,
  title,
  desc,
  type,
}: {
  img: string;
  title: string;
  desc: string;
  type: string;
}) => (
  <div className=" rounded-[20px] ">
    <Image
      src={img}
      alt={title}
      width={374}
      height={200}
      className="w-full md-w-[374px] h-auto object-cover rounded-[20px]"
    />
    <div className="p-6 text-center pt-[29px]">
      <h3 className="font-bold text-gray-900 mb-2 text-[20px]">
        {title}
      </h3>
      {/* <p className=" text-gray-700 leading-relaxed140 text-[16px]">{desc}</p> */}
      {type === "1" ? (
        <>
          <TextItem text="AI 캐디로 인력 부담을 줄이고 운영 효율을 극대화" />
          <TextItem text="충돌 방지·No-Go Zone 기술로 안전사고 예방 및 코스 보호 " />
        </>
      ) : type === "2" ? (
        <>
          <TextItem text="골프장 안의 디지털 매출 허브" />
          <TextItem text="시설 교체 없는 스마트 전환" />
          <TextItem text="광고·스토어·데이터로 새 수익원 확보" />
        </>
      ) : (
        <>
          <TextItem text="스마트 골프코스로 도약" />
          <TextItem text="SNS를 통한 바이럴 마케팅" />
          <TextItem text="필드 위에서 실천하는 ESG 가치" />
          <TextItem text="고객 만족도 및 재방문율 상승" />
        </>
      )}
    </div>
  </div>
);

export default AboutUPage;
