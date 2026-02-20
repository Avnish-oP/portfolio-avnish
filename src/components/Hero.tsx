"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-white dark:bg-zinc-950"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(99_102_241/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(99_102_241/0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgb(99_102_241/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(99_102_241/0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          {/* Left: Text Content */}
          <div className="space-y-6 text-center lg:text-left">

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Freelance
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-gray-900 dark:text-white">I Build Web</span>
                <br />
                <span className="text-gray-900 dark:text-white">Experiences That </span>
                <span className="gradient-text-primary">Drive Results</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Fullstack Developer with production experience in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">React</span>,{" "}
              <span className="font-semibold text-gray-900 dark:text-white">Node.js</span> &{" "}
              <span className="font-semibold text-gray-900 dark:text-white">TypeScript</span>.
              I build scalable web apps, RESTful APIs, and e-commerce platforms that deliver real business results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/projects">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 text-base w-full sm:w-auto">
                  View My Work
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-zinc-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-300 text-base w-full sm:w-auto">
                  Let&apos;s Talk
                </button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-4 justify-center lg:justify-start pt-2"
            >
              <span className="text-sm text-gray-400 dark:text-zinc-500">Find me on</span>
              <div className="flex items-center gap-3">
                <Link
                  href="https://github.com/Avnish-oP"
                  target="_blank"
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
                >
                  <FaGithub className="text-lg" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/avnish-gupta-23245a273/"
                  target="_blank"
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200"
                >
                  <FaLinkedin className="text-lg" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gradient ring behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 rounded-full opacity-60" />

              {/* Profile image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900">
                <Image
                  src="/images/dp.png"
                  alt="Avnish Gupta"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 px-4 py-2.5 bg-white dark:bg-zinc-900 rounded-xl shadow-lg shadow-black/5 dark:shadow-black/30 border border-gray-200 dark:border-zinc-800"
              >
                <p className="text-xs font-semibold text-gray-500 dark:text-zinc-500">Hackathon Wins</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">3+</p>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-12 px-4 py-2 bg-white dark:bg-zinc-900 rounded-xl shadow-lg shadow-black/5 dark:shadow-black/30 border border-gray-200 dark:border-zinc-800"
              >
                <p className="text-xs font-semibold text-gray-500 dark:text-zinc-500">Clients Served</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">Govt + Private</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 text-gray-400 dark:text-zinc-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
