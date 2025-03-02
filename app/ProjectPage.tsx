"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";

const projects = [
  {
    title: "PPLG Class",
    description: "A project from the PPLG class.",
    image: "/pplg.png",
    githubLink: "https://github.com/Rezezi/pplg",
    vercelLink: "https://kelas-five.vercel.app/",
  },
  {
    title: "UTS Project",
    description: "My midterm exam project, a fully responsive web app.",
    image: "/images.png",
    githubLink: "https://github.com/Rezezi/uts-axcel",
    vercelLink: "https://uts-axcel.vercel.app/",
  },
  {
    title: "Book Hotel",
    description: "A hotel booking system with modern UI.",
    image: "/hotel.png",
    githubLink: "https://github.com/Rezezi/travella",
    vercelLink: "https://vercel.com/rezezis-projects/book-hotel",
  },
  {
    title: "Gig Flow",
    description: "A freelance platform with an interactive UI.",
    image: "/data.png",
    githubLink: "https://github.com/rezezi/laravel",
  }
];

const ProjectCard: React.FC<{ project: (typeof projects)[0] }> = ({ project }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 20,
        speed: 300,
        glare: true,
        "max-glare": 0.4,
      });
    }
  }, []);

  return (
    <motion.div
      ref={tiltRef}
      className="relative bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-white transform transition-all"
      whileHover={{
        scale: 1.05,
        rotateX: 10,
        rotateY: 10,
        boxShadow: "0px 15px 30px rgba(0, 255, 130, 0)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-blue-500 opacity-20 blur-xl rounded-xl"></div>
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-lg transition-transform duration-500 transform hover:scale-110"
      />
      <h2 className="text-2xl font-bold mt-4 relative z-10">{project.title}</h2>
      <p className="text-gray-400 text-sm text-center mt-2 relative z-10">
        {project.description}
      </p>
      <div className="flex gap-3 mt-4 relative z-10">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          GitHub
        </a>
        {project.vercelLink && (
          <a
            href={project.vercelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            View
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectPage = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-5 flex flex-col items-center"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-green-400">My Projects</h1>
        <p className="text-lg text-gray-400 mt-2">
          Here are some of my featured projects.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectPage;