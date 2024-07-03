"use client";
import React, { useEffect, useRef } from "react";
import { spline } from "@georgedoescode/spline";
import { TypewriterEffect } from "./ui/typewriter-effect";
import SocialMedia from "./socialMedia";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  const words = [
    { text: "I'm" },
    { text: "a full-stack " },
    { text: "developer", className: "text-green-500 dark:text-green-500" },
    { text: "and" },
    { text: "programmer.", className: "text-blue-500 dark:text-blue-500" },
  ];

  const backgroundRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = backgroundRef.current;

    if (svg) {
      const points = [
        { x: 0, y: 100 },
        { x: 200, y: 300 },
        { x: 400, y: 100 },
        { x: 600, y: 300 },
        { x: 800, y: 100 },
        { x: 1000, y: 300 },
      ];

      const pathData = spline(points);

      const path = svg.querySelector("path");
      if (path) {
        path.setAttribute("d", pathData);
      }
    }
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <svg
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 300"
      >
        <path fill="none" stroke="#3b82f6" strokeWidth="5" />
      </svg>
      <div className="z-10 w-full max-w-5xl px-4 py-16 text-center">
        <Image
          src="/images/dp.png" // Replace with your image path
          alt="Profile Image"
          width={150}
          height={150}
          className="mx-auto mb-8 rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-5xl font-bold md:text-6xl">Hello, I{"'"}m Avnish</h1>
        <div className="mt-4 text-2xl">
          <TypewriterEffect words={words} />
        </div>
        <p className="mt-4 text-lg text-gray-400">
          I specialize in building high-quality web applications with modern technologies. Let's create something amazing together!
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/contact">
            <a className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-lg font-medium text-white transition-colors duration-300 hover:bg-blue-600">
              Contact Me
            </a>
          </Link>
          <Link href="/portfolio">
            <a className="inline-block rounded-lg border border-gray-400 px-6 py-3 text-lg font-medium text-gray-400 transition-colors duration-300 hover:border-gray-300 hover:text-gray-300">
              My Work
            </a>
          </Link>
        </div>
        <div className="mt-8">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Hero;
