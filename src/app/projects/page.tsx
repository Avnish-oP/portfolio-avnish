"use client";
import React from "react";
import ModernProjects from "@/components/ModernProjects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-cinema-black">
      <ModernProjects showAll={true} />
    </div>
  );
};

export default ProjectsPage;
