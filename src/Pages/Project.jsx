import React, { useState } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: 'Campus Recruitment Management System',
      description:
        'A full-stack web application built with React, Node.js, and MySQL to automate the campus hiring process. It features modules for data scraping from AISHE and College Dunia, bulk and single record editing, department-specific dashboards for HR and Marketing, real-time analytics, reporting, and a meeting scheduler. The system streamlines college data management and recruitment tracking across teams.',
      tech: ['React', 'Node.js', 'MySQL', 'Selenium','Python','Tailwind'],
      img: '/campus.png',
      video: '/campusvideo.mp4',
      github: 'https://github.com/11anushkadesai/CampusRecruitmentSystem',
      live: 'https://campus-recruitment-system-six.vercel.app',
    },
    {
      title: 'Data Scraping Software ',
      description:
        'The Data Scraping Software is a desktop application built using Flutter and Dart to streamline recruitment data collection. It includes three modules: Campus Data Scraping (from AISHE and College Dunia), Corporate Data Scraping (from job portals like Naukri and Glassdoor), and Senior Profile Scraping (from LinkedIn). The software enriches data using Google Maps, and saves outputs in Excel and MySQL, enabling efficient, structured, and real-time data management for recruitment teams.',
      tech: ['Flutter', 'Dart', 'Python', 'Selenium'],
      img: '/datascrap.png',
      video: '/datascrap.mp4',
      github: 'https://github.com/11anushkadesai/Datascrap',
      live: '#',
    },
    {
      title: 'Ai Presentation Generator',
      description:
        'An AI-powered presentation generator that automates the creation of professional presentations. Users can input their content, and the AI will generate slides, significantly reducing the time spent on manual slide creation.',
      tech: ['Flutter', 'Dart'],
      img: '/ai-presentation.png',
      video: '/ai-presentation.mp4',
      github: '#',
      live: 'https://ai-presentation-omega.vercel.app/',
    },
  ];

  return (
    <div id="project" className="relative w-full px-4 sm:px-6 md:px-12 py-16 bg-white font-sans border-y-4 border-gray-400">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-10">
        Proj<span className="text-gray-500">ec</span>ts
      </h1>

      {/* Project Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <img
              src={project.img}
              alt={`${project.title} Preview`}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => setSelectedProject(project)}
              className="mt-auto px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-md hover:bg-gray-700 transition"
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-2xl w-full relative p-6 shadow-2xl pt-10">
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>

            {/* Video */}
            {selectedProject.video && (
              <video
                src={selectedProject.video}
                type="video/mp4"
                controls
                className="w-full rounded-md mb-6 max-h-[300px] object-contain"
              />
            )}

            <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 text-sm"
              >
                GitHub
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 text-sm"
              >
                Go Live
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
