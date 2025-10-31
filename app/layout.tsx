import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import VisitorTracker from "../components/VisitorTracker";
import ClientLayout from "./ClientLayout";
import "./globals.css";
import { Providers } from "./Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loopera.tech - AI-First Development Solutions",
  description:
    "Custom websites, apps, and AI systems built to launch, automate, and scale your business — beautifully and intelligently.",
  generator: "Loopera.tech",
  metadataBase: new URL("https://loopera.tech"),
  openGraph: {
    title: "Loopera.tech - AI-First Development Solutions",
    description:
      "Custom websites, apps, and AI systems built to launch, automate, and scale your business — beautifully and intelligently.",
    url: "https://loopera.tech",
    siteName: "Loopera.tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Loopera.tech - AI-First Development Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loopera.tech - AI-First Development Solutions",
    description:
      "We build intelligent websites, AI systems, and apps that scale your business beautifully.",
    images: ["/og-image.jpg"],
    creator: "@loopera_tech",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data (SEO Schema) */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Loopera.tech",
              url: "https://loopera.tech",
              logo: "https://loopera.tech/logo.png",
              sameAs: [
                "https://x.com/loopera_tech",
                "https://www.linkedin.com/company/loopera-tech",
                "https://www.instagram.com/loopera.tech",
              ],
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Loopera.tech",
              url: "https://loopera.tech",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://loopera.tech/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body className={`font-sans ${poppins.variable} antialiased`}>
        <VisitorTracker />
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
