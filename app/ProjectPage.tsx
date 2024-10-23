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
      githubLink: 'https://github.com/Rezezi/todo-list', // GitHub link
      vercelLink: 'https://todo-list-seven-iota-60.vercel.app/' // Add your Vercel link here
    },
    {
      title: 'gigflow employee data',
      description: 'This is an employee data project that I made with Laravel Simple Crud',
      image: '/data.png', // Image for Perpustakaan
      githubLink: 'https://github.com/rezezi/laravel', // GitHub link
     // Add your Vercel link here
    },
    {
      title: 'Project Gabut',
      description: 'A fun project showcasing various features and functionalities with an engaging UI.',
      image: '/gabut.png', // Image for Project Gabut
      githubLink: 'https://github.com/rezezi/semangat',
      vercelLink: 'https://vercel.com/rezezis-projects/klik' // Add your Vercel link here
    },
    {
      title: 'madding pplg',
      description: 'This is a madding project from the PPLG class.',
      image: '/mad.png', // Image for the new project
      githubLink: 'https://github.com/rezezi/new-awesome-project', // GitHub link
      vercelLink: 'https://vercel.com/rezezis-projects/madding' // Add your Vercel link here
    },
  ];

  return (
    <section
      id='projects'
      className={`min-h-screen py-20 px-5 transition-all duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
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
                <div className='flex gap-2'>
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'
                  >
                    View on GitHub
                  </a>
                  {project.vercelLink && (
                    <a
                      href={project.vercelLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition'
                    >
                      View on Vercel
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
