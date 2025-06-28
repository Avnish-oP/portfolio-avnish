"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypewriterEffect } from "./ui/typewriter-effect";
import SocialMedia from "./socialMedia";
import Link from "next/link";
import Image from "next/image";
import Cubes from "./ui/Cube";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothY = useSpring(y, springConfig);
  const smoothScale = useSpring(scale, springConfig);

  // Intersection observer for triggering animations
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const words = [
    { text: "I'm " },
    { text: "a" },
    { text: " full-stack " },
    { text: "developer", className: "text-emerald-500 dark:text-emerald-400" },
    { text: "and" },
    { text: "programmer.", className: "text-blue-500 dark:text-blue-400" },
  ];

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <motion.div 
      ref={heroRef}
      style={{ y: smoothY, scale: smoothScale, opacity }}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Enhanced dynamic background with multiple layers */}
      <div className="absolute inset-0">
        {/* Base gradient with improved colors - theme aware */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-indigo-950/80 dark:to-slate-950" />
        
        {/* Mouse-following gradient with enhanced effects */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(99, 102, 241, 0.4) 0%, 
              rgba(168, 85, 247, 0.25) 20%, 
              rgba(59, 130, 246, 0.15) 40%, 
              rgba(16, 185, 129, 0.1) 60%,
              transparent 80%)`
          }}
        />
        
        {/* Enhanced animated mesh gradients */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 40% 40%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
              "radial-gradient(ellipse at 40% 40%, rgba(120, 119, 198, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 60% 60%, rgba(255, 119, 198, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 40% 40%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Additional animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>
      </div>
      
      {/* Enhanced floating particles with more variety and better distribution */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              background: particle.id % 3 === 0 
                ? `linear-gradient(45deg, rgba(99, 102, 241, ${0.6 + Math.random() * 0.4}), rgba(168, 85, 247, ${0.6 + Math.random() * 0.4}))`
                : particle.id % 3 === 1
                ? `linear-gradient(45deg, rgba(59, 130, 246, ${0.6 + Math.random() * 0.4}), rgba(16, 185, 129, ${0.6 + Math.random() * 0.4}))`
                : `linear-gradient(45deg, rgba(168, 85, 247, ${0.6 + Math.random() * 0.4}), rgba(236, 72, 153, ${0.6 + Math.random() * 0.4}))`,
              boxShadow: `0 0 ${4 + Math.random() * 8}px currentColor`
            }}
            initial={{ 
              x: `${particle.x}%`, 
              y: `${particle.y}%`,
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              y: [`${particle.y}%`, `${particle.y - 150}%`],
              x: [`${particle.x}%`, `${particle.x + (Math.random() - 0.5) * 30}%`],
              scale: [0, 1, 0.8, 0],
              opacity: [0, 1, 0.6, 0],
              rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)]
            }}
            transition={{
              duration: particle.duration + 3,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Additional larger floating elements */}
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 blur-sm"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, (i % 2 === 0 ? 50 : -50), 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced glassmorphism overlay with better blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/20 backdrop-blur-[0.5px]" />
      
      {/* Main content */}
      <div ref={ref} className="relative z-10 flex flex-col items-center justify-center w-full px-4 lg:px-10">
        <div className="flex flex-col lg:flex-row min-h-[70vh] lg:min-h-screen w-full justify-between items-center">
          
          {/* Left content with enhanced animations */}
          <motion.div 
            className="left mb-16 mt-16 lg:mt-0 basis-[55vw] flex flex-col justify-center items-center lg:items-start gap-8 lg:gap-8"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Enhanced greeting with better typography and animations */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <motion.div 
                className="text-lg lg:text-xl text-blue-600 dark:text-blue-300 font-medium tracking-wide mt-10"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.span
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block mr-2"
                >
                  👋
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Hello, I&apos;m
                </motion.span>
              </motion.div>
              
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={inView ? { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.9,
                    backgroundPosition: { duration: 4, repeat: Infinity }
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  {["A", "v", "n", "i", "s", "h"].map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50, rotateY: 90 }}
                      animate={inView ? { 
                        opacity: 1, 
                        y: 0, 
                        rotateY: 0
                      } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.9 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        color: "#60a5fa"
                      }}
                      className="inline-block cursor-default"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Enhanced typewriter with better styling and stagger effect */}
            <motion.div 
              className="text-2xl lg:text-4xl text-gray-700 dark:text-gray-200 text-center lg:text-left font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <TypewriterEffect className="text-2xl lg:text-3xl" words={words} />
              </motion.div>
            </motion.div>

            {/* Enhanced description with letter-by-letter animation */}
            <motion.div
              className="text-xl lg:text-2xl text-center lg:text-left font-normal text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <motion.p>
                {[
                  "I craft exceptional ",
                  { text: "digital experiences", highlight: true, color: "text-blue-600 dark:text-blue-400" },
                  " with modern technologies. Let's build something ",
                  { text: "extraordinary", highlight: true, color: "text-purple-600 dark:text-purple-400" },
                  " together!"
                ].map((part, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 2.2 + index * 0.1 
                    }}
                    className={typeof part === 'object' ? `font-medium ${part.color}` : ''}
                    whileHover={typeof part === 'object' ? { scale: 1.05 } : {}}
                  >
                    {typeof part === 'object' ? part.text : part}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            {/* Enhanced CTA buttons with more sophisticated effects */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link href={"/contact"}>
                <motion.button
                  className="group relative px-12 py-6 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 text-white font-semibold text-lg rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Enhanced background layers */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ 
                      x: ["-200%", "200%"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    Let&apos;s Connect
                    <motion.svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                </motion.button>
              </Link>

              <Link href={"/projects"}>
                <motion.button
                  className="group relative px-12 py-6 bg-transparent border-2 border-purple-400/50 text-purple-300 font-semibold text-lg rounded-2xl backdrop-blur-sm overflow-hidden"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Border glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-300" />
                  
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    View My Work
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image with enhanced frame effects */}
          <motion.div 
            className="hidden lg:flex right justify-center items-center relative"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            {/* Enhanced floating cubes background */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <Cubes 
                gridSize={6}
                maxAngle={45}
                radius={3}
                borderStyle="1px solid rgba(99, 102, 241, 0.3)"
                faceColor="rgba(30, 41, 59, 0.8)"
                rippleColor="#60a5fa"
                rippleSpeed={1.2}
                autoAnimate={true}
                rippleOnClick={true}
              />
            </div>

            {/* Multiple glowing rings with different animations */}
            <motion.div 
              className="absolute w-96 h-96 rounded-full border-2 border-blue-400/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-80 h-80 rounded-full border border-purple-400/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-[22rem] h-[22rem] rounded-full border border-emerald-400/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Orbiting particles */}
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: `${120 + i * 15}px 0px`,
                }}
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  rotate: { duration: 12 + i * 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, delay: i * 0.3 },
                  opacity: { duration: 2, repeat: Infinity, delay: i * 0.3 }
                }}
              />
            ))}

            {/* Enhanced profile image container with better glassmorphism */}
            <motion.div 
              className="relative  z-10 rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 shadow-2xl mt-8"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Outer glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30 rounded-full blur-xl opacity-60" />
              
              {/* Middle frame with glassmorphism */}
              <motion.div 
                className="relative rounded-full overflow-hidden bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 p-2 shadow-inner"
                whileHover={{ 
                  boxShadow: "0 25px 60px rgba(99, 102, 241, 0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
                  borderColor: "rgba(255,255,255,0.4)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Inner image container with theme-aware background */}
                <motion.div
                  className="relative rounded-full overflow-hidden bg-gradient-to-br from-white/90 via-blue-50/80 to-white/90 dark:from-slate-800/90 dark:via-slate-700/80 dark:to-slate-800/90 backdrop-blur-xl border border-white/20 dark:border-white/10 p-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Profile image */}
                  <motion.div className="relative rounded-full overflow-hidden bg-gradient-to-br from-white/50 to-white/20 dark:from-slate-700/50 dark:to-slate-800/20 backdrop-blur-sm">
                    <Image
                      src="/images/dp.png"
                      alt="Hero Image"
                      width={200}
                      height={200}
                      className="rounded-full w-full h-full object-cover"
                      style={{
                        background: 'transparent'
                      }}
                    />
                    
                    {/* Hover overlay with subtle gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Floating elements around the image */}
              {Array.from({ length: 6 }, (_, i) => (
                <motion.div
                  key={`float-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-white to-blue-200"
                  style={{
                    left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 50}%`,
                    top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 50}%`,
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 1, 0.5],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced mobile image with similar frame effects */}
        <motion.div 
          className="lg:hidden relative z-10 flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="relative">
            {/* Mobile orbiting particles */}
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={`mobile-orbit-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: `${80 + i * 10}px 0px`,
                }}
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  rotate: { duration: 10 + i * 1.5, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                  opacity: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                }}
              />
            ))}

            <motion.div 
              className="rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Mobile outer glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30 rounded-full blur-lg opacity-60" />
              
              {/* Mobile glassmorphism frame with theme-aware background */}
              <motion.div 
                className="relative rounded-full overflow-hidden bg-gradient-to-br from-white/90 via-blue-50/80 to-white/90 dark:from-slate-800/90 dark:via-slate-700/80 dark:to-slate-800/90 backdrop-blur-xl border border-white/30 dark:border-white/10 p-2 shadow-inner"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
                  borderColor: "rgba(255,255,255,0.4)"
                }}
              >
                <div className="rounded-full overflow-hidden bg-gradient-to-br from-white/50 to-white/20 dark:from-slate-700/50 dark:to-slate-800/20 backdrop-blur-sm p-0.5">
                  <motion.div className="relative rounded-full overflow-hidden">
                    <Image
                      src="/images/dp.png"
                      alt="Hero Image"
                      width={200}
                      height={200}
                      className="rounded-full w-full h-full object-cover"
                      style={{
                        background: 'transparent'
                      }}
                    />
                    
                    {/* Mobile hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Mobile floating elements */}
              {Array.from({ length: 4 }, (_, i) => (
                <motion.div
                  key={`mobile-float-${i}`}
                  className="absolute w-0.5 h-0.5 rounded-full bg-white"
                  style={{
                    left: `${25 + Math.cos(i * 90 * Math.PI / 180) * 40}%`,
                    top: `${25 + Math.sin(i * 90 * Math.PI / 180) * 40}%`,
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 1, 0.5],
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 2.5 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Social Media - Enhanced */}
        <motion.div 
          className="absolute mt-20 z-50 md:mt-0  w-full bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <SocialMedia />
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div 
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden">
              <motion.div 
                className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
                animate={{ 
                  opacity: [0.4, 1, 0.4],
                  y: [0, 4, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-400/20 to-purple-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <motion.div 
              className="text-xs text-gray-400 mt-2 text-center font-light"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
