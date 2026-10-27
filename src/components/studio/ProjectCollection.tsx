"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/studio";
const filters = [
  "All work",
  "Client work",
  "Independent",
  "Hackathon",
] as const;
export default function ProjectCollection({
  projects,
}: {
  projects: Project[];
}) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const visible =
    filter === "All work"
      ? projects
      : projects.filter((project) => project.category === filter);
  return (
    <div className="project-collection">
      <div className="work-toolbar">
        <div className="work-filters" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === "All work" && (
                <span>{projects.length.toString().padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" role="status">
        {visible.length} projects shown
      </p>
      <div className="work-grid">
        {visible.map((project, index) => (
          <article
            className={`work-card work-${project.slug}`}
            key={project.slug}
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="project-preview"
              aria-label={`Explore ${project.title}`}
            >
              <div className="project-browser">
                <div className="browser-bar">
                  <span className="window-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>
                    {project.title.toLowerCase().replaceAll(" ", "-")}
                  </span>
                  <span aria-hidden="true">↗</span>
                </div>
                <div className="browser-viewport">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={
                        project.imageAlt || `${project.title} interface preview`
                      }
                      fill
                      sizes="(max-width: 767px) 90vw, 45vw"
                    />
                  )}
                </div>
              </div>
              <span className="preview-action">
                Explore project <span aria-hidden="true">↗</span>
              </span>
              <span className="project-index" aria-hidden="true">
                {String(projects.indexOf(project) + 1).padStart(2, "0")}
              </span>
            </Link>
            <div className="project-caption">
              <div>
                <span className="eyebrow">
                  {project.category}
                  {project.slug === "sdi2025" ? " / Archived" : ""}
                </span>
                <h3>
                  <Link href={`/projects/${project.slug}`}>
                    {project.title} <span aria-hidden="true">↗</span>
                  </Link>
                </h3>
              </div>
              <p>{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
