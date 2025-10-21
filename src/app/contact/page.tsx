'use client';

import { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import PrivacyModal from '../../components/PrivacyModal';
import InquiryReceiveModal from '../../components/InquiryReceiveModal';
import FooterModal from '@/components/Footer';

const ContactUsPage = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsInquiryModalOpen(true);
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center px-4 py-20 overflow-hidden md:overflow-visible">
        <div className="w-full max-w-6xl pt-[102px]">
          <div className="grid md:grid-cols-2 gap-16 items-stretch">
            {/* Left Column: Form */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold font-pret text-[32px] leading-[140%] text-gray-900">
                무엇이든 편하게 물어보세요.
              </h1>
              <p className="text-gray-700 mt-2 font-pret text-[18px] leading-[140%]">
                도입 상담을 원하시면 언제든지 문의 주세요.
                <br />
                담당자가 검토 후 영업일 기준 2영업일 내 회신드립니다.
              </p>

              <form className="mt-12 flex flex-col flex-1" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 flex-1">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-800 ">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="이름을 입력해 주세요."
                      className="mt-2 block w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm  text-gray-800 font-bold">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="이메일을 입력해 주세요."
                      className="mt-2 block w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm  text-gray-800 font-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="연락처를 입력해 주세요."
                      className="mt-2 block w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-800">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="회사명을 입력해 주세요."
                      className="mt-2 block w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="inquiries" className="block text-sm font-bold text-gray-800">
                      Inquiries
                    </label>
                    <textarea
                      id="inquiries"
                      rows={5}
                      placeholder="문의 내용을 남겨주세요."
                      className="mt-2 block w-full bg-gray-50 border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    ></textarea>
                  </div>
                  <div className="-mt-5 md:col-span-2 ">
                    <p className="text-[14px] text-gray-600">
                      제출하신 정보는 문의에 대한 답변을 드리는 용도로만 활용되며{' '}
                      <button
                        type="button"
                        onClick={() => setIsPrivacyModalOpen(true)}
                        className="underline font-semibold cursor-pointer"
                      >
                        [개인정보 처리방침]
                      </button>
                      을 준수합니다.
                    </p>
                    <div className="mt-8">
                      <button
                        type="submit"
                        className="bg-black text-white font-bold py-4 px-10 rounded-full w-full md:w-auto hover:bg-gray-800 transition-colors text-lg"
                      >
                        문의하기 (Submit)
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column: Info & Map */}
            <div className="flex flex-col h-full">
              <h2 className="font-montserrat font-black  lg:text-[36px] leading-[140%] tracking-normal ">
                Let&lsquo;s Connect and Collaborate
              </h2>

              <div className="mt-2 space-y-1 text-gray-700 text-sm md:text-base">
                <p>
                  <strong className="mr-2 font-bold  leading-[200%]">T_</strong>070.7633.0118
                </p>
                <p>
                  <strong className="mr-2 font-bold leading-[200%]">E-mail_</strong>contact@portrush.io
                </p>
                <p>
                  <strong className="mr-2 font-bold leading-[200%]">Add_</strong>경기도 성남시 수정구 청계산로 686, 530호
                </p>
              </div>

              <div className="mt-8 flex-1">
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
        <FooterModal isOpen={true} onClose={() => { }} />

      </div>

      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <InquiryReceiveModal isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />

    </PageLayout>
  );
};

export default ContactUsPage;

