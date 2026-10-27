"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
export default function MotionLayer() {
  const progress = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      const distance =
        document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current)
        progress.current.style.transform = `scaleX(${distance > 0 ? window.scrollY / distance : 0})`;
      frame = 0;
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!reduced.matches)
              animations.push(
                entry.target.animate(
                  [
                    { opacity: 0, transform: "translateY(28px)" },
                    { opacity: 1, transform: "translateY(0)" },
                  ],
                  {
                    duration: 750,
                    easing: "cubic-bezier(.16,1,.3,1)",
                    fill: "none",
                  },
                ),
              );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".section-heading, .service-card, .work-card, .process-grid > div, .about-strip, .detail-grid, .article-row",
      )
      .forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
    };
  }, [pathname]);
  return <div className="reading-progress" ref={progress} aria-hidden="true" />;
}
