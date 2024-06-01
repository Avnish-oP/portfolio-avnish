import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { cn } from "@/lib/utils";
import DotPattern from "./magicui/dot-pattern";
import SocialMedia from "./socialMedia";
import Link from "next/link";

function Hero() {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "a full-stack ",
    },
    {
      text: "developer",
      className: "text-green-500 dark:text-green-500",
    },
    {
      text: "and",
    },
    {
      text: "programmer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="relative flex h-full dark:bg-black w-full items-center justify-center overflow-hidden bg-background">
      <div className="sm:flex md:flex min-h-[70vh]  lg:min-h-screen w-full justify-center items-center">
        <div className="left mb-16 mt-20 basis-[70vw] flex flex-col justify-center items-center gap-10 lg:gap-6">
          <h1 className="text-4xl mt-12 lg:mt-0 md:text-5xl lg:text-6xl font-bold antialiased text-center text-white">
            Hello, I{"'"}m Avnish
          </h1>
          <div className="mt-4">
            <TypewriterEffect words={words} />
          </div>
          <Link href={"/contact"} className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300">
            Contact Me
          </Link>
        </div>
        <div className="right lg:mt-22">
          <SocialMedia />
        </div>
      </div>
      <div className="lg:hidden opacity-80">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          x={0}
          y={20}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          x={0}
          y={20}
          className={cn(
            "[mask-image:radial-gradient(220px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
      <div className="hidden lg:block">
        <DotPattern
          width={10}
          height={10}
          cx={1}
          cy={1}
          cr={1}
          x={0}
          y={20}
          className={cn(
            "[mask-image:radial-gradient(450px_circle_at_left,white,transparent)]"
          )}
        />
        <DotPattern
          width={10}
          height={10}
          cx={1}
          cy={1}
          cr={1}
          x={0}
          y={20}
          className={cn(
            "[mask-image:radial-gradient(450px_circle_at_right,white,transparent)]"
          )}
        />
      </div>
    </div>
  );
}

export default Hero;
