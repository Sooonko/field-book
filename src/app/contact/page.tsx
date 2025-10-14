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
      <main className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-bold">무엇이든 편하게 물어보세요.</h1>
            <p className="text-gray-600 mt-2">도입 상담을 원하시면 언제든지 문의 주세요.</p>
            <form className="mt-8 space-y-4" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-10" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-10" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" id="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-10" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input type="text" id="company" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-10" />
                </div>
              </div>
              <div>
                <label htmlFor="inquiries" className="block text-sm font-medium text-gray-700">Inquiries</label>
                <textarea id="inquiries" rows={5} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
              </div>
              <p className="text-xs text-gray-500">
                제품/서비스 정보는 문의에 대한 답변 용도로만 활용되며,
                <button type="button" onClick={() => setIsPrivacyModalOpen(true)} className="underline">개인정보 처리방침</button>에 따라 안전하게 보관됩니다.
              </p>
              <div>
                <button type="submit" className="bg-black text-white font-bold py-3 px-6 rounded-md">문의하기 (Submit)</button>
              </div>
            </form>
          </div>

          {/* Right Column: Info & Map */}
          <div>
            <h2 className="text-3xl font-bold">Let&lsquo;s Connect and Collaborate</h2>
            <div className="mt-8 space-y-4 text-gray-700">
              <p><strong className="mr-2">T.</strong> 070.7633.0118</p>
              <p><strong className="mr-2">E-mail.</strong> contact@portrush.io</p>
              <p><strong className="mr-2">Add.</strong> 경기도 하남시 수청구 청계산로 888, 530호</p>
            </div>
            <div className="mt-8 w-full h-80 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </main>
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <InquiryReceiveModal isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />
    </PageLayout>
  );
};

export default ContactUsPage;
