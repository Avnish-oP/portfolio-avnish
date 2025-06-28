"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MoonIcon,
  SunIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  // Get active tab based on current pathname
  const getActiveTab = () => {
    if (pathname === "/") return "home";
    if (pathname === "/resume") return "resume";
    if (pathname === "/projects") return "projects";
    if (pathname === "/contact") return "contact";
    return "home";
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  // Update active tab when pathname changes
  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [pathname]);

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const scrollDifference = Math.abs(currentScrollTop - lastScrollTop);
      
      // Only react to significant scroll movements
      if (scrollDifference < 10) return;
      
      const isScrollingDown = currentScrollTop > lastScrollTop && currentScrollTop > 100;
      
      // Hide navbar when scrolling down significantly
      if (isScrollingDown && currentScrollTop > 150) {
        setIsHidden(true);
      } else if (currentScrollTop < lastScrollTop || currentScrollTop <= 100) {
        setIsHidden(false);
      }
      
      setLastScrollTop(currentScrollTop);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [lastScrollTop]);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out`}
      initial={{ y: -100 }}
      animate={{ 
        y: isHidden ? -100 : 0,
        backdropFilter: "blur(20px)",
      }}
      transition={{ 
        type: "tween", 
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      {/* Enhanced glassmorphism background with multiple layers - theme aware */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-white/80 dark:from-slate-950/80 dark:via-slate-900/70 dark:to-slate-950/80 backdrop-blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      
      <div className="relative flex justify-between items-center px-6 py-4">
        {/* Enhanced Logo */}
        <motion.div 
          className="text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="block">
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent relative"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Avnish
              {/* Subtle glow effect */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-emerald-400/20 rounded-lg blur-sm -z-10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none rounded-lg glass-card"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Cross1Icon className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HamburgerMenuIcon className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 items-center">
          {["home", "resume", "projects", "contact"].map((tab, index) => (
            <motion.div key={tab} className="relative">
              <Link
                href={`/${tab === "home" ? "" : tab}`}
                onClick={() => handleTabChange(tab)}
                className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 rounded-lg ${
                  activeTab === tab
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.span>
                
                {/* Active indicator */}
                {activeTab === tab && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 dark:from-blue-500/15 dark:via-purple-500/15 dark:to-blue-500/15 rounded-lg border border-blue-400/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ 
                      type: "tween", 
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-lg opacity-0 -z-10"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          ))}
          
          {/* Enhanced Theme Toggle */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm"
                >
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end"
                className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-slate-200/50 dark:border-slate-700/50"
              >
                <DropdownMenuItem 
                  onClick={() => setTheme("light")}
                  className="hover:bg-black/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setTheme("dark")}
                  className="hover:bg-black/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setTheme("system")}
                  className="hover:bg-black/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="relative">
              {/* Background with blur - theme aware */}
              <div className="absolute inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
              
              <div className="relative px-6 py-8 space-y-4">
                {["home", "resume", "projects", "contact"].map((tab, index) => (
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={`/${tab === "home" ? "" : tab}`}
                      onClick={() => handleTabChange(tab)}
                      className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                        activeTab === tab
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 border border-blue-400/30"
                          : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="pt-4 border-t border-gray-300/50 dark:border-gray-700/50"
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="w-full bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm h-12"
                      >
                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="center"
                      className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-slate-200/50 dark:border-slate-700/50"
                    >
                      <DropdownMenuItem 
                        onClick={() => setTheme("light")}
                        className="hover:bg-black/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      >
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => setTheme("dark")}
                        className="hover:bg-black/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      >
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => setTheme("system")}
                        className="hover:bg-black/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      >
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
