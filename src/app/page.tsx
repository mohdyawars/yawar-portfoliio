import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/mdx";
import { ArrowRight } from "lucide-react";

const domains = [
  {
    title: "Healthcare Systems",
    description:
      "Building software for hospitals and clinics that handles sensitive patient data. Strict privacy compliance (HIPAA), complete audit trails, and zero tolerance for data loss.",
  },
  {
    title: "Logistics & Delivery",
    description:
      "Real-time systems that track shipments and coordinate deliveries. Designed for high reliability during peak loads with automatic recovery from failures.",
  },
  {
    title: "Finance & Investment Research",
    description:
      "AI-powered tools that analyze SEC filings and generate accurate, consistent summaries. Built with safeguards against AI errors and full source citation.",
  },
];

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <h1 className="heading-display max-w-4xl text-zinc-900 dark:text-zinc-50">
          I build reliable backend systems for healthcare, logistics, and
          finance
        </h1>
        <p className="text-lead mt-6 max-w-2xl">
          I specialize in systems where correctness matters more than speed.
          Idempotent pipelines, auditable workflows, and automation that fails gracefully.
        </p>
        <p className="mt-4 max-w-2xl text-zinc-500 dark:text-zinc-400">
          I&apos;ve also built internal dashboards and workflow UIs in React and Angular to support these systems.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/systems">
              View Systems I&apos;ve Built
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/about">About Me</Link>
          </Button>
        </div>
      </section>

      {/* How I Ship Systems */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
          How I Ship Systems
        </h2>
        <p className="text-lead mt-2 max-w-2xl">
          End-to-end ownership, from architecture to operations.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Backend Architecture</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">API design, data modeling, secure integrations</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Async Processing</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Task queues, scheduled jobs, automatic retries</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Internal Tools & Dashboards</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Admin panels for operations and monitoring</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Third-Party Integrations</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">QuickBooks, SMS APIs, payment systems</p>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="section-alt border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
            Domains I&apos;ve Worked In
          </h2>
          <p className="text-lead mt-4 max-w-2xl">
            Real-world projects with real challenges, not just demo apps.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => (
              <div key={domain.title} className="domain-card">
                <h3 className="text-zinc-900 dark:text-zinc-50">
                  {domain.title}
                </h3>
                <p>{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Systems Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
              Featured Systems
            </h2>
            <p className="text-lead mt-2">
              Production systems solving real problems.
            </p>
          </div>
          <Link
            href="/systems"
            className="hidden items-center gap-1 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 sm:inline-flex"
          >
            View all systems
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {featuredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                frontmatter={project.frontmatter}
              />
            ))}
          </div>
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">
            Systems documentation coming soon...
          </p>
        )}
        <div className="mt-8 sm:hidden">
          <Link
            href="/systems"
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            View all systems
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
