'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuModal from './MenuModal';
import '../i18n';
import Link from 'next/link';
import Image from 'next/image';

const MenuIcon = ({ color }: { color: string }) => (
  <svg className={`w-6 h-6 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

interface HeaderProps {
  variant?: 'transparent' | 'solid';
}

const Header: React.FC<HeaderProps> = ({ variant = 'transparent' }) => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const isSolid = variant === 'solid';
  const textColor = isSolid ? 'text-black' : 'text-white';
  const bgColor = isSolid ? 'bg-white shadow-md' : 'bg-transparent';
  const logoColor = isSolid ? 'text-gray-800' : 'text-white';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`absolute top-0 left-0 w-full z-30 ${bgColor} ${textColor}`}>
        <div className="w-full mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
          <Link href="/" className={`flex flex-col items-start ${logoColor}`}>
            <span className="text-xs font-light">AI CADDIE</span>
            <span className="text-2xl font-bold tracking-wider">FIELDBOOK</span>
          </Link>
          <div className="flex items-center space-x-5">
            <div className="relative">
              {/* <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="focus:outline-none">
                  <Image src="/language.svg" alt="Language" className={`w-6 h-6 ${isSolid ? 'filter invert' : ''}`} />
                </button> */}
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg p-1 shadow-lg">
                  <button onClick={() => changeLanguage('ko')} className={`block w-full text-left px-3 py-1 text-sm text-black ${i18n.language === 'ko' ? 'font-bold' : ''}`}>KOR</button>
                  <button onClick={() => changeLanguage('en')} className={`block w-full text-left px-3 py-1 text-sm text-black ${i18n.language === 'en' ? 'font-bold' : ''}`}>ENG</button>
                </div>
              )}
            </div>
            <button onClick={toggleMenu} className="focus:outline-none">
              <MenuIcon color={isSolid ? 'text-black' : 'text-white'} />
            </button>
          </div>
        </div>
      </header>
      <MenuModal isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Header;
