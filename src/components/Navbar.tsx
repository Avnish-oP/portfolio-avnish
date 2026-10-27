"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blogs" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="shell nav-inner">
        <Link href="/" className="wordmark" aria-label="Avnish Gupta home">
          Avnish<span className="brand-dot">.</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((link) => (
            <Link
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </Link>
        <ThemeToggle />
        <button
          className="menu-toggle"
          ref={toggle}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!open}
      >
        {links.map((link) => (
          <Link
            onClick={() => setOpen(false)}
            key={link.href}
            href={link.href}
            aria-current={pathname.startsWith(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}>
          Discuss your project ↗
        </Link>
      </nav>
    </header>
  );
}
