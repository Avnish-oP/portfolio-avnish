import EnquiryForm from "@/components/studio/EnquiryForm";
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  return (
    <>
      <header className="page-header shell">
        <div className="eyebrow">Contact / Start a conversation</div>
        <h1>
          Tell me what you’re building.
          <br />
          <em>Or what’s getting in the way.</em>
        </h1>
        <p>
          You don’t need a perfect brief. A problem, a little context and an
          idea of what success looks like are a good start.
        </p>
      </header>
      <div className="contact-layout shell">
        <aside className="contact-aside">
          <h2>Let’s make it practical.</h2>
          <p>
            I’ll review your enquiry and follow up about the scope, dependencies
            and next steps.
          </p>
          <a className="text-link" href="mailto:kavnish1245@gmail.com">
            kavnish1245@gmail.com ↗
          </a>
          <div className="eyebrow">Based in New Delhi</div>
          <p>
            Working remotely with clients in India and worldwide. India Standard
            Time, UTC+5:30.
          </p>
          <div className="eyebrow">What happens next</div>
          <p>
            We clarify the problem, identify a useful scope and agree how to
            move forward. No budget estimate is required to start the
            conversation.
          </p>
        </aside>
        <EnquiryForm initialService={service} />
      </div>
    </>
  );
}
