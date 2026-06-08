import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
  coverImage?: string;
};

export function getBlogSlugs() {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }
  return fs.readdirSync(blogsDirectory);
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString(),
    description: data.description || "",
    tags: data.tags || [],
    coverImage: data.coverImage || "",
    content,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .filter((slug) => slug.endsWith(".md"))
    .map((slug) => getBlogPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
