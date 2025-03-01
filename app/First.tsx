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

  // Fungsi untuk scroll ke section tertentu

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">
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

      {/* Social & Navigation */}
      <motion.div
        className="grid grid-cols-4 gap-3 p-6 mt-6 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Key icon={<FaGithub />} link="https://github.comhttps://github.com/Rezezi" label="GitHub" />
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
  onClick?: () => void; // Menambahkan fungsi klik
}

const Key: React.FC<KeyProps> = ({ icon, link, label, onClick }) => {
  return (
    <motion.a
      href={link || "#"}
      onClick={onClick} // Menggunakan event onClick
      className="w-20 h-20 flex flex-col items-center justify-center bg-gray-800 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-gray-700 border border-gray-600 cursor-pointer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div className="text-3xl text-white" whileHover={{ y: -5 }}>
        {icon}
      </motion.div>
      <span className="text-sm mt-2 text-gray-400">{label}</span>
    </motion.a>
  );
};

export default First;
