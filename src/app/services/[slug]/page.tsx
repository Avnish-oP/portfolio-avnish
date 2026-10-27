import Link from "next/link";
import ServiceCTA from "@/components/studio/ServiceCTA";
import { notFound } from "next/navigation";
import { services, publishedProjects, site } from "@/content/studio";
import { Arrow, JsonLd, ContactCallout } from "@/components/studio/Shared";
import { breadcrumbs, pageMetadata } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata(service.title, service.description, `/services/${slug}`);
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const work = publishedProjects.filter((project) =>
    project.related.includes(slug),
  );
  return (
    <>
      <JsonLd
        data={breadcrumbs([
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${site.url}/services/${slug}`,
          provider: { "@id": `${site.url}/#person` },
        }}
      />
      <header className="page-header shell">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/services">Services</Link>
          <span>/</span>
          <span>{service.number}</span>
        </nav>
        <div className="eyebrow">Service {service.number}</div>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
        <ServiceCTA service={slug} />
      </header>
      <div className="shell detail-space">
        <section className="detail-grid">
          <h2>{service.short}</h2>
          <p>{service.problem}</p>
        </section>
        <section className="detail-grid">
          <h2>What I can deliver.</h2>
          <div>
            <ul className="deliverables">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="tech-list" aria-label="Supporting technologies">
              {service.technologies.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>
        <section className="detail-grid">
          <h2>A scope you can follow.</h2>
          <div>
            <p>{service.scope}</p>
            <p>
              We begin with discovery, define milestones, review working
              progress and finish with documentation and handover.
            </p>
          </div>
        </section>
        {work.length > 0 && (
          <section className="detail-grid">
            <h2>Related work.</h2>
            <div>
              {work.map((project) => (
                <div key={project.slug}>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <Link
                    className="text-link"
                    href={`/projects/${project.slug}`}
                  >
                    Read the case study <Arrow />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
        <section className="detail-grid">
          <h2>Before we start.</h2>
          <div className="faq">
            {service.questions.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
      <ContactCallout />
    </>
  );
}
