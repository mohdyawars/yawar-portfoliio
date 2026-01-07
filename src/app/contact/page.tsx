import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Contact",
  description: "Get in touch via email, GitHub, or LinkedIn.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Have a project in mind or want to discuss an opportunity? Feel free to
        reach out.
      </p>

      <div className="mt-12 space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <Mail className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
          </div>
          <div>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Email
            </h2>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              The best way to reach me for work inquiries.
            </p>
            <Button variant="link" className="mt-2 h-auto p-0" asChild>
              <a href="mailto:mohdyawars@gmail.com">mohdyawars@gmail.com</a>
            </Button>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <Github className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
          </div>
          <div>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              GitHub
            </h2>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              Check out my open source work and contributions.
            </p>
            <Button variant="link" className="mt-2 h-auto p-0" asChild>
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
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
            <Linkedin className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
          </div>
          <div>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              LinkedIn
            </h2>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              Connect with me professionally.
            </p>
            <Button variant="link" className="mt-2 h-auto p-0" asChild>
              <Link
                href="https://www.linkedin.com/in/yawar-shahid-3032b816b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/yawar-shahid-3032b816b
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
