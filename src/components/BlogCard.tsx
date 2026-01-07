import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import type { BlogFrontmatter } from "@/lib/mdx";

interface BlogCardProps {
  slug: string;
  frontmatter: BlogFrontmatter;
}

export function BlogCard({ slug, frontmatter }: BlogCardProps) {
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="group transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="mb-2 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <Calendar className="h-4 w-4" />
          <time dateTime={frontmatter.date}>{formattedDate}</time>
        </div>
        <CardTitle className="text-lg group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
          {frontmatter.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {frontmatter.excerpt}
        </CardDescription>
      </CardHeader>
      {frontmatter.tags && frontmatter.tags.length > 0 && (
        <div className="px-6 pb-2">
          <div className="flex flex-wrap gap-1.5">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      <CardFooter>
        <Link
          href={`/notes/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
        >
          Read more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
