import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/Projects";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";

export default function Home() {
  
  return (
    <div>
      <div className="">
        <Hero />
        <AboutMe/>
        <Skills/>
        <Tools/>
        <ProjectSection/>
      </div>
    </div>
  );
}
