import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to My Website",
  description: "This is portfolio website of Avnish, where you can find his projects, blogs and resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <body className={inter.className}>
        <div>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
          >
            <div>
              <Navbar />
            </div>
            {children}
            <div>
              <Footer />
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
