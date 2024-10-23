'use client';

import { useState, useEffect } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }
      lastScrollY = window.scrollY;
      setIsScrolled(window.scrollY > 50); // Set background change
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-full transition-all duration-500 ease-in-out py-3 px-6 shadow-2xl 
        ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-50'} 
        ${isDarkMode ? 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-gray-200' : 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white'} 
        ${isScrolled ? 'opacity-90' : 'opacity-100'} 
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'} hover:bg-opacity-100`}
      style={{ transition: 'transform 0.6s ease, opacity 0.5s ease' }} // Smoother animation
    >
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium tracking-wide hover:scale-105 transition-transform duration-300">
          {/* Slightly smaller text with hover effect */}
          Axcel&apos;s Portfolio
        </div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
          >
            Contact
          </a>
          <button onClick={toggleTheme} className="ml-6">
            {isDarkMode ? (
              <MdOutlineLightMode className="w-6 h-6 text-yellow-300" />
            ) : (
              <MdOutlineDarkMode className="w-6 h-6 text-yellow-300" />
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-gray-200"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3">
          <a
            href="#home"
            className="block text-center hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-center hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="block text-center hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-center hover:text-yellow-300 hover:scale-105 transition-transform duration-300"
          >
            Contact
          </a>
          <button onClick={toggleTheme} className="block mx-auto mt-4">
            {isDarkMode ? (
              <MdOutlineLightMode className="w-6 h-6 text-yellow-300" />
            ) : (
              <MdOutlineDarkMode className="w-6 h-6 text-yellow-300" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
