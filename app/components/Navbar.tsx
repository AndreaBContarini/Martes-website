import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Martes AI Logo" width={40} height={40} className="cursor-pointer" />
          </Link>
          <span className="ml-2 text-xl font-bold">Martes AI</span>
        </div>

        {/* Menu Hamburger per Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-green-500">Home</Link>
          <Link href="/casi-studio" className="hover:text-green-500">Casi Studio</Link>
          <Link href="/blog" className="hover:text-green-500">Blog</Link>
          <Link href="/chi-siamo" className="hover:text-green-500">Chi siamo</Link>
          <Link href="/contattaci" className="bg-green-800 px-4 py-2 rounded-lg hover:bg-green-700">Contattaci</Link>
        </div>

        {/* Menu Mobile */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-black`}>
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="hover:text-green-500">Home</Link>
            <Link href="/casi-studio" className="hover:text-green-500">Casi Studio</Link>
            <Link href="/blog" className="hover:text-green-500">Blog</Link>
            <Link href="/chi-siamo" className="hover:text-green-500">Chi siamo</Link>
            <Link href="/contattaci" className="bg-green-800 px-4 py-2 rounded-lg hover:bg-green-700">Contattaci</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 