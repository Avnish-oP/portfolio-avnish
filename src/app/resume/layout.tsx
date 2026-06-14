import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Avnish Kumar",
  description: "View my resume, work experience, and educational background.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
