import React from "react";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Avnish Kumar",
  description: "Read my latest articles on AI, System Engineering, Next.js, and more.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            Blog & Insights
          </h1>
          <p className="text-lg text-gray-600 dark:text-zinc-400">
            Thoughts, tutorials, and insights on building scalable AI platforms, modern web architecture, and full-stack engineering.
          </p>
        </header>

        <div className="space-y-12">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="group relative flex flex-col items-start justify-between border-b border-gray-200 dark:border-zinc-800 pb-12 cursor-pointer">
              <article className="w-full">
                <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500 dark:text-zinc-500" suppressHydrationWarning>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="relative z-10 rounded-full bg-gray-100 dark:bg-zinc-800 px-3 py-1.5 font-medium text-gray-600 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-zinc-400">
                  {post.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Avnish Kumar
                  </p>
                  <p className="text-gray-600 dark:text-zinc-500">AI Software Engineer</p>
                </div>
              </div>
              </article>
            </Link>
          ))}

          {posts.length === 0 && (
            <p className="text-gray-500 dark:text-zinc-400">No blog posts found. Check back later!</p>
          )}
        </div>
      </div>
    </div>
  );
}
