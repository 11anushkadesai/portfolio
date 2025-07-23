import React, { useState } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: 'Campus Recruitment Management System',
      description:
        'A full-stack web app using React, Node.js & MySQL to automate hiring. Features data scraping, dashboards, analytics & a scheduler.',
      tech: ['React', 'Node.js', 'MySQL', 'Selenium', 'Python', 'Tailwind'],
      img: '/campus.png',
      video: '/campusvideo.mp4',
      github: 'https://github.com/11anushkadesai/CampusRecruitmentSystem',
      live: 'https://campus-recruitment-system-six.vercel.app',
    },
    {
      title: 'Data Scraping Software ',
      description:
        'A Flutter desktop app with modules for scraping college, corporate & LinkedIn profiles, saving outputs to Excel/MySQL.',
      tech: ['Flutter', 'Dart', 'Python', 'Selenium'],
      img: '/datascrap.png',
      video: '/datascrap.mp4',
      github: 'https://github.com/11anushkadesai/Datascrap',
      live: '#',
    },
    {
      title: 'Ai Presentation Generator',
      description:
        'Generates slides using AI based on user input. Saves time & automates professional presentation creation.',
      tech: ['Flutter', 'Dart'],
      img: '/ai-presentation.png',
      video: '/ai-presentation.mp4',
      github: '#',
      live: 'https://ai-presentation-omega.vercel.app/',
    },
  ];

  return (
    <div id="project" className="w-full px-2 sm:px-4 md:px-6 py-10 bg-white font-sans border-y-2 border-gray-300">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        Proj<span className="text-gray-500">ec</span>ts
      </h1>

      {/* Project Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <img
              src={project.img}
              alt={`${project.title} Preview`}
              className="w-full h-32 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{project.title}</h2>
            <p className="text-gray-600 text-xs mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-[10px] bg-gray-700 text-white px-2 py-0.5 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => setSelectedProject(project)}
              className="mt-auto px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded hover:bg-gray-700 transition"
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-md w-full relative p-4 shadow-2xl pt-8">
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl font-bold"
            >
              &times;
            </button>

            {/* Video */}
            {selectedProject.video && (
              <video
                src={selectedProject.video}
                type="video/mp4"
                controls
                className="w-full rounded mb-4 max-h-[220px] object-contain"
              />
            )}

            <h2 className="text-lg font-bold text-gray-800 mb-1">{selectedProject.title}</h2>
            <p className="text-gray-700 text-sm mb-3">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="text-[10px] bg-gray-700 text-white px-2 py-0.5 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gray-800 text-white rounded hover:bg-gray-700 text-xs"
              >
                GitHub
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-500 text-xs"
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
