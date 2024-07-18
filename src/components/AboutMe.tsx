"use client";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faPython,
  faDocker,
  faGit,
  faGithubSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { BufferGeometry, Material, Mesh, Vector3 } from "three";

function AboutMe() {
  const words =
    "Full-stack web developer experienced in utilizing technologies like ReactJS, ExpressJS, and JavaScript to create efficient and dynamic web applications. Proficient in database management with PostgreSQL and well-versed in Tailwind CSS for sleek UI designs. Additionally skilled in C++ programming. Committed to delivering high-quality, user-centric solutions while continuously exploring and integrating cutting-edge technologies.";

  const icons = [
    { icon: faReact, color: "#61DBFB" },
    { icon: faNodeJs, color: "#68A063" },
    { icon: faJsSquare, color: "#F0DB4F" },
    { icon: faCss3Alt, color: "#264DE4" },
    { icon: faHtml5, color: "#E34C26" },
    { icon: faPython, color: "#61DBFB" },
    { icon: faDocker, color: "#2496ED" },
    { icon: faGit, color: "#F05032" },
    { icon: faGithubSquare, color: "#181770" },
    { icon: faGithub, color: "#181770" },
  ];

  const randomPosition = () => [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
  ];

  const FloatingIcon = ({ icon, color }: { icon: any; color: string }) => {
    const ref = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
    const [position, setPosition] = useState<Vector3>(new Vector3(...randomPosition()));

    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += 0.01;
        ref.current.rotation.x += 0.01;
        ref.current.position.y += 0.01;

        if (ref.current.position.y > 5) {
          const newPosition = new Vector3(...randomPosition());
          setPosition(newPosition);
          ref.current.position.set(newPosition.x, newPosition.y, newPosition.z);
        }
      }
    });

    return (
      <mesh ref={ref} position={position}>
        <Html center className="text-3xl lg:text-6xl" style={{ color }}>
          <FontAwesomeIcon icon={icon} />
        </Html>
      </mesh>
    );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen dark:text-white justify-around items-center">
      <div className="md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold antialiased mb-6">
            About Me
          </h1>
          <div className="text-lg md:text-xl lg:text-2xl mb-6">
            <TextGenerateEffect className="font-medium" words={words} />
          </div>
          <Link href="/contact" className="mx-auto px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:font-bold flex items-center justify-center w-full transform hover:-translate-y-1 transition duration-400">
             
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            
          </Link>
        </div>
      </div>
      <div className="relative overflow-hidden lg:h-[70vh] h-[35vh] lg:w-[35vw] w-[85vw]">
        <Canvas className="h-full">
          <Suspense fallback={null}>
            <Stars />
            <OrbitControls enableZoom={false} autoRotate />
            {icons.map((iconData, index) => (
              <FloatingIcon key={index} icon={iconData.icon} color={iconData.color} />
            ))}
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default AboutMe;
