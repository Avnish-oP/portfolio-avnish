"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  MagnifyingGlassIcon,
  BellIcon
} from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Transparency logic: only black after 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Renamed links to "Series" / Netflix style
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" }, // Projects -> Series
    { name: "Resume", href: "/resume" },    // Resume -> Films (Creative choice)
    { name: "Contact", href: "/contact" }, // Contact -> My List
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-700 ease-in-out ${
        isScrolled 
          ? "bg-black/60 backdrop-blur-xl shadow-xl support-[backdrop-filter]:bg-black/60" 
          : "bg-transparent bg-gradient-to-b from-black/90 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          <div className="flex items-center gap-8">
            {/* Logo Section */}
            <div className="flex-shrink-0">
                <Link href="/" className="group flex items-center gap-1">
                <span className="text-netflix-red font-black text-2xl md:text-3xl tracking-tighter shadow-black drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                    AVNISH
                </span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
                <div className="flex items-baseline space-x-6">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`relative text-sm font-medium transition-all duration-300 group ${
                        isActive
                            ? "text-white font-bold"
                            : "text-gray-300 hover:text-gray-100"
                        }`}
                    >
                        {link.name}
                        {/* Micro-interaction: Active/Hover Underline Indicator */}
                        <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-netflix-red transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                    </Link>
                    );
                })}
                </div>
            </div>
          </div>

          {/* Right Side Icons (Search, Bell) - Aesthetic only for now */}
          <div className="hidden md:flex items-center space-x-6 text-white">
             <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className="hover:text-gray-300 transition-colors"
            >
                <MagnifyingGlassIcon className="w-6 h-6" />
             </motion.button>
             <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className="hover:text-gray-300 transition-colors"
             >
                <BellIcon className="w-6 h-6" />
             </motion.button>
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center cursor-pointer"
             >
                 <span className="text-xs font-bold">AG</span>
             </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <Cross1Icon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HamburgerMenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-gray-800 absolute top-full left-0 w-full z-50 shadow-2xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-bold transition-colors ${
                    pathname === link.href
                      ? "text-white border-l-4 border-netflix-red bg-zinc-900"
                      : "text-gray-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
