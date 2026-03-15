import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yawar | Backend Engineer",
  description:
    "Backend engineer specializing in healthcare automation, RPA pipelines, and reliable systems.",
  verification: {
    google: "fRVHIoZ7P6YF4qUh75iZ2xPmrv12f4Q-5cqxEBjOj6U",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Yawar | Backend Engineer",
    description:
      "Backend engineer specializing in healthcare automation, RPA pipelines, and reliable systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yawar | Backend Engineer",
    description:
      "Backend engineer specializing in healthcare automation, RPA pipelines, and reliable systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-50"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
