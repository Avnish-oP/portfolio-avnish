import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { cn } from "@/lib/utils";
import DotPattern from "./magicui/dot-pattern";
import SocialMedia from "./socialMedia";

function Hero() {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "full-stack ",
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
    <div className="relative flex h-full dark:bg-black w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
      <div className="sm:flex lg:  min-h-[40vh] sm:min-h-screen w-full">
        <div className="left mb-16 basis-[75vw] flex flex-col justify-center items-center gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold antialiased">
            Hello,I'm Avnish
          </h1>
          <TypewriterEffect words={words} />
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
            Contact Me
          </button>
        </div>
        <SocialMedia />
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
