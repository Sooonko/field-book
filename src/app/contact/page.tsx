"use client";

import { useState } from "react";
import PageLayout from "../../components/PageLayout";
import PrivacyModal from "../../components/PrivacyModal";
import InquiryReceiveModal from "../../components/InquiryReceiveModal";
import FooterModal from "@/components/Footer";

const ContactUsPage = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsInquiryModalOpen(true);
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center px-4  overflow-hidden md:overflow-visible">
        <div className="w-full max-w-6xl pt-[160px]">
          <div className="grid md:grid-cols-2 gap-16 items-stretch">
            {/* Left Column: Form */}
            <div className="flex flex-col">
              <h1
                className="font-pret font-black text-[32px] leading-[140%] tracking-[0%] text-[#222222]"
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: 900,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  color: "#222222",
                }}
              >
                무엇이든 편하게 물어보세요.
              </h1>
              <p className="text-[#626262] mt-2 font-pret text-[18px] leading-[140%] font-pretendard">
                도입 상담을 원하시면 언제든지 문의 주세요.
                <br />
                담당자가 검토 후 영업일 기준 2영업일 내 회신드립니다.
              </p>

              <form
                className="mt-12 flex flex-col flex-1"
                onSubmit={handleFormSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 flex-1">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-montserrat font-bold text-[16px] leading-[140%] tracking-[0%] text-[#626262]"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      placeholder="이름을 입력해 주세요."
                      className="mt-2 block w-full bg-white border border-gray-300 rounded-lg p-3  transition
             placeholder:font-pret placeholder:font-medium placeholder:text-[15px] 
             placeholder:leading-[140%] placeholder:tracking-[0%] placeholder:text-[#B1B1B1]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-montserrat font-bold text-[16px] leading-[140%] tracking-[0%] text-[#626262]"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="이메일을 입력해 주세요."
                      className="mt-2 block w-full bg-white border border-gray-300 rounded-lg p-3  transition
             placeholder:font-pret placeholder:font-medium placeholder:text-[15px] 
             placeholder:leading-[140%] placeholder:tracking-[0%] placeholder:text-[#B1B1B1]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-montserrat font-bold text-[16px] leading-[140%] tracking-[0%] text-[#626262]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="연락처를 입력해 주세요."
                      className="mt-2 block w-full bg-white border border-gray-300 rounded-lg p-3  transition
             placeholder:font-pret placeholder:font-medium placeholder:text-[15px] 
             placeholder:leading-[140%] placeholder:tracking-[0%] placeholder:text-[#B1B1B1]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block font-montserrat font-bold text-[16px] leading-[140%] tracking-[0%] text-[#626262]"
                    >
                      Company name
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="회사명을 입력해 주세요."
                      className="mt-2 block w-full bg-white border border-gray-300 rounded-lg p-3  transition
             placeholder:font-pret placeholder:font-medium placeholder:text-[15px] 
             placeholder:leading-[140%] placeholder:tracking-[0%] placeholder:text-[#B1B1B1]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="inquiries"
                      className="block font-montserrat font-bold text-[16px] leading-[140%] tracking-[0%] text-[#626262]"
                    >
                      Inquiries
                    </label>
                    <textarea
                      id="inquiries"
                      rows={5}
                      placeholder="문의 내용을 남겨주세요."
                      className="mt-2 block w-full bg-white border border-gray-300 rounded-lg p-3  transition
             placeholder:font-pret placeholder:font-medium placeholder:text-[15px] 
             placeholder:leading-[140%] placeholder:tracking-[0%] placeholder:text-[#B1B1B1]"
                    ></textarea>
                  </div>
                </div>
              </form>
              <div className="mt-[16px] md:col-span-2 ">
                <p className="text-[14px] font-pret font-normal leading-[140%] tracking-[0%] text-[#626262]">
                  제출하신 정보는 문의에 대한 답변을 드리는 용도로만 활용되며{" "}
                  <button
                    type="button"
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="font-pret font-bold text-[14px] leading-[140%] tracking-[0%] text-[#626262] underline underline-solid decoration-solid decoration-1 cursor-pointer"
                  >
                    개인정보 처리방침
                  </button>
                  을 준수합니다.
                </p>

                <div className="mt-[40px]">
                  <button
                    type="submit"
                    className="bg-black text-white font-pret font-bold text-[16px] leading-[140%] tracking-[0%] 
             rounded-[1000px] w-[189px] h-[62px] px-[32px] py-[20px] gap-[10px] 
             hover:bg-gray-800 transition-colors"
                  >
                    문의하기 (Submit)
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Info & Map */}
            <div className="flex flex-col h-full">
              <h2 className="font-montserrat font-black text-[33px] leading-[140%] tracking-[0%] text-[#222222]">
                Let&lsquo;s Connect and Collaborate
              </h2>
              <div className="mt-2 space-y-1 text-gray-700 text-sm md:text-base">
                <p>
                  <strong className="font-montserrat font-black text-[16px] leading-[200%] tracking-[0%] mr-2">
                    T_
                  </strong>
                  070.7633.0118
                </p>
                <p>
                  <strong className="font-montserrat font-black text-[16px] leading-[200%] tracking-[0%] mr-2">
                    E-mail_
                  </strong>
                  contact@portrush.io
                </p>
                <p>
                  <strong className="font-montserrat font-black text-[16px] leading-[200%] tracking-[0%] mr-2">
                    Add_
                  </strong>
                  경기도 성남시 수정구 청계산로 686, 530호
                </p>
              </div>

              <div className="mt-4 flex-1">
                <div className="w-full h-full rounded-[48px] overflow-hidden bg-gray-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2935671163296!2d127.1479!3d37.4665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca98a502ae36f%3A0x1f6d6eb5e9e!2z7ISc7Jq47Yq567OE7IucIOygnOq1rCDsm5DsspzsnbTtlZzroZwx!5e0!3m2!1sko!2skr!4v1690000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterModal isOpen={true} onClose={() => {}} />
      </div>

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
      <InquiryReceiveModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </PageLayout>
  );
};

export default ContactUsPage;
