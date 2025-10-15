"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import MenuModal from "./MenuModal";
import "../i18n";
import Link from "next/link";
import Image from "next/image";

const MenuIcon = ({
  colorConv,
  isSolid,
}: {
  colorConv: string;
  isSolid: boolean;
}) => (
  <Image
    color={colorConv}
    className={`w-6 h-6 align-middle ${isSolid ? "filter invert" : ""}`}
    src="/icons_menu_black.svg"
    alt="menu"
    width={36}
    height={37.67}
  />
);

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
  const logoColor = isSolid ? "text-gray-800" : "text-white";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-30 w-full ${bgColor} ${textColor}`}
      >
        <div
          className="flex justify-between items-start p-4 md:p-8 lg:px-16 lg:py-12"
        >
          <Link href="/" className={`flex flex-col items-start ${logoColor}`}>
            <Image
              src="/BI.svg"
              alt="logo"
              className={`align-middle ${isSolid ? "filter invert" : ""}`}
              width={180}
              height={32}
            />
          </Link>
          <div className="flex items-center space-x-3 md:space-x-5 h-full">
            <div className="relative flex items-center">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center justify-center focus:outline-none"
              >
                <Image
                  src="/language.svg"
                  alt="Language"
                  className={`w-5 h-5 md:w-6 md:h-6 align-middle ${
                    isSolid ? "filter invert" : ""
                  }`}
                  width={38}
                  height={38}
                />
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg p-1 shadow-lg">
                  <button
                    onClick={() => changeLanguage("ko")}
                    className={`block w-full text-left px-3 py-1 text-sm text-black ${
                      i18n.language === "ko" ? "font-bold" : ""
                    }`}
                  >
                    KOR
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`block w-full text-left px-3 py-1 text-sm text-black ${
                      i18n.language === "en" ? "font-bold" : ""
                    }`}
                  >
                    ENG
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={toggleMenu}
              className="flex items-center justify-center focus:outline-none"
            >
              <MenuIcon
                colorConv={isSolid ? "text-black" : "text-white"}
                isSolid={isSolid}
              />
            </button>
          </div>
        </div>
      </header>
      <MenuModal isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Header;
