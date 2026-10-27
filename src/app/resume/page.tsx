import Link from "next/link";
export default function Resume() {
  return (
    <>
      <header className="page-header shell">
        <div className="eyebrow">Résumé / Avnish Gupta</div>
        <h1>
          The experience
          <br />
          <em>behind the work.</em>
        </h1>
        <p>
          Backend engineering, AI integration and full-stack development. Based
          in New Delhi, working remotely.
        </p>
        <div className="resume-links">
          <a className="button" href="/Resume-Avnish.pdf" download>
            Download résumé <span aria-hidden="true">↓</span>
          </a>
          <a
            className="text-link"
            href="/Resume-Avnish.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open PDF ↗
          </a>
        </div>
      </header>
      <section className="reading shell">
        <h2>Building across the application.</h2>
        <p>
          My work brings together backend systems, AI workflows, frontend
          development and deployment. The résumé contains my experience and
          education; the project pages describe individual delivery scopes.
        </p>
        <h2>Explore the work.</h2>
        <p>
          <Link href="/projects">Read published case studies</Link>, explore{" "}
          <Link href="/services">development services</Link>, or{" "}
          <Link href="/contact">discuss your project</Link>.
        </p>
      </section>
    </>
  );
}
