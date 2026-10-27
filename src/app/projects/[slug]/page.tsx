import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { publishedProjects, services } from "@/content/studio";
import { JsonLd, ContactCallout } from "@/components/studio/Shared";
import { breadcrumbs, pageMetadata } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return publishedProjects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = publishedProjects.find((item) => item.slug === slug);
  return project
    ? pageMetadata(
        `${project.title} — Case Study`,
        project.summary,
        `/projects/${slug}`,
      )
    : {};
}
export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = publishedProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Work", path: "/projects" },
          { name: project.title, path: `/projects/${slug}` },
        ])}
      />
      <header className="page-header shell">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/projects">Selected work</Link>
          <span>/</span>
          <span>{project.title}</span>
        </nav>
        <div className="eyebrow">{project.category} / Case study</div>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>
      <div className="shell detail-space">
        {project.image && (
          <figure className="case-hero">
            <Image
              src={project.image}
              alt={project.imageAlt || project.title}
              width={
                project.slug === "brain-dump"
                  ? 1536
                  : project.slug === "sdi2025"
                    ? 1896
                    : 1024
              }
              height={project.slug === "sdi2025" ? 863 : 1024}
              sizes="(max-width: 768px) 100vw, 85vw"
              priority
            />
            <figcaption>Project screenshot — {project.title}</figcaption>
          </figure>
        )}
        <section className="detail-grid">
          <h2>The need.</h2>
          <p>{project.need}</p>
        </section>
        <section className="detail-grid">
          <h2>The delivery.</h2>
          <p>{project.built}</p>
        </section>
        <section className="detail-grid">
          <h2>My responsibility.</h2>
          <p>{project.role}</p>
        </section>
        <section className="detail-grid">
          <h2>Delivered capabilities.</h2>
          <ul className="deliverables">
            {project.capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="detail-grid">
          <h2>See the evidence.</h2>
          <div>
            {project.evidence.map((item) => (
              <a
                className="text-link"
                href={item.url}
                key={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.label} ↗
              </a>
            ))}
            {project.note && <p className="notice">{project.note}</p>}
          </div>
        </section>
        <section className="detail-grid">
          <h2>Related services.</h2>
          <div>
            {services
              .filter((service) => project.related.includes(service.slug))
              .map((service) => (
                <div key={service.slug}>
                  <Link
                    className="text-link"
                    href={`/services/${service.slug}`}
                  >
                    {service.title} ↗
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </div>
      <ContactCallout />
    </>
  );
}
