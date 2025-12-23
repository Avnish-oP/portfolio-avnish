"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaTerminal, FaCode, FaServer, FaDatabase, FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiGraphql, SiPython, SiGo, SiExpress } from "react-icons/si";

const ModernAboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    { name: "React.js", icon: FaReact, role: "Lead UI" },
    { name: "Express.js", icon: SiExpress, role: "Microservices" },
    { name: "Next.js", icon: SiNextdotjs, role: "Architecture" },
    { name: "TypeScript", icon: SiTypescript, role: "Safety" },
    { name: "Node.js", icon: FaNodeJs, role: "Backend" },
    { name: "Golang", icon: SiGo, role: "Performance" },
    { name: "AWS", icon: FaAws, role: "Cloud Infra" },
    { name: "Python", icon: SiPython, role: "Scripting" },
    { name: "Databases", icon: FaDatabase, role: "Storage" },
  ];

  const stats = [
    { label: "Runtime", value: "4 Years", color: "text-terminal-green" },
    { label: "Genre", value: "Full Stack", color: "text-netflix-red" },
    { label: "Rating", value: "99% Match", color: "text-terminal-green" },
    { label: "Language", value: "TypeScript", color: "text-blue-400" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 bg-cinema-black text-gray-300 overflow-hidden"
    >
      {/* Background Matrix/Code Rain Effect (Subtle Static) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="h-full w-full bg-[url('/images/noise.png')] bg-repeat opacity-20"></div> 
          {/* Note: Assuming a noise texture or just using CSS radial gradient below if image missing */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-cinema-black to-cinema-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - "Series" Style */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 border-b border-gray-800 pb-4 flex items-end gap-4"
        >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                BEHIND THE CODE
            </h2>
            <span className="text-netflix-red text-sm font-bold tracking-widest pb-1.5 uppercase">
                Season 1: Origins
            </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: "Movie Poster" / Character Profile */}
            <div className="lg:col-span-4 space-y-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[2/3] w-full rounded-lg overflow-hidden shadow-2xl border border-gray-800 group"
                >
                    <Image
                        src="/images/dp.png" 
                        alt="Avnish Gupta Profile"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                             <div className="bg-netflix-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">TOP 10</div>
                             <div className="text-terminal-green text-xs font-mono font-bold">#1 DEVELOPER</div>
                        </div>
                        <h3 className="text-2xl font-bold text-white leading-none">AVNISH GUPTA</h3>
                        <p className="text-xs text-gray-400 mt-1 font-mono">/root/user/avnish</p>
                    </div>
                </motion.div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="bg-gray-900/50 p-3 rounded border border-gray-800/50"
                        >
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className={`text-sm font-bold font-mono ${stat.color}`}>{stat.value}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Column: "Plot Synopsis" & "Cast/Stack" */}
            <div className="lg:col-span-8 space-y-10">
                
                {/* Plot Synopsis */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <FaTerminal className="text-terminal-green mt-1" />
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider">System Log / Plot Synopsis</h3>
                    </div>
                    <div className="text-lg text-gray-400 leading-relaxed space-y-6 font-light">
                        <p>
                            <span className="text-white font-medium">In a digital world chaos,</span> one developer rises to bring order to the code. 
                            My journey began with a simple <span className="text-terminal-green font-mono">console.log(&quot;Hello World&quot;)</span>, but quickly escalated into a 
                            full-scale passion for architecting scalable web solutions.
                        </p>
                        <p>
                            I specialize in <span className="text-white">turning caffeine into clean, efficient code</span>. 
                            From crafting pixel-perfect frontends to optimizing complex backend logic, I treat every project like a 
                            blockbuster production—ensuring high performance, stunning visuals, and a bug-free experience.
                        </p>
                        <p className="italic text-gray-500 border-l-2 border-netflix-red pl-4">
                            &quot;Coding isn&apos;t just about syntax; it&apos;s about solving the plot twists before the users even see them.&quot;
                        </p>
                    </div>
                </motion.div>

                {/* Tech Stack / "Cast & Crew" */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <FaCode className="text-purple-500 mt-1" />
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider">Cast &amp; Tech Stack</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {skills.map((skill, index) => (
                             <motion.div
                                key={index}
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                                className="flex items-center gap-4 p-3 rounded-lg border border-gray-800 bg-black/40 transition-colors cursor-default"
                             >
                                <div className="p-2 rounded bg-gray-800 text-white">
                                    <skill.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">{skill.name}</p>
                                    <p className="text-gray-500 text-xs uppercase tracking-wide">{skill.role}</p>
                                </div>
                             </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Episodes / Projects CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className=""
                >
                    <Link href="/resume">
                        <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors group">
                            <FaTerminal className="text-lg group-hover:text-netflix-red transition-colors" />
                            <span>Run Resume.exe</span>
                        </button>
                    </Link>
                </motion.div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default ModernAboutMe;
