import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");
const blogDirectory = path.join(process.cwd(), "src/content/notes");

export interface ProjectFrontmatter {
  title: string;
  description: string;
  tech: string[];
  domain: "healthcare" | "logistics" | "finance";
  constraint?: string;
  featured?: boolean;
  order?: number;
  github?: string;
  demo?: string;
  image?: string;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

function ensureDirectory(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function getAllProjects(): Project[] {
  ensureDirectory(projectsDirectory);

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data as ProjectFrontmatter,
        content,
      };
    });

  return projects.sort((a, b) => {
    const orderA = a.frontmatter.order ?? 99;
    const orderB = b.frontmatter.order ?? 99;
    return orderA - orderB;
  });
}

export function getProjectBySlug(slug: string): Project | null {
  ensureDirectory(projectsDirectory);

  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}

export function getFeaturedProjects(): Project[] {
  const projects = getAllProjects();
  return projects.filter((p) => p.frontmatter.featured).slice(0, 3);
}

export function getProjectsByDomain(
  domain: "healthcare" | "logistics" | "finance"
): Project[] {
  const projects = getAllProjects();
  return projects.filter((p) => p.frontmatter.domain === domain);
}

export function getAllBlogPosts(): BlogPost[] {
  ensureDirectory(blogDirectory);

  const fileNames = fs.readdirSync(blogDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data as BlogFrontmatter,
        content,
      };
    });

  return posts.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  ensureDirectory(blogDirectory);

  const fullPath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
  };
}
