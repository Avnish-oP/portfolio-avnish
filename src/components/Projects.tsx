// components/ProjectSection.js

import Link from 'next/link';

const projects = [
  {
    name: "Project One",
    description: "This is a description of Project One.",
    status: "Completed",
    imageUrl: "/images/academy app1.png",
  },
  {
    name: "OpinionZ",
    description: "A social media platform for sharing opinions anonymously and you can fact check opinions with AI. Built with React, Node.js, Express, and MongoDB.",
    status: "In Progress",
    imageUrl: "/images/opinionZ-1.png",
  },
];

const ProjectSection = () => {
  return (
    <div className="py-16 bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            My Work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                className="w-full h-56 object-cover brightness-75 grayscale hover:grayscale-0 transition duration-500"
                src={project.imageUrl}
                alt={project.name}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
              <div className="absolute -bottom-5 left-0 p-6">
                <h3 className="text-lg font-bold antialiased brightness-125 leading-6 text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-base font-semibold antialiased brightness-150 text-gray-300">
                  {project.description}
                </p>
                <p className="mt-4 text-sm text-green-400">
                  Status: {project.status}
                </p>
              </div>
              <Link href={`/projects/${index}`}>
                <div className="absolute bottom-4 right-4 p-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-300 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/projects">
            <div className="inline-block p-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-300 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
