"use client"
import React, { useState } from 'react';
import { Menu, MenuSquareIcon, X } from 'lucide-react';
import Image from 'next/image'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white">
      <div className="max-w-6xl  ">
        <div className="flex justify-between">
          <div className="flex space-x-2">
            {/* Logo or Brand name */}
            <div>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <Image height={20} width={55} src={'/logo-bg.png'} alt="Logo" />
                <h1 className=" text-2xl font-bold text-white">PIXIEUS</h1>

              </a>
            </div>
          </div>

          {/* Primary Nav */}
          <div className="hidden  md:flex space-x-4">
            <a href="/" className="py-5 px-3 hover:text-purple-700">Home</a>
            <a href="#about" className="py-5 px-3 hover:text-purple-700 scroll-smooth">About Us</a>
            <a href="#services" className="py-5 px-3 hover:text-purple-700">Services</a>
            <a href="#faq" className="py-5 px-3 hover:text-purple-700">FAQs  </a>
            <a href="#footer" className="py-5 px-3 hover:text-purple-700">Contact  </a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div >

      {/* Mobile Menu */}
      <div div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
        <a href="#services" className="block py-2 px-4 text-sm hover:bg-gray-700">Services</a>
        <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
        <a href="#faq" className="block py-2 px-4 text-sm hover:bg-gray-700">FAQ</a>
        <a href="#footer" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
      </div >
    </nav >
  );
};

export default Navbar;