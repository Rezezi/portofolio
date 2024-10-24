/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js'; // Import fireworks-js
import { Typewriter } from 'react-simple-typewriter';

const First: React.FC = () => {
  const [slideIn, setSlideIn] = useState(true); // Control slide-in effect
  const containerRef = useRef<HTMLDivElement>(null); // Reference for the fireworks container

  const greetings = [
    "Hi, I'm Axcel 👋",
    "Hi, I'm a Backend Developer 👋",
    "Hi, I'm a Game Developer 👋",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setSlideIn(false); // Start slide out

      setTimeout(() => {
        index = (index + 1) % greetings.length; // Increment index and loop back
        setSlideIn(true); // Start slide in
      }, 500); // This matches the CSS slide duration
    }, 3500); // Change greeting every 3.5 seconds

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, []);

  // Fireworks Effect using fireworks-js
  useEffect(() => {
    if (containerRef.current) {
      const fireworks = new Fireworks(containerRef.current, {
        hue: { min: 0, max: 345 },
        delay: { min: 40, max: 60 }, // Slower fireworks launch delay
        rocketsPoint: { min: 50, max: 50 },
        particles: 150,
        traceLength: 3,
        explosion: 4, // Larger and slower explosions
        autoresize: true,
      });
      fireworks.start();

      return () => {
        fireworks.stop();
      };
    }
  }, []);

  // Keyframes for RGB border animation
  useEffect(() => {
    if (typeof window !== "undefined") { // Ensure this runs on the client-side only
      const styleSheet = document.styleSheets[0];
      const keyframes = `
        @keyframes rgb-border {
          0% { border-color: rgb(255, 0, 0); } /* Red */
          25% { border-color: rgb(0, 255, 0); } /* Green */
          50% { border-color: rgb(0, 0, 255); } /* Blue */
          75% { border-color: rgb(255, 255, 0); } /* Yellow */
          100% { border-color: rgb(255, 0, 0); } /* Red (loop) */
        }
      `;
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }, []); // Run this effect only once on mount

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-10 px-5 transition-none overflow-hidden`}
      style={{ overflow: 'hidden' }} // Prevent scrolling
    >
      {/* Fireworks container */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex justify-center items-center pointer-events-none z-20"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0 md:pr-8">
          <div
            className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-lg mx-auto transform transition-all duration-500 hover:scale-110"
            style={{
              border: '4px solid transparent',
              animation: 'rgb-border 5s infinite', // Inline animation
            }}
          >
            <Image
              src="/axcel.jpg" // Replace with your image path
              alt="Axcel"
              layout="fill"
              objectFit="cover"
              className="hover:scale-110 transform transition-transform duration-500 ease-in-out"
              style={{
                transition: 'all 0.5s ease-in-out',
                borderRadius: '50%', // Rounded
              }}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 transition-all duration-500 transform ${
              slideIn
                ? 'translate-x-0 opacity-100'
                : '-translate-x-full opacity-0'
            }`}
          >
            <Typewriter
              words={greetings} // Use the greetings array for typewriter effect
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light mb-6">
            I&apos;m a passionate developer building amazing experiences on the
            web. Let&apos;s create something incredible together!
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-500 text-white px-5 sm:px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            See My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default First;
