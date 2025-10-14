'use client';
import Link from 'next/link';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
      onClick={onClose}
    >
      <div 
        className="fixed top-0 right-0 h-full w-80 bg-black shadow-lg z-50 p-8 transform transition-transform translate-x-0"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
        <nav className="mt-16 flex flex-col space-y-6 text-white text-xl">
          <Link href="/" onClick={onClose} className="hover:text-gray-400">Home</Link>
          <Link href="/product" onClick={onClose} className="hover:text-gray-400">Product</Link>
          <Link href="/app" onClick={onClose} className="hover:text-gray-400">App</Link>
          <Link href="/about" onClick={onClose} className="hover:text-gray-400">About us</Link>
          <Link href="/contact" onClick={onClose} className="hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default MenuModal;
