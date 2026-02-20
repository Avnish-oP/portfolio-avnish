"use client";
import React from "react";
import ModernProjects from "@/components/ModernProjects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-20">
      <ModernProjects showAll={true} />
    </div>
  );
};

export default ProjectsPage;
