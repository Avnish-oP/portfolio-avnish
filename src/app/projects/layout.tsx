import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Selected Client Work",
  "Explore Avnish Gupta’s client work: business requirements, delivered capabilities, personal contribution and reviewable evidence.",
  "/projects",
);
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
