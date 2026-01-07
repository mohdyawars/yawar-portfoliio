import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { ProjectFrontmatter } from "@/lib/mdx";

interface ProjectCardProps {
  slug: string;
  frontmatter: ProjectFrontmatter;
}

const domainLabels = {
  healthcare: "Healthcare",
  logistics: "Logistics",
  finance: "Finance",
};

export function ProjectCard({ slug, frontmatter }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {domainLabels[frontmatter.domain] || frontmatter.domain}
        </div>
        <CardTitle className="text-lg group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
          {frontmatter.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm">
          {frontmatter.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        {frontmatter.constraint && (
          <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="font-medium">Key constraint:</span>{" "}
            {frontmatter.constraint}
          </p>
        )}
        <div className="flex flex-wrap gap-1.5">
          {frontmatter.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="mono rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-3">
        <Link
          href={`/systems/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
        >
          Read system design
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
