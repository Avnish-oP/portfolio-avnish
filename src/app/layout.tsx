import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://avnishgupta.dev'),
  title: "Avnish Kumar | AI Software Engineer & Full-Stack Developer",
  description:
    "Avnish Kumar is an AI Software Engineer and Full-Stack Developer building scalable web applications, RAG pipelines, and intelligent SaaS platforms.",
  keywords: ["AI Software Engineer", "Full-Stack Developer", "Next.js", "Python", "RAG", "LangChain", "Avnish Kumar", "Portfolio", "Freelance"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avnishgupta.dev",
    siteName: "Avnish Kumar",
    title: "Avnish Kumar | AI Software Engineer & Full-Stack Developer",
    description: "Building scalable web applications, RAG pipelines, and intelligent SaaS platforms.",
    images: [
      {
        url: "/images/dp.png", // Ensure this exists or change to your actual OG image
        width: 800,
        height: 600,
        alt: "Avnish Kumar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avnish Kumar | AI Software Engineer & Full-Stack Developer",
    description: "Building scalable web applications, RAG pipelines, and intelligent SaaS platforms.",
    creator: "@Avnish__gupta", // Your twitter handle
    images: ["/images/dp.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://avnishgupta.dev/#person",
      name: "Avnish Kumar",
      url: "https://avnishgupta.dev",
      jobTitle: "AI Software Engineer",
      sameAs: [
        "https://www.linkedin.com/in/avnish-gupta-23245a273/",
        "https://github.com/Avnish-oP",
        "https://twitter.com/Avnish__gupta"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://avnishgupta.dev/#website",
      url: "https://avnishgupta.dev",
      name: "Avnish Kumar Portfolio",
      publisher: {
        "@id": "https://avnishgupta.dev/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          {/* Subtle noise texture overlay */}
          <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.03] mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>

          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
