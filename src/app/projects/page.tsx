import { ProjectList, ContactCallout } from "@/components/studio/Shared";
export default function ProjectsPage() {
  return (
    <>
      <header className="page-header shell">
        <div className="eyebrow">
          Selected work / The details behind the delivery
        </div>
        <h1>
          From business tools.
          <br />
          <em>To AI experiments.</em>
        </h1>
        <p>
          Client work, independent applications and hackathon projects. Explore
          the interfaces, the engineering and the context behind each build.
        </p>
      </header>
      <section className="shell section" aria-label="Published case studies">
        <ProjectList />
      </section>
      <ContactCallout />
    </>
  );
}
