"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import MenuModal from "./MenuModal";
import "../i18n";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

const Header: React.FC<HeaderProps> = ({ variant = "transparent" }) => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const isSolid = variant === "solid";
  const textColor = isSolid ? "text-black" : "text-white";
  const bgColor = isSolid ? "bg-white" : "bg-transparent";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  return (
    <>
      <header
        className={`absolute top-0 left-0 z-30 w-full ${bgColor} ${textColor}`}
      >
        <div className="flex justify-between items-start p-4 md:p-8 lg:px-16 lg:py-12">
          {/* Desktop Logo unchanged */}
          <Link href="/" className="flex flex-col items-start">
            <Image
              src="/BI.svg"
              alt="logo"
              width={180}
              height={32}
              className={isSolid ? "filter invert" : ""}
            />
          </Link>

          {/* Lang + Menu Buttons remain unchanged */}
          <div className="flex items-center space-x-3 md:space-x-5 h-full">
            <div className="relative flex items-center">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="hidden md:block"
              >
                <Image
                  src="/language.svg"
                  alt="Language"
                  width={38}
                  height={38}
                  className={`w-5 h-5 md:w-6 md:h-6 ${
                    isSolid ? "filter invert" : ""
                  }`}
                />
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border rounded-lg p-1 shadow-lg">
                  <button
                    onClick={() => changeLanguage("ko")}
                    className={`block px-3 py-1 text-sm text-gray-900 ${
                      i18n.language === "ko" ? "font-bold" : ""
                    }`}
                  >
                    KOR
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`block px-3 py-1 text-sm text-gray-900 ${
                      i18n.language === "en" ? "font-bold" : ""
                    }`}
                  >
                    ENG
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => setIsMenuOpen(true)}>
              <Image
                src="/menu.svg"
                alt="menu"
                width={36}
                height={38}
                className={isSolid ? "filter invert" : ""}
              />
            </button>
          </div>
        </div>
      </header>

      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
