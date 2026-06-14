import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Avnish Kumar",
  description: "Explore my latest full-stack and AI projects.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
