"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaUser, FaProjectDiagram, FaEnvelope, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const words = [
  "Hello, my name is Rezezi Axcel",
  "I'm a Full Stack Developer",
  "I'm a DevOps Engineer"
];

const typingSpeed = 150;
const delayBetweenWords = 1800;

const First = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const word = words[currentWord];
      if (!isDeleting) {
        setDisplayText(word.substring(0, displayText.length + 1));
        if (displayText.length + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        setDisplayText(word.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWord]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        <motion.span
          className={`${
            displayText.includes("Full Stack") || displayText.includes("DevOps")
              ? "text-green-400"
              : "text-white"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayText}
        </motion.span>
        <span className="text-green-500">|</span>
      </h1>

      {/* Foto dengan efek lanyard */}
      <motion.div
        className="relative flex flex-col items-center mt-4 sm:mt-6"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 120 }}
      >
        <motion.div 
          className="w-1 h-16 sm:h-20 md:h-24 bg-gray-500" 
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        /> {/* Tali */}
        <motion.div
          className="w-32 h-48 sm:w-36 sm:h-52 md:w-40 md:h-56 bg-gray-800 p-2 rounded-lg shadow-lg border-2 border-gray-600 flex flex-col items-center justify-center"
          drag
          dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotateY: [0, 10, -10, 0], rotateX: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src="/fot.png"
            alt="Rezezi Axcel"
            className="w-full h-full object-cover rounded-md"
          />
        </motion.div>
      </motion.div>

      {/* Social & Navigation */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 sm:p-6 mt-6 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Key icon={<FaGithub />} link="https://github.com/Rezezi" label="GitHub" />
        <Key icon={<FaInstagram />} link="https://www.instagram.com/rezezi_axcel/" label="Instagram" />
        <Key icon={<FaLinkedin />} link="https://linkedin.com" label="LinkedIn" />
        <Key icon={<FaTwitter />} link="https://twitter.com" label="Twitter" />
        <Key icon={<FaUser />} link="#about" label="About" />
        <Key icon={<FaProjectDiagram />} link="#projects" label="Projects" />
        <Key icon={<FaEnvelope />} link="#contact" label="Contact" />
        <Key icon={<FaCode />} link="#skills" label="Skills" />
      </motion.div>
    </div>
  );
};

interface KeyProps {
  icon: React.ReactNode;
  link?: string;
  label: string;
  onClick?: () => void;
}

const Key: React.FC<KeyProps> = ({ icon, link, label, onClick }) => {
  return (
    <motion.a
      href={link || "#"}
      onClick={onClick}
      className="w-16 sm:w-20 h-16 sm:h-20 flex flex-col items-center justify-center bg-gray-800 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-gray-700 border border-gray-600 cursor-pointer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div className="text-2xl sm:text-3xl text-white" whileHover={{ y: -5 }}>
        {icon}
      </motion.div>
      <span className="text-xs sm:text-sm mt-2 text-gray-400">{label}</span>
    </motion.a>
  );
};

export default First;
