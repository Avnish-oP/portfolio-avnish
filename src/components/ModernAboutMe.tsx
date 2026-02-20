"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaCode,
  FaServer,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

// Animated Counter Component
const AnimatedCounter = ({
  target,
  suffix = "",
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setCount(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const ModernAboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const stats = [
    { label: "Freelance Clients", value: 2, suffix: "+", color: "from-indigo-500 to-violet-500" },
    { label: "APIs Built", value: 12, suffix: "+", color: "from-violet-500 to-purple-500" },
    { label: "Govt. Projects", value: 1, suffix: "", color: "from-purple-500 to-pink-500" },
    { label: "Hackathon Wins", value: 3, suffix: "+", color: "from-pink-500 to-rose-500" },
  ];

  const process = [
    {
      icon: FaHandshake,
      title: "Discovery",
      desc: "Understanding your goals, users, and technical requirements.",
    },
    {
      icon: FaCode,
      title: "Design & Build",
      desc: "Clean architecture with modern tech stack for scalability.",
    },
    {
      icon: FaServer,
      title: "Deploy & Optimize",
      desc: "CI/CD pipelines, performance tuning, and monitoring.",
    },
    {
      icon: FaRocket,
      title: "Launch & Support",
      desc: "Go-live support and ongoing maintenance as needed.",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Building Digital Solutions<br />
            <span className="gradient-text-primary">That Matter</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Profile + Stats */}
          <div className="lg:col-span-5 space-y-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-zinc-800 group"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/dp.png"
                  alt="Avnish Kumar"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">Avnish Kumar</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Fullstack Developer · B.Tech AI & DS
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  📍 New Delhi, India
                </p>
              </div>
            </motion.div>

            {/* Stats Grid — Animated Counters */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-center"
                >
                  <p
                    className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </p>
                  <p className="text-xs font-medium text-gray-500 dark:text-zinc-500 mt-1 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Bio + Process */}
          <div className="lg:col-span-7 space-y-12">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed space-y-4">
                <p>
                  I&apos;m a results-driven fullstack developer experienced in building{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    scalable full-stack applications and RESTful APIs
                  </span>
                  . I specialize in JavaScript, TypeScript, React, Next.js, and Express.js — delivering
                  production-grade software that drives measurable business results.
                </p>
                <p>
                  I&apos;ve built a{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    full-stack e-commerce platform
                  </span>{" "}
                  as a freelancer, delivered{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    GIS applications for the Government of India
                  </span>{" "}
                  that improved analyst efficiency by 40%, and won{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    HackCBS 8.0 (1st place among 500+)
                  </span>
                  . I care deeply about security, clean architecture, and user experience.
                </p>
              </div>
            </motion.div>

            {/* Working Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-indigo-600 dark:bg-indigo-400" />
                How I Work
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-5 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-500/20 transition-colors">
                        <step.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                          0{index + 1}
                        </span>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <Link href="/resume">
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300">
                  View Full Resume →
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
