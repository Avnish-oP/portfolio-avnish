"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points } from "@react-three/drei";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/images/project1.png",
    title: "To-Do Application",
    description: "A task management app built with ReactJS and Tailwind CSS.",
    link: "/projects/todo-app",
  },
  {
    image: "/images/project2.png",
    title: "Hackathon Management Website",
    description: "Website to manage hackathons with automatic room allocation.",
    link: "/projects/hackathon-management",
  },
  {
    image: "/images/project3.png",
    title: "Birthday Website",
    description: "A beautiful birthday website created with Three.js and React.",
    link: "/projects/birthday-website",
  },
  {
    image: "/images/project4.png",
    title: "Portfolio Website",
    description: "Responsive and engaging portfolio website with dark mode.",
    link: "/projects/portfolio",
  },
  {
    image: "/images/project5.png",
    title: "Google Generative AI Project",
    description: "Project using Google Generative AI for various applications.",
    link: "/projects/google-ai",
  },
];

const ProjectCard = ({ image, title, description, link }: { image: string, title: string, description: string, link: string }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Image
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
        width={500}
        height={300}
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-white text-sm mt-2 text-center px-4">
          {description}
        </p>
        <Link href={link} className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
           
            View Project
          
        </Link>
      </div>
    </div>
  );
};

const FloatingParticles = () => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full">
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <points
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
        />
      </Suspense>
    </Canvas>
  );
};

const ProjectShowcase = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 to-black text-white py-10 overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-6xl font-bold antialiased">Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
