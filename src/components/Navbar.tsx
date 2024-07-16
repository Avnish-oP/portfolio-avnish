"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  MoonIcon,
  SunIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    setIsOpen(false);
  };
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const isScrollingDown = currentScrollTop > lastScrollTop;
      setIsHidden(isScrollingDown);
      setLastScrollTop(currentScrollTop);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } fixed top-0 w-full bg-transparent dark:bg-transparent shadow-md z-50 transition-transform duration-300`}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-lg font-bold text-black dark:text-blue-400">
          Avnish
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? (
              <Cross1Icon className="h-6 w-6" />
            ) : (
              <HamburgerMenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex gap-6 items-center">
          {["home", "resume", "projects", "contact"].map((tab) => (
            <Link
              key={tab}
              href={`/${tab === "home" ? "" : tab}`}
              onClick={() => handleTabChange(tab)}
              className={`${
                activeTab === tab
                  ? "border-b-2 border-blue-500"
                  : "opacity-75 hover:opacity-100"
              } text-gray-800 dark:text-gray-200 px-3 py-2 transition-opacity`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden px-4 py-4 space-y-2 bg-white dark:bg-black shadow-md rounded-lg">
          {["home", "portfolio", "projects", "contact"].map((tab) => (
            <Link
              key={tab}
              href={`/${tab === "home" ? "" : tab}`}
              onClick={() => handleTabChange(tab)}
              className={`block ${
                activeTab === tab
                  ? "border-b-2 border-blue-500"
                  : "opacity-75 hover:opacity-100"
              } text-gray-800 dark:text-gray-200 px-3 py-2 transition-opacity`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="mt-4">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
