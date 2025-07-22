import React from 'react';
import { FaArrowDown, FaEnvelope } from 'react-icons/fa';

function Intro() {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 
      bg-gradient-to-br from-gray-100 via-white to-white dark:from-neutral-900 dark:to-neutral-950 transition-all"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        Hi, I'm <span className="text-gray-600">Anushka Desai</span>
      </h1>

      <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
        Frontend Developer
      </h2>

      <p className="max-w-xl text-gray-600 dark:text-gray-400 text-sm md:text-base mb-8">
        I build clean and responsive web interfaces with React, Tailwind CSS, and love turning
        design ideas into live, interactive applications.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#contact"
          className="px-6 py-2 bg-gray-900 text-white rounded-full shadow hover:bg-gray-800 transition" onClick={() => scrollToSection('contact')}
        >
          <FaEnvelope className="inline mr-2" />
          Contact Me
        </a>
        <a
          href="#project"
          className="px-6 py-2 border border-gray-900 text-gray-900 rounded-full 
          hover:bg-gray-100 dark:hover:bg-neutral-800 transition" onClick={() => scrollToSection('project')}
        >
          View Projects
        </a>
      </div>

      <div className="mt-16 animate-bounce text-gray-500">
        <FaArrowDown size={24} />
      </div>
    </section>
  );
}

export default Intro;
