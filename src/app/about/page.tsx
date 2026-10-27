import Image from "next/image";
import Link from "next/link";
import { ContactCallout, Process } from "@/components/studio/Shared";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "About",
  "Meet Avnish Gupta, an independent developer in New Delhi building backend systems, AI workflows and business applications for clients worldwide.",
  "/about",
);
export default function About() {
  return (
    <>
      <header className="page-header shell">
        <div className="eyebrow">About / Avnish Gupta</div>
        <h1>
          Good work starts with
          <br />
          <em>understanding your world.</em>
        </h1>
      </header>
      <section className="about-strip shell" style={{ paddingTop: 60 }}>
        <div className="portrait-frame">
          <Image
            src="/images/dp.png"
            alt="Avnish Gupta"
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 80vw, 360px"
          />
        </div>
        <div className="about-copy">
          <h2>
            Independent by choice.
            <br />
            Collaborative by nature.
          </h2>
          <p>
            I’m a developer based in New Delhi, India, working with clients
            remotely. I bring backend, AI and frontend skills together to build
            applications and connect business workflows.
          </p>
          <p>
            My commercial website work includes Prime Industries. Alongside
            client delivery, I explore AI applications and backend systems
            through independent and hackathon projects.
          </p>
          <p>
            When we work together, you speak directly with the person building
            your application. I value explicit scope, working demonstrations and
            documentation that makes handover useful.
          </p>
          <Link className="text-link" href="/resume">
            View my résumé ↗
          </Link>
        </div>
      </section>
      <section className="shell detail-space">
        <div className="detail-grid">
          <h2>Technical strengths.</h2>
          <div>
            <p>
              Backend development and AI integration lead my work. Frontend
              development and deployment support complete delivery.
            </p>
            <div className="tech-list">
              {[
                "TypeScript",
                "Next.js",
                "React",
                "Node.js",
                "Python",
                "PostgreSQL",
                "Redis",
                "Docker",
                "AWS",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="shell detail-space">
        <h2 className="mb-10">How we’ll work together.</h2>
        <Process />
      </section>
      <ContactCallout />
    </>
  );
}
