import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://yawar-portfoliio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yawar | Backend Engineer",
    template: "%s | Yawar",
  },
  description:
    "Backend engineer specializing in healthcare automation, RPA pipelines, and reliable systems. Expert in Python, Django, Celery, PostgreSQL, and GCP.",
  verification: {
    google: "fRVHIoZ7P6YF4qUh75iZ2xPmrv12f4Q-5cqxEBjOj6U",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Yawar | Backend Engineer",
    description:
      "Backend engineer specializing in healthcare automation, RPA pipelines, and reliable systems.",
    type: "website",
    url: siteUrl,
    siteName: "Yawar's Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Yawar | Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yawar | Backend Engineer",
    description:
      "Backend engineer specializing in healthcare automation, RPA pipelines, and reliable systems.",
    images: ["/opengraph-image"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohd Yawar Shahid",
  alternateName: "Yawar",
  url: siteUrl,
  jobTitle: "Backend Engineer",
  description:
    "Backend engineer specializing in healthcare automation, RPA pipelines, and reliable systems.",
  knowsAbout: [
    "Python",
    "Django",
    "FastAPI",
    "Celery",
    "PostgreSQL",
    "Redis",
    "GCP",
    "Docker",
    "Healthcare Automation",
    "RPA",
    "Backend Engineering",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Yawar's Portfolio",
  url: siteUrl,
  description:
    "Backend engineer portfolio showcasing healthcare automation, RPA pipelines, and reliable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-50"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
