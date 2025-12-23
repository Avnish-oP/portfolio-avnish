"use client";
import React, {  useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaPlay, FaInfoCircle, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-cinema-black text-white">
      {/* Background Layer with DP */}
      <div className="absolute inset-0 z-0 px-2">
          {/* Netflix-style Featured Image (Right Aligned DP) */}
          <div className="absolute top-[15%] left-[28%] md:left-[40%] lg:left-[61%] w-full md:w-2/3 h-full z-0 opacity-80 select-none ">
             <div className="relative w-full h-full">
                <Image 
                    src="/images/dp.png" 
                    alt="Avnish Gupta" 
                    width={500}
                    height={500}
                    className="object-cover object-top md:object-center drop-shadow-[0_0_15px_rgba(229,9,20,0.5)]"
                    priority
                />
                
                {/* Advanced Gradient Masking for "Left-to-Right Reveal" */}
                {/* 1. Heavy fade from left to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-cinema-black via-cinema-black/80 to-transparent w-[60%]" />
                
                {/* 2. Bottom fade for seamless blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-transparent" />
                
                {/* 3. Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cinema-black/40 to-cinema-black" />
             </div>
          </div>
          
         {/* Global background - ensures left side is solid black for text */}
         <div className="absolute inset-0 bg-gradient-to-r from-cinema-black via-cinema-black to-transparent z-[-1]" />
      </div>

      {/* Main Content Layer */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full h-full flex items-center px-2 md:px-16"
      >
        <div className="max-w-3xl space-y-6 pt-20">
            {/* "Netflix" Top Tag */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center space-x-2"
            >
                <span className="text-netflix-red font-black tracking-widest text-lg md:text-xl drop-shadow-md">
                    N
                </span>
                <span className="text-gray-300 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                    SERIES
                </span>
            </motion.div>

            {/* Main Title */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
                    Journey of a <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        Fullstack Developer
                    </span>
                </h1>
                
                {/* Subtitle "by Avnish Gupta" */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center gap-3 mt-4 text-gray-400"
                >
                    <span className="h-[1px] w-12 bg-netflix-red"></span>
                    <span className="uppercase tracking-widest text-sm font-medium">by Avnish Gupta</span>
                </motion.div>
            </motion.div>

            {/* Metadata Row */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap items-center gap-4 text-sm md:text-base font-medium text-gray-300"
            >
                <span className="text-terminal-green font-bold">99% Match</span>
                <span className="text-gray-400">2025</span>
                <span className="border border-gray-500 px-2 py-0.5 rounded text-xs">4K</span>
                <span className="text-gray-400">5 Seasons</span>
                <span className="flex items-center gap-1 border border-white/20 px-2 py-0.5 rounded text-xs bg-white/10 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-netflix-red animate-pulse"></span>
                    Now Streaming
                </span>
            </motion.div>

            {/* Description */}
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl drop-shadow-lg"
            >
                In a world of bugs and glitches, one developer rises to solve the unsolvable.
                Experience the journey of building scalable applications, mastering modern frameworks, 
                and turning caffeine into clean code.
            </motion.p>

            {/* Buttons / Actions */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
            >
                <Link href="/projects" className="group">
                    <button className="flex items-center justify-center gap-3 px-8 py-3 bg-white text-black font-bold rounded hover:bg-white/90 transition-all text-lg md:text-xl w-full sm:w-auto">
                        <FaPlay className="text-xl group-hover:scale-110 transition-transform" />
                        <span>Play Demo</span>
                    </button>
                </Link>

                <Link href="/contact" className="group">
                    <button className="flex items-center justify-center gap-3 px-8 py-3 bg-gray-500/40 text-white font-bold rounded backdrop-blur-md hover:bg-gray-500/60 transition-all text-lg md:text-xl w-full sm:w-auto">
                        <FaInfoCircle className="text-xl" />
                        <span>More Info</span>
                    </button>
                </Link>
                
                <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
                     <Link href="https://github.com/avnish" target="_blank" className="p-3 rounded-full border border-white/30 bg-black/20 hover:bg-white/20 hover:border-white transition-all">
                        <FaGithub className="text-xl text-white" />
                     </Link>
                     <Link href="https://linkedin.com/in/avnish" target="_blank" className="p-3 rounded-full border border-white/30 bg-black/20 hover:bg-white/20 hover:border-white transition-all">
                        <FaLinkedin className="text-xl text-white" />
                     </Link>
                </div>
            </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </div>
  );
};

export default Hero;
