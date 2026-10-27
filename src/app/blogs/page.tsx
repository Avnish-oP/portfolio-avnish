import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blogs";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Insights on Software & AI",
  "Notes on backend development, AI systems and building useful software, by independent developer Avnish Gupta.",
  "/blogs",
);
export default function BlogsPage() {
  const posts = getAllBlogPosts();
  return (
    <>
      <header className="page-header shell">
        <div className="eyebrow">Insights / Notes from the workbench</div>
        <h1>
          Thinking through
          <br />
          <em>how things work.</em>
        </h1>
        <p>
          Notes on software, AI and the engineering decisions behind useful
          applications.
        </p>
      </header>
      <section className="article-list shell" aria-label="Articles">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="article-row"
          >
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
                timeZone: "UTC",
              })}
            </time>
            <div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </section>
    </>
  );
}
