import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Github, Linkedin } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Contact",
  description: "Get in touch via email, GitHub, or LinkedIn.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column - Form */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Have a project in mind or want to discuss an opportunity? Send me a message and I&apos;ll get back to you as soon as possible.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        {/* Right column - Other contact methods */}
        <div className="lg:pt-12">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Other ways to reach me
          </h2>

          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Github className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                  GitHub
                </h3>
                <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                  Check out my open source work
                </p>
                <Button variant="link" className="mt-1 h-auto p-0 text-sm" asChild>
                  <Link
                    href="https://github.com/mohdyawars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/mohdyawars
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Linkedin className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
              </div>
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                  LinkedIn
                </h3>
                <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                  Connect with me professionally
                </p>
                <Button variant="link" className="mt-1 h-auto p-0 text-sm" asChild>
                  <Link
                    href="https://www.linkedin.com/in/yawar-shahid-3032b816b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/yawar-shahid
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-900 dark:text-zinc-50">Prefer email?</strong>{" "}
              You can also reach me directly at{" "}
              <a
                href="mailto:mohdyawars@gmail.com"
                className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
              >
                mohdyawars@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
