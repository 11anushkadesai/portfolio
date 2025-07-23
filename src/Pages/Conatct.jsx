import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';

function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 flex items-center justify-center px-2 py-8"
    >
      <div className="max-w-2xl w-full bg-white border border-gray-200 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Connect <span className="text-gray-500">With</span> Me
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-md">
          Have a project or a question? Let’s turn your ideas into reality.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 text-gray-800 text-sm sm:text-base">
          <div className="flex items-center gap-2 justify-center">
            <FaEnvelope className="text-base" />
            <span>desaianushka945@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaSquarePhone className="text-base" />
            <span>+91 7045405204</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaMapMarkerAlt className="text-base" />
            <span>Mumbai, India</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaLinkedin className="text-blue-700 text-base" />
            <a
              href="https://www.linkedin.com/in/anushka-desai-1850b1236/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-700"
            >
              linkedin.com/in/anushkadesai
            </a>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaGithub className="text-base" />
            <a
              href="https://github.com/11anushkadesai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/anushkadesai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
