"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [systemDark, setSystemDark] = useState(false);
  const dark = theme === "dark" || (theme === "system" && systemDark);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(media.matches);
    const followSystem = () => setSystemDark(media.matches);
    media.addEventListener("change", followSystem);
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch {
      // Follow the system when storage is unavailable.
    }
    function sync(event: StorageEvent) {
      if (event.key !== "theme" && event.key !== null) return;
      const next =
        event.newValue === "light" || event.newValue === "dark"
          ? event.newValue
          : "system";
      setTheme(next);
      document.documentElement.dataset.theme = next;
    }
    window.addEventListener("storage", sync);
    return () => {
      media.removeEventListener("change", followSystem);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function toggle() {
    const next = dark ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // The switch still works for the current page.
    }
  }

  return (
    <button
      type="button"
      className="theme-switch"
      role="switch"
      aria-label="Dark mode"
      aria-checked={dark}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
    >
      <span className="theme-switch-track" aria-hidden="true">
        <span className="theme-switch-thumb" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <path d="M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10Z" />
        </svg>
      </span>
    </button>
  );
}
