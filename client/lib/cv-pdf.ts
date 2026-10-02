const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN_LEFT = 48;
const MARGIN_RIGHT = 547;
const CONTENT_WIDTH = MARGIN_RIGHT - MARGIN_LEFT;

type TextOptions = {
  size?: number;
  bold?: boolean;
  color?: string;
  indent?: number;
  leading?: number;
  gapAfter?: number;
};

function toAscii(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/•/g, "-")
    .replace(/[^\x20-\x7E]/g, "");
}

function escapePdfText(value: string) {
  return toAscii(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapText(value: string, size: number, indent: number) {
  const maxCharacters = Math.max(28, Math.floor((CONTENT_WIDTH - indent) / (size * 0.52)));
  const words = toAscii(value).split(/\s+/);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxCharacters && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }

  if (line) lines.push(line);
  return lines;
}

function buildPages() {
  const pages: string[] = [];
  let commands: string[] = [];
  let y = 790;

  const addText = (value: string, options: TextOptions = {}) => {
    const size = options.size ?? 9.3;
    const indent = options.indent ?? 0;
    const leading = options.leading ?? size * 1.4;
    const lines = wrapText(value, size, indent);

    commands.push(`${options.color ?? "0.16 0.20 0.27"} rg`);
    for (const line of lines) {
      commands.push(
        `BT /${options.bold ? "F2" : "F1"} ${size} Tf ${MARGIN_LEFT + indent} ${y.toFixed(2)} Td (${escapePdfText(line)}) Tj ET`,
      );
      y -= leading;
    }
    y -= options.gapAfter ?? 0;
  };

  const addRule = () => {
    commands.push(`0.78 0.84 0.90 RG 0.7 w ${MARGIN_LEFT} ${y.toFixed(2)} m ${MARGIN_RIGHT} ${y.toFixed(2)} l S`);
    y -= 15;
  };

  const addSection = (title: string) => {
    y -= 3;
    addText(title.toUpperCase(), {
      size: 11,
      bold: true,
      color: "0.10 0.32 0.55",
      leading: 14,
      gapAfter: 5,
    });
  };

  const addRole = (company: string, title: string, dates: string) => {
    addText(`${company} | ${title}`, {
      size: 11,
      bold: true,
      color: "0.10 0.16 0.24",
      leading: 14,
    });
    addText(dates, {
      size: 8.8,
      bold: true,
      color: "0.25 0.43 0.62",
      leading: 11,
      gapAfter: 3,
    });
  };

  const addBullet = (text: string, size = 8.9) => {
    addText(`- ${text}`, {
      size,
      color: "0.24 0.28 0.34",
      indent: 12,
      leading: 11.7,
    });
  };

  const addProject = (title: string, summary: string, bullets: string[]) => {
    addText(title, {
      size: 9.8,
      bold: true,
      color: "0.16 0.24 0.34",
      indent: 5,
      leading: 12,
      gapAfter: 2,
    });
    addText(summary, {
      size: 9.1,
      color: "0.24 0.28 0.34",
      indent: 5,
      leading: 12,
    });
    bullets.forEach((bullet) => addBullet(bullet));
    y -= 6;
  };

  const startPage = () => {
    commands = [`0.10 0.32 0.55 rg 0 ${PAGE_HEIGHT - 6} ${PAGE_WIDTH} 6 re f`];
    y = 790;
  };

  const finishPage = (pageNumber: number) => {
    commands.push(`0.78 0.84 0.90 RG 0.6 w ${MARGIN_LEFT} 38 m ${MARGIN_RIGHT} 38 l S`);
    commands.push("0.40 0.46 0.54 rg BT /F1 8 Tf 48 24 Td (Baraa Diyab - Curriculum Vitae) Tj ET");
    commands.push(`0.40 0.46 0.54 rg BT /F1 8 Tf 530 24 Td (${pageNumber}) Tj ET`);
    pages.push(commands.join("\n"));
  };

  startPage();
  addText("BARAA DIYAB", { size: 27, bold: true, color: "0.08 0.17 0.29", leading: 32 });
  addText("Product Owner | Digital Delivery", {
    size: 14,
    bold: true,
    color: "0.10 0.39 0.68",
    leading: 20,
    gapAfter: 3,
  });
  addText("+974 7154 6084  |  Doha, Qatar  |  Baraa98diab@gmail.com", {
    size: 9.3,
    color: "0.30 0.35 0.42",
    leading: 13,
  });
  addText("Turkish nationality  |  Arabic: Native  |  English: Professional  |  Turkish: B2", {
    size: 9.1,
    color: "0.30 0.35 0.42",
    leading: 13,
    gapAfter: 6,
  });
  addRule();
  addSection("Professional Summary");
  addText(
    "Product Owner with 3+ years delivering digital solutions across SaaS, e-commerce, CCaaS, and government digital platforms. Experienced leading end-to-end product delivery from MVP definition to release planning, translating complex stakeholder requirements into structured backlogs and scalable solutions. Currently leading product ownership for Qatar's Ministry of Sports and Youth (MSY) digital platform consisting of a mobile application and three web portals for operational roles.",
    { size: 9.4, color: "0.18 0.22 0.28", leading: 13, gapAfter: 8 },
  );
  addSection("Work Experience");
  addRole("Bornan Sports Technology", "Digital Product Owner", "Dec 2025 - Present");
  addProject(
    "Ministry of Sports and Youth (MSY) - HAYYOH Loyalty Platform",
    "Leading product ownership for a digital platform initiative consisting of four integrated applications.",
    [
      "Manage a backlog of 120+ stories, coordinating a six-person distributed team across three time zones.",
      "Defined the product MVP and release roadmap, aligning stakeholders on phased delivery.",
      "Designed initial wireframes and application layouts; translate stakeholder requirements into user stories and sprint deliverables.",
      "Oversee planning, sprint execution, delivery milestones, Agile ceremonies, and executive progress reporting.",
    ],
  );
  addProject(
    "Asian Games Aichi-Nagoya 2026",
    "Managed OTT live-streaming and VOD operations from asset creation through live broadcast and post-event delivery.",
    [
      "Created stream assets, thumbnails, and metadata; started and stopped feeds and monitored broadcasts.",
      "Published VOD, completed quality checks and trimming, and managed metadata for in-house and external footage.",
      "Ran broadcast readiness checks across ViewLift and Airtable; managed accounts and OCA geoblocking settings.",
      "Joined daily Organizing Committee briefings, handled journalist questions, and aligned team responses.",
    ],
  );
  finishPage(1);

  startPage();
  addSection("Work Experience - Continued");
  addRole("Odea Integrations", "Product Owner / Project Manager", "Jun 2024 - Dec 2025");
  addText(
    "Led product delivery for CCaaS solutions including Agent360 omnichannel platform, Konvrsa AI virtual agent, and Amazon Connect integrations.",
    { size: 9.2, leading: 12.5, gapAfter: 3 },
  );
  [
    "Managed 120+ story backlog and coordinated a six-person distributed team across three time zones.",
    "Delivered three major releases with a 95% on-time rate using a weighted prioritization framework.",
    "Partnered with five enterprise clients to translate requirements into Amazon Connect integrations.",
    "Reduced critical P0/P1 bug backlog 40% (47 to 28 issues) through improved triage; maintained 85% sprint goal completion.",
    "Implemented Jira workflows, sprint reports, and burndown tracking to increase transparency and predictability.",
  ].forEach((bullet) => addBullet(bullet));
  y -= 9;

  addRole("AI Crafts", "Product Owner / Scrum Master", "Jan 2024 - Jul 2024");
  addText(
    "Led Tukan Store, a deal-discovery platform aggregating offers from Turkish retail websites with direct links to merchant sites.",
    { size: 9.2, leading: 12.5, gapAfter: 3 },
  );
  [
    "Owned product roadmap and backlog for web and mobile platforms; managed 10 Scrum sprint cycles.",
    "Shipped personalized recommendations based on user follows, browsing behavior, and category preferences.",
    "Improved discovery, search, and filtering; built a Python scraper to aggregate offers from 50+ retail partner websites.",
    "Platform reached 1,000+ users before operations paused due to funding constraints.",
  ].forEach((bullet) => addBullet(bullet));
  y -= 9;

  addRole("NBS Venture", "Scrum Master", "Dec 2022 - Jan 2024");
  addText(
    "Led Agile delivery for client projects including an e-commerce app, a delivery platform, and production support for a psychology booking platform.",
    { size: 9.2, leading: 12.5, gapAfter: 3 },
  );
  [
    "Managed project execution in Azure DevOps and coordinated cross-functional teams of 8-12 across three engagements using ScrumBan.",
    "Resolved 50+ P0-P3 production issues within two months using Kanban flow.",
    "Improved sprint velocity 28% through backlog refinement and dependency removal.",
    "Reduced mid-sprint requirement changes 60% via stakeholder alignment workshops.",
  ].forEach((bullet) => addBullet(bullet));
  finishPage(2);

  startPage();
  addSection("Work Experience - Continued");
  addRole("Stampry", "Founder", "Aug 2022 - Dec 2022");
  addText("Launched MENA's first print-on-demand marketplace connecting designers with print suppliers.", {
    size: 9.2,
    leading: 12.5,
    gapAfter: 3,
  });
  [
    "Managed full product lifecycle from concept validation to launch, including integrations with four print partners.",
    "Conducted research with 50+ potential users, generated 100+ pre-launch signups, and validated the business model with $1.2K in pre-orders.",
    "Paused operations due to funding constraints; gained experience in marketplace dynamics, supplier management, and early-stage product validation.",
  ].forEach((bullet) => addBullet(bullet));

  y -= 6;
  addSection("Education");
  addText("Altinbas University - BS in Computer Engineering", { size: 10, bold: true, leading: 13 });
  addText("2017 - 2023", { size: 9, color: "0.30 0.35 0.42", leading: 12, gapAfter: 6 });

  addSection("Skills");
  addText(
    "Product: Roadmapping, User Stories, Backlog Prioritization, Sprint Planning, A/B Testing, Customer Research, Stakeholder Management.",
    { size: 9, leading: 12.5, gapAfter: 3 },
  );
  addText(
    "Technical: SQL (queries, joins, aggregations), Google Analytics 4, Data Analysis, API Specifications, Python.",
    { size: 9, leading: 12.5, gapAfter: 3 },
  );
  addText("Tools: Jira, Azure DevOps, Notion, Slack, Figma, Miro, Mixpanel.", {
    size: 9,
    leading: 12.5,
    gapAfter: 6,
  });

  addSection("Certifications");
  [
    "AI Product Leadership - Reforge",
    "Product Experimentation Micro-Certification - Product School",
    "Product Analytics Micro-Certification - Product School",
    "Product Discovery Micro-Certification - Product School",
    "Product Discovery Badge - Pendo",
    "AI for Product Management - Google Cloud / Pendo",
    "Professional Scrum Master I - Scrum.org",
    "Managing Machine Learning Projects - Duke University / Coursera",
    "JavaScript Algorithms and Data Structures - freeCodeCamp",
    "Python - Udemy",
  ].forEach((certification) => addBullet(certification, 8.7));
  finishPage(3);

  return pages;
}

function createPdf() {
  const pages = buildPages();
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pages.map((_, index) => `${5 + index * 2} 0 R`).join(" ")}] /Count ${pages.length} >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
  ];

  pages.forEach((content, index) => {
    const pageObject = 5 + index * 2;
    const streamObject = pageObject + 1;
    objects.push(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${streamObject} 0 R >>`,
    );
    objects.push(`<< /Length ${new TextEncoder().encode(content).length} >>\nstream\n${content}\nendstream`);
  });

  let pdf = "%PDF-1.4\n%CVPDF\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(new TextEncoder().encode(pdf).length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const crossReferenceOffset = new TextEncoder().encode(pdf).length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let index = 1; index < offsets.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${crossReferenceOffset}\n%%EOF\n`;

  return new Blob([pdf], { type: "application/pdf" });
}

export function downloadCv() {
  const url = URL.createObjectURL(createPdf());
  const link = document.createElement("a");
  link.href = url;
  link.download = "Baraa-Diyab-CV.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
