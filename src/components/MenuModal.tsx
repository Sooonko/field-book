"use client";
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
        className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#222222] shadow-lg z-50 p-8 transform transition-transform translate-x-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-10 right-10 w-[28px] h-[28px]"
        >
          <Image
            src="/xmark.svg"
            alt="close"
            width={28}
            height={28}
            objectFit="contain"
          />
        </button>

        <nav className="flex flex-col justify-center items-start h-full text-white opacity-100 pt-20 pb-10 pl-10">
          <Link
            href="/"
            onClick={onClose}
            className="font-montserrat font-black text-3xl md:text-5xl lg:text-6xl leading-[140%] tracking-[0%] hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="/product"
            onClick={onClose}
            className="font-montserrat font-black text-3xl md:text-5xl lg:text-6xl leading-[140%] tracking-[0%] hover:text-gray-400"
          >
            Product
          </Link>
          <Link
            href="/app"
            onClick={onClose}
            className="font-montserrat font-black text-3xl md:text-5xl lg:text-6xl leading-[140%] tracking-[0%] hover:text-gray-400"
          >
            App
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="font-montserrat font-black text-3xl md:text-5xl lg:text-6xl leading-[140%] tracking-[0%] hover:text-gray-400"
          >
            About us
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="font-montserrat font-black text-3xl md:text-5xl lg:text-6xl leading-[140%] tracking-[0%] hover:text-gray-400"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MenuModal;
