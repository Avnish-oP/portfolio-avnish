"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
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

  return (
    <nav className="bg-transparent dark:bg-transparent">
      <div className="flex justify-between items-center p-4 bg-white dark:bg-black shadow-md">
        <div className="text-lg font-bold text-blue-500 dark:text-blue-400">Avnish</div>
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
          <Link href="/" onClick={() => handleTabChange("home")}
              className={`${
                activeTab === "home"
                  ? "border-b-2 border-blue-500"
                  : "opacity-75 hover:opacity-100"
              } text-gray-800 dark:text-gray-200 px-3 py-2 transition-opacity`}>
            
              Home
            
          </Link>
          <Link href="/portfolio" onClick={() => handleTabChange("portfolio")}
              className={`${
                activeTab === "portfolio"
                  ? "border-b-2 border-blue-500"
                  : "opacity-75 hover:opacity-100"
              } text-gray-800 dark:text-gray-200 px-3 py-2 transition-opacity`}>
            
              Resume
            
          </Link>
          <Link href="/projects" onClick={() => handleTabChange("projects")}
              className={`${
                activeTab === "projects"
                  ? "border-b-2 border-blue-500"
                  : "opacity-75 hover:opacity-100"
              } text-gray-800 dark:text-gray-200 px-3 py-2 transition-opacity`}>
            
              Projects
            
          </Link>
          <Link href="/contact" onClick={() => handleTabChange("contact")}
              className={`${
                activeTab === "contact"
                  ? "border-b-2 border-blue-500"
                  : "opacity-75 hover:opacity-100"
              } text-gray-800 dark:text-gray-200 px-3 py-2 transition-opacity`}>
            
              Contact Us
            
          </Link>
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
        <div className="lg:hidden mx-4 py-4 space-y-2 bg-white dark:bg-black shadow-md rounded-lg">
          <Link href="/" onClick={() => handleTabChange("home")}
              className={`block ${
                activeTab === "home" ? "border-b-2 border-blue-500" : "opacity-75 hover:opacity-100"
              } text-gray-800 dark:text-gray-200 px-3 py-2 transition-opacity`}>
            
            
              Home
            
          </Link>
          <Link href="/portfolio" onClick={() => handleTabChange("portfolio")}
              className={`block ${
                activeTab === "portfolio" ? "border-b-2 border-blue-500" : "opacity-75 hover:opacity-100"
              } text-gray-800 dark:text-gray-200 px-3 py-2 transition-opacity`}>
            
              Resume
            
          </Link>
          <Link href="/projects" onClick={() => handleTabChange("projects")}
              className={`block ${
                activeTab === "projects" ? "border-b-2 border-blue-500" : "opacity-75 hover:opacity-100"
              } text-gray-800 dark:text-gray-200 px-3 py-2 transition-opacity`}>
           
              Projects
            
          </Link>
          <Link href="/contact" onClick={() => handleTabChange("contact")}
              className={`block ${
                activeTab === "contact" ? "border-b-2 border-blue-500" : "opacity-75 hover:opacity-100"
              } text-gray-800 dark:text-gray-200 px-3 py-2 transition-opacity`}>
            
              Contact Us
            
          </Link>
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
