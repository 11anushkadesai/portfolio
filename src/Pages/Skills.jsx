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
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
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

  const skillSections = [
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
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
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
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 flex flex-col items-center font-sans px-2 sm:px-4 py-10">
      <h1 className="text-gray-700 text-2xl sm:text-3xl md:text-4xl font-bold text-center drop-shadow mb-8">
        Tec<span className="text-gray-500">hni</span>cal <span className="text-gray-900">Skills</span>
      </h1>

      {skillSections.map((section, index) => (
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
      ref={innerRef}
      className="w-full max-w-5xl rounded-lg bg-white border border-gray-300 shadow-sm p-4 mb-6"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
      <div className="flex flex-wrap justify-start gap-y-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="w-1/3 sm:w-1/6 flex flex-col items-center text-center text-xs sm:text-sm"
          >
            {skill.icon && (
              <img
                src={skill.icon}
                alt={`${skill.name} Icon`}
                className="w-8 sm:w-10 mb-1"
              />
            )}
            {skill.name && (
              <span className="text-gray-700 font-medium">{skill.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
