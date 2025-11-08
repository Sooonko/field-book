"use client";

import FooterModal from "./Footer";
import Header from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
  isSolid?: boolean;
  footerBgColor: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  isSolid = false,
  footerBgColor,
}) => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col ">
      <Header variant={isSolid ? "transparent" : "solid"} />
      <main className="flex-1">{children}</main>
      <div
        className={`bottom-0 pb-[30px] md:mb-0 pr-0 md:pr-[40px] ${footerBgColor}`}
      >
        <FooterModal isOpen={true} onClose={() => {}} />
      </div>
    </div>
  );
};

export default PageLayout;
