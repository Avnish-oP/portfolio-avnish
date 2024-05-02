import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Vortex } from "./ui/vortex";
import Image from "next/image";
import portolioPhoto from "../../public/portolioPhoto.png"

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
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
    <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
    <div className="flex min-h-screen">
      <div className="left basis-[55vw] flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl font-bold">Hello,I'm Avnish</h1>
        <TypewriterEffect words={words} />
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
          Contact Me
        </button>
      </div>
      <div className="right ">
        <Image src={portolioPhoto} width={400} alt="portfolio" />
      </div>
      
    </div>
    </Vortex>
    </div>
  );
}

export default Hero;
