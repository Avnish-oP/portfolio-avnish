"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazonaws,
  SiGraphql,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiRedis,
  SiGo,
  SiExpress
} from "react-icons/si";

const ModernSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const categories = [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React", icon: SiReact, badge: "v18" },
        { name: "Next.js", icon: SiNextdotjs, badge: "App Dir" },
        { name: "TypeScript", icon: SiTypescript, badge: "Strict" },
        { name: "Tailwind", icon: SiTailwindcss, badge: "v3" },
      ]
    },
    {
      title: "Backend Architecture",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, badge: "LTS" },
        { name: "Express", icon: SiExpress, badge: "REST" },
        { name: "Golang", icon: SiGo, badge: "Microservices" },
        { name: "Python", icon: SiPython, badge: "AI/ML" },
        { name: "GraphQL", icon: SiGraphql, badge: "Apollo" },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: SiAmazonaws, badge: "Certified" },
        { name: "Docker", icon: SiDocker, badge: "Containers" },
        { name: "PostgreSQL", icon: SiPostgresql, badge: "Relational" },
        { name: "MongoDB", icon: SiMongodb, badge: "NoSQL" },
        { name: "Redis", icon: SiRedis, badge: "Caching" },
      ]
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen py-20 bg-cinema-black text-white overflow-hidden">
      
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-cinema-black z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="mb-8"
        >
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                PRODUCTION TOOLKIT
            </h2>
            <div className="flex items-center gap-3 text-gray-400 text-sm font-bold tracking-widest uppercase">
                <span className="bg-white text-black px-1.5 py-0.5 rounded-sm">HD</span>
                <span>Technical Specifications</span>
                <span className="text-netflix-red">2025</span>
            </div>
        </motion.div>

        {/* Categories / Genre Rows */}
        <div className="space-y-12">
            {categories.map((category, catIndex) => (
                <div key={category.title}>
                    <motion.h3 
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 + (catIndex * 0.1) }}
                        className="text-xl md:text-2xl font-bold text-gray-200 mb-4 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"
                    >
                        {category.title}
                        <span className="text-netflix-red text-sm opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">Explore &gt;</span>
                    </motion.h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.3 + (catIndex * 0.1) + (skillIndex * 0.05) }}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                                className="relative aspect-video bg-zinc-900 rounded border border-zinc-800 hover:border-gray-500 overflow-hidden group cursor-pointer transition-all duration-300 shadow-lg"
                            >
                                {/* Default State: Icon + Name */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 opacity-100 group-hover:opacity-20">
                                    <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mb-2 group-hover:text-white transition-colors" />
                                    <span className="text-sm font-bold text-gray-300">{skill.name}</span>
                                </div>

                                {/* Hover State: Details / Badge */}
                                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-black/80 to-transparent">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-8 h-8 rounded-full bg-netflix-red flex items-center justify-center">
                                            <skill.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="font-bold text-sm bg-gray-800 px-2 py-0.5 rounded text-white border border-gray-600">
                                            {skill.badge}
                                        </span>
                                    </div>
                                    <p className="text-white font-bold text-lg">{skill.name}</p>
                                    <div className="flex gap-2 text-[10px] text-green-400 font-mono mt-1">
                                        <span>98% Match</span>
                                        <span className="text-gray-400">Production Ready</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ModernSkills;
