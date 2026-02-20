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
  SiRedis,
  SiGo,
  SiExpress,
  SiGit,
} from "react-icons/si";

const ModernSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const categories = [
    {
      title: "Frontend Development",
      description: "Responsive, performant user interfaces",
      skills: [
        { name: "React", icon: SiReact, experience: "3+ yrs" },
        { name: "Next.js", icon: SiNextdotjs, experience: "2+ yrs" },
        { name: "TypeScript", icon: SiTypescript, experience: "2+ yrs" },
        { name: "Tailwind CSS", icon: SiTailwindcss, experience: "2+ yrs" },
      ],
    },
    {
      title: "Backend Engineering",
      description: "Scalable APIs & microservices",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, experience: "3+ yrs" },
        { name: "Express", icon: SiExpress, experience: "3+ yrs" },
        { name: "Golang", icon: SiGo, experience: "1+ yr" },
        { name: "Python", icon: SiPython, experience: "2+ yrs" },
        { name: "GraphQL", icon: SiGraphql, experience: "1+ yr" },
      ],
    },
    {
      title: "Databases & Cloud",
      description: "Storage, caching, and infrastructure",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, experience: "2+ yrs" },
        { name: "MongoDB", icon: SiMongodb, experience: "3+ yrs" },
        { name: "Redis", icon: SiRedis, experience: "1+ yr" },
        { name: "AWS", icon: SiAmazonaws, experience: "1+ yr" },
        { name: "Docker", icon: SiDocker, experience: "1+ yr" },
        { name: "Git", icon: SiGit, experience: "3+ yrs" },
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gray-50 dark:bg-zinc-900/50 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(99_102_241/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(99_102_241/0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgb(99_102_241/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(99_102_241/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
            Skills & Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Technologies I Work With
          </h2>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + catIndex * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-indigo-600 dark:bg-indigo-400" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-zinc-500">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="group p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-colors">
                        <skill.icon className="w-5 h-5 text-gray-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </p>
                        <p className="text-[11px] text-gray-500 dark:text-zinc-500 font-medium">
                          {skill.experience}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernSkills;
