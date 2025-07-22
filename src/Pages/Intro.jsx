import React from 'react';
import { FaArrowDown, FaEnvelope } from 'react-icons/fa';

function Intro() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="intro"
      className="min-h-screen w-full overflow-x-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-20 
      bg-gradient-to-br from-gray-100 via-white to-white dark:from-neutral-900 dark:to-neutral-950 transition-all"
    >
      <div className="w-full max-w-screen-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-gray-600 dark:text-gray-300">Anushka Desai</span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
          Frontend Developer
        </h2>

        <p className="max-w-md sm:max-w-lg md:max-w-2xl text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg mb-8 mx-auto">
          I build clean and responsive web interfaces using React, Tailwind CSS, and love transforming design concepts into interactive, modern web applications.
        </p>

        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 sm:px-6 sm:py-2.5 bg-gray-900 text-white rounded-full shadow hover:bg-gray-800 transition text-sm sm:text-base"
          >
            <FaEnvelope className="inline mr-2" />
            Contact Me
          </button>
          <button
            onClick={() => scrollToSection('project')}
            className="px-5 py-2 sm:px-6 sm:py-2.5 border border-gray-900 text-gray-900 dark:text-white rounded-full 
            hover:bg-gray-100 dark:hover:bg-neutral-800 transition text-sm sm:text-base"
          >
            View Projects
          </button>
        </div>

        <div className="mt-16 animate-bounce text-gray-500 dark:text-gray-300">
          <FaArrowDown size={24} />
        </div>
      </div>
    </section>
  );
}

export default Intro;
