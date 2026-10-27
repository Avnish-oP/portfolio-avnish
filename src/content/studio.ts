export const site = {
  name: "Avnish Gupta",
  url: "https://www.avnishgupta.dev",
  email: "kavnish1245@gmail.com",
  updated: "2026-10-27",
};
export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  problem: string;
  deliverables: string[];
  technologies: string[];
  scope: string;
  questions: { question: string; answer: string }[];
};
export const services: Service[] = [
  {
    slug: "backend-development",
    number: "01",
    title: "Backend development & integrations",
    short: "The systems behind your business.",
    description:
      "APIs, payments and connected tools. Give your application a dependable foundation and your data a clear path between systems.",
    problem:
      "Your frontend needs a backend, your tools do not talk to each other, or important work still depends on copying data between applications. I can build the missing layer and connect it to the systems you already use.",
    deliverables: [
      "APIs and database design",
      "Authentication and role-based access",
      "Payment and third-party integrations",
      "Background jobs and webhook handling",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "Redis"],
    scope:
      "A defined API or integration scope, documented interfaces, tests for critical paths and a deployment handover. Provider fees and access to third-party systems are agreed before development.",
    questions: [
      {
        question: "Can you work with an existing frontend?",
        answer:
          "Yes. We start with its data and authentication requirements, agree the API contract, and integrate against your existing application.",
      },
      {
        question: "What happens when an integration fails?",
        answer:
          "We define failure handling up front, including retries, duplicate events and the information your team needs to investigate problems.",
      },
    ],
  },
  {
    slug: "ai-workflow-automation",
    number: "02",
    title: "AI features & workflow automation",
    short: "Less repetitive work. More useful AI.",
    description:
      "Turn documents, enquiries and disconnected steps into useful workflows—with clear rules and people in control.",
    problem:
      "Your team spends time reading documents, sorting enquiries or preparing the same responses. I help identify a bounded workflow where AI can assist, then connect it to the application and review process around it.",
    deliverables: [
      "Structured document extraction",
      "Enquiry classification and routing",
      "Knowledge assistants with source references",
      "AI-assisted drafts and approval workflows",
    ],
    technologies: ["Python", "FastAPI", "LLM APIs", "RAG"],
    scope:
      "One defined workflow with sample inputs, evaluation cases, explicit failure states and human review where needed. Model usage and other provider costs are separate from development.",
    questions: [
      {
        question: "Does every workflow need AI?",
        answer:
          "No. Rules and conventional software are often the better fit for calculations, validation and predictable decisions. AI is used where interpretation adds value.",
      },
      {
        question: "Can a person review the output?",
        answer:
          "Yes. Drafts, low-confidence extractions and important actions can be routed for review before they affect customers or business records.",
      },
    ],
  },
  {
    slug: "full-stack-development",
    number: "03",
    title: "Full-stack business applications",
    short: "From spreadsheet to working software.",
    description:
      "Customer portals, internal dashboards and focused products, built around the way your business actually works.",
    problem:
      "A spreadsheet has become a shared database, customers cannot see the status of their requests, or you need a focused first version of a product. I turn the core workflow into an application with a usable interface and the backend it needs.",
    deliverables: [
      "Customer and staff portals",
      "Admin dashboards and inventory tools",
      "Booking and request management",
      "Focused MVPs and responsive interfaces",
    ],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    scope:
      "A prioritised set of user journeys, agreed permissions, a responsive interface, backend integration and deployment documentation. Additional features go through an explicit scope change.",
    questions: [
      {
        question: "Can we start with a smaller version?",
        answer:
          "Yes. Discovery identifies the smallest useful set of workflows. Later improvements can be planned after people have used the first release.",
      },
      {
        question: "Who owns the code?",
        answer:
          "Code access, ownership, third-party licences and handover responsibilities are written into the project agreement before work begins.",
      },
    ],
  },
  {
    slug: "application-improvement",
    number: "04",
    title: "Application improvement & launch support",
    short: "Get the next release over the line.",
    description:
      "Assess a prototype, untangle a bug, improve performance or prepare an existing application for deployment.",
    problem:
      "You have an application, but something is getting in the way of the next release. I review the relevant code and environment, identify the constraints, and propose a bounded set of changes.",
    deliverables: [
      "Prototype and codebase assessment",
      "Targeted bug fixes",
      "Performance investigation and improvements",
      "Deployment, monitoring and handover",
    ],
    technologies: ["Next.js", "Node.js", "Docker", "AWS"],
    scope:
      "Start with an assessment of the relevant area. Implementation follows an agreed issue list and acceptance criteria. Timelines depend on access, code quality and third-party dependencies.",
    questions: [
      {
        question: "Can you take over someone else’s application?",
        answer:
          "Yes, subject to an initial review. Repository access, environment details and a clear description of the problem help establish what is feasible.",
      },
      {
        question: "Do you offer maintenance?",
        answer:
          "Maintenance can be added with named systems, agreed hours, a response window and a change allowance. New features, emergency coverage and provider costs are scoped separately.",
      },
    ],
  },
];
export type Project = {
  slug: string;
  title: string;
  category: "Client work" | "Hackathon" | "Independent";
  status: "published" | "draft";
  summary: string;
  image?: string;
  imageAlt?: string;
  need: string;
  built: string;
  role: string;
  capabilities: string[];
  evidence: { label: string; url: string }[];
  related: string[];
  updated: string;
  note?: string;
};
export const projects: Project[] = [
  {
    slug: "prime-industries",
    title: "Prime Industries",
    category: "Client work",
    status: "published",
    summary:
      "A manufacturing business, made easier to explore online. Product categories, company information and a clear route to an enquiry.",
    image: "/images/prime-industries.png",
    imageAlt:
      "Prime Industries manufacturing website with product categories and company information",
    need: "Present the manufacturer’s products and capabilities to prospective business customers and provide a clear way to make contact.",
    built:
      "A commercial website with category-based product presentation, company information and an enquiry journey. Visitors can explore the range before contacting the business about their requirements.",
    role: "Website development for the client, including the product presentation and enquiry journey.",
    capabilities: [
      "Product catalogue organised by industry",
      "Company and manufacturing capability presentation",
      "Contact information and enquiry interface",
      "Responsive website layout",
    ],
    evidence: [
      {
        label: "Visit the live website",
        url: "https://www.theprimeindustries.co.in/",
      },
    ],
    related: ["full-stack-development", "application-improvement"],
    updated: "2026-10-26",
    note: "This case study describes the delivered website. Enquiry conversion and business impact have not been measured here; the live site may change after handover.",
  },
  {
    slug: "otticamart",
    title: "OttiCamart",
    category: "Client work",
    summary:
      "An e-commerce storefront with the backend workflows that connect products, carts, orders and payments.",
    image: "/images/otticamart1.svg",
    need: "Bring product browsing, purchasing and order administration into a connected e-commerce application.",
    built:
      "A Next.js storefront and Express backend with a PostgreSQL data layer, authentication, payment integration and an administrative interface.",
    role: "Full-stack development across the storefront and supporting backend, as described in the original project portfolio.",
    capabilities: [
      "Product, cart and order workflows",
      "Authentication and role-based administration",
      "Razorpay payment integration",
      "PostgreSQL persistence and Redis caching",
    ],
    evidence: [
      { label: "Open the project website", url: "https://otticamart.com" },
    ],
    related: ["backend-development", "full-stack-development"],
    note: "Project overview retained from the original portfolio. Performance percentages and security improvement claims are omitted; no independent benchmark is presented.",
    status: "published",
    updated: "2026-10-27",
    imageAlt: "OttiCamart project interface",
  },
  {
    slug: "brain-dump",
    title: "Brain Dump",
    category: "Independent",
    summary:
      "A personal knowledge workspace that turns documents and collected sources into a searchable AI conversation.",
    image: "/images/braindump.png",
    need: "Explore how a retrieval-based assistant can work with a personal collection of sources instead of answering without context.",
    built:
      "A knowledge workspace with document ingestion, vector retrieval and an AI conversation interface. The project explores query expansion and relevance checks.",
    role: "Independent full-stack project, connecting the user interface, ingestion workflow and retrieval pipeline.",
    capabilities: [
      "Document and source ingestion",
      "Vector search and retrieval-augmented answers",
      "Per-user knowledge collections",
      "Authentication and email verification",
    ],
    evidence: [
      {
        label: "Explore the project",
        url: "https://braindump.avnishgupta.dev",
      },
      {
        label: "View the source",
        url: "https://github.com/Avnish-oP/brain-dump",
      },
    ],
    related: ["ai-workflow-automation", "full-stack-development"],
    note: "An independent engineering project, not a client deployment. No absolute data-isolation or accuracy guarantee is implied.",
    status: "published",
    updated: "2026-10-27",
    imageAlt: "Brain Dump project interface",
  },
  {
    slug: "sheild-ai",
    title: "SHEILD AI",
    category: "Hackathon",
    summary:
      "A hackathon exploration of privacy-aware AI chat, document retrieval and controlled access.",
    image: "/images/shieldllm.png",
    need: "Explore how sensitive information and document context can be handled around an LLM chat workflow.",
    built:
      "A hackathon prototype combining an AI chat interface, a PII-masking pipeline, document retrieval and role-based access.",
    role: "Engineering contribution to the hackathon project across the application and AI workflow.",
    capabilities: [
      "PII detection and masking workflow",
      "Document retrieval using FAISS",
      "Role-based access with Auth0",
      "Audit trail interface",
    ],
    evidence: [
      {
        label: "Explore the hackathon repository",
        url: "https://github.com/Avnish-oP/hackcbs",
      },
    ],
    related: ["ai-workflow-automation", "backend-development"],
    note: "Hackathon project. It is not presented as a commercial deployment or a guarantee that all sensitive information is detected.",
    status: "published",
    updated: "2026-10-27",
    imageAlt: "SHEILD AI project interface",
  },
  {
    slug: "globetrotter",
    title: "GlobeTrotter",
    category: "Independent",
    summary:
      "A travel planning application that brings itineraries, activities and budgets into one workspace.",
    image: "/images/globetrotter.png",
    need: "Organise a trip without splitting the itinerary, activities and budget across disconnected tools.",
    built:
      "A full-stack trip planner with an itinerary interface, activity search, budget organisation and public trip sharing.",
    role: "Full-stack project development across the planning interface and supporting application workflows.",
    capabilities: [
      "Itinerary creation and reordering",
      "City and activity search",
      "Budget organisation",
      "Public trip sharing",
    ],
    evidence: [
      {
        label: "View the project source",
        url: "https://github.com/Avnish-oP/globe-trotter",
      },
    ],
    related: ["full-stack-development"],
    note: "Independent application project. Described capabilities reflect the original project documentation; no commercial outcomes are claimed.",
    status: "published",
    updated: "2026-10-27",
    imageAlt: "GlobeTrotter project interface",
  },
  {
    slug: "sdi2025",
    title: "Smart Delhi Ideathon",
    category: "Client work",
    summary:
      "An archived event website presenting the ideathon, registration information and event announcements.",
    image: "/images/sdi.png",
    need: "Give participants one place to understand the event and access registration information.",
    built:
      "An event portal with event information, registration journeys and announcements.",
    role: "Website development contribution to the event portal.",
    capabilities: [
      "Event information and announcements",
      "Registration journey",
      "Responsive event pages",
    ],
    evidence: [
      {
        label: "View the archived project source",
        url: "https://github.com/Avnish-oP/sdi2025-website",
      },
    ],
    related: ["full-stack-development", "application-improvement"],
    note: "Archived project: the original event website is no longer active. The screenshot records an earlier version. No live registration or traffic metrics are claimed.",
    status: "published",
    updated: "2026-10-27",
    imageAlt: "Smart Delhi Ideathon project interface",
  },
  {
    slug: "truelens-international",
    title: "Truelens International",
    category: "Client work",
    status: "draft",
    summary: "",
    need: "",
    built: "",
    role: "",
    capabilities: [],
    evidence: [],
    related: [],
    updated: "2026-10-27",
  },
  {
    slug: "indiana",
    title: "Indiana",
    category: "Client work",
    status: "draft",
    summary: "",
    need: "",
    built: "",
    role: "",
    capabilities: [],
    evidence: [],
    related: [],
    updated: "2026-10-27",
  },
];
export const publishedProjects = projects.filter(
  (project) => project.status === "published",
);
export const process = [
  {
    title: "Find the real problem.",
    description:
      "We discuss the workflow, your users and the systems you already have. You bring the context; I help turn it into a practical brief.",
  },
  {
    title: "Agree on the scope.",
    description:
      "Deliverables, milestones, dependencies and acceptance criteria are written down before development begins.",
  },
  {
    title: "Build in milestones.",
    description:
      "Review working progress at agreed checkpoints. Feedback and scope changes have a clear place in the process.",
  },
  {
    title: "Launch. Hand over.",
    description:
      "Deployment, documentation and a walkthrough help you take ownership. Ongoing maintenance can be scoped separately.",
  },
];
