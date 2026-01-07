import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsByDomain, getAllProjects } from "@/lib/mdx";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Systems",
  description:
    "Production backend systems for healthcare, logistics, and finance. Real constraints, real solutions.",
  path: "/systems",
});

export default function SystemsPage() {
  const healthcareProjects = getProjectsByDomain("healthcare");
  const logisticsProjects = getProjectsByDomain("logistics");
  const financeProjects = getProjectsByDomain("finance");

  const hasProjects =
    healthcareProjects.length > 0 ||
    logisticsProjects.length > 0 ||
    financeProjects.length > 0;

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="heading-display text-zinc-900 dark:text-zinc-50">
          Systems
        </h1>
        <p className="text-lead mt-4 max-w-2xl">
          Production systems I&apos;ve designed and built. Grouped by domain to
          show depth of experience in each area.
        </p>
      </section>

      {!hasProjects && (
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <p className="text-zinc-600 dark:text-zinc-400">
            Systems documentation coming soon...
          </p>
        </section>
      )}

      {healthcareProjects.length > 0 && (
        <section className="section-alt border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
              Healthcare
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              HIPAA-compliant systems where data integrity and auditability are
              non-negotiable.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {healthcareProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  frontmatter={project.frontmatter}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {logisticsProjects.length > 0 && (
        <section className="border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
              Logistics & Dispatch
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Real-time systems handling race conditions and state consistency.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {logisticsProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  frontmatter={project.frontmatter}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {financeProjects.length > 0 && (
        <section className="section-alt border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
              Data Pipelines & Finance
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              ETL systems, reconciliation pipelines, and financial data
              processing.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {financeProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  frontmatter={project.frontmatter}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
