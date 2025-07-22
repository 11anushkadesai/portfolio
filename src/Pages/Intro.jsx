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
      className="min-h-screen w-full overflow-x-hidden flex flex-col justify-center items-center text-center px-4 sm:px-5 md:px-8 lg:px-12 
      bg-gradient-to-br from-gray-100 via-white to-white dark:from-neutral-900 dark:to-neutral-950 transition-all"
    >
      <div className="w-full max-w-screen-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          Hi, I'm <span className="text-gray-600 dark:text-gray-300">Anushka Desai</span>
        </h1>

        <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
          Frontend Developer
        </h2>

        <p className="max-w-md sm:max-w-lg md:max-w-2xl text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base mb-6 mx-auto">
          I build clean and responsive web interfaces using React, Tailwind CSS, and love transforming design concepts into interactive, modern web applications.
        </p>

        <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-1.5 sm:px-5 sm:py-2 bg-gray-900 text-white rounded-full shadow hover:bg-gray-800 transition text-xs sm:text-sm"
          >
            <FaEnvelope className="inline mr-2" />
            Contact Me
          </button>
          <button
            onClick={() => scrollToSection('project')}
            className="px-4 py-1.5 sm:px-5 sm:py-2 border border-gray-900 text-gray-900 dark:text-white rounded-full 
            hover:bg-gray-100 dark:hover:bg-neutral-800 transition text-xs sm:text-sm"
          >
            View Projects
          </button>
        </div>
      </div>

      <div className="mt-12 animate-bounce text-gray-500 dark:text-gray-300 flex justify-center">
        <FaArrowDown size={20} />
      </div>
    </section>
  );
}

export default Intro;
