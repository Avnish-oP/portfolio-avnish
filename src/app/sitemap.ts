import type { MetadataRoute } from "next";
import { site, services, publishedProjects } from "@/content/studio";
import { getAllBlogPosts } from "@/lib/blogs";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...[
      "",
      "/services",
      "/projects",
      "/about",
      "/contact",
      "/privacy",
      "/resume",
      "/blogs",
    ].map((path) => ({
      url: `${site.url}${path}`,
      lastModified: site.updated,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: site.updated,
    })),
    ...publishedProjects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified: project.updated,
    })),
    ...getAllBlogPosts().map((post) => ({
      url: `${site.url}/blogs/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
