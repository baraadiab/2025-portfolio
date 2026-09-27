import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Languages,
  Target,
  Wrench,
} from "lucide-react";

const experience = [
  {
    company: "Bornan Sports Technology",
    role: "Digital Product Owner",
    dates: "Dec 2025 – Present",
    projects: [
      {
        name: "Ministry of Sports and Youth (MSY) — HAYYOH Loyalty Platform",
        summary:
          "Leading product ownership for a Ministry of Sports and Youth digital initiative consisting of four integrated applications.",
        highlights: [
          "Manage a backlog of 120+ stories while coordinating a six-person distributed team across three time zones.",
          "Defined the product MVP and release roadmap, aligning stakeholders on phased delivery.",
          "Designed initial wireframes and application layouts, and translate stakeholder needs into user stories and sprint deliverables.",
          "Oversee sprint execution, delivery milestones, Agile ceremonies, and executive progress reporting.",
        ],
      },
      {
        name: "Asian Games Aichi-Nagoya 2026",
        summary:
          "Managed OTT live-streaming and video-on-demand operations across the asset lifecycle, from setup and broadcast monitoring through post-event delivery.",
        highlights: [
          "Created stream assets, thumbnails, and metadata; started and stopped feeds and monitored broadcasts.",
          "Published and quality-checked VOD, including trimming and metadata for in-house and external footage.",
          "Ran readiness checks in ViewLift and Airtable, managed user accounts, and coordinated geoblocking to OCA requirements.",
          "Joined daily Organizing Committee briefings and coordinated responses to journalist questions.",
        ],
      },
    ],
  },
  {
    company: "Odea Integrations",
    role: "Product Owner / Project Manager",
    dates: "Jun 2024 – Dec 2025",
    summary:
      "Led product delivery for enterprise CCaaS solutions, including the Agent360 omnichannel platform, Konvrsa AI virtual agent, and Amazon Connect integrations.",
    highlights: [
      "Managed a 120+ story backlog and coordinated a six-person distributed team across three time zones.",
      "Delivered three major releases with a 95% on-time rate using a weighted prioritization framework.",
      "Partnered with five enterprise clients to translate requirements into Amazon Connect integrations.",
      "Reduced critical P0/P1 bug backlog by 40% (47 to 28 issues) through improved triage; maintained 85% sprint goal completion.",
      "Introduced Jira workflows, sprint reports, and burndown tracking to improve delivery transparency.",
    ],
  },
  {
    company: "AI Crafts",
    role: "Product Owner / Scrum Master",
    dates: "Jan 2024 – Jul 2024",
    summary:
      "Led Tukan Store, a deal-discovery platform aggregating offers from Turkish retail websites, with direct links to merchants.",
    highlights: [
      "Owned the roadmap and backlog for web and mobile products; led 10 Scrum sprint cycles.",
      "Shipped personalized offer recommendations based on followed stores, browsing behavior, and category preferences.",
      "Improved offer discovery, search, and filtering, and built a Python scraper for 50+ retail partner websites.",
      "The platform reached 1,000+ users before operations paused due to funding constraints.",
    ],
  },
  {
    company: "NBS Venture",
    role: "Scrum Master",
    dates: "Dec 2022 – Jan 2024",
    summary:
      "Led Agile delivery across client work including an e-commerce app, a delivery platform, and production support for a psychology booking platform.",
    highlights: [
      "Coordinated cross-functional teams of 8–12 across three engagements using ScrumBan and Azure DevOps.",
      "Resolved 50+ P0–P3 production issues in two months using Kanban flow.",
      "Improved sprint velocity by 28% through backlog refinement and dependency removal; reduced mid-sprint requirement changes by 60% through stakeholder workshops.",
    ],
  },
  {
    company: "Stampry",
    role: "Founder",
    dates: "Aug 2022 – Dec 2022",
    summary:
      "Launched a print-on-demand marketplace connecting designers with print suppliers in the MENA region.",
    highlights: [
      "Led product lifecycle from concept validation to launch and integrated four print partners.",
      "Conducted research with 50+ potential users, generated 100+ pre-launch signups, and validated the model with $1.2K in pre-orders.",
      "Paused operations due to funding constraints; gained experience in marketplace dynamics, supplier management, and early-stage product validation.",
    ],
  },
];

const skills = [
  {
    category: "Product",
    items: [
      "Roadmapping",
      "User Stories",
      "Backlog Prioritization",
      "Sprint Planning",
      "A/B Testing",
      "Customer Research",
      "Stakeholder Management",
    ],
  },
  {
    category: "Technical",
    items: [
      "SQL (queries, joins, aggregations)",
      "Google Analytics 4",
      "Data Analysis",
      "API Specifications",
      "Python",
      "CCaaS & Amazon Connect",
    ],
  },
];

const tools = ["Jira", "Azure DevOps", "Notion", "Slack", "Figma", "Miro", "Mixpanel"];

const certifications = [
  "AI Product Leadership — Reforge",
  "Product Experimentation Micro-Certification — Product School",
  "Product Analytics Micro-Certification — Product School",
  "Product Discovery Micro-Certification — Product School",
  "Product Discovery Badge — Pendo",
  "AI for Product Management — Google Cloud / Pendo",
  "Professional Scrum Master I — Scrum.org",
  "Managing Machine Learning Projects — Duke University / Coursera",
  "JavaScript Algorithms and Data Structures — freeCodeCamp",
  "Python — Udemy",
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="relative px-6 py-20">
        <div className="container mx-auto max-w-6xl space-y-10">
          <div className="space-y-4">
            <p className="font-semibold uppercase tracking-[0.18em] text-primary">
              Product Owner | Digital Delivery
            </p>
            <h1 className="text-5xl font-bold text-foreground md:text-6xl">
              About <span className="text-primary">Me</span>
            </h1>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
          </div>

          <div className="max-w-4xl rounded-2xl border border-blue-100 bg-white/80 p-8 shadow-sm md:p-10">
            <p className="text-lg leading-relaxed text-foreground">
              Product Owner with 3+ years delivering digital solutions across
              SaaS, e-commerce, CCaaS, and government platforms. I lead
              end-to-end product delivery from MVP definition to release
              planning, translating complex stakeholder needs into structured
              backlogs and scalable solutions. I currently lead product
              ownership for Qatar’s Ministry of Sports and Youth HAYYOH digital
              platform, consisting of a mobile application and three web
              portals for operational roles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
                Doha, Qatar
              </span>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
                Arabic — Native
              </span>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
                English — Professional
              </span>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
                Turkish — B2
              </span>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
                Turkish Nationality
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12" aria-labelledby="experience-heading">
        <div className="container mx-auto max-w-6xl space-y-10">
          <SectionHeading
            icon={BriefcaseBusiness}
            title="Work Experience"
            id="experience-heading"
          />
          <div className="space-y-8">
            {experience.map((job) => (
              <article
                key={job.company}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="flex flex-col justify-between gap-2 border-b border-blue-100 pb-5 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {job.company}
                    </h3>
                    <p className="mt-1 font-semibold text-primary">{job.role}</p>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {job.dates}
                  </p>
                </div>
                {job.summary && (
                  <p className="mt-5 leading-relaxed text-foreground">
                    {job.summary}
                  </p>
                )}
                {job.projects?.map((project) => (
                  <div key={project.name} className="mt-6">
                    <h4 className="text-lg font-bold text-foreground">
                      {project.name}
                    </h4>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {job.highlights && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16" aria-labelledby="skills-heading">
        <div className="container mx-auto max-w-6xl space-y-10">
          <SectionHeading icon={Target} title="Skills" id="skills-heading" />
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm"
              >
                <h3 className="mb-5 text-2xl font-bold text-foreground">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12" aria-labelledby="education-heading">
        <div className="container mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <InfoCard icon={GraduationCap} title="Education" id="education-heading">
            <h3 className="text-xl font-bold text-foreground">Altinbas University</h3>
            <p className="mt-2 text-muted-foreground">BS in Computer Engineering</p>
            <p className="mt-1 text-sm text-muted-foreground">2017 – 2023</p>
          </InfoCard>
          <InfoCard icon={Languages} title="Languages" id="languages-heading">
            <ul className="space-y-3 text-foreground">
              <li><span className="font-semibold">Arabic:</span> Native</li>
              <li><span className="font-semibold">English:</span> Professional</li>
              <li><span className="font-semibold">Turkish:</span> B2</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      <section className="px-6 py-16" aria-labelledby="tools-heading">
        <div className="container mx-auto max-w-6xl space-y-8">
          <SectionHeading icon={Wrench} title="Tools" id="tools-heading" />
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-xl border border-blue-100 bg-white px-5 py-3 font-semibold text-foreground shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 pb-20" aria-labelledby="certifications-heading">
        <div className="container mx-auto max-w-6xl space-y-8">
          <SectionHeading
            icon={Award}
            title="Certifications"
            id="certifications-heading"
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {certifications.map((certification) => (
              <li
                key={certification}
                className="rounded-xl border border-blue-100 bg-white p-5 font-medium text-foreground shadow-sm"
              >
                {certification}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  icon: Icon,
  title,
  id,
}: {
  icon: typeof Target;
  title: string;
  id: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-xl bg-primary/10 p-3 text-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h2 id={id} className="text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  id,
  children,
}: {
  icon: typeof GraduationCap;
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="rounded-2xl border border-blue-100 bg-white p-7 shadow-sm"
    >
      <div className="mb-5 flex items-center gap-3">
        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
        <h2 id={id} className="text-2xl font-bold text-foreground">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
