import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';

function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-200 flex items-center justify-center px-4 py-10"
    >
      <div className="max-w-4xl w-full bg-white border border-gray-200 rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col items-center justify-center text-center gap-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800">
          Connect <span className="text-gray-500">With</span> Me
        </h2>
        <p className="text-gray-600 text-base max-w-xl">
          Have a project in mind or a question? Reach out and let’s turn your ideas into reality.
        </p>

        {/* Contact Info */}
        <div className="space-y-5 text-gray-800 text-base">
          <div className="flex items-center gap-3 justify-center">
            <FaEnvelope className="text-xl" />
            <span>desaianushka945@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <FaSquarePhone className="text-xl" />
            <span>+91 7045405204</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <FaMapMarkerAlt className="text-xl" />
            <span>Mumbai, India</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <FaLinkedin className="text-blue-700 text-xl" />
            <a
              href="https://www.linkedin.com/in/anushka-desai-1850b1236/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-700"
            >
              linkedin.com/in/anushkadesai
            </a>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <FaGithub className="text-xl" />
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
