"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { FaLaravel, FaReact, FaDatabase, FaDocker } from "react-icons/fa";
import { SiXampp, SiPrisma, SiNuxtdotjs, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "React Native", icon: <FaReact className="text-blue-400" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
  { name: "XAMPP", icon: <SiXampp className="text-orange-400" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Prisma", icon: <SiPrisma className="text-gray-300" /> },
  { name: "Nuxt.js", icon: <SiNuxtdotjs className="text-green-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
];

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  const tiltRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 30,
        speed: 500,
        glare: true,
        "max-glare": 0.7,
        scale: 1.1,
      });
    }
  }, []);

  return (
    <motion.div
      ref={tiltRef}
      className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center text-white transform transition-all cursor-pointer overflow-hidden ${unlocked ? "bg-black border-2 border-green-400" : "bg-gray-800"}`}
      whileHover={{ y: -5, rotateX: 10, rotateY: 10 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setUnlocked(true)}
    >
      {!unlocked ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-green-400 font-bold text-xs sm:text-sm"
        >
          <span className="mb-1">🔒 Skill Locked</span>
          <span className="text-xs">Tap to Unlock</span>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1.2 }} transition={{ duration: 0.3 }} className="text-3xl sm:text-4xl mb-1">
            {icon}
          </motion.div>
          <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="text-xs sm:text-sm font-semibold">
            {name}
          </motion.h3>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mt-1 text-xs text-green-300">
            ✅ Skill Unlocked!
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-green-400 text-center">My Skills</h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
