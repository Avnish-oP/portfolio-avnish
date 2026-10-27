# Avnish Gupta — independent developer portfolio

Next.js App Router, React, TypeScript and Tailwind. Marketing pages and case studies render on the server; navigation, the enquiry form, the interactive hero, project filters and progressive scroll effects use client JavaScript. All main content remains server-rendered.

## Local development

Use Node 24 (see `.nvmrc`), then:

```sh
npm ci
npm run dev
```

Checks: `npm test`, `npm run lint`, `npx tsc --noEmit`, `npm run build`. With a production preview running, run `node tests/seo-smoke.mjs` for read-only checks of published pages, metadata, draft 404s and redirects.

## Content

`src/content/studio.ts` is the source for services, identity, process and case studies. Only projects with `status: 'published'` receive public pages or sitemap entries. The original collection is restored with conservative descriptions: Prime Industries, OttiCamart, Brain Dump, SHEILD AI, GlobeTrotter and archived SDI2025. Truelens International and Indiana remain drafts until assets and delivery details are available. For publication, supply exact role, delivered scope, permission to show imagery, evidence links, and genuine update dates. Describe SDI2025 as archived and SHEILD AI as a hackathon project. Do not reinstate unverified percentage claims.

Original legacy descriptions, including unverified metrics, are preserved in `src/content/project-drafts.json` for editorial review and are never imported by public pages.

Existing Markdown articles and URLs are retained under `/blogs`. Add articles to `src/content/blogs` with title, date, description and tags. New slugs must contain lowercase letters, numbers and hyphens. Update content dates only for substantive changes.

## Contact setup — required before launch

Copy `.env.example` to `.env.local` and configure the same variables in the production host. Never commit real secrets.

- **Revoke the previously committed Gmail app password in the mail account.** Removing it from source does not revoke it, and old git history still contains it. Create a replacement using the account's security settings.
- Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` and `CONTACT_TO_EMAIL`. Use 465 for implicit TLS or 587 for STARTTLS. The SMTP user is the authenticated sender; the visitor email is only `replyTo`.
- Set `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` and a random `CONTACT_RATE_LIMIT_SECRET` for atomic shared limits. No in-memory production fallback is used.
- The limiter permits 3 attempts/email/hour, 5 attempts/trusted Vercel IP/hour, and 50 total/hour. Keys contain HMAC hashes and expire after one hour. Outside Vercel, the shared email and global limits remain active; arbitrary forwarded IP headers are not trusted.
- Missing configuration, limiter failure or SMTP failure returns 503 and a direct email fallback. Inputs are preserved on failure. No email is sent during automated tests.
- After configuration, manually submit one controlled enquiry and confirm actual inbox receipt. Provider acceptance alone is not an inbox delivery guarantee.

The endpoint accepts JSON fields `name`, `email`, `message` (required), and `company`, `service`, `existingSystem`, `deadline`, `currency`, `budget`, `website` (honeypot). Responses contain `success` and `message`; error codes include 400, 403, 413, 415, 429 and 503. No attachments or database of enquiries are created.

## SEO and rollout

Canonical host: `https://www.avnishgupta.dev`. Non-www production requests redirect permanently while localhost and preview hosts remain usable. Production host settings must agree with this redirect. Protect staging previews from indexing using the host's deployment protection/noindex settings.

Every public page has canonical metadata; services and projects have breadcrumbs. Person, WebSite, Service and BlogPosting JSON-LD reflect visible content. `/sitemap.xml` includes published pages and articles; drafts and API endpoints are excluded. `/opengraph-image` generates the shared social image.

Before deployment, verify real case-study evidence, SMTP receipt, mobile navigation, keyboard access, 404s, PDF download and production redirects. Submit the sitemap in Search Console and check URL Inspection. Review indexing and mail failures in week one; review non-brand queries, service-page traffic and qualified enquiries at 30/60/90 days. No rankings or traffic increases are guaranteed.

Vercel Analytics tracks only page visits and non-sensitive funnel events. No form values are sent to analytics. The privacy page describes enquiry delivery and rate-limit storage.

## Follow-on work

1. Build a separate B2B Enquiry & Quotation Assistant using synthetic enquiries, a controlled catalogue, deterministic prices, human approval and a labelled extraction evaluation. Add its portfolio section only when a working preview and walkthrough exist.
2. Build a customer operations portal demonstrating permissions, duplicate-request handling and job retries.
3. Publish practical articles about hiring a backend developer, quotation workflows, customer portals and deployment handover. Keep original evidence and experience central.

Maintenance is an individually scoped add-on; no public price, guaranteed response time or unlimited support is implied.

## Visual interactions

The hero is an explicitly labelled local illustration with keyboard-accessible tabs and a sample workflow animation; it never calls an AI provider. Services have custom SVG artwork. Project cards have browser-frame previews and category filters. Scroll-entry animations use the Web Animations API with IntersectionObserver; content stays visible without JavaScript. Reduced-motion preferences disable decorative motion. No heavy animation or 3D library is required.
