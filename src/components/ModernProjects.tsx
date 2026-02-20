"use client";
import React, { useRef, useState, useCallback } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGo,
  SiRedis,
  SiSocketdotio,
  SiPython,
  SiDocker,
  SiFastapi,
  SiExpress,
} from "react-icons/si";
import type { IconType } from "react-icons";

// 3D Tilt Card Component
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const handleMouse = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      rotateX.set((-mouseY / rect.height) * 10);
      rotateY.set((mouseX / rect.width) * 10);
      x.set(mouseX);
      y.set(mouseY);
    },
    [rotateX, rotateY, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  const glowBackground = useMotionTemplate`radial-gradient(300px at ${x}px ${y}px, rgba(99, 102, 241, 0.08), transparent 80%)`;

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="h-full rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-md hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-800 transition-all duration-300 relative"
    >
      <motion.div
        style={{ background: glowBackground }}
        className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
      />
      {children}
    </motion.div>
  );
};

// Project Interface — Case Study format
interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem?: string;
  solution?: string;
  results?: string[];
  image: string;
  tags: string[];
  techIcons: { icon: IconType; name: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// Projects data — OttiCamart featured, plus key projects
const projects: Project[] = [
  {
    id: 1,
    title: "OttiCamart.com",
    subtitle: "Full-Stack E-Commerce Platform",
    category: "E-Commerce",
    description:
      "Production-grade full-stack e-commerce platform built as a freelance project. Features 12+ RESTful APIs, secure Razorpay payments, Redis caching, and an RBAC admin dashboard — deployed on AWS ECS.",
    problem:
      "The client needed a complete, scalable e-commerce solution with secure payments, inventory management, and an admin panel — from scratch.",
    solution:
      "Built a production-grade platform with Next.js frontend, Express.js backend, Prisma ORM with PostgreSQL, and Redis for caching. Implemented JWT + refresh tokens, Razorpay integration, and a role-based admin dashboard.",
    results: [
      "12+ RESTful APIs (auth, product, cart, order, payment, search)",
      "95% reduction in security vulnerabilities (JWT, secure cookies)",
      "60% fewer database queries via Redis caching",
      "45% faster page loads with optimization",
    ],
    image: "/images/otticamart1.svg",
    tags: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Redis", "Razorpay"],
    techIcons: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiExpress, name: "Express" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiRedis, name: "Redis" },
    ],
    liveUrl: "https://otticamart.com",
    featured: true,
  },
  {
    id: 2,
    title: "GlobeTrotter",
    subtitle: "Smart Itinerary Planner",
    category: "Web App",
    description:
      "A comprehensive trip planning platform with 12 core features including itinerary builder, budget management, city/activity search, public trip sharing, and drag-and-drop reordering.",
    problem:
      "Trip planning was fragmented — users juggled spreadsheets, maps, and booking sites without a unified tool for itinerary creation, budgeting, and sharing.",
    solution:
      "Built a full-stack planner with Next.js frontend (Zustand state), Node.js backend, and comprehensive features: trip creation, multi-section itineraries, place search, budget tracking, and social sharing.",
    results: [
      "12 core features — 100% completion",
      "Itinerary builder with drag-and-drop",
      "Budget tracking with category breakdown",
      "Public trip sharing & social features",
    ],
    image: "/images/globetrotter.png",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Zustand"],
    techIcons: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
    githubUrl: "https://github.com/Avnish-oP/globe-trotter",
    featured: false,
  },
  {
    id: 3,
    title: "SHEILD AI",
    subtitle: "Secure Enterprise LLM Platform",
    category: "SaaS",
    description:
      "HackCBS 8.0 Winner (1st place, MLH) — A secure LLM chat platform that masks PII before any AI call, enriches context via RAG over PDFs, and provides full audit trails with RBAC.",
    problem:
      "Enterprises wanted AI-powered productivity but couldn't risk exposing sensitive data (PII, internal docs) to external LLM APIs.",
    solution:
      "Built a monorepo platform: Next.js chat UI, Express.js API with Auth0 RBAC, and a FastAPI microservice for PII masking (regex + NER) and FAISS-based RAG over uploaded PDFs. All data is sanitized before LLM calls.",
    results: [
      "🏆 HackCBS 8.0 — 1st place (MLH Track)",
      "PII masking pipeline (emails, phones, SSNs, names)",
      "FAISS RAG over enterprise PDFs",
      "Full audit trail + Auth0 RBAC",
    ],
    image: "/images/shieldllm.png",
    tags: ["Next.js", "Express.js", "FastAPI", "FAISS", "Auth0", "LangChain"],
    techIcons: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiExpress, name: "Express" },
      { icon: SiFastapi, name: "FastAPI" },
      { icon: SiPython, name: "Python" },
    ],
    githubUrl: "https://github.com/Avnish-oP/hackcbs",
    featured: false,
  },
  {
    id: 4,
    title: "Smart Delhi Ideathon Portal",
    subtitle: "Government Event Platform",
    category: "Portal",
    description:
      "Official event portal for the 2025 Smart Delhi Ideathon — handling 500+ team registrations, announcements, and event management for the Government of India.",
    problem:
      "The government needed a reliable, high-traffic portal to manage registrations for a national ideathon with tight deadlines.",
    solution:
      "Developed a performant Next.js portal with PostgreSQL backend, optimized for SEO and high-traffic scenarios with server-side rendering.",
    results: [
      "500+ team registrations handled",
      "Government of India project",
      "SEO-optimized with SSR",
    ],
    image: "/images/sdi.png",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    techIcons: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
    liveUrl: "https://www.sdi2025.in/",
    githubUrl: "https://github.com/Avnish-oP/sdi2025-website",
    featured: false,
  },
  {
    id: 5,
    title: "OpinionZ",
    subtitle: "AI-Powered Social Platform",
    category: "Web App",
    description:
      "A social platform where opinions meet facts — share, debate, and discover truth-checked perspectives with real-time AI verification.",
    problem:
      "Social media is full of misinformation. Users had no way to verify claims in real-time.",
    solution:
      "Built a social platform with AI-powered fact-checking using Go microservices for high-throughput processing and a real-time React frontend.",
    results: [
      "Real-time AI fact-checking pipeline",
      "Go microservices architecture",
      "Redis-backed caching for sub-100ms responses",
    ],
    image: "/images/opinionZ-1.png",
    tags: ["React", "GoLang", "MongoDB", "Redis"],
    techIcons: [
      { icon: SiReact, name: "React" },
      { icon: SiGo, name: "Go" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiRedis, name: "Redis" },
    ],
    githubUrl: "https://github.com/Avnish-oP/opinionz-go",
    featured: false,
  },
  {
    id: 6,
    title: "The Prime Industries",
    subtitle: "B2B Manufacturing Website",
    category: "Freelance",
    description:
      "Professional corporate website for a 35+ year-old ISO-certified plastic injection molding manufacturer. Showcases product categories, certifications, and a lead-generation contact form.",
    problem:
      "The client had no online presence. They needed a modern, SEO-optimized website to showcase their industrial capabilities, product categories, and attract B2B clients.",
    solution:
      "Built a responsive corporate website with Next.js, featuring animated product category grids, ISO certification showcase, facility gallery, and an optimized contact form for lead generation.",
    results: [
      "Professional online presence for 35+ year-old brand",
      "5 product category showcases (Auto, Medical, Sports, Furniture)",
      "SEO-optimized with SSR for B2B discoverability",
      "Lead capture contact form for client inquiries",
    ],
    image: "/images/prime-industries.png",
    tags: ["Next.js", "Tailwind", "SEO", "Responsive"],
    techIcons: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
    liveUrl: "https://www.theprimeindustries.co.in/",
    githubUrl: "https://github.com/Avnish-oP/prime-industries",
    featured: false,
  },
  
];

const categories = ["All", "E-Commerce", "Web App", "SaaS", "Freelance", "Portal"];

const ModernProjects = ({ showAll = false }: { showAll?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const featuredProject = projects.find((p) => p.featured);

  return (
    <section
      ref={ref}
      id="work"
      className="relative py-24 bg-gray-50 dark:bg-zinc-900/50 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(99_102_241/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(99_102_241/0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgb(99_102_241/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(99_102_241/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                Selected Work
              </h2>
            </div>
            {!showAll && (
              <Link
                href="/projects"
                className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors flex items-center gap-1 group"
              >
                View all projects{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            )}
          </div>

          {/* Category Filter */}
          {showAll && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                      : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 border border-gray-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Featured Project (only on homepage) */}
        {!showAll && featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            onClick={() => setSelectedProject(featuredProject)}
            className="mb-8 group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-auto md:min-h-[400px] overflow-hidden">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 dark:to-zinc-900/30" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    {featuredProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-zinc-500 font-medium mb-4">
                    {featuredProject.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Key Results */}
                  {featuredProject.results && (
                    <div className="space-y-2 mb-6">
                      {featuredProject.results.map((result, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700 dark:text-zinc-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Icons */}
                  <div className="flex items-center gap-3">
                    {featuredProject.techIcons.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 rounded-lg"
                        title={tech.name}
                      >
                        <tech.icon className="w-4 h-4 text-gray-600 dark:text-zinc-400" />
                        <span className="text-xs font-medium text-gray-600 dark:text-zinc-400">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {displayProjects
            .filter((p) => showAll || !p.featured || displayProjects.length <= 2)
            .slice(0, showAll ? undefined : 2)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <TiltCard>
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-xs font-semibold text-gray-700 dark:text-zinc-300 rounded-md border border-gray-200/50 dark:border-zinc-700/50">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white text-sm font-semibold rounded-lg shadow-lg">
                        View Case Study →
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-zinc-500 font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech icons */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.techIcons.slice(0, 4).map((tech, i) => (
                        <div
                          key={i}
                          className="p-1.5 bg-gray-100 dark:bg-zinc-800 rounded-md"
                          title={tech.name}
                        >
                          <tech.icon className="w-3.5 h-3.5 text-gray-500 dark:text-zinc-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-x-auto lg:inset-y-8 lg:max-w-4xl lg:mx-auto bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden z-[70] shadow-2xl border border-gray-200 dark:border-zinc-800 flex flex-col"
            >
              {/* Modal Header / Image */}
              <div className="relative h-48 sm:h-64 md:h-72 w-full flex-shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-transparent to-transparent" />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(null);
                  }}
                  className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-zinc-800 transition-colors text-gray-700 dark:text-zinc-300"
                >
                  <FaTimes size={16} />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-zinc-500 font-medium mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
                {/* Action buttons */}
                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <Link href={selectedProject.liveUrl} target="_blank">
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg font-semibold text-sm hover:scale-105 transition-all shadow-lg shadow-indigo-500/25">
                        <FaExternalLinkAlt size={12} /> Live Demo
                      </button>
                    </Link>
                  )}
                  {selectedProject.githubUrl && (
                    <Link href={selectedProject.githubUrl} target="_blank">
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 rounded-lg font-semibold text-sm hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors border border-gray-200 dark:border-zinc-700">
                        <FaGithub size={14} /> Source Code
                      </button>
                    </Link>
                  )}
                </div>

                {/* Case Study Sections */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    {/* Problem */}
                    {selectedProject.problem && (
                      <div>
                        <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                          The Challenge
                        </h4>
                        <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                          {selectedProject.problem}
                        </p>
                      </div>
                    )}

                    {/* Solution */}
                    {selectedProject.solution && (
                      <div>
                        <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                          The Approach
                        </h4>
                        <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </div>
                    )}

                    {/* Results */}
                    {selectedProject.results && (
                      <div>
                        <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">
                          Key Results
                        </h4>
                        <div className="space-y-2">
                          {selectedProject.results.map((result, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 text-gray-700 dark:text-zinc-300"
                            >
                              <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                                  ✓
                                </span>
                              </div>
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sidebar: Tech Stack */}
                  <div>
                    <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.techIcons.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg border border-gray-100 dark:border-zinc-700"
                        >
                          <tech.icon className="w-5 h-5 text-gray-600 dark:text-zinc-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-zinc-300">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 mt-6">
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-gray-100 dark:bg-zinc-800 text-xs font-medium text-gray-600 dark:text-zinc-400 rounded-md border border-gray-200 dark:border-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ModernProjects;
