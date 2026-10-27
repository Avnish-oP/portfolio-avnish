"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const modes = [
  {
    label: "Backend",
    title: "Connected by design.",
    source: "Customer request",
    middle: "API + business logic",
    end: "Application data",
    image: "/images/otticamart1.svg",
    project: "OttiCamart",
    notes: ["Request validated", "Business rules applied", "Response ready"],
  },
  {
    label: "AI workflows",
    title: "Intelligence, with a purpose.",
    source: "Your documents",
    middle: "Extract + retrieve",
    end: "A useful answer",
    image: "/images/braindump.png",
    project: "Brain Dump",
    notes: [
      "Document received",
      "Relevant context found",
      "Draft ready for review",
    ],
  },
  {
    label: "Full-stack",
    title: "The whole experience.",
    source: "An idea",
    middle: "Interface + backend",
    end: "A working product",
    image: "/images/globetrotter.png",
    project: "GlobeTrotter",
    notes: [
      "User journey mapped",
      "Application connected",
      "Ready for walkthrough",
    ],
  },
];
export default function HeroLab() {
  const [mode, setMode] = useState(0);
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const current = modes[mode];
  function clear() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }
  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
    },
    [],
  );
  function choose(index: number) {
    clear();
    setMode(index);
    setStep(-1);
    setRunning(false);
  }
  function run() {
    if (running) return;
    clear();
    setRunning(true);
    setStep(0);
    [1, 2].forEach((index) => {
      timers.current.push(setTimeout(() => setStep(index), index * 700));
    });
    timers.current.push(setTimeout(() => setRunning(false), 2200));
  }
  return (
    <div className="hero-lab">
      <div className="lab-orbit orbit-one" aria-hidden="true" />
      <div className="lab-orbit orbit-two" aria-hidden="true" />
      <div className="lab-window">
        <div className="window-chrome">
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span aria-hidden="true">↗</span>
        </div>
        <div
          className="lab-tabs"
          role="tablist"
          aria-label="Explore development capabilities"
        >
          {modes.map((item, index) => (
            <button
              key={item.label}
              id={`lab-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={mode === index}
              aria-controls="lab-content"
              tabIndex={mode === index ? 0 : -1}
              onKeyDown={(event) => {
                if (
                  ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)
                ) {
                  event.preventDefault();
                  const next =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? 2
                        : (index + (event.key === "ArrowRight" ? 1 : 2)) % 3;
                  choose(next);
                  document.getElementById(`lab-tab-${next}`)?.focus();
                }
              }}
              onClick={() => choose(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div
          id="lab-content"
          role="tabpanel"
          aria-labelledby={`lab-tab-${mode}`}
          className="lab-content"
          key={mode}
        >
          <div className="lab-title">
            <h3>{current.title}</h3>
          </div>
          <div className={`system-map ${running ? "is-running" : ""}`}>
            <svg
              className="system-connectors"
              viewBox="0 0 400 210"
              aria-hidden="true"
            >
              <path d="M74 50 H155 Q170 50 170 65 V92 M230 112 H325 Q340 112 340 127 V162" />
              <path
                className="signal-path"
                d="M74 50 H155 Q170 50 170 65 V92 M230 112 H325 Q340 112 340 127 V162"
              />
            </svg>
            <div
              className={`system-node input-node ${step >= 0 ? "node-active" : ""}`}
            >
              <span className="node-icon" aria-hidden="true">
                ↙
              </span>
              <span>{current.source}</span>
              <small>01 / INPUT</small>
            </div>
            <div
              className={`system-node engine-node ${step >= 1 ? "node-active" : ""}`}
            >
              <span className="engine-mark" aria-hidden="true">
                ✳
              </span>
              <span>{current.middle}</span>
              <small>02 / PROCESS</small>
            </div>
            <div
              className={`system-node output-node ${step >= 2 ? "node-active" : ""}`}
            >
              <span className="node-icon" aria-hidden="true">
                {step === 2 ? "✓" : "↗"}
              </span>
              <span>{current.end}</span>
              <small>03 / OUTCOME</small>
            </div>
          </div>
          <div className="lab-console">
            <span className="console-prefix" aria-hidden="true">
              ›
            </span>
            <span role="status" aria-live="polite">
              {step < 0 ? "Ready to run" : current.notes[step]}
            </span>
            <span className="console-cursor" aria-hidden="true" />
          </div>
          <div className="lab-footer">
            <button type="button" onClick={run} disabled={running}>
              {running ? "Running…" : step === 2 ? "Run again" : "Run a sample"}{" "}
              <span aria-hidden="true">{running ? "◌" : "→"}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="lab-project">
        <div className="lab-project-image">
          <Image
            src={current.image}
            alt={`${current.project} project preview`}
            fill
            sizes="130px"
          />
        </div>
        <div>
          <strong>{current.project}</strong>
        </div>
      </div>
    </div>
  );
}
