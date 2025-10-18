"use client";

import Header from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
  isSolid?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  isSolid = false,
}) => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col ">
      <Header variant={isSolid ? "transparent" : "solid"} />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default PageLayout;
