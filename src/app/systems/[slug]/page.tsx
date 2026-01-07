import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getProjectBySlug, getAllProjects } from "@/lib/mdx";
import { generatePageMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return generatePageMetadata({
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    path: `/systems/${slug}`,
  });
}

const domainLabels = {
  healthcare: "Healthcare",
  logistics: "Logistics",
  finance: "Finance",
};

export default async function SystemPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Link
        href="/systems"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Systems
      </Link>

      <article>
        <header className="mb-10">
          <div className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {domainLabels[project.frontmatter.domain] ||
              project.frontmatter.domain}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {project.frontmatter.title}
          </h1>
          <p className="text-lead mt-4">{project.frontmatter.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.frontmatter.tech.map((tech) => (
              <span
                key={tech}
                className="mono rounded bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {project.frontmatter.github && (
              <Button variant="outline" asChild size="sm">
                <a
                  href={project.frontmatter.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
            {project.frontmatter.demo && (
              <Button asChild size="sm">
                <a
                  href={project.frontmatter.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </header>

        <div className="prose max-w-none">
          <MDXRemote source={project.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </article>
    </div>
  );
}
