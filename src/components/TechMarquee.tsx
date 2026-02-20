"use client";
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiGo,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiAmazonaws,
  SiTailwindcss,
  SiGit,
  SiGraphql,
  SiPrisma,
} from "react-icons/si";

const techs = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiGo, name: "Go" },
  { icon: SiPython, name: "Python" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiRedis, name: "Redis" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiAmazonaws, name: "AWS" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiGit, name: "Git" },
  { icon: SiGraphql, name: "GraphQL" },
  { icon: SiPrisma, name: "Prisma" },
];

const TechMarquee = () => {
  // Duplicate for seamless loop
  const items = [...techs, ...techs];

  return (
    <section className="py-10 bg-white dark:bg-zinc-950 overflow-hidden border-y border-gray-100 dark:border-zinc-900">
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10" />

        <div className="flex animate-marquee">
          {items.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-6 py-2 mx-2 flex-shrink-0"
            >
              <tech.icon className="w-5 h-5 text-gray-400 dark:text-zinc-500" />
              <span className="text-sm font-medium text-gray-500 dark:text-zinc-500 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
