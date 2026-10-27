import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-header shell detail-space">
      <div className="eyebrow">404 / A wrong turn</div>
      <h1>This page isn’t here.</h1>
      <p>The address may have changed, or this work isn’t published yet.</p>
      <Link href="/" className="button">
        Back to the homepage ↗
      </Link>
    </section>
  );
}
