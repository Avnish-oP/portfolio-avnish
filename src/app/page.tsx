import HeroLab from "@/components/studio/HeroLab";
import Link from "next/link";
import Image from "next/image";
import {
  Arrow,
  ContactCallout,
  Process,
  ProjectList,
  SectionHeading,
  ServiceList,
} from "@/components/studio/Shared";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Avnish Gupta | Freelance Backend & AI Developer",
  "Backend systems, AI-powered workflows and full-stack business applications. Work directly with Avnish Gupta, an independent developer based in India.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-topline">
          <span className="eyebrow">
            <span className="status-dot" /> Independent developer · India &
            worldwide
          </span>
        </div>
        <div className="hero-grid">
          <div>
            <h1>
              Business applications.
              <br />
              Connected systems.
              <br />
              <em>Less manual work.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                I’m Avnish Gupta. I build backend systems, AI-powered workflows
                and full-stack applications—from interface to deployment.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/contact">
                  Discuss your project <Arrow />
                </Link>
                <Link className="text-link" href="#work">
                  Explore selected work <span aria-hidden="true">↓</span>
                </Link>
              </div>
            </div>
          </div>
          <HeroLab />
        </div>
      </section>
      <section className="section shell" id="services">
        <SectionHeading
          number="01"
          label="How I can help"
          title="Good software starts with a real problem."
        >
          <p>
            Build something new, connect what you have, or make an existing
            application work better.
          </p>
        </SectionHeading>
        <ServiceList />
        <div className="section-end">
          <Link className="text-link" href="/services">
            Explore the services <Arrow />
          </Link>
        </div>
      </section>
      <section className="work-section" id="work">
        <div className="shell section">
          <SectionHeading
            number="02"
            label="Selected work / Client & independent"
            title="Less talk. More things built."
          >
            <p>
              Commercial websites, full-stack applications and AI experiments.
              Different briefs, the same attention to the details.
            </p>
          </SectionHeading>
          <ProjectList />
          <div className="section-end">
            <Link className="text-link" href="/projects">
              View the work <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="section shell">
        <SectionHeading
          number="03"
          label="The process"
          title="A clear path from idea to handover."
        />
        <Process />
      </section>
      <section className="about-strip shell" id="about">
        <div className="portrait-frame">
          <Image
            src="/images/dp.png"
            alt="Avnish Gupta, independent developer"
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 80vw, 360px"
          />
        </div>
        <div className="about-copy">
          <div className="eyebrow">04 / The person behind the work</div>
          <h2>
            A technical partner.
            <br />
            <em>A human conversation.</em>
          </h2>
          <p>
            I’m Avnish, a developer based in New Delhi. My work connects backend
            engineering, useful AI and the interfaces people use every day.
          </p>
          <p>
            You work directly with me—from understanding the problem to
            reviewing the build and taking ownership of the result.
          </p>
          <Link href="/about" className="text-link">
            A little more about me <Arrow />
          </Link>
        </div>
      </section>
      <ContactCallout />
    </>
  );
}
