'use client';

import { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import PrivacyModal from '../../components/PrivacyModal';
import InquiryReceiveModal from '../../components/InquiryReceiveModal';

const ContactUsPage = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsInquiryModalOpen(true);
  };

  return (
    <PageLayout>
      <main className="flex flex-col items-center px-4 py-16 bg-white">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column: Form */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold font-pretendard text-[32px] leading-[140%]">무엇이든 편하게 물어보세요.</h1>
              <p className="text-gray-700 mt-2 font-pretendard text-[18px] leading-[140%]">도입 상담을 원하시면 언제든지 문의 주세요.<br />
                담당자가 검토 후 영업일 기준 2영업일 내 회신드립니다.</p>

              <form className="mt-12" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
                    <input type="text" id="name" placeholder="이름을 입력해 주세요." className="mt-1 block w-full border border-gray-200 rounded-xl p-3" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">E-mail</label>
                    <input type="email" id="email" placeholder="이메일을 입력해 주세요." className="mt-1 block w-full border border-gray-200 rounded-xl p-3" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Phone Number</label>
                    <input type="tel" id="phone" placeholder="연락처를 입력해 주세요." className="mt-1 block w-full border border-gray-200 rounded-xl p-3" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-700">Company Name</label>
                    <input type="text" id="company" placeholder="회사명을 입력해 주세요." className="mt-1 block w-full border border-gray-200 rounded-xl p-3" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="inquiries" className="block text-sm font-bold text-gray-700">Inquiries</label>
                    <textarea id="inquiries" rows={5} placeholder="문의 내용을 남겨주세요." className="mt-1 block w-full border border-gray-200 rounded-xl p-3"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-gray-500">
                      제출하신 정보는 문의에 대한 답변을 드리는 용도로만 활용되며{' '}
                      <button type="button" onClick={() => setIsPrivacyModalOpen(true)} className="underline">[개인정보 처리방침]</button>을 준수합니다.
                    </p>
                    <div className="mt-6">
                      <button type="submit" className="bg-black text-white font-bold py-5 px-8 rounded-full">문의하기 (Submit)</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column: Info & Map */}
            <div className="flex flex-col items-center">
              <div>
                <h2 className="font-montserrat font-black text-[28px] md:text-[36px] leading-[140%] tracking-normal">
                  Let&lsquo;s Connect and Collaborate
                </h2>

                <div className="mt-2 space-y-4 text-gray-700 text-sm md:text-base">
                  <p><strong className="mr-2">T_</strong>070.7633.0118</p>
                  <p><strong className="mr-2">E-mail_</strong>contact@portrush.io</p>
                  <p><strong className="mr-2">Add_</strong>경기도 하남시 수청구 청계산로 888, 530호</p>
                </div>

                <div className="mt-8 w-full h-64 md:h-80 bg-gray-300 rounded-[48px]"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <InquiryReceiveModal isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />
    </PageLayout>
  );
};

export default ContactUsPage;

