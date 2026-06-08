import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://avnishgupta.dev';

  // Core static pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Dynamic blog post pages
  const posts = getAllBlogPosts();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...corePages, ...blogUrls];
}
