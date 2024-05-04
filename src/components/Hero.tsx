import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Vortex } from "./ui/vortex";
import Image from "next/image";
import portolioPhoto from "../../public/portolioPhoto.png";
import {
  InstagramIcon,
  LinkedinIcon,
  LucideLinkedin,
  TwitterIcon,
  XCircleIcon,
  XIcon,
  XSquareIcon,
} from "lucide-react";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

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
    <div className="w-[calc(100%-0rem)] mx-auto rounded-md h-[70vh] lg:h-[87vh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={700}
        particleCount={400}
        baseHue={500}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div className="sm:flex lg:  min-h-[40vh] sm:min-h-screen w-full">
          <div className="left mb-16 basis-[70vw] flex flex-col justify-center items-center gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold antialiased">
              Hello,I'm Avnish
            </h1>
            <TypewriterEffect words={words} />
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Contact Me
            </button>
          </div>
          <div className="right flex items-center justify-center basis-[30vw]">
            {/* <Image src={portolioPhoto} width={400} alt="portfolio" /> */}

            <div className="flex sm:flex-col">
              <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 group">
                <LucideLinkedin
                  size={50}
                  color="blue"
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                />
                <span className="md:inline hidden text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  LinkedIn
                </span>
              </div>
              <div className="w-2 h-8 hidden md:block rounded-lg bg-green-600 relative left-6 mt-2"></div>
              <div className="flex  items-center gap-2 cursor-pointer hover:text-blue-500 group">
                <XIcon
                  size={60}
                  color="white"
                  className="transition-transform  duration-500 ease-in-out transform group-hover:scale-125"
                />
                <span className="md:inline hidden text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  Twitter
                </span>
              </div>
              <div className="w-2 h-8 hidden md:block rounded-lg bg-blue-600 relative left-6 mb-2"></div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 group">
                <InstagramIcon
                  color="purple"
                  size={48}
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                />
                <span className="md:inline hidden text-3xl text-purple-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  Instagram
                </span>
              </div>
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
}

export default Hero;
