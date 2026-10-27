import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <Link href="/" className="wordmark">
          Avnish<span className="brand-dot">.</span>
        </Link>
        <p>
          Independent developer.
          <br />
          New Delhi, India. Working worldwide.
        </p>
        <div>
          <a
            href="https://github.com/Avnish-oP"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/avnish-gupta-23245a273/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:kavnish1245@gmail.com">Email ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Avnish Gupta</span>
        <div>
          <Link href="/resume">Résumé</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/services">Services</Link>
        </div>
      </div>
    </footer>
  );
}
