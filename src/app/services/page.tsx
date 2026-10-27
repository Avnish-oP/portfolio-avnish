import {
  ContactCallout,
  Process,
  ServiceList,
} from "@/components/studio/Shared";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Freelance Development Services",
  "Backend development, AI workflow automation, full-stack business applications and launch support. Clear scope and direct collaboration with Avnish Gupta.",
  "/services",
);
export default function ServicesPage() {
  return (
    <>
      <header className="page-header shell">
        <div className="eyebrow">Services / Built around your business</div>
        <h1>
          The right software.
          <br />
          <em>For the work at hand.</em>
        </h1>
        <p>
          From a single integration to a complete business application. Start
          with the problem; we’ll define the right scope together.
        </p>
      </header>
      <section className="shell section" aria-label="Development services">
        <ServiceList />
        <div className="detail-grid">
          <h2>Support beyond launch.</h2>
          <p>
            Maintenance is an optional add-on with named systems, agreed monthly
            hours, a response window and a defined change allowance. New
            features, emergency coverage and third-party costs are scoped
            separately.
          </p>
        </div>
      </section>
      <section className="shell detail-space">
        <h2 className="mb-10">How an engagement works.</h2>
        <Process />
      </section>
      <ContactCallout />
    </>
  );
}
