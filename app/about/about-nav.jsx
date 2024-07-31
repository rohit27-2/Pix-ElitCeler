"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const AboutNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent hydration mismatch by ensuring the mobile menu state is consistent
  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {/* Logo or Brand name */}
            <div className="flex items-center">
              <a href="/" className="flex items-center text-gray-700 hover:text-gray-900">
                <Image height={20} width={55} src={'/logo-bg.png'} alt="Logo" />
                <h1 className="text-2xl font-bold text-white ml-2">PIXIEUS</h1>
              </a>
            </div>
          </div>

          {/* Primary Nav */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="py-5 px-3 hover:text-purple-700">Home</a>
            <a href="/" className="py-5 px-3 hover:text-purple-700">About Us</a>
            <a href="/" className="py-5 px-3 hover:text-purple-700">Services</a>
            <a href="/" className="py-5 px-3 hover:text-purple-700">FAQs</a>
            <a href="/" className="py-5 px-3 hover:text-purple-700">Contact</a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">About Us</a>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">Services</a>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">FAQs</a>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
      </div>
    </nav>
  );
};

export default AboutNavbar;
