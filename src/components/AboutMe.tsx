import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function AboutMe() {
  const words =
    "Full-stack web developer experienced in utilizing technologies like ReactJS , ExpressJS , and JavaScript to create efficient and dynamic web applications. Proficient in database management with PostgreSQL and well-versed in Tailwind CSS for sleek UI designs. Additionally skilled in C++ programming. Committed to delivering high-quality, user-centric solutions while continuously exploring and integrating cutting-edge technologies";
  return (
    <div className="flex flex-col gap-6 justify-center items-center p-4 dark:bg-black">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold antialiased">
          About Me
        </h1>
      </div>
      <div className="text-center lg:mx-20 ">
        <TextGenerateEffect className="font-medium mb-6" words={words} />
      </div>
      <div>
        <button className="px-6 py-2 bg-black text-white rounded-lg font-medium hover:font-bold flex items-center transform hover:-translate-y-1 transition duration-400">
          Contact Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
