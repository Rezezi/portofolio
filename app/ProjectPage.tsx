"use client";
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const ProjectPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Intersection Observer for scroll animations
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
  }, []);

  const projects = [
    {
      title: 'To Do List',
      description: 'A simple and intuitive to-do list application to help you manage your tasks efficiently.',
      image: '/todolist.png', // Image for To Do List
      githubLink: 'https://github.com/Rezezi/todo-list' // Replace with your GitHub link
    },
    {
      title: 'Perpustakaan',
      description: 'An online library system to manage books and user accounts, built with Laravel.',
      image: '/perpustakaan.png', // Image for Perpustakaan
      githubLink: 'https://github.com/yourusername/perpustakaan' // Replace with your GitHub link
    },
    {
      title: 'Project Gabut',
      description: 'A fun project showcasing various features and functionalities with an engaging UI.',
      image: '/project_gabut.png', // Image for Project Gabut
      githubLink: 'https://github.com/yourusername/project-gabut' // Replace with your GitHub link
    },
  ];

  return (
    <section
      id='projects'
      className={`min-h-screen py-20 px-5 transition-all duration-500 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div ref={ref} className={`text-center mb-10 transform transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>My Projects</h1>
        <p className='text-lg md:text-xl font-light leading-relaxed mb-6'>
          Here are some of the projects I&apos;ve worked on, each designed with unique functionalities and aesthetics.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-8'>
        {projects.map((project, index) => (
          <div key={index} className='relative w-full max-w-xs transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-4'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105'>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className='w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110'
              />
              <div className='p-4'>
                <h2 className='text-xl font-bold mb-2'>{project.title}</h2>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
