import { MetadataRoute } from "next";
import { getAllProjects, getAllBlogPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yawar-portfoliio.vercel.app";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/notes`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/systems`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const projectPages = getAllProjects().map((project) => ({
    url: `${baseUrl}/systems/${project.slug}`,
    lastModified: new Date("2026-03-17"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const notePages = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/notes/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...notePages];
}
