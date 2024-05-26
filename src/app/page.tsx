import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";

export default function Home() {
  
  return (
    <div>
      <div>
        <Hero />
        <AboutMe/>
        <Skills/>
        <Tools/>
      </div>
    </div>
  );
}
