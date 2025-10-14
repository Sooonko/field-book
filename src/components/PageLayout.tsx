'use client';

import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-white text-black min-h-screen">
      <Header variant="solid" />
      <main className="pt-24"> {/* Add padding to top to offset the fixed header */}
        {children}
      </main>
      {/* A footer could be added here later */}
    </div>
  );
};

export default PageLayout;
