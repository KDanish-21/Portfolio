import type { Metadata } from "next";
import { Archivo, Caveat, IBM_Plex_Mono, Inter } from "next/font/google";
import MetaBar from "@/components/layout/MetaBar";
import MobileNav from "@/components/layout/MobileNav";
import SideRail from "@/components/layout/SideRail";
import RevealEngine from "@/components/technical/RevealEngine";
import { meta } from "@/lib/content";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danishkhan.vercel.app"),
  title: `${meta.name} — ${meta.title}`,
  description: meta.bio,
  keywords: [
    "ERPNext Developer",
    "Frappe Developer",
    "Full-Stack Engineer",
    "Python Developer",
    "Django",
    "FastAPI",
    "Next.js",
    "Flutter",
    "Danish Khan",
  ],
  authors: [{ name: meta.name }],
  openGraph: {
    title: `${meta.name} — ${meta.title}`,
    description: meta.bio,
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable} ${caveat.variable}`}
    >
      <head>
        {/* Marks JS as available before first paint so reveal animations can
            engage without ever leaving a no-JS visitor with a blank page.
            Uses an attribute React doesn't render, so hydration stays clean. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-js','')`,
          }}
        />
      </head>
      <body className="paper-surface">
        <a
          href="#index"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-paper"
        >
          Skip to content
        </a>

        <SideRail />
        <MobileNav />

        <div className="lg:ml-rail">
          <MetaBar />
          {children}
        </div>

        <RevealEngine />
      </body>
    </html>
  );
}
