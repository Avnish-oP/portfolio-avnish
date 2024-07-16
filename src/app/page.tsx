import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/Projects";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Resume from "@/components/resume";

export default function Home() {
  
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-200 dark:from-black via-white dark:via-gray-900 to-white dark:to-black bg-white bg-opacity-50">
        <Hero />
        <AboutMe/>
        <Skills/>
        <Tools/>
        <ProjectSection/>
        
      </div>
    </div>
  );
}
