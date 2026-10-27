import ProjectCollection from "./ProjectCollection";
import Link from "next/link";
import Image from "next/image";
import { publishedProjects, services, process } from "@/content/studio";
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <span>{number}</span> / {label}
      </div>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
const serviceArtwork = ["backend", "ai", "apps", "launch"];
export function ServiceList() {
  return (
    <div className="service-grid">
      {services.map((service, index) => (
        <Link
          className="service-card"
          key={service.slug}
          href={`/services/${service.slug}`}
        >
          <div className="service-art">
            <Image
              src={`/images/services/${serviceArtwork[index]}.svg`}
              alt={`Illustration of ${service.title.toLowerCase()}`}
              width={640}
              height={360}
              sizes="(max-width: 767px) 90vw, 45vw"
            />
          </div>
          <div className="service-card-copy">
            <div className="service-card-heading">
              <h3>{service.title}</h3>
              <span className="circle-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <p>{service.description}</p>
            <div className="service-tags">
              {service.deliverables.slice(0, 3).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <span className="service-explore">
              Explore the service <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function ProjectList() {
  return <ProjectCollection projects={publishedProjects} />;
}
export function Process() {
  return (
    <div className="process-grid">
      {process.map((step, index) => (
        <div key={step.title}>
          <span className="eyebrow">0{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
}
export function ContactCallout() {
  return (
    <section className="contact-callout">
      <div className="shell">
        <div className="eyebrow">A good place to start</div>
        <div className="callout-content">
          <h2>
            What could work
            <br />
            <em>better for you?</em>
          </h2>
          <div>
            <p>
              A new application, a disconnected workflow, or an existing product
              that needs attention. Tell me what you have in mind.
            </p>
            <Link className="button button-light" href="/contact">
              Discuss your project <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
