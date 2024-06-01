"use client";
import React from "react";

const tools = [
  {
    image: "/images/redux.png", // Ensure these images exist in the public/images directory
    title: "Redux",
    description: "State management library for JavaScript apps",
  },
  {
    image: "/images/git.png",
    title: "Git/GitHub",
    description: "Version control and collaboration platform",
  },
  {
    image: "/images/postman.png",
    title: "Postman",
    description:
      "API development environment for building, testing, and documenting APIs",
  },
  {
    image: "/images/firebase.png",
    title: "Firebase",
    description: "Platform for building web and mobile applications",
  },
  {
    image: "/images/ffmpeg.png",
    title: "FFmpeg",
    description: "Multimedia framework to decode, encode, transcode, etc.",
  },
  {
    image: "/images/docker.png",
    title: "Docker",
    description: "Containerization platform for building, shipping, and running applications",
  },
  {
    image: "/images/tailwind.png",
    title: "Tailwind",
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    image: "/images/appwrite.png",
    title: "Appwrite",
    description: "Open-source backend server for web and mobile developers",
  },
  // Add more tools as needed
];

const ToolCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-sm dark:shadow-white shadow-black drop-shadow-2xl  hover:scale-105 transform transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-52 object-contain" />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-white text-sm mt-2 text-center px-4">
          {description}
        </p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="mt-4 lg:mt-10">
      <div>
        <div>
          <h1 className="text-center text-6xl font-bold antialiased">Tools</h1>
        </div>
      </div>
      <div className=" flex justify-center items-center">

      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 md:w-[80vw] gap-6 p-4 ">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            image={tool.image}
            title={tool.title}
            description={tool.description}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
