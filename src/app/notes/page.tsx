import { BlogCard } from "@/components/BlogCard";
import { getAllBlogPosts } from "@/lib/mdx";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Notes",
  description:
    "Engineering notes on backend development, automation, system design, and lessons learned.",
  path: "/notes",
});

export default function NotesPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12">
        <h1 className="heading-display text-zinc-900 dark:text-zinc-50">
          Engineering Notes
        </h1>
        <p className="text-lead mt-4 max-w-2xl">
          Technical writing on backend systems, automation patterns, and lessons
          from production incidents.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              frontmatter={post.frontmatter}
            />
          ))}
        </div>
      ) : (
        <p className="text-zinc-600 dark:text-zinc-400">
          Engineering notes coming soon...
        </p>
      )}
    </div>
  );
}
