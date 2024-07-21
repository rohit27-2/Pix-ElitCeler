"use client"
import React, { useState } from 'react';
import { Menu, MenuSquareIcon, X } from 'lucide-react';
import Image from 'next/image'
import { Link } from 'react-scroll';

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
            <Link to="/" smooth duration={500} className="py-5 px-3 cursor-pointer hover:text-purple-700">Home</Link>
            <Link to="about" smooth duration={500} className="py-5 px-3 cursor-pointer hover:text-purple-700 scroll-smooth">About Us</Link>
            <Link to="services" smooth duration={500} className="py-5 px-3 cursor-pointer hover:text-purple-700">Services</Link>
            <Link to="faq" smooth duration={500} className="py-5 px-3 cursor-pointer hover:text-purple-700">FAQs</Link>
            <Link to="footer" smooth duration={500} className="py-5 px-3 cursor-pointer hover:text-purple-700">Contact  </Link>
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