"use client";
"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ModernAboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const skills = [
    "React.js", "Next.js", "TypeScript", "Node.js", "Python", 
    "MongoDB", "PostgreSQL", "AWS", "Docker", "GraphQL"
  ];

  return (
    <section ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <motion.div
            style={{ y }}
            className="absolute top-20 left-10 w-20 h-20 border border-blue-500/30 rotate-45"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
            className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [80, -80]) }}
            className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-emerald-400/40 rounded-full"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left side - Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              {/* Glowing backdrop */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Image container with theme-aware background */}
              <motion.div
                className="relative bg-gradient-to-br from-white/90 via-blue-50/80 to-white/90 dark:from-slate-800/90 dark:via-slate-700/80 dark:to-slate-800/90 backdrop-blur-xl border border-white/30 dark:border-white/10 p-3 rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Inner glassmorphism frame */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-white/50 to-white/20 dark:from-slate-700/50 dark:to-slate-800/20 backdrop-blur-sm border border-white/20 dark:border-white/5 p-1">
                  <Image
                    src="/images/dp.png"
                    alt="About Avnish"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover rounded-lg"
                    style={{
                      background: 'transparent'
                    }}
                  />
                  
                  {/* Subtle overlay gradient to blend with theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/10 dark:via-transparent dark:to-purple-500/10 rounded-lg" />
                </div>
              </motion.div>

              {/* Floating stats */}
              <motion.div
                className="absolute -top-6 -right-6 bg-blue-500/90 backdrop-blur-sm text-white p-4 rounded-xl"
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-2xl font-bold">1+</div>
                <div className="text-sm">Years Experience</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-purple-500/90 backdrop-blur-sm text-white p-4 rounded-xl"
                initial={{ scale: 0, rotate: 10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Projects Done</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <motion.h2
                className="text-5xl lg:text-6xl font-bold mb-6"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h2>
              
              <motion.div
                variants={itemVariants}
                className="space-y-6 text-gray-300 text-lg leading-relaxed"
              >
                <p>
                  I&apos;m a passionate full-stack developer with a love for creating 
                  innovative web solutions. My journey in programming started with 
                  curiosity and has evolved into a career focused on building 
                  exceptional digital experiences.
                </p>
                
                <p>
                  With expertise in modern technologies like React, Next.js, and 
                  Node.js, I enjoy turning complex problems into simple, beautiful, 
                  and intuitive solutions. I believe in writing clean, efficient 
                  code that not only works but also stands the test of time.
                </p>

                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </motion.div>
            </div>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 300 
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.3)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
            >
              <Link href="/resume">
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-emerald-500 text-white font-semibold rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    View My Resume
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </motion.svg>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernAboutMe;
