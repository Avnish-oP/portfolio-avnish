"use client";
import { InstagramIcon, LucideLinkedin, XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
  }, []);

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-12 transition-colors duration-300 overflow-hidden">
      <div className="max-w-5xl sm:max-w-7xl   mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400">
              I'm a passionate developer focused on creating beautiful and functional web applications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Contact Me</h2>
            <p className="text-gray-600 dark:text-gray-400">Email: kavnish1245@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-400">Phone: +91965040***4</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Follow Me</h2>
            <div className="flex space-x-4">
              <div className="flex items-center gap-2 cursor-pointer group">
                <LucideLinkedin
                  size={30}
                  color="blue"
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                />
                <span className="hidden md:inline text-xl font-bold text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  LinkedIn
                </span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <XIcon
                  size={30}
                  color={isDarkMode ? "white" : "black"}
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                />
                <span className="hidden md:inline text-xl font-bold text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  Twitter
                </span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <InstagramIcon
                  size={30}
                  color="purple"
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                />
                <span className="hidden md:inline text-xl font-bold text-purple-800 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  Instagram
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
