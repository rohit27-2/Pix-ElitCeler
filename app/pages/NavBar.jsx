"use client"
import React, { useState } from 'react';
import { Menu, MenuSquareIcon, X } from 'lucide-react';
import Image from 'next/image'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex justify-between">
          <div className="flex space-x-3">
            {/* Logo or Brand name */}
            <div>
              <a href="#" className="flex items-center py-5 text-gray-700 hover:text-gray-900">
                <Image height={20} width={65} src={'/logo-bg.png'} alt="Logo" />
                <h1 className=" text-2xl font-bold text-white">PIXIEUS</h1>
            
          </a>
        </div>
      </div>

      {/* Primary Nav */}
      <div className="hidden mt-4 md:flex space-x-4">
        <a href="#" className="py-5 px-3">Home</a>
        <a href="#" className="py-5 px-3">About Us</a>
        <a href="#" className="py-5 px-3">Services</a>
        <a href="#" className="py-5 px-3">Previuos Events  </a>
        <a href="#" className="py-5 px-3">FAQs  </a>

      </div>

      {/* Mobile button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>
      </div >

  {/* Mobile Menu */ }
  <div div className = {`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Services</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
      </div >
    </nav >
  );
};

export default Navbar;