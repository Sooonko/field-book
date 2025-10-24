"use client";
import i18n from "@/i18n";
import Image from "next/image";
import Link from "next/link";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 transition-opacity" onClick={onClose}>
      <div
        className="hidden md:block fixed top-0 right-0 h-full w-[500px] bg-[#222222] shadow-lg z-50 p-8 transform translate-x-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-10 right-10 w-[28px] h-[28px]"
        >
          <Image src="/xmark.svg" alt="close" width={28} height={28} />
        </button>

        <nav className="flex flex-col justify-center items-start h-full text-white gap-6 pt-20 pb-10 pl-10">
          {[
            { href: "/", label: "Home" },
            { href: "/product", label: "Product" },
            { href: "/app", label: "App" },
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="font-montserrat font-black text-5xl leading-[140%] hover:text-gray-400"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className="block md:hidden fixed top-0 right-0 h-full w-full bg-[#222222] shadow-lg z-50 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {" "}
          <div className="flex  gap-[20px] opacity-100 absolute top-5 left-5 z-50">
            <button
              onClick={() => i18n.changeLanguage("ko")}
              className={`text-center font-[Montserrat] font-black text-[16px] leading-[140%] ${
                i18n.language === "ko" ? "text-white" : "text-[#757575]"
              }`}
            >
              KOR
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`text-center font-[Montserrat] font-black text-[16px] leading-[140%] ${
                i18n.language === "en" ? "text-white" : "text-[#757575]"
              }`}
            >
              ENG
            </button>
          </div>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-[20px] h-[20px]"
          >
            <Image src="/xmark.svg" alt="close" width={20} height={20} />
          </button>
        </div>

        <nav className="flex flex-col justify-center items-start h-full text-white gap-10 pl-6">
          {[
            { href: "/", label: "Home" },
            { href: "/product", label: "Product" },
            { href: "/app", label: "App" },
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="font-montserrat font-black text-4xl leading-tight hover:text-gray-300"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MenuModal;
