"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleTabChange = (tabName:string) => {
    setActiveTab(tabName);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between mx-2 p-2">
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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            darkmode
          </button>
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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            darkmode
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
