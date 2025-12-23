"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaGithub, FaTimes } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiGo, SiOpenai, SiRedis, SiSocketdotio } from "react-icons/si";

// Project Interface
interface Project {
  id: number;
  priority: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  tech: any[];
  liveUrl: string;
  githubUrl: string;
  match?: string;
  duration?: string;
  hd?: boolean;
}

// Mock Data with Priority
const projects: Project[] = [
  {
    id: 1,
    priority: 1,
    title: "OpinionZ",
    description: "A social platform where opinions meet facts—share, debate, and discover truth-checked perspectives.",
    longDescription: "OpinionZ is a revolutionary social platform designed to bridge the gap between subjective opinion and objective fact. It leverages AI to verify claims in real-time, fostering healthier public discourse. Built with high-performance Go microservices and a real-time React frontend.",
    image: "/images/opinionZ-1.png",
    tags: ["React", "GoLang", "MongoDb", "OpenAI", "Redis"],
    tech: [SiReact, SiGo, SiMongodb, SiOpenai, SiRedis],
    liveUrl: "https://ai-chat-demo.com",
    githubUrl: "https://github.com/Avnish-oP/opinionz-go",
    match: "98% Match",
    duration: "2024",
    hd: true
  },
  {
    id: 2,
    priority: 1,
    title: "Multi-Site Product Search",
    description: "Automated product search engine crawling multiple e-commerce sites for real-time price comparison.",
    longDescription: "A sophisticated backend-heavy search engine that aggregates product data from various e-commerce platforms. It uses advanced web crawling techniques to provide users with the best deals in real-time, ensuring data accuracy and speed.",
    image: "/images/sih.png",
    tags: ["Next.js", "Python", "MongoDB", "Express", "Crawling"],
    tech: [SiNextdotjs, SiMongodb, SiNodedotjs],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/Avnish-oP/sih-backend",
    match: "96% Match",
    duration: "2024",
    hd: true
  },
  {
    id: 3,
    priority: 2,
    title: "JAM Base",
    description: "Real-time music party platform for shared listening sessions.",
    image: "/images/jambase.png",
    tags: ["Next.js", "Socket.IO", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    tech: [SiNextdotjs, SiSocketdotio, SiPostgresql],
    match: "95% Match",
    duration: "2024",
    hd: false
  },
  {
    id: 4,
    priority: 2,
    title: "Smart Delhi Ideathon",
    description: "Official portal for the 2025 Smart Delhi Ideathon.",
    image: "/images/sdi.png",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    liveUrl: "https://www.sdi2025.in/",
    githubUrl: "https://github.com/Avnish-oP/sdi2025-website",
    tech: [SiNextdotjs, SiPostgresql, SiTailwindcss],
    match: "99% Match",
    duration: "2025",
    hd: true
  }
];

const ModernProjects = ({ showAll = false }: { showAll?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Filter: Show top 4 for Home (Vertical Layout), or All for Projects Page
  const displayProjects = showAll 
    ? projects 
    : projects.slice(0, 4); 

  return (
    <section ref={ref} className="relative min-h-[80vh] py-20 bg-cinema-black text-white overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-black/50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header with Link */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="mb-8 flex items-end justify-between"
        >
             <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-100 flex items-center gap-2">
                Trending Projects
                <span className="text-netflix-red text-xs align-top border border-netflix-red px-1 rounded-sm">TOP 10</span>
            </h2>
            
            {!showAll && (
                 <Link href="/projects" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                    Explore All <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
                 </Link>
            )}
        </motion.div>

        {/* Projects Row (Grid) - Vertical Posters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {displayProjects.map((project, index) => (
                <motion.div
                    key={project.id}
                    layoutId={`project-card-${project.id}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    onClick={() => setSelectedProject(project)}
                    className="relative aspect-[2/3] rounded-md overflow-hidden cursor-pointer group shadow-lg bg-zinc-900 border border-zinc-800 hover:border-gray-500"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-netflix-red/90 rounded-full p-3 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                             <FaPlay className="text-white ml-1 select-none" size={20} />
                        </div>
                    </div>

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                    {/* Title Overlay (Bottom) */}
                    <div className="absolute inset-x-0 bottom-0 p-3">
                        <div className="flex items-center gap-2 mb-1">
                             {project.match && <span className="text-[10px] font-bold text-green-400">{project.match}</span>}
                             {project.hd && <span className="text-[10px] border border-gray-500 px-1 rounded text-gray-400">HD</span>}
                        </div>
                        <h3 className="text-lg font-bold text-white drop-shadow-md leading-tight mb-1">{project.title}</h3>
                        <div className="flex flex-wrap gap-1">
                            {project.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-[9px] font-bold text-gray-300 uppercase tracking-wider border border-gray-600 px-1 py-0.5 rounded-sm bg-black/50">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
                layoutId={`project-card-${selectedProject.id}`}
                className="fixed top-0 bottom-0 left-0 right-0 m-auto w-[90%] max-w-4xl h-[85vh] bg-zinc-900 rounded-lg overflow-hidden z-[70] shadow-2xl border border-zinc-800 flex flex-col"
            >
                {/* Hero / Video Area */}
                <div className="relative h-[55%] w-full bg-black">
                     <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover opacity-80"
                    />
                    {/* Close Button */}
                    <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                        className="absolute top-4 right-4 bg-black/60 p-2 rounded-full hover:bg-black/80 transition-colors z-50 text-white"
                    >
                        <FaTimes size={20} />
                    </button>

                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-zinc-900 via-zinc-900/90 to-transparent">
                         <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">{selectedProject.title}</h2>
                         
                         <div className="flex items-center gap-4 mb-6">
                            <Link href={selectedProject.liveUrl} target="_blank">
                                <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200 transition-colors">
                                    <FaPlay size={18} /> Play Demo
                                </button>
                            </Link>
                             <Link href={selectedProject.githubUrl} target="_blank">
                                <button className="flex items-center gap-2 bg-gray-600/80 text-white px-6 py-2 rounded font-bold hover:bg-gray-600 transition-colors">
                                    <FaGithub size={20} /> Code
                                </button>
                             </Link>
                         </div>
                    </div>
                </div>

                {/* Info / Details Area */}
                <div className="flex-1 p-8 grid md:grid-cols-3 gap-8 overflow-y-auto">
                    {/* Left: Metadata */}
                    <div className="md:col-span-2 space-y-6">
                         <div className="flex items-center gap-4 text-sm font-bold text-gray-400">
                             <span className="text-green-400">{selectedProject.match}</span>
                             <span>{selectedProject.duration}</span>
                             {selectedProject.hd && <span className="border border-gray-500 px-1 rounded text-xs text-gray-300">HD</span>}
                         </div>
                         <p className="text-lg text-white leading-relaxed">
                             {selectedProject.longDescription || selectedProject.description}
                         </p>
                    </div>

                    {/* Right: Cast/Tags */}
                    <div className="space-y-6 text-sm">
                        <div>
                             <span className="text-gray-500 block mb-1">Cast (Tech Stack):</span>
                             <div className="flex flex-wrap gap-2 text-white">
                                 {selectedProject.tech?.map((Icon: any, i: number) => (
                                     <Icon key={i} className="text-gray-300 hover:text-white transition-colors" size={20} title="Tech" />
                                 ))}
                                 {selectedProject.tags.map((t: string) => <span key={t} className="text-gray-300 hover:text-white cursor-default">, {t}</span>)}
                             </div>
                        </div>
                        <div>
                             <span className="text-gray-500 block mb-1">Genres:</span>
                             <span className="text-white">Web Development, Full Stack, Innovation</span>
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
