"use client";
import React, { useEffect, useRef } from "react";
import { spline } from "@georgedoescode/spline";
import { TypewriterEffect } from "./ui/typewriter-effect";
import SocialMedia from "./socialMedia";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  const words = [
    { text: "I'm " },
    { text: "a full-stack " },
    { text: "developer", className: "text-green-500 dark:text-green-500" },
    { text: "and" },
    { text: "programmer.", className: "text-blue-500 dark:text-blue-500" },
  ];

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const points = Array.from({ length: 20 }, () => [
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
      ]);

      svgRef.current.innerHTML = `
        <path d="${spline(
          points
        )}" fill="none" stroke="rgba(255, 255, 255, 0.4)" stroke-width="2" />
      `;
    }
  }, []);

  return (
    <div className="relative top-16  md:top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-background bg-gradient-to-r from-gray-200 dark:from-black via-white dark:via-gray-900 to-gray-200 dark:to-black">
      <svg ref={svgRef} width="100%" height="100%" className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 lg:px-10">
        <div className="flex flex-col lg:flex-row min-h-[70vh] lg:min-h-screen w-full justify-between items-center p-4">
          <div className="left mb-16 mt-20 lg:mt-0 basis-[50vw] flex flex-col justify-center items-center gap-10 lg:gap-6">
            <h1 className="text-4xl mt-12 lg:mt-0 md:text-5xl lg:text-6xl font-bold antialiased dark:text-white text-center lg:text-left">
              Hello, I{"'"}m Avnish
            </h1>
            <div className="mt-4 text-3xl dark:text-white text-center lg:text-left">
              <TypewriterEffect className="text-2xl" words={words} />
            </div>
            <p className="text-xl mt-4 text-center  font-medium dark:text-gray-100 text-gray-900">
              I specialize in building high-quality web applications with modern technologies. Let{"'"}s create something amazing together!
            </p>
            <Link href={"/contact"} className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300">
               
                Contact Me
              
            </Link>
          </div>
          <div className="hidden lg:flex right rounded-full border-2 border-blue-300 object-cover justify-center items-center lg:mt-22">
            <Image
              src="/images/dp.png"
              alt="Hero Image"
              width={350}
              height={350}
              className="rounded-full scale-105 shadow-lg transition-transform duration-500 hover:scale-100"
            />
          </div>
        </div>
        <div className="lg:hidden relative z-10 flex flex-col items-center">
          <div className="rounded-full border-2 border-blue-300 object-cover justify-center items-center mt-4">
            <Image
              src="/images/dp.png"
              alt="Hero Image"
              width={250}
              height={250}
              className="rounded-full scale-105 shadow-lg transition-transform duration-500 hover:scale-100"
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Hero;
