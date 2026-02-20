"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaCode,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-700 dark:text-zinc-300 pt-24 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="space-y-14 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Resume
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Avnish Kumar
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-zinc-400">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-indigo-500" /> New Delhi, India
              </span>
              <span className="hidden md:inline text-gray-300 dark:text-zinc-700">
                |
              </span>
              <span className="flex items-center gap-2">
                <FaPhone className="text-indigo-500" /> +91 9650409384
              </span>
              <span className="hidden md:inline text-gray-300 dark:text-zinc-700">
                |
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-indigo-500" /> kavnish1245@gmail.com
              </span>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              {[
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/avnish-gupta-23245a273/",
                },
                { icon: FaGithub, href: "https://github.com/Avnish-oP" },
                {
                  icon: FaTwitter,
                  href: "https://twitter.com/Avnish__gupta",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-700 to-transparent" />

          {/* Professional Summary */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-8"
          >
            <div className="text-left md:text-right text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider pt-1">
              Summary
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                Results-driven Software Engineer with experience building
                scalable full-stack applications and RESTful APIs. Proven
                expertise in{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  JavaScript, TypeScript, and modern frameworks (React, Next.js,
                  Express.js)
                </span>
                . Successfully delivered production-grade applications for
                government agencies, improving operational efficiency by 40%.
                Recognised through national hackathon wins and finalist
                positions. Skilled in{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  cloud deployment (AWS, Vercel), security (JWT, OAuth, RBAC),
                  and Agile development
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-8"
          >
            <div className="text-left md:text-right text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider pt-1 flex items-center md:justify-end gap-2">
              Experience <FaBriefcase />
            </div>
            <div className="space-y-10">
              {/* Freelance */}
              <div className="relative border-l-2 border-indigo-200 dark:border-indigo-800 pl-8 ml-2 md:ml-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-zinc-950" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Full-Stack Developer (Freelance)
                </h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <p className="text-base text-gray-600 dark:text-zinc-400 font-medium">
                    OttiCamart.com
                  </p>
                  <span className="text-sm text-gray-500 dark:text-zinc-500">
                    September 2025 – Present
                  </span>
                </div>
                <ul className="list-disc leading-relaxed space-y-2 ml-5 marker:text-indigo-400">
                  <li>
                    Built a production-grade full-stack{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      e-commerce platform
                    </span>{" "}
                    (Next.js, Express.js, Prisma, PostgreSQL, Redis).
                  </li>
                  <li>
                    Developed{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      12+ RESTful APIs
                    </span>{" "}
                    (auth, product, cart, order, payment, search) and
                    implemented robust security (JWT, refresh tokens, secure
                    cookies), reducing vulnerabilities by 95%.
                  </li>
                  <li>
                    Integrated secure Razorpay payment gateway; optimised
                    performance with{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Redis caching, cutting database queries by 60%
                    </span>
                    , and improving page load by 45%.
                  </li>
                  <li>
                    Created responsive UIs and RBAC admin dashboard (React,
                    Next.js, Zustand); deployed on{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      AWS ECS/Supabase
                    </span>
                    .
                  </li>
                </ul>
              </div>

              {/* Govt Internship */}
              <div className="relative border-l-2 border-indigo-200 dark:border-indigo-800 pl-8 ml-2 md:ml-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-zinc-950" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Software Developer Intern
                </h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <p className="text-base text-gray-600 dark:text-zinc-400 font-medium">
                    Government of India
                  </p>
                  <span className="text-sm text-gray-500 dark:text-zinc-500">
                    June 2025 – September 2025
                  </span>
                </div>
                <ul className="list-disc leading-relaxed space-y-2 ml-5 marker:text-indigo-400">
                  <li>
                    Developed a custom{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      ReactJS-based ENC Viewer
                    </span>{" "}
                    for real-time maritime geospatial data visualisation.
                  </li>
                  <li>
                    Engineered{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      7+ GIS analysis tools
                    </span>
                    , optimising algorithms to boost government analysts&apos;
                    spatial operation efficiency by 40%.
                  </li>
                  <li>
                    Accelerated complex spatial analysis (buffering,
                    intersection, distance) using high-performance geospatial
                    modules built with{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Turf.js
                    </span>
                    .
                  </li>
                  <li>
                    Collaborated in a 10+ member Agile team on sprint planning,
                    code reviews, and documentation.
                  </li>
                  <li>
                    Achieved{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      85% code coverage
                    </span>{" "}
                    through comprehensive unit/integration testing (Jest, React
                    Testing Library).
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Key Projects */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-8"
          >
            <div className="text-left md:text-right text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider pt-1 flex items-center md:justify-end gap-2">
              Projects <FaCode />
            </div>
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Secure Multi-LLM SaaS Platform
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-500 font-medium mb-3">
                  Next.js · Express.js · FastAPI · MongoDB Atlas · FAISS · Auth0
                  · Gemini API · Langchain · spaCy
                </p>
                <ul className="list-disc ml-5 space-y-1 marker:text-indigo-400">
                  <li>
                    Developed a secure, multi-tenant SaaS platform integrating
                    multiple LLMs using FastAPI and spaCy for data sanitisation.
                  </li>
                  <li>
                    Implemented{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      FAISS-based vector retrieval
                    </span>{" "}
                    for semantic search, boosting query accuracy by 35%.
                  </li>
                  <li>
                    Integrated{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Google Gemini API
                    </span>{" "}
                    and Auth0 for primary LLM and secure role-based access
                    control (RBAC).
                  </li>
                  <li>
                    Created a real-time Next.js/Zustand chat interface optimised
                    for microservices, supporting concurrent users.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-8"
          >
            <div className="text-left md:text-right text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider pt-1">
              Skills
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 pb-1 border-b border-gray-200 dark:border-zinc-800">
                  Languages
                </h4>
                <p>Java, JavaScript, TypeScript, Golang, Python, SQL</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 pb-1 border-b border-gray-200 dark:border-zinc-800">
                  Frontend
                </h4>
                <p>
                  React.js, Next.js, HTML5, CSS3, Tailwind CSS, Zustand,
                  TanStack Query
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 pb-1 border-b border-gray-200 dark:border-zinc-800">
                  Backend
                </h4>
                <p>
                  Node.js, Express.js, FastAPI, RESTful APIs, Microservices,
                  WebSockets, GraphQL
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 pb-1 border-b border-gray-200 dark:border-zinc-800">
                  Databases
                </h4>
                <p>PostgreSQL, MongoDB, Redis, Prisma ORM, VectorDB (FAISS)</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 pb-1 border-b border-gray-200 dark:border-zinc-800">
                  Cloud & DevOps
                </h4>
                <p>
                  AWS (EC2, ECS, S3, Lambda), Docker, Git, CI/CD, Vercel,
                  Supabase, Linux
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 pb-1 border-b border-gray-200 dark:border-zinc-800">
                  Security & Practices
                </h4>
                <p>
                  JWT, OAuth 2.0, RBAC, Auth0, TDD, API Design, Code Review
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-8"
          >
            <div className="text-left md:text-right text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider pt-1 flex items-center md:justify-end gap-2">
              Achievements <FaAward />
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    ★
                  </span>
                </span>
                <span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    SIH 2024 Finalist
                  </span>{" "}
                  — Top 5 of 500+ teams for an innovative software solution
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    ★
                  </span>
                </span>
                <span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    HackCBS 8.0 Winner (MLH)
                  </span>{" "}
                  — First place among 500+ participants
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    ★
                  </span>
                </span>
                <span>
                  Ranked{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Top 5 in national hackathons
                  </span>
                  , showing excellence in rapid development
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    ★
                  </span>
                </span>
                <span>
                  Developed production-grade{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    GIS applications used by government analysts
                  </span>{" "}
                  for critical spatial analysis
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-8"
          >
            <div className="text-left md:text-right text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider pt-1 flex items-center md:justify-end gap-2">
              Education <FaGraduationCap />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                Guru Gobind Singh Indraprastha University
              </h3>
              <p>B.Tech, Artificial Intelligence and Data Science</p>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <p className="text-sm text-gray-500 dark:text-zinc-500">
                  November 2022 – May 2026
                </p>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  CGPA: 7.62/10.0
                </p>
              </div>
            </div>
          </motion.div>

          {/* Download */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-6"
          >
            <a
              href="/Resume-Avnish.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
