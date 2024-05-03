import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  
  return (
    <div>
      <div>
        <Hero />
        <AboutMe/>
      </div>
    </div>
  );
}
