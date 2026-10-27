import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import MotionLayer from "@/components/studio/MotionLayer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { JsonLd } from "@/components/studio/Shared";
import { site } from "@/content/studio";
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Avnish Gupta | Freelance Backend & AI Developer",
    template: "%s | Avnish Gupta",
  },
  description:
    "Independent developer building backend systems, AI-powered workflows and full-stack business applications. Based in India, working with clients worldwide.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Avnish Gupta",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", creator: "@Avnish__gupta" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:'system'}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${manrope.variable} ${newsreader.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": `${site.url}/#person`,
                name: site.name,
                url: site.url,
                jobTitle: "Independent software developer",
                sameAs: [
                  "https://github.com/Avnish-oP",
                  "https://www.linkedin.com/in/avnish-gupta-23245a273/",
                ],
              },
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                name: site.name,
                url: site.url,
                publisher: { "@id": `${site.url}/#person` },
              },
            ],
          }}
        />
        <MotionLayer />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
