/**
 * Single source of truth for all page content.
 * Edit copy, links, projects, and tags here — no need to touch components.
 */

export const site = {
  name: "Paul Bernard",
  initials: "PB",
  role: "Full-Stack Engineer • DevOps Engineer • Product Builder",
  title: "Paul Bernard | Full-Stack Engineer & Product Builder",
  description:
    "Portfolio of Paul Bernard — full-stack engineer, DevOps engineer, and product builder based in Trinidad & Tobago. I turn operational problems into reliable software, connected workflows, and scalable platforms.",
  location: "Trinidad & Tobago",
  email: "paulbernard73@hotmail.com",
  availability: "Available for product and engineering conversations",
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "✦ Full-Stack • DevOps • Product",
  headlineLead: "Building practical software for",
  headlineEmphasis: "real business workflows.",
  copy: "I design, build, and deploy software platforms that connect operations, cloud infrastructure, automation, data, AI, devices, and clean user experiences.",
  primaryCta: { label: "View my work", href: "#work" },
  secondaryCta: { label: "Start a conversation", href: "#contact" },
  stats: [
    {
      title: "Full-stack",
      detail: "Backend, frontend, APIs, infrastructure, and product delivery.",
    },
    {
      title: "Operations-first",
      detail: "Systems shaped around how businesses actually run.",
    },
    {
      title: "Caribbean-built",
      detail: "Technology products designed for local and global use.",
    },
  ],
} as const;

export const about = {
  label: "About",
  heading: "Builder of business-critical systems.",
  body: [
    "I'm a full-stack engineer and product builder based in Trinidad & Tobago. My work focuses on turning operational problems into practical software systems — from ERP workflows and RFID platforms to mobile app analytics, retail technology, cloud infrastructure, and AI-powered customer communication tools.",
    "I care about building software that is not just technically sound, but useful, reliable, easy to adopt, and aligned with how businesses actually operate.",
  ],
} as const;

/** Logo keys map to imports in src/components/Work.astro */
export type LogoKey = "konvelo" | "vulkan" | "concorde" | "appdoctor";

export const featuredWork = {
  label: "Featured Work",
  heading: "Products, ventures, and partner projects.",
  lead: "A mix of personally built products, company ventures, and partner work across AI communication, app intelligence, diagnostics, and practical business platforms.",
  flagship: [
    {
      kicker: "Founder-built product",
      title: "Konvelo",
      logo: "konvelo" as LogoKey,
      body: "An AI customer conversation management platform personally built to help businesses manage WhatsApp, Instagram, web chat, live chat, AI agents, customer context, team inboxes, automation, and business messaging workflows in one streamlined product.",
      tags: [
        "AI Agents",
        "WhatsApp",
        "Instagram",
        "Web Chat",
        "Team Inbox",
        "Customer Context",
      ],
    },
    {
      kicker: "Venture",
      title: "Vulkan Technologies",
      logo: "vulkan" as LogoKey,
      body: "A software and technology venture focused on building practical digital products, business systems, automation tools, cloud-based platforms, and AI-enabled workflows for Caribbean businesses and beyond. Konvelo is featured as a developed product under Vulkan Technologies.",
      tags: [
        "Software Products",
        "Automation",
        "Cloud Platforms",
        "Business Systems",
      ],
    },
  ],
  partner: [
    {
      logo: "concorde" as LogoKey,
      fill: true,
      title: "ConcordeApp",
      body: "Partner work on a mobile application ecosystem involving app performance visibility, analytics, Firebase and Google Play integrations, onboarding flows, multi-tenant architecture, and dashboards for helping app owners understand the health and usage of their applications.",
    },
    {
      logo: "appdoctor" as LogoKey,
      fill: true,
      title: "AppDoctor",
      body: "Partner work on an application monitoring and diagnostics product focused on helping teams track mobile app health, performance, crash data, user-impacting issues, and operational signals from connected app platforms.",
    },
  ],
} as const;

export const experience = {
  label: "Enterprise & Operations Experience",
  heading:
    "High-level systems work across retail, operations, and internal platforms.",
  lead: "Generalized internal work that still shows the scope: ERP workflows, RFID, loyalty, fuel and retail technology, reporting, integrations, and operational platforms.",
  items: [
    {
      tag: "ERP",
      title: "ERP & Business Process Platforms",
      body: "Designed and implemented ERP workflows, custom modules, dashboards, approval flows, reporting tools, and operational systems for procurement, inventory, sales, finance-adjacent processes, and internal business operations.",
    },
    {
      tag: "RFID",
      title: "RFID & Connected Operations",
      body: "Built RFID-enabled systems for tracking, validation, automation, and operational visibility — tag scanning, device communication, event processing, filtering, backend integrations, and real-time reporting.",
    },
    {
      tag: "★",
      title: "Loyalty & Customer Engagement",
      body: "Contributed to loyalty and customer engagement technology that connects retail activity, customer data, rewards, digital workflows, and reporting into usable business-facing platforms.",
    },
    {
      tag: "⛽",
      title: "Fuel & Retail Technology",
      body: "Worked on a modern fuel and retail technology ecosystem — station operations, inventory visibility, POS-adjacent workflows, reporting, reconciliation, portals, and digital service layers for retail energy businesses.",
    },
  ],
} as const;

export const capabilities = {
  label: "What I Build",
  heading: "From infrastructure to product experience.",
  lead: "My strength is connecting the technical and operational layers: database design, backend services, frontend interfaces, integrations, cloud deployment, user workflows, and product strategy.",
  items: [
    {
      icon: "⚙",
      title: "Engineering",
      body: "Backend services, frontend interfaces, APIs, integrations, authentication, databases, and production workflows.",
    },
    {
      icon: "☁",
      title: "Infrastructure & DevOps",
      body: "VPS and cloud deployments, Docker, CI/CD, PostgreSQL, reverse proxies, environments, and production support.",
    },
    {
      icon: "✦",
      title: "Product Strategy",
      body: "Requirements, implementation planning, UI concepts, executive-ready documentation, and business process design.",
    },
  ],
} as const;

export const stack = {
  label: "Technical Stack",
  heading: "Tools I use to ship.",
  lead: "A practical technology mix for web apps, cloud deployments, integrations, automation, connected-device systems, and AI-enabled products.",
  groups: [
    {
      name: "Backend",
      items: ["Java 21", "Spring Boot", "Python", "Flask", "Odoo"],
    },
    {
      name: "Frontend",
      items: ["Angular", "TypeScript", "Astro", "Tailwind CSS"],
    },
    {
      name: "Data",
      items: ["PostgreSQL", "SQLite", "WebSockets"],
    },
    {
      name: "Cloud & DevOps",
      items: ["Azure", "AWS", "Docker", "CI/CD", "Keycloak"],
    },
    {
      name: "Systems & AI",
      items: ["RFID / IoT", "AI Integrations", "System Architecture"],
    },
  ],
} as const;

export const timeline = {
  label: "Timeline",
  heading: "How the work connects.",
  lead: "A simple view of the portfolio story: practical engineering, enterprise operations, partner products, and personally built ventures.",
  items: [
    {
      type: "Enterprise",
      title: "ERP, RFID, loyalty, and retail operations technology",
      body: "Generalized experience building and supporting systems that connect business processes, data, devices, workflows, and reporting.",
    },
    {
      type: "Partner",
      title: "ConcordeApp and AppDoctor",
      body: "Partner work around mobile app intelligence, app health visibility, diagnostics, Firebase / Google Play integrations, and multi-tenant dashboards.",
    },
    {
      type: "Founder",
      title: "Vulkan Technologies and Konvelo",
      body: "Building a software venture and personally developing Konvelo as an AI-powered customer conversation management platform.",
    },
  ],
} as const;

export const contact = {
  label: "Let's build",
  heading: "Need a practical system that actually fits the business?",
  body: "I help turn operational problems into reliable software, connected workflows, and scalable platforms.",
  cta: { label: "Contact me", href: `mailto:${site.email}` },
} as const;
