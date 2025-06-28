import Hero from "@/components/Hero";
import ModernAboutMe from "@/components/ModernAboutMe";
import ModernSkills from "@/components/ModernSkills";
import ModernProjects from "@/components/ModernProjects";
import ModernContact from "@/components/ModernContact";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <SmoothScrollProvider>
        <div className="min-h-screen bg-slate-950">
          <Hero />
          <ModernAboutMe />
          <ModernSkills />
          <ModernProjects />
          <ModernContact />
        </div>
      </SmoothScrollProvider>
    </>
  );
}
