"use client";
import Link from "next/link";
import { track } from "@vercel/analytics";
export default function ServiceCTA({ service }: { service: string }) {
  return (
    <Link
      className="button"
      href={`/contact?service=${service}`}
      onClick={() => {
        try {
          track("service_enquiry_clicked", { service });
        } catch {}
      }}
    >
      Discuss this service <span aria-hidden="true">↗</span>
    </Link>
  );
}
