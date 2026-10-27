"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { services } from "@/content/studio";
export default function EnquiryForm({
  initialService = "",
}: {
  initialService?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const started = useRef(false);
  const submitting = useRef(false);
  const status = useRef<HTMLDivElement>(null);
  const validService = services.some(
    (service) => service.slug === initialService,
  )
    ? initialService
    : "";
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("sending");
    setMessage("");
    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(25000),
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(
          result.message || "Your enquiry could not be sent. Please try again.",
        );
      setState("success");
      setMessage(result.message);
      form.reset();
      try {
        track("enquiry_submitted", {
          service: String(data.service || "general"),
        });
      } catch {}
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error && error.name !== "TimeoutError"
          ? error.message
          : "The request timed out. Please try again or email directly.",
      );
    } finally {
      submitting.current = false;
      requestAnimationFrame(() => status.current?.focus());
    }
  }
  return (
    <form
      className="enquiry-form"
      onSubmit={submit}
      onFocus={() => {
        if (!started.current) {
          started.current = true;
          try {
            track("enquiry_started", { service: validService || "general" });
          } catch {}
        }
      }}
    >
      <label className="field">
        Your name *
        <input
          name="name"
          autoComplete="name"
          required
          minLength={2}
          maxLength={120}
          placeholder="Your name"
        />
      </label>
      <label className="field">
        Email address *
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="you@company.com"
        />
      </label>
      <label className="field full-field">
        Company or website <span className="sr-only">(optional)</span>
        <input
          name="company"
          maxLength={300}
          autoComplete="organization"
          placeholder="A little context about your business"
        />
      </label>
      <label className="field full-field">
        What can I help with?
        <select name="service" defaultValue={validService}>
          <option value="">Not sure yet — let’s discuss</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <label className="field full-field">
        Tell me about the problem or project *
        <textarea
          name="message"
          required
          minLength={20}
          maxLength={5000}
          placeholder="What are you trying to build or improve? Who will use it?"
          rows={5}
        />
      </label>
      <label className="field full-field">
        Existing system <span className="sr-only">(optional)</span>
        <textarea
          name="existingSystem"
          maxLength={1500}
          placeholder="Any tools, applications or spreadsheets involved?"
          rows={2}
          style={{ minHeight: 90 }}
        />
      </label>
      <label className="field full-field">
        Desired deadline <span className="sr-only">(optional)</span>
        <input
          name="deadline"
          maxLength={200}
          placeholder="A date, timeframe, or flexible"
        />
      </label>
      <label className="field">
        Budget currency
        <select name="currency" defaultValue="INR">
          <option value="INR">INR (₹)</option>
          <option value="USD">USD ($)</option>
        </select>
      </label>
      <label className="field">
        Budget range <span className="sr-only">(optional)</span>
        <input
          name="budget"
          maxLength={200}
          placeholder="Amount, range, or not sure yet"
        />
      </label>
      <label className="honeypot" aria-hidden="true">
        Leave this field empty
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          maxLength={300}
        />
      </label>
      <p className="form-note full-field">
        Only name, email and project description are required. Please leave out
        passwords and sensitive information. Your details are used to respond to
        this enquiry. <Link href="/privacy">Privacy details</Link>.
      </p>
      <div className="full-field">
        <button className="button" type="submit" disabled={state === "sending"}>
          {state === "sending"
            ? "Sending your enquiry…"
            : "Send project enquiry"}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <div
        className="full-field"
        ref={status}
        tabIndex={-1}
        role="status"
        aria-live="polite"
      >
        {message && (
          <div className={state === "error" ? "form-error" : "form-success"}>
            {message}
            {state === "error" && (
              <>
                {" "}
                <a href="mailto:kavnish1245@gmail.com">
                  Email Avnish directly ↗
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
