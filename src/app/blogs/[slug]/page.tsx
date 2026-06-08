import React from "react";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blogs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getBlogPostBySlug(params.slug);
    return {
      title: `${post.title} | Avnish Kumar`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        url: `https://avnishgupta.dev/blogs/${post.slug}`,
        authors: ["Avnish Kumar"],
        publishedTime: post.date,
        tags: post.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
      },
    };
  } catch (error) {
    return {
      title: "Post Not Found",
    };
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = getBlogPostBySlug(params.slug);
  } catch (error) {
    notFound();
  }

  // JSON-LD for AI and Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.coverImage || "https://avnishgupta.dev/images/dp.png",
    datePublished: post.date,
    dateModified: post.date,
    author: [
      {
        "@type": "Person",
        name: "Avnish Kumar",
        url: "https://avnishgupta.dev",
      },
    ],
    description: post.description,
    keywords: post.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://avnishgupta.dev/blogs/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors mb-10">
            <FaArrowLeft /> Back to blogs
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-zinc-400">
              <time dateTime={post.date} suppressHydrationWarning>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>•</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gray-100 dark:bg-zinc-800 px-3 py-1 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert prose-indigo max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
  );
}
