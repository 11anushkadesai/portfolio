import React from 'react';

function About() {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex flex-col items-center justify-start font-sans px-2 sm:px-6 py-10"
    >
      {/* Heading */}
      <h1 className="text-gray-900 text-xl md:text-4xl font-bold text-center">
        AB<span className="text-gray-500">O</span>UT M<span className="text-gray-500">E</span>
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl items-center justify-center gap-6 mt-8">
        {/* Left: Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/profile.png"
            alt="Anushka Desai"
            className="rounded-xl shadow-md w-[180px] sm:w-[220px] md:w-[260px] object-cover border-2 border-gray-200"
          />
        </div>

        {/* Right: Text and Button */}
        <div className="w-full md:w-1/2 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mt-4 md:mt-0">
          <p className="mb-4">
            Hi, I’m <strong className="text-gray-900">Anushka Desai</strong>, a passionate and performance-driven <strong className="text-gray-900">Full Stack Developer</strong> who turns ideas into real, functional, and user-focused applications. Whether it’s building seamless interfaces with <strong className="text-gray-900">React & Tailwind CSS</strong>, designing responsive mobile apps using <strong className="text-gray-900">Flutter & Dart</strong>, or managing backend logic with <strong className="text-gray-900">Node.js, Express, and MySQL</strong>, I bring a blend of creativity and precision to every project.
            <br /><br />
            From <strong className="text-gray-900">scraping 52,000+ college records</strong> to building smart apps like <strong className="text-gray-900">MedReg</strong> and <strong className="text-gray-900">Campus Recruitment System</strong>, I don’t just code—I craft solutions that solve real-world problems.
            <br /><br />
            <strong className="text-gray-900">Let’s build something impactful together.</strong>
          </p>

          <a href="#contact">
            <button className="bg-gray-900 text-white font-medium py-1.5 px-4 rounded-lg hover:bg-gray-800 text-sm transition duration-300">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
