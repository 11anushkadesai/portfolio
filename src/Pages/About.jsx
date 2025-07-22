import React from 'react';

function About() {
  return (
    <div id='about' className="w-full min-h-screen bg-gradient-to-br  from-gray-100 via-white to-gray-200 flex flex-col items-center justify-start font-sans px-4 sm:px-10 py-16">

      {/* Heading */}
      <h1 className="text-gray-900 text-2xl md:text-6xl font-bold text-center">
        AB<span className="text-gray-500">O</span>UT M<span className="text-gray-500">E</span>
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-center gap-10 mt-10">

        {/* Left: Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/profile.png"
            alt="Anushka Desai"
            className="rounded-2xl shadow-lg w-[250px] sm:w-[300px] md:w-[350px] object-cover border-4 border-gray-200"
          />
        </div>

        {/* Right: Text and Button */}
        <div className="w-full md:w-1/2 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-6 md:mt-0">
          <p className="mb-6">
            Hi, I’m <strong className="text-gray-900">Anushka Desai</strong>, a passionate and performance-driven <strong className="text-gray-900">Full Stack Developer</strong> who turns ideas into real, functional, and user-focused applications. Whether it’s building seamless interfaces with <strong className="text-gray-900">React & Tailwind CSS</strong>, designing responsive mobile apps using <strong className="text-gray-900">Flutter & Dart</strong>, or managing backend logic with <strong className="text-gray-900">Node.js, Express, and MySQL</strong>, I bring a blend of creativity and precision to every project.
            <br /><br />
            From <strong className="text-gray-900">scraping 52,000+ college records</strong> to building smart apps like <strong className="text-gray-900">MedReg</strong> and <strong className="text-gray-900">Campus Recruitment System</strong>, I don’t just code—I craft solutions that solve real-world problems.
            <br /><br />
            <strong className="text-gray-900">Let’s build something impactful together.</strong>
          </p>

          <a href="#contact">
            <button className="bg-gray-900 text-white font-semibold py-2 px-6 rounded-xl hover:bg-gray-800 transition duration-300" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}

export default About;
