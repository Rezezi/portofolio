'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaHome, FaProjectDiagram, FaEnvelope, FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {/* Navbar untuk Mobile */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 shadow-md flex justify-between items-center md:hidden">
        <div className="text-xl font-bold">
          <Link href="/">Axcel</Link>
        </div>
        <button
          className="text-white p-2 rounded-full bg-purple-700 hover:bg-purple-500 focus:outline-none transition-all duration-300"
          onClick={toggleSidebar}
        >
          <FaBars size={24} />
        </button>
      </nav>

      {/* Sidebar di Mobile */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-20 md:hidden" onClick={toggleSidebar}>
          <nav
            className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-800 to-black text-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out"
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={toggleSidebar}
            >
              ✖
            </button>
            <ul className="space-y-6 mt-12">
              <li>
                <Link href="/" className="flex items-center space-x-3 hover:text-purple-400 transition-colors" onClick={toggleSidebar}>
                  <FaHome size={20} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="flex items-center space-x-3 hover:text-purple-400 transition-colors" onClick={toggleSidebar}>
                  <FaProjectDiagram size={20} />
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center space-x-3 hover:text-purple-400 transition-colors" onClick={toggleSidebar}>
                  <FaEnvelope size={20} />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Sidebar untuk Desktop */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-28 bg-gradient-to-b from-purple-800 to-indigo-900 text-white flex-col justify-start items-center py-8 shadow-lg rounded-r-lg">
        <div className="text-center mb-10">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-all duration-300">
            Axcel
          </Link>
        </div>
        <ul className="space-y-8">
          <li>
            <Link href="/" className="flex flex-col items-center space-y-1 p-3 rounded-full bg-purple-900 hover:bg-purple-700 transition-all duration-300 hover:scale-105">
              <FaHome size={28} />
              <span className="text-sm">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/projects" className="flex flex-col items-center space-y-1 p-3 rounded-full bg-purple-900 hover:bg-purple-700 transition-all duration-300 hover:scale-105">
              <FaProjectDiagram size={28} />
              <span className="text-sm">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="flex flex-col items-center space-y-1 p-3 rounded-full bg-purple-900 hover:bg-purple-700 transition-all duration-300 hover:scale-105">
              <FaEnvelope size={28} />
              <span className="text-sm">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
