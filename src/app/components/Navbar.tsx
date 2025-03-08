"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute w-full z-10 px-4 md:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative h-16 w-40">
            <Image 
              src="/logo-cropped.svg" 
              alt="Born Well Africa Logo" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#who-we-are" className="text-white hover:text-secondary transition">
            Who We Are
          </Link>
          <Link href="#who-we-help" className="text-white hover:text-secondary transition">
            Who We Help
          </Link>
          <Link href="#what-we-do" className="text-white hover:text-secondary transition">
            What We Do
          </Link>
          <Link href="#donate" className="bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition">
            DONATE
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary mt-2 p-4 rounded-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              href="#who-we-are" 
              className="text-white hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Are
            </Link>
            <Link 
              href="#who-we-help" 
              className="text-white hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Help
            </Link>
            <Link 
              href="#what-we-do" 
              className="text-white hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              What We Do
            </Link>
            <Link 
              href="#donate" 
              className="bg-secondary text-white px-4 py-2 rounded-full font-medium inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              DONATE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;