import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Avnish Kumar",
  description: "Get in touch with me for freelance projects, open source, or networking.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
