"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaDownload, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFilm, FaAward, FaCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-300 font-sans pt-24 pb-20 relative overflow-hidden">
        
       {/* Cinematic Grain/Noise Overlay */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/noise.png')]"></div>

      <div className='px-4 md:px-8 max-w-4xl mx-auto'>
          <motion.div 
            ref={ref}
            className="space-y-16 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Header: "Starring" */}
            <motion.div variants={itemVariants} className="text-center space-y-6">
                 <p className="text-netflix-red tracking-[0.2em] font-mono text-sm uppercase">Starring In The Role Of Software Engineer</p>
                 <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase">Avnish Kumar</h1>
                 
                 <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-gray-400">
                     <span className="flex items-center gap-2"><FaMapMarkerAlt /> New Delhi, India</span>
                     <span className="hidden md:inline text-gray-700">|</span>
                     <span className="flex items-center gap-2"><FaPhone /> +91 9650409384</span>
                     <span className="hidden md:inline text-gray-700">|</span>
                     <span className="flex items-center gap-2"><FaEnvelope /> kavnish1245@gmail.com</span>
                 </div>

                 <div className="flex justify-center gap-6 pt-4">
                     {[
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/avnish-gupta-23245a273/" },
                        { icon: FaGithub, href: "https://github.com/Avnish-oP" },
                        { icon: FaTwitter, href: "https://twitter.com/Avnish__gupta" }
                     ].map((social, i) => (
                         <a key={i} href={social.href} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200">
                             <social.icon size={24} />
                         </a>
                     ))}
                 </div>
            </motion.div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

            {/* Plot Synopsis (Summary) */}
             <motion.div variants={itemVariants} className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-6">
                 <div className="text-left md:text-right text-netflix-red font-mono text-sm uppercase pt-1">Plot Synopsis</div>
                 <div>
                     <p className="text-lg leading-relaxed text-gray-400">
                        Software Engineer with experience in building scalable systems, backend APIs, and high-performance applications using <span className="text-white">Java, Golang, TypeScript, and Node.js</span>. Strong foundation in Data Structures & Algorithms, database design, and concurrency patterns. Demonstrated ability to optimise latency, automate workflows, and architect secure multi-service systems through government projects and national hackathon wins.
                     </p>
                 </div>
             </motion.div>

             {/* Season History (Experience) */}
             <motion.div variants={itemVariants} className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-6">
                 <div className="text-left md:text-right text-netflix-red font-mono text-sm uppercase pt-1 flex items-center md:justify-end gap-2">
                    Season History <FaBriefcase />
                 </div>
                 <div className="space-y-12">
                     <div className="relative border-l border-gray-800 pl-8 ml-2 md:ml-0">
                         <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-netflix-red"></div>
                         <h3 className="text-2xl font-bold text-white">Software Developer Intern</h3>
                         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                             <p className="text-lg text-gray-400">Government of India</p>
                             <span className="font-mono text-sm text-gray-500">June 2025 – Sept 2025</span>
                         </div>
                         <ul className="list-disc leading-relaxed text-gray-400 space-y-2 marker:text-gray-600">
                             <li>Developed a custom <span className="text-white">ENC Viewer web application</span> using React.js for geospatial data visualisation.</li>
                             <li>Built 7+ GIS tools (measurement, buffer analysis, attribute extraction) used by internal analysts to accelerate spatial operations by ~40%.</li>
                             <li>Accelerated spatial operations by designing an optimised GIS processing module with buffer and measurement algorithms in <span className="text-white">JavaScript + Turf.js</span>.</li>
                         </ul>
                     </div>
                 </div>
             </motion.div>

             {/* Feature Films (Projects) */}
             <motion.div variants={itemVariants} className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-6">
                 <div className="text-left md:text-right text-netflix-red font-mono text-sm uppercase pt-1 flex items-center md:justify-end gap-2">
                    Feature Films <FaFilm />
                 </div>
                 <div className="space-y-10">
                     
                     <div className="group">
                         <h3 className="text-xl font-bold text-white group-hover:text-netflix-red transition-colors">Secure Multi-LLM SaaS Platform</h3>
                         <p className="font-mono text-xs text-gray-500 mb-3">Next.js, Express.js, FastAPI, MongoDB Atlas, FAISS, Auth0, Gemini API</p>
                         <ul className="list-disc ml-5 text-gray-400 space-y-1 marker:text-gray-700">
                             <li>Built a secure multi-tenant multi-LLM SaaS platform with FastAPI and spaCy for data sanitisation and a FAISS-based retrieval pipeline.</li>
                             <li>Integrated the <span className="text-white">Gemini API</span> as the primary LLM and implemented role-based access using Auth0/RBAC.</li>
                             <li>Developed a real-time chat UI in Next.js using Zustand and optimised data flow across services.</li>
                         </ul>
                     </div>

                     <div className="group">
                         <h3 className="text-xl font-bold text-white group-hover:text-netflix-red transition-colors">Multi-Site Product Search Engine</h3>
                         <p className="font-mono text-xs text-gray-500 mb-3">Web Crawlers, Backend Architecture, Parallel Processing</p>
                         <ul className="list-disc ml-5 text-gray-400 space-y-1 marker:text-gray-700">
                             <li>Backend-focused project automating product searches across multiple e-commerce platforms.</li>
                             <li>Implemented intelligent filtering and comparison logic to benchmark products.</li>
                             <li>Reduced price comparison runtime from minutes to seconds using <span className="text-white">parallel scraping (Promise.all)</span>.</li>
                         </ul>
                     </div>

                     <div className="group">
                         <h3 className="text-xl font-bold text-white group-hover:text-netflix-red transition-colors">Smart Delhi Ideathon 2025 Portal</h3>
                         <p className="font-mono text-xs text-gray-500 mb-3">Official Event Portal, SEO, SQL Backend</p>
                         <ul className="list-disc ml-5 text-gray-400 space-y-1 marker:text-gray-700">
                             <li>Developed the official event portal for registrations, event updates, and announcements.</li>
                             <li>Built a secure <span className="text-white">SQL backend</span> for handling registrations and optimised UI for SEO and performance.</li>
                         </ul>
                     </div>

                 </div>
             </motion.div>

             {/* Special Effects (Skills) */}
             <motion.div variants={itemVariants} className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-6">
                 <div className="text-left md:text-right text-netflix-red font-mono text-sm uppercase pt-1 flex items-center md:justify-end gap-2">
                    Special Effects <FaCode />
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <div>
                         <h4 className="font-bold text-white mb-2 border-b border-gray-800 pb-1">Programming Languages</h4>
                         <p className="text-gray-400">Java, TypeScript, Python, Golang, SQL</p>
                     </div>
                     <div>
                         <h4 className="font-bold text-white mb-2 border-b border-gray-800 pb-1">Backend Engineering</h4>
                         <p className="text-gray-400">Node.js, SpringBoot, Microservices, REST APIs, WebSockets</p>
                     </div>
                     <div>
                         <h4 className="font-bold text-white mb-2 border-b border-gray-800 pb-1">Databases</h4>
                         <p className="text-gray-400">PostgreSQL, MongoDB, VectorDB</p>
                     </div>
                     <div>
                         <h4 className="font-bold text-white mb-2 border-b border-gray-800 pb-1">Systems & Tools</h4>
                         <p className="text-gray-400">DSA, Distributed Systems, Docker, AWS, CI/CD, Linux</p>
                     </div>
                 </div>
             </motion.div>

             {/* Awards (Accomplishments) */}
             <motion.div variants={itemVariants} className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-6">
                 <div className="text-left md:text-right text-netflix-red font-mono text-sm uppercase pt-1 flex items-center md:justify-end gap-2">
                    Awards <FaAward />
                 </div>
                 <ul className="space-y-2">
                     <li className="flex items-start gap-2">
                         <span className="text-yellow-500 mt-1">★</span>
                         <span className="text-gray-300"><span className="text-white font-bold">Smart India Hackathon 2024 Finalist</span> (Problem Statement: PS-1682)</span>
                     </li>
                     <li className="flex items-start gap-2">
                         <span className="text-yellow-500 mt-1">★</span>
                         <span className="text-gray-300"><span className="text-white font-bold">Hackcbs 8.0 MLH Track Winner</span></span>
                     </li>
                     <li className="flex items-start gap-2">
                         <span className="text-yellow-500 mt-1">★</span>
                         <span className="text-gray-300">Recognised as Top 5 in various national hackathons</span>
                     </li>
                 </ul>
             </motion.div>

             {/* Training Arc (Education) */}
             <motion.div variants={itemVariants} className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-6">
                 <div className="text-left md:text-right text-netflix-red font-mono text-sm uppercase pt-1 flex items-center md:justify-end gap-2">
                    Training Arc <FaGraduationCap />
                 </div>
                 <div className="space-y-6">
                     <div>
                         <h3 className="font-bold text-white text-lg">Guru Gobind Singh Indraprastha University</h3>
                         <p className="text-gray-400">B.Tech, Artificial Intelligence and Data Science</p>
                         <p className="font-mono text-sm text-gray-500">Nov 2022 - May 2026</p>
                     </div>
                     <div>
                         <h3 className="font-bold text-white text-lg">Sarvodaya Bal Vidyalaya, R-Block Mangolpuri</h3>
                         <p className="text-gray-400">Senior Secondary (XII)</p>
                         <p className="font-mono text-sm text-gray-500">2021</p>
                     </div>
                 </div>
             </motion.div>
            
            {/* Download Button */}
            <motion.div variants={itemVariants} className="flex justify-center pt-8">
                <a 
                    href="/Resume-Avnish.pdf" 
                    download 
                    className="flex items-center gap-2 bg-netflix-red text-white px-8 py-3 rounded hover:bg-red-700 transition-colors font-bold uppercase tracking-wide"
                >
                    <FaDownload /> Download Script
                </a>
            </motion.div>

          </motion.div>
      </div>
    </div>
  );
};

export default Resume;
