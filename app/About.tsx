"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const About: React.FC = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-5 bg-black text-white"
    >
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 20 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl w-full text-center"
      >
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
          About Me
        </h1>
        <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
          Hi, I&apos;m Axcel, a passionate **Full-Stack Developer** who loves
          creating modern and efficient applications. Always exploring new
          technologies to build **better digital experiences**.
        </p>

        <div
          ref={tiltRef}
          className="bg-gray-900 border border-green-500 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
        >
          <div className="text-left md:text-center space-y-3">
            <p>
              <strong className="text-green-400">Status:</strong> Student at
              SMKN 21 Jakarta
            </p>
            <p>
              <strong className="text-green-400">Favorite Tech:</strong>{" "}
              JavaScript, TypeScript, React, Next.js, Laravel
            </p>
            <p>
              <strong className="text-green-400">Email:</strong>{" "}
              axcelrezezi@example.com
            </p>
            <p>
              <strong className="text-green-400">Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/rezezi_axcel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                @rezezi_axcel
              </a>
            </p>
            <p>
              <strong className="text-green-400">Hobbies:</strong> Coding,
              Gaming, Playing Basketball
            </p>
            <p>
              <strong className="text-green-400">Field of Interest:</strong>{" "}
              Web & Mobile Development, AI, Game Development
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
