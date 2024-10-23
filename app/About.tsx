"use client";
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const About: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Intersection Observer for scroll animations
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
  }, []);

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col justify-center items-center py-20 px-5 transition-all duration-500 relative overflow-hidden ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      {/* About Me Section */}
      <div
        ref={aboutRef}
        className={`max-w-4xl w-full text-center transform transition-all duration-1000 ease-out z-10 ${
          aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          About Me
        </h1>
        <p className="text-lg md:text-xl font-light leading-relaxed mb-6">
          Hi, I&apos;m Axcel, a passionate backend developer focused on building efficient applications and exploring new technologies.
        </p>

        {/* Card for Personal Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 transition-transform duration-300 hover:scale-105">
          <div className="text-left md:text-center">
            <p className="mb-2"><strong>Status:</strong> Siswa Di SMKN 21 Jakarta</p>
            <p className="mb-2"><strong>Favorite Language:</strong> JavaScript, TypeScript</p>
            <p className="mb-2"><strong>Email:</strong> axcelrezezi@example.com</p>
            <p className="mb-2">
              <strong>Instagram:</strong>{' '}
              <a
                href="https://www.instagram.com/rezezi_axcel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                @rezezi_axcel
              </a>
            </p>
            <p className="mb-2"><strong>Phone:</strong> 087878254877</p>
            <p className="mb-2"><strong>Hobbies:</strong> Coding, Gaming, Playing Basketball</p>
            <p><strong>Field of Interest:</strong> Backend Development, Game Development</p>
          </div>
        </div>
      </div>

      {/* Skill Logos Section */}
      <div
        ref={skillsRef}
        className={`mt-16 max-w-6xl w-full transform transition-all duration-1000 ease-out z-10 ${
          skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6"> {/* Increased gap from gap-8 to gap-6 */}
          {/* Rotating Skill Logos */}
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width={100} height={100} className="w-full h-full animate-spin-slow" />
          </div>
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image src="/Lara.png" alt="Laravel" width={100} height={100} className="w-full h-full animate-spin-slow" />
          </div>
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" width={100} height={100} className="w-full h-full animate-spin-slow" />
          </div>
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-plain.svg" alt="Docker" width={100} height={100} className="w-full h-full animate-spin-slow" />
          </div>
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg" alt="Unity" width={100} height={100} className="w-full h-full animate-spin-slow" />
          </div>
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" alt="Vue.js" width={100} height={100} className="w-full h-full animate-spin-slow" />
          </div>
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image src="/html.png" alt="Html" width={100} height={100} className="w-full h-full animate-spin-slow" />
          </div>
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image src="/css.png" alt="Css" width={100} height={100} className="w-full h-full animate-spin-slow" />
          </div>
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <Image src="/flu.png" alt="Fluter" width={100} height={100} className="w-full h-full animate-spin-slow" />
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="mt-16 max-w-4xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">My Certificates</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
            <Image
              src="/sert1.png"
              alt="Certificate 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-500 transform hover:scale-110"
            />
          </div>
          <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
            <Image
              src="/sert2.jpg"
              alt="Certificate 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-500 transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
