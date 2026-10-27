import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Privacy",
  "How project enquiry information and website analytics are handled on Avnish Gupta’s portfolio.",
  "/privacy",
);
export default function Privacy() {
  return (
    <>
      <header className="page-header shell">
        <div className="eyebrow">Privacy / Last updated 26 October 2026</div>
        <h1>
          Your enquiry.
          <br />
          <em>Handled with care.</em>
        </h1>
      </header>
      <article className="reading shell">
        <h2>Information you share</h2>
        <p>
          The enquiry form asks for your name, email and project description.
          You may also provide a company or website, service interest, existing
          system, deadline and budget. This information is sent to my mailbox so
          I can respond and discuss your project. Please do not include
          passwords, credentials or sensitive personal information.
        </p>
        <h2>Services involved</h2>
        <p>
          The website host processes requests to serve this site. Enquiries are
          delivered through an email provider and retained in my mailbox for
          correspondence. Shared rate limiting uses hashed email addresses and,
          where the host supplies a trusted address, hashed IP addresses in
          Redis. Rate-limit records expire after one hour.
        </p>
        <h2>Website analytics</h2>
        <p>
          This site uses Vercel Analytics to understand visits and events such
          as an enquiry being started or successfully submitted. Form text,
          names, email addresses and budget information are not included in
          custom analytics events.
        </p>
        <h2>Questions or deletion requests</h2>
        <p>
          Enquiry information is used for project correspondence, not to
          subscribe you to a mailing list. To ask about your information or
          request deletion of enquiry correspondence, email{" "}
          <a href="mailto:kavnish1245@gmail.com">kavnish1245@gmail.com</a>.
        </p>
      </article>
    </>
  );
}
