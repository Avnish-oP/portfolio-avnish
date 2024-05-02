"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
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
    <div className="bg-transparent dark:bg-transparent">
      <div className="flex justify-between mx-2 p-2 dark:bg-black">
        <div>Avnish</div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:flex gap-4">
          <div
            onClick={() => handleTabChange("home")}
            className={`${
              activeTab === "home" ? "border-b-2 border-blue-500" : "opacity-25"
            }`}
          >
            <Link href={"/"}>Home</Link>
          </div>
          <div
            onClick={() => handleTabChange("portfolio")}
            className={`${
              activeTab === "portfolio"
                ? "border-b-2 border-blue-500"
                : "opacity-25"
            }`}
          >
            <Link href={"/portfolio"}>Portfolio</Link>
          </div>
          <div
            onClick={() => handleTabChange("projects")}
            className={`${
              activeTab === "projects"
                ? "border-b-2 border-blue-500"
                : "opacity-25"
            }`}
          >
            <Link href={"/projects"}>Projects</Link>
          </div>
          <div
            onClick={() => handleTabChange("contact")}
            className={`${
              activeTab === "contact"
                ? "border-b-2 border-blue-500"
                : "opacity-25"
            }`}
          >
            <Link href={"/contact"}>Contact Us</Link>
          </div>
        </div>
        <div className="hidden md:block">
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
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden mx-2 p-2`}>
        <div
          onClick={() => handleTabChange("home")}
          className={`${
            activeTab === "home" ? "border-b-2 border-blue-500" : "opacity-25"
          }`}
        >
          <Link href={"/"}>Home</Link>
        </div>
        <div
          onClick={() => handleTabChange("portfolio")}
          className={`${
            activeTab === "portfolio"
              ? "border-b-2 border-blue-500"
              : "opacity-25"
          }`}
        >
          <Link href={"/portfolio"}>Portfolio</Link>
        </div>
        <div
          onClick={() => handleTabChange("projects")}
          className={`${
            activeTab === "projects"
              ? "border-b-2 border-blue-500"
              : "opacity-25"
          }`}
        >
          <Link href={"/projects"}>Projects</Link>
        </div>
        <div
          onClick={() => handleTabChange("contact")}
          className={`${
            activeTab === "contact"
              ? "border-b-2 border-blue-500"
              : "opacity-25"
          }`}
        >
          <Link href={"/contact"}>Contact Us</Link>
        </div>
        <div className="md:block mt-4">
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
    </div>
  );
}

export default Navbar;
