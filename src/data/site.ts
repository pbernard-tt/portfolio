/**
 * Single source of truth for all page content.
 * Edit copy, links, projects, and tags here instead of changing components.
 */

export const site = {
  name: "Paul Bernard",
  initials: "PB",
  role: "Full-Stack Engineer / DevOps Engineer / Product Builder",
  title: "Paul Bernard | Full-Stack Developer, DevOps Engineer & Product Builder",
  description:
    "Portfolio of Paul Bernard, a full-stack developer, DevOps engineer, and product builder in Trinidad & Tobago building production-ready software systems for real business workflows.",
  location: "Trinidad & Tobago",
  region: "Caribbean / Remote",
  domain: "pbernard.dev",
  email: "paulbernard73@hotmail.com",
  availability: "Open to serious product, platform, and engineering conversations",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Highlights", href: "#case-studies" },
  { label: "Strengths", href: "#strengths" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Full-stack | DevOps | Product Builder",
  headlineLead: "I build production-ready software systems for",
  headlineEmphasis: "real business workflows.",
  copy: "Full-stack engineer, DevOps engineer, and product builder focused on ERP workflows, automation, cloud infrastructure, AI communication tools, retail technology, and business-critical web platforms.",
  intro:
    "I work across the full product lifecycle: architecture, backend systems, frontend applications, deployment pipelines, integrations, and operational support.",
  primaryCta: { label: "View My Work", href: "#work" },
  secondaryCta: { label: "Contact Me", href: "#contact" },
  badges: [
    "Full-Stack Engineering",
    "DevOps & Cloud Deployment",
    "AI + Business Automation",
    "ERP / Retail Systems",
    "Trinidad & Tobago / Caribbean / Remote",
  ],
  stats: [
    {
      title: "Operations-focused",
      detail: "Software shaped around real business processes and support needs.",
    },
    {
      title: "Production-ready",
      detail: "Backend, frontend, data, deployment, and infrastructure ownership.",
    },
    {
      title: "Product-minded",
      detail: "Founder-led product work from architecture through delivery.",
    },
  ],
} as const;

export const about = {
  label: "About",
  heading: "Software for operational teams, not just demos.",
  body: [
    "I'm Paul Bernard, a software engineer and product builder based in Trinidad & Tobago. My work focuses on building software that supports real operational workflows, not just landing pages or prototypes.",
    "I've worked across enterprise systems, ERP-related workflows, retail and fuel technology, RFID-enabled systems, loyalty platforms, cloud deployments, and AI-powered communication tools.",
    "I enjoy working where software meets business operations: internal tools, customer-facing platforms, integrations, automation, infrastructure, and systems that help teams move faster with more clarity.",
  ],
  systemsThinking: {
    title: "How I think about systems",
    flow: [
      "User Experience",
      "API Layer",
      "Database",
      "Background Jobs",
      "Integrations",
      "Reporting / AI / Operations",
    ],
  },
} as const;

/** Logo keys map to imports in src/components/Work.astro */
export type LogoKey = "konvelo" | "vulkan" | "concorde" | "appdoctor";

export const featuredWork = {
  label: "Featured Work",
  heading: "Founder-built products and partner platforms.",
  lead: "Selected work across AI customer communication, software company building, app analytics, Firebase and Google Play integrations, and workflow-driven business platforms.",
  projects: [
    {
      title: "Konvelo",
      type: "Founder-built product / SaaS platform",
      logo: "konvelo" as LogoKey,
      logoFill: false,
      description:
        "Konvelo is an AI-powered customer conversation management platform for businesses. It brings customer conversations, AI assistance, human agent handover, onboarding flows, and business messaging workflows into one focused platform.",
      role: "Founder, product architect, full-stack engineer",
      built: [
        "Multi-tenant SaaS architecture",
        "Customer conversation inbox",
        "WhatsApp Business Platform onboarding flow",
        "Meta embedded signup integration",
        "Webhook ingestion and channel connection logic",
        "AI response assistance and customer context layer",
        "Agent handover between AI and human users",
        "Business onboarding and workspace setup flows",
        "Backend APIs, frontend dashboards, deployment, and infrastructure setup",
      ],
      stack: [
        "Spring Boot",
        "Angular",
        "PostgreSQL",
        "RabbitMQ",
        "Docker",
        "Cloudflare",
        "Meta WhatsApp Business Platform",
        "AI / LLM integrations",
      ],
      status: "Active product under Vulkan Technologies",
      tags: [
        "AI SaaS",
        "WhatsApp Business",
        "Omnichannel",
        "Spring Boot",
        "Angular",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      title: "Vulkan Technologies",
      type: "Technology company / founder brand",
      logo: "vulkan" as LogoKey,
      logoFill: false,
      description:
        "Vulkan Technologies is my founder-led technology company for building useful business software, AI-enabled tools, web platforms, and automation systems. It represents my broader work in product strategy, software architecture, full-stack development, and technology execution for businesses.",
      role: "Founder / software engineer / product builder",
      built: [
        "Company brand and technical direction",
        "Software product strategy",
        "Custom web application planning and development",
        "AI and automation solution planning",
        "Business technology consulting",
        "Product and platform design",
      ],
      stack: [
        "Angular",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
        "Cloud / VPS deployments",
        "AI integrations",
      ],
      status: "Founder-led company",
      tags: [
        "Software Development",
        "AI Consulting",
        "Web Apps",
        "Automation",
        "Product Strategy",
      ],
    },
    {
      title: "ConcordeApp",
      type: "Partner project / application platform",
      logo: "concorde" as LogoKey,
      logoFill: true,
      description:
        "ConcordeApp is a partner project involving application platform development, app analytics, Firebase and Google Play integration, and backend/frontend architecture planning. My work focuses on strengthening the technical architecture, connecting platform data to user-facing dashboards, and helping shape the system into a more scalable multi-tenant product.",
      role: "Technical partner / full-stack engineer / architecture support",
      built: [
        "Reviewed and planned application architecture",
        "Mapped backend-to-frontend integration requirements",
        "Worked through Firebase and Google Play Console integration needs",
        "Evaluated analytics, performance, and Crashlytics data flow",
        "Planned multi-tenant and organization structure improvements",
        "Supported frontend, backend, and mobile-adjacent technical direction",
      ],
      stack: [
        "Angular",
        "Spring Boot",
        "Firebase",
        "Google Play Console APIs",
        "PostgreSQL",
        "REST APIs",
      ],
      status: "Partner project / ongoing technical work",
      tags: [
        "Firebase",
        "Google Play",
        "App Analytics",
        "Spring Boot",
        "Angular",
        "Architecture",
      ],
    },
    {
      title: "AppDoctor",
      type: "Partner project / application monitoring and insights concept",
      logo: "appdoctor" as LogoKey,
      logoFill: true,
      description:
        "AppDoctor is a partner product focused on application health, analytics, crash reporting, and performance insights. My work supports the product architecture, integration planning, backend/frontend mapping, and the technical direction needed to turn app platform data into clear, useful dashboards.",
      role: "Technical partner / product and engineering support",
      built: [
        "Product architecture planning",
        "App analytics and performance dashboard planning",
        "Backend/frontend integration strategy",
        "Firebase and Google Play data integration support",
        "Technical product direction",
      ],
      stack: [
        "Angular",
        "Spring Boot",
        "Firebase",
        "Google Play Console APIs",
        "PostgreSQL",
      ],
      status: "Partner project / product development",
      tags: [
        "App Monitoring",
        "Firebase",
        "Crashlytics",
        "Analytics",
        "Product Engineering",
      ],
    },
  ],
} as const;

export const systemHighlights = {
  label: "Case Studies / System Highlights",
  heading: "Generalized experience with business-critical systems.",
  lead: "High-level examples of systems work across enterprise workflows, retail technology, fuel operations, and deployment support without exposing private implementation details.",
  items: [
    {
      title: "Enterprise ERP & Business Workflow Systems",
      summary:
        "Worked on ERP-related systems and business workflow improvements involving internal operations, approvals, reporting, user portals, and operational visibility.",
      body: "I've worked on enterprise software initiatives involving ERP workflows, internal portals, reporting processes, approvals, and operational systems. My focus is on helping business teams turn manual or fragmented processes into clearer, more reliable software-supported workflows.",
      focus: [
        "ERP workflow support",
        "Business process automation",
        "Internal dashboards and portals",
        "Reporting flows",
        "Role-based user experiences",
        "Deployment and environment considerations",
      ],
      tags: ["ERP", "Business Workflows", "Internal Tools", "Reporting", "Operations"],
    },
    {
      title: "RFID, Loyalty & Retail Technology",
      summary:
        "Experience with retail and fuel-sector technology involving RFID-enabled systems, loyalty platforms, customer/account workflows, and operational integrations.",
      body: "My experience includes systems that connect software with real-world retail operations, including RFID-enabled workflows, loyalty-related platforms, customer/account flows, and integrations that support operational visibility.",
      focus: [
        "RFID-enabled business processes",
        "Loyalty platform workflows",
        "Retail technology integrations",
        "Customer/account data flows",
        "Operational reporting",
        "Reliability and support considerations",
      ],
      tags: ["RFID", "Loyalty", "Retail Tech", "Integrations", "Operations"],
    },
    {
      title: "Fuel Retail & Operational Platform Experience",
      summary:
        "Generalized experience with fuel retail technology, including dispatch, delivery, invoicing, reconciliation, inventory reporting, point-of-sale connectivity, and portal-style concepts.",
      body: "I've contributed to software thinking and implementation around fuel retail operations, including dispatch, delivery, invoicing, reconciliation, inventory reporting, portal experiences, and integration-heavy operational workflows. This work strengthened my ability to build systems that connect real business operations with reliable software.",
      focus: [
        "Dispatch and delivery workflows",
        "Invoice and reconciliation processes",
        "Inventory reporting",
        "Portal-style user experiences",
        "Integration-heavy operational systems",
        "Backend and deployment support",
      ],
      tags: ["Fuel Retail", "Inventory", "Dispatch", "Reporting", "Integrations", "Portals"],
    },
    {
      title: "DevOps, Deployment & Production Support",
      summary:
        "Experience deploying and supporting applications using Docker, VPS/cloud environments, CI/CD pipelines, PostgreSQL, reverse proxies, and production-oriented infrastructure.",
      body: "I work across application delivery and infrastructure, including Docker deployments, CI/CD workflows, PostgreSQL environments, VPS/cloud hosting, reverse proxy configuration, and production support. I care about making applications deployable, maintainable, and reliable beyond the first build.",
      focus: [
        "Docker-based deployments",
        "CI/CD pipelines",
        "VPS and cloud hosting",
        "PostgreSQL environments",
        "Reverse proxy and domain configuration",
        "Environment separation",
        "Monitoring and operational support",
        "Production troubleshooting",
      ],
      tags: ["DevOps", "Docker", "CI/CD", "PostgreSQL", "Cloud", "VPS", "Production Support"],
    },
  ],
} as const;

export const strengths = {
  label: "Engineering Strengths",
  heading: "Where I tend to add the most value.",
  lead: "I work best on systems that need product judgment, backend reliability, clean user workflows, and deployment thinking in the same conversation.",
  items: [
    {
      marker: "API",
      title: "Backend Systems",
      body: "Spring Boot APIs, REST architecture, authentication, multi-tenancy, background processing, integrations, reporting APIs, and business logic for workflow-heavy systems.",
    },
    {
      marker: "UI",
      title: "Frontend Applications",
      body: "Angular applications, dashboards, onboarding flows, admin portals, operational UIs, responsive layouts, and user experiences for business users.",
    },
    {
      marker: "OPS",
      title: "DevOps & Infrastructure",
      body: "Docker, CI/CD, VPS/cloud deployments, PostgreSQL management, reverse proxies, deployment environments, monitoring, and production troubleshooting.",
    },
    {
      marker: "AI",
      title: "AI & Automation",
      body: "AI-assisted workflows, customer communication tools, chatbot/agent concepts, LLM integrations, automation flows, and business process support.",
    },
    {
      marker: "ERP",
      title: "Business Systems",
      body: "ERP workflows, approval flows, retail operations, inventory/reporting systems, RFID-related workflows, and systems that support real-world operations.",
    },
    {
      marker: "MVP",
      title: "Product Thinking",
      body: "Founder-led product development, MVP planning, product positioning, technical architecture, SaaS design, and execution from idea to deployment.",
    },
  ],
} as const;

export const stack = {
  label: "Technical Stack",
  heading: "Grouped by how the work is delivered.",
  lead: "A production-oriented stack for web platforms, backend systems, operational dashboards, cloud deployment, integrations, AI-enabled workflows, and business automation.",
  groups: [
    {
      name: "Languages & Backend",
      items: ["Java", "Spring Boot", "REST APIs", "SQL"],
    },
    {
      name: "Frontend",
      items: ["Angular", "TypeScript", "HTML", "CSS", "Responsive UI development"],
    },
    {
      name: "Databases & Messaging",
      items: ["PostgreSQL", "RabbitMQ", "Redis where applicable"],
    },
    {
      name: "DevOps & Infrastructure",
      items: [
        "Docker",
        "Docker Compose",
        "CI/CD",
        "Azure DevOps",
        "VPS deployments",
        "Linux",
        "Nginx / reverse proxy concepts",
        "Cloudflare",
      ],
    },
    {
      name: "Cloud & Platforms",
      items: [
        "Azure",
        "AWS where applicable",
        "Firebase",
        "Google Play Console APIs",
        "Meta WhatsApp Business Platform",
      ],
    },
    {
      name: "AI & Automation",
      items: [
        "LLM integrations",
        "AI agents",
        "Customer conversation automation",
        "Workflow automation",
      ],
    },
    {
      name: "Business & Enterprise Systems",
      items: [
        "Odoo / ERP workflows",
        "RFID-enabled systems",
        "Loyalty platforms",
        "Inventory / reporting workflows",
        "Operational portals",
      ],
    },
  ],
} as const;

export const roles = {
  label: "Experience",
  heading: "The kinds of roles and work I take on.",
  lead: "A concise view of the professional lanes behind the portfolio: engineering delivery, founder-led products, and collaborative partner projects.",
  items: [
    {
      type: "Engineering",
      title: "DevOps Engineer / Software Engineer",
      body: "Work across software delivery, infrastructure, deployment, application support, and business systems, with exposure to ERP workflows, retail technology, integrations, reporting, and operational platforms.",
    },
    {
      type: "Founder",
      title: "Founder & Product Builder - Vulkan Technologies / Konvelo",
      body: "Building founder-led software products focused on AI customer communication, automation, web applications, and business technology solutions for the Caribbean and beyond.",
    },
    {
      type: "Partner",
      title: "Partner Projects",
      body: "Collaborating on software products such as ConcordeApp and AppDoctor, with focus on architecture, backend/frontend integration, Firebase and Google Play data flows, and product engineering.",
    },
  ],
} as const;

export const contact = {
  label: "Contact",
  heading: "Need a technical partner for a serious business system?",
  body: "I'm open to conversations around custom software, internal platforms, SaaS products, AI-enabled workflows, DevOps support, and product engineering.",
  links: [
    { label: "Email me", href: `mailto:${site.email}`, primary: true },
    // TODO: Add Paul Bernard's public LinkedIn URL when available.
    { label: "LinkedIn", href: null, primary: false },
    // TODO: Add Paul Bernard's public GitHub URL when available.
    { label: "GitHub", href: null, primary: false },
    // TODO: Add a resume/CV file to public/ and link it here when available.
    { label: "Download resume", href: null, primary: false },
  ],
} as const;
