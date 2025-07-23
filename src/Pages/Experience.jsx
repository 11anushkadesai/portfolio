import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = cardRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrolled = Math.min(Math.max(0, windowHeight - rect.top), rect.height);
        const percentScrolled = (scrolled / rect.height) * 100;
        setLineHeight(percentScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      id="experience"
      className="w-full bg-white flex border-gray-300 border-b-2 border-t-2 flex-col items-center font-sans px-2 sm:px-4 md:px-6 py-10"
    >
      {/* Heading */}
      <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        W<span className="text-gray-500">O</span>RK EXPERIENCE
      </h1>

      {/* Timeline + Card Container */}
      <div className="relative w-full max-w-3xl mt-8">
        {/* Vertical Line */}
        <div className="absolute -left-6 top-0 bottom-0 hidden sm:flex">
          <div
            className="w-0.5 bg-gray-400 rounded-full transition-all duration-300 ease-out"
            style={{ height: `${lineHeight}%` }}
          />
        </div>

        <span className="text-gray-400 text-sm ml-1">Feb 2025 - Present</span>

        {/* Experience Card */}
        <div
          ref={cardRef}
          className="bg-white rounded-xl p-4 sm:p-6 md:p-8 mt-2 shadow-md border border-gray-200"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            {/* Company Logo */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 border border-gray-300">
              {/* <img src="/pro1.png" alt="Company Logo" className="w-full h-full object-cover" /> */}
            </div>

            {/* Company Info */}
            <div className="flex flex-col text-gray-800">
              <p className="text-lg sm:text-xl font-semibold">
                Talent Corner HR Services Pvt Ltd
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Software Developer Intern • Jan 2025 – Present • Ghatkopar, Mumbai
              </p>

              <ul className="list-disc list-inside mt-2 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>
                  Developed the <strong>Campus Recruitment Management System</strong> using React, Node.js, and MySQL.
                </li>
                <li>
                  Built full-stack dashboards to track colleges, candidates, and hiring status.
                </li>
                <li>
                  Created a <strong>Flutter-based software</strong> with MySQL backend for internal use.
                </li>
                <li>
                  Scraped and cleaned data of <strong>52,000+ colleges</strong> and <strong>10,000+ companies</strong> using Python and Selenium.
                </li>
                <li>
                  Worked closely with the team to implement real-time updates and dynamic filtering.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
