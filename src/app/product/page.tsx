'use client';

import PageLayout from '../../components/PageLayout';

// Placeholder for icons used in the page
const IconPlaceholder = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
    <span className="text-xs">{name}</span>
  </div>
);

const ProductPage = () => {
  return (
    <PageLayout>
      {/* Header */}
      <header className="bg-gray-800 text-white text-center py-12">
        <h1 className="text-4xl font-bold">AI로 골퍼의 모든 순간을</h1>
        <p className="text-lg mt-2">가장 쉬운 골프 비서, 필드북과 모든 라운딩을 함께 하세요.</p>
      </header>

      {/* Icons Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto flex justify-around max-w-4xl">
          <IconPlaceholder name="GPS 측위" />
          <IconPlaceholder name="Auto-Follow" />
          <IconPlaceholder name="스마트 클럽 가이드" />
          <IconPlaceholder name="No-Go Zone" />
          <IconPlaceholder name="주행/샷 이력" />
        </div>
      </section>

      <div className="container mx-auto flex">
        {/* Sticky Sidebar */}
        <aside className="w-1/4 py-8 pr-8 sticky top-24 h-screen self-start">
          <h2 className="font-bold mb-4">FieldBook Technology</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#auto-follow" className="hover:text-black">Auto - Follow</a></li>
            <li><a href="#smart-guide" className="hover:text-black">스마트 클럽 가이드</a></li>
            <li><a href="#swing-analysis" className="hover:text-black">스윙 녹화/분석</a></li>
            <li><a href="#no-go-zone" className="hover:text-black">No-Go Zone / 장애물 감지</a></li>
            <li><a href="#driving-history" className="hover:text-black">주행 이력</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 py-8">
          <section id="auto-follow" className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Auto - Follow</h3>
            <p className="text-gray-600 mb-4">카트가 플레이어를 자동으로 따라다니며 촬영합니다.</p>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </section>
          <section id="smart-guide" className="mb-16">
            <h3 className="text-2xl font-bold mb-4">스마트 클럽 가이드</h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </section>
          <section id="swing-analysis" className="mb-16">
            <h3 className="text-2xl font-bold mb-4">스윙 녹화 / 분석</h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </section>
          <section id="no-go-zone" className="mb-16">
            <h3 className="text-2xl font-bold mb-4">No-Go Zone / 장애물 감지</h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </section>
          <section id="driving-history" className="mb-16">
            <h3 className="text-2xl font-bold mb-4">주행 이력</h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
};

export default ProductPage;