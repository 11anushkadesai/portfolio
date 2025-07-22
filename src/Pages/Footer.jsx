import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-700 py-8 px-6 mt-16 font-sans border-t border-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Name or Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-800">Anushka Desai</h2>
          <p className="text-sm text-gray-500">Full Stack Developer Portfolio</p>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-6 text-xl text-gray-600">
          <a href="https://linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <FaLinkedin />
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <FaGithub />
          </a>
          <a href="mailto:desaianushka945@gmail.com" className="hover:text-gray-900">
            <FaEnvelope />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right text-sm text-gray-500">
          © {new Date().getFullYear()} Anushka Desai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
