"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { FaLaravel, FaReact, FaDatabase, FaDocker } from "react-icons/fa";
import { SiXampp, SiPrisma, SiNuxtdotjs, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "React Native", icon: <FaReact className="text-blue-400" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
  { name: "XAMPP", icon: <SiXampp className="text-orange-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Prisma", icon: <SiPrisma className="text-purple-400" /> },
  { name: "Nuxt.js", icon: <SiNuxtdotjs className="text-green-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
];

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  return (
    <motion.div
      ref={tiltRef}
      className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-white transform transition-all"
      whileHover={{ y: -10, rotateX: 10 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{name}</h3>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-green-400">My Skills</h1>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6"
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
