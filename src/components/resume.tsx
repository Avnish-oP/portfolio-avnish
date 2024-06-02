"use client";
import React, { useState } from 'react';
import { useTheme } from 'next-themes';

const Resume = () => {
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
          Download PDF
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">Avnish Kumar</h1>
      <div className="flex mb-4">
        <a href="#" className="mr-4 text-blue-500 hover:underline">
          LinkedIn
        </a>
        <a href="#" className="mr-4 text-blue-500 hover:underline">
          Github
        </a>
        <a href="#" className="text-blue-500 hover:underline">
          Twitter
        </a>
      </div>
      <p className="mb-6">R-796, Mangolpur, New Delhi-110083</p>
      <p className="mb-6">9650409384</p>
      <p className="mb-6">kavnish1245@gmail.com</p>

      <h2 className="text-lg font-semibold mb-4">PROFILE SUMMARY</h2>
      <p className="mb-6">
        Skilled software developer with strong expertise in JavaScript,
        specializing in popular technologies like Next.js, MongoDB, PostgreSQL,
        and Express.js. Proficient in data structures and algorithms (DSA) with
        familiarity in TypeScript. Proven track record in contributing to web
        application development and implementing advanced functionalities.
      </p>

      <h2 className="text-lg font-semibold mb-4">EXPERIENCE</h2>
      <div className="mb-6">
        <h3 className="font-semibold">React.js Developer</h3>
        <p className="text-gray-600 mb-2">
          IOSC, Usar | Sept 2023 - Feb 2024
        </p>
        <ul className="list-disc pl-6">
          <li>
            Contributed to the development of the college{"'"}s food ordering app
            using React.js.
          </li>
          <li>
            Implemented advanced search functionalities including fuzzy matching
            and category filters.
          </li>
          <li>
            Developed cart management features, optimizing the checkout process
            with real-time subtotal calculations.
          </li>
        </ul>
      </div>

      <h2 className="text-lg font-semibold mb-4">EDUCATION</h2>
      <p className="mb-2">
        <strong>B.Tech in AI-DS</strong> (Ongoing) | USAR, Surajmal Vihar |
        November 2022 - Present
      </p>
      <p className="mb-6">CGPA: 7.23</p>
      <p className="mb-2">
        <strong>12th Grade</strong> (2021) | Sarvodaya Bal Vidyalaya,
        Mangolpuri
      </p>
      <p className="mb-6">Percentage: 79.6%</p>

      <h2 className="text-lg font-semibold mb-4">PROJECTS</h2>
      <div className="mb-6">
        <h3 className="font-semibold">OpinionZ.com</h3>
        <p className="mb-2">
          Developed a web-app in Next.js enabling users to share opinions
          anonymously and fact-check with a single click.
        </p>
        <p className="italic mb-2">
          Technologies: Next.js, MongoDB, Node.js, TypeScript, OpenAI API,
          Tailwind CSS.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold">
          Shivalik Study Circle Web-App (Freelance Project)
        </h3>
        <p className="mb-2">
          Created a website for a coaching institute allowing teachers to
          upload notes, write blogs, and make announcements through an admin
          dashboard.
        </p>
        <p className="italic mb-2">
          Technologies: Next.js, MongoDB, Node.js, TypeScript, Content
          Management System, Tailwind CSS.
        </p>
      </div>

      <h2 className="text-lg font-semibold mb-4">SKILLS</h2>
      <div className="mb-6">
        <p>
          <strong>Languages:</strong> JavaScript, C/C++, Python, HTML, CSS,
          TypeScript, SQL
        </p>
        <p>
          <strong>Frameworks:</strong> Next.js, Express.js, React.js
        </p>
        <p>
          <strong>Tools:</strong> Git/Github, Postman
        </p>
        <p>
          <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL
        </p>
        <p>
          <strong>Backend:</strong> Node.js, Django (familiar)
        </p>
      </div>

      <h2 className="text-lg font-semibold mb-4">ACCOMPLISHMENTS</h2>
      <ul className="list-disc pl-6">
        <li>Third position in HackUnicorn 2.0 Hackathon.</li>
        <li>Fourth position in HackUnicorn 1.0 Hackathon.</li>
        <li>Third position in HackHeaven Hackathon.</li>
      </ul>
    </div>
  );
};

export default Resume;
