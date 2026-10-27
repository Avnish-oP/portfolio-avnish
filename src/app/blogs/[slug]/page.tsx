import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blogs";
import { JsonLd } from "@/components/studio/Shared";
import { pageMetadata, breadcrumbs } from "@/lib/seo";
import { site } from "@/content/studio";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getAllBlogPosts().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const post = getBlogPostBySlug(slug);
    const metadata = pageMetadata(
      post.title,
      post.description,
      `/blogs/${slug}`,
    );
    return {
      ...metadata,
      openGraph: {
        ...metadata.openGraph,
        type: "article" as const,
        publishedTime: post.date,
        authors: [site.name],
      },
    };
  } catch {
    return {};
  }
}
export default async function Article({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = getBlogPostBySlug(slug);
  } catch {
    notFound();
  }
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          image: `${site.url}/opengraph-image`,
          author: {
            "@type": "Person",
            "@id": `${site.url}/#person`,
            name: site.name,
            url: `${site.url}/about`,
          },
          mainEntityOfPage: `${site.url}/blogs/${post.slug}`,
        }}
      />
      <JsonLd
        data={breadcrumbs([
          { name: "Insights", path: "/blogs" },
          { name: post.title, path: `/blogs/${slug}` },
        ])}
      />
      <article className="shell">
        <header className="page-header">
          <Link className="text-link mb-8" href="/blogs">
            ← All insights
          </Link>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="article-meta">
            <span>{site.name}</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              })}
            </time>
          </div>
        </header>
        <div className="article-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{ h1: ({ children }) => <h2>{children}</h2> }}
          >
            {post.content}
          </ReactMarkdown>
          <div className="notice">
            <p>Working on an application or AI workflow?</p>
            <Link href="/services/ai-workflow-automation">
              Explore AI integration and workflow services ↗
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
