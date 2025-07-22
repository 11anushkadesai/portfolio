import React, { useEffect, useState } from 'react';
import {
  FaUser, FaCode, FaBriefcase,
  FaProjectDiagram, FaBlog, FaEnvelope,
  FaBars, FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // close menu on mobile
    }
  };

  return (
    <div className={`
      fixed top-2 left-1/2 transform -translate-x-1/2 z-50
      h-24 transition-all duration-500 ease-in-out
      ${isScrolled
        ? 'bg-white/80 backdrop-blur-md rounded-full shadow-lg w-[90%] md:w-[60%]'
        : 'border-b border-gray-200 w-full bg-gradient-to-r from-gray-100 via-white to-gray-50'}
    `}>
      <div className={`
        flex items-center h-full px-4 max-w-7xl mx-auto transition-all duration-500
        ${isScrolled ? 'justify-start' : 'justify-between'}
      `}>
        <h1 className={`
          font-bold text-gray-900 transition-all duration-500
          ${isScrolled ? 'text-lg ml-5' : 'text-2xl'}
        `}>
          MyPortfolio
        </h1>

        {/* Desktop Navigation */}
        <div className={`
          hidden md:flex items-center ml-auto transition-all duration-500
          ${isScrolled ? 'gap-x-8 text-base m-10' : 'gap-x-6 text-xl ml-auto'}
          text-gray-800
        `}>
          <div onClick={() => scrollToSection('about')} className="flex items-center gap-1 hover:text-gray-500 cursor-pointer"><FaUser /> {!isScrolled && <span>About</span>}</div>
          <div onClick={() => scrollToSection('skills')} className="flex items-center gap-1 hover:text-gray-500 cursor-pointer"><FaCode /> {!isScrolled && <span>Skills</span>}</div>
          <div onClick={() => scrollToSection('experience')} className="flex items-center gap-1 hover:text-gray-500 cursor-pointer"><FaBriefcase /> {!isScrolled && <span>Experience</span>}</div>
          <div onClick={() => scrollToSection('project')} className="flex items-center gap-1 hover:text-gray-500 cursor-pointer"><FaProjectDiagram /> {!isScrolled && <span>Projects</span>}</div>
          
          <div onClick={() => scrollToSection('contact')} className="flex items-center gap-1 hover:text-gray-500 cursor-pointer"><FaEnvelope /> {!isScrolled && <span>Contact</span>}</div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden ml-auto text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 px-4 pb-4 pt-2 space-y-2 text-gray-800 rounded-b-2xl shadow-lg">
          <div onClick={() => scrollToSection('about')} className="flex items-center gap-2 text-sm hover:text-gray-500 cursor-pointer"><FaUser /> About</div>
          <div onClick={() => scrollToSection('skills')} className="flex items-center gap-2 text-sm hover:text-gray-500 cursor-pointer"><FaCode /> Skills</div>
          <div onClick={() => scrollToSection('experience')} className="flex items-center gap-2 text-sm hover:text-gray-500 cursor-pointer"><FaBriefcase /> Experience</div>
          <div onClick={() => scrollToSection('project')} className="flex items-center gap-2 text-sm hover:text-gray-500 cursor-pointer"><FaProjectDiagram /> Projects</div>
          <div onClick={() => scrollToSection('blogs')} className="flex items-center gap-2 text-sm hover:text-gray-500 cursor-pointer"><FaBlog /> Blogs</div>
          <div onClick={() => scrollToSection('contact')} className="flex items-center gap-2 text-sm hover:text-gray-500 cursor-pointer"><FaEnvelope /> Contact</div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
