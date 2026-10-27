import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Résumé",
  "View or download Avnish Gupta’s résumé, including software engineering experience, technical strengths and education.",
  "/resume",
);
export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
