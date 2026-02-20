import Hero from "@/components/Hero";
import ModernProjects from "@/components/ModernProjects";
import ModernAboutMe from "@/components/ModernAboutMe";
import ModernSkills from "@/components/ModernSkills";
import ModernContact from "@/components/ModernContact";
import TechMarquee from "@/components/TechMarquee";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SmoothScrollProvider>
        <div className="min-h-screen bg-white dark:bg-zinc-950">
          <Hero />
          <TechMarquee />
          <ModernProjects />
          <ModernAboutMe />
          <ModernSkills />
          <ModernContact />
        </div>
      </SmoothScrollProvider>
    </>
  );
}
