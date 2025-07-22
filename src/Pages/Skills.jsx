import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { x: index % 2 === 0 ? -200 : 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 flex flex-col items-center font-sans px-4 sm:px-6 py-16">
      {/* Heading */}
      <h1 className="text-gray-700 text-3xl sm:text-5xl md:text-6xl font-bold text-center drop-shadow mb-12">
        Tec<span className="text-gray-500">hni</span>cal<br />
        <span className="text-gray-900">Skills</span>
      </h1>

      {/* Skill Sections */}
      {[
        {
          title: 'Frontend',
          skills: [
            { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
            { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
            { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
            { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
            { name: 'Bootstrap', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png' },
          ]
        },
        {
          title: 'Tools',
          skills: [
            { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
            { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'Excel', icon: 'https://cdn-icons-png.flaticon.com/512/732/732220.png' },
            { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
          ]
        },
        {
          title: 'Languages',
          skills: [
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
            { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          ]
        },
        {
          title: 'Backend',
          skills: [
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
            { name: 'PHP', icon: 'https://cdn-icons-png.flaticon.com/512/919/919830.png' },
          ]
        },
        {
          title: 'Database',
          skills: [
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
          ]
        },
      ].map((section, index) => (
        <SkillRow
          key={index}
          title={section.title}
          skills={section.skills}
          innerRef={(el) => addToRefs(el)}
        />
      ))}
    </div>
  );
}

function SkillRow({ title, skills, innerRef }) {
  return (
    <div
      ref={innerRef} id='skills'
      className="w-full max-w-6xl rounded-2xl bg-white border border-gray-300 shadow-md p-6 mb-10 backdrop-blur-sm"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="flex justify-between items-center flex-wrap w-full gap-y-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="w-1/2 sm:w-1/5 flex flex-col items-center text-center text-sm sm:text-base"
          >
            {skill.icon && (
              <img
                src={skill.icon}
                alt={`${skill.name} Icon`}
                className="w-10 sm:w-12 mb-2"
              />
            )}
            {skill.name && (
              <span className="font-semibold text-gray-700">{skill.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
