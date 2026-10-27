import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Discuss Your Project",
  "Tell Avnish Gupta about your application, backend integration or AI workflow. Share your goals, existing system, deadline and optional budget.",
  "/contact",
);
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
