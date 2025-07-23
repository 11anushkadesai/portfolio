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
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
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
      className="w-full bg-white flex border-gray-200 border-y-[1.5px] flex-col items-center font-sans px-2 sm:px-3 md:px-4 py-8"
    >
      {/* Heading */}
      <h1 className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-bold text-center">
        W<span className="text-gray-500">O</span>RK EXPERIENCE
      </h1>

      {/* Timeline + Card Container */}
      <div className="relative w-full max-w-2xl mt-6">
        {/* Vertical Line */}
        <div className="absolute -left-5 top-0 bottom-0 hidden sm:flex">
          <div
            className="w-[2px] bg-gray-400 rounded-full transition-all duration-300 ease-out"
            style={{ height: `${lineHeight}%` }}
          />
        </div>

        <span className="text-gray-400 text-xs ml-1">Feb 2025 - Present</span>

        {/* Experience Card */}
        <div
          ref={cardRef}
          className="bg-white rounded-lg p-3 sm:p-4 md:p-5 mt-2 shadow-sm border border-gray-200"
        >
          <div className="flex flex-col sm:flex-row items-start gap-3">
            {/* Company Logo */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full overflow-hidden flex-shrink-0 border border-gray-300">
              {/* <img src="/pro1.png" alt="Company Logo" className="w-full h-full object-cover" /> */}
            </div>

            {/* Company Info */}
            <div className="flex flex-col text-gray-800">
              <p className="text-sm sm:text-base font-semibold">
                Talent Corner HR Services Pvt Ltd
              </p>
              <p className="text-[11px] sm:text-xs text-gray-500">
                Software Developer Intern • Jan 2025 – Present • Ghatkopar, Mumbai
              </p>

              <ul className="list-disc list-inside mt-2 space-y-1 text-[11px] sm:text-xs text-gray-700">
                <li>
                  Built <strong>Campus Recruitment System</strong> using React, Node.js, MySQL.
                </li>
                <li>
                  Developed dashboards to monitor hiring across departments.
                </li>
                <li>
                  Created <strong>Flutter software</strong> for internal use with MySQL backend.
                </li>
                <li>
                  Scraped & cleaned <strong>52,000+ colleges</strong> and <strong>10,000+ companies</strong> using Python + Selenium.
                </li>
                <li>
                  Integrated real-time updates and filtering logic.
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
