// Single source of truth for site content — edit here to update everywhere.

export const site = {
  name: "Andrew Bieh-Mintah",
  role: "Finance Student & Wealth Management Intern",
  tagline: "Military Discipline. Finance Execution.",
  location: "Houston, TX",
  email: "andrewbiehmintahtx@gmail.com",
  phone: "(570) 974-3489",
  resumeUrl: "/resume.pdf",
  portfolioUrl: "/portfolio",
  linkedinUrl:
    "https://linkedin.com/in/andrewbieh-mintah?skipRedirect=true&miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAE5hf4MBAf6MbmZXJyFV-IRicd5KwfP1YCw",

  // Contact page — swap the heading and footer line without touching the component.
  contactTitle: "Say hello.",
  contactIntro:
    "Currently open to wealth management, financial advisory, and high-touch B2B sales roles. Always up for a good conversation about capital, people, or how the two compound. The inbox is always on.",
  footerNote: "Always following up.",
};

export const backstory = [
  "Andrew started his career in uniform — a U.S. Army Reserves Team Leader since 2020, leading squads under pressure, training 40+ soldiers on classified SCIF protocols, and stewarding $100K+ in equipment with zero loss. The discipline stuck: show up early, own the standard, and let the numbers tell the truth.",
  "At the University of Houston he picked finance for the rigor and added the Program for Excellence in Selling because the same instincts — listen first, build trust, follow through — carried over directly. Today he's a Wealth Management Intern at Luminate, a Student Sales Representative through PES, and the elected Chapter President of Tau Kappa Epsilon, leading 100+ members and a $100K+ budget.",
  "Houston-based and graduating Fall 2026, Andrew is aiming for the intersection of capital and people — wealth management, financial advisory, and high-touch B2B sales roles where military discipline and finance execution actually compound.",
];

export const stats: Array<{ value: string; label: string }> = [
  { value: "5+", label: "Years U.S. Army Reserves" },
  { value: "100+", label: "Members led at TKE" },
  { value: "$90K+", label: "Raised for St. Jude" },
  { value: "40+", label: "Soldiers trained" },
];

export const skills = {
  finance: [
    "Wealth management",
    "Financial planning",
    "Asset allocation",
    "Tax-efficient planning",
    "Investment fundamentals",
    "Excel / Google Sheets",
  ],
  sales: [
    "Consultative selling (SPIN)",
    "Cold outreach & prospecting",
    "Discovery & qualification",
    "Salesforce CRM",
    "Pipeline management",
    "Live sales training",
  ],
  other: [
    "Risk management & compliance",
    "Strategic planning",
    "Budget management",
    "Public speaking",
    "Executive leadership",
    "Team training",
  ],
};

export const skillsMarquee = [
  "Wealth Management",
  "Consultative Selling",
  "Salesforce",
  "Cold Outreach",
  "Risk Management",
  "Financial Planning",
  "SPIN Selling",
  "Asset Allocation",
  "Pipeline Management",
  "Strategic Leadership",
  "Compliance",
  "Live Sales Training",
];

export const education: Array<{
  school: string;
  credential: string;
  period: string;
  highlights: string[];
}> = [
  {
    school: "University of Houston",
    credential:
      "Bachelor of Business Administration in Finance — Program for Excellence in Selling",
    period: "Expected Graduation Fall 2026",
    highlights: [
      "Coursework: Live Sales Training, Financial Markets, Investments, Economics, Business Analytics",
      "Chapter President, Tau Kappa Epsilon (Fall 2025 — Fall 2026)",
      "Risk Management Officer, Tau Kappa Epsilon (Spring 2024 — Fall 2025)",
      "Charles R. Walgreen Jr. TKE Leadership Academy (Summer 2026)",
    ],
  },
];

export const pullQuote =
  "I don't sell products. I help people see a better version of their future — then I show them the math.";

// High-level "what I bring" statements for the landing page.
// Keep to 4 — each should be something he could defend in an interview.
export const competencies: Array<{
  title: string;
  description: string;
}> = [
  {
    title: "Client Relationship Management",
    description:
      "Using CRM systems like Salesforce to track interactions, manage pipelines, and organize data — sharper sales efficiency and durable client retention.",
  },
  {
    title: "Financial Services",
    description:
      "Investment planning, wealth management, and financial advisory work — helping individuals and businesses actually hit their goals, not just talk about them.",
  },
  {
    title: "Risk Management & Operations",
    description:
      "Identifying, assessing, and mitigating risk while keeping day-to-day operations efficient and compliant. Drawn from military protocols and chapter-level execution.",
  },
  {
    title: "Strategic Communication",
    description:
      "Using messaging deliberately — to influence decisions, build relationships, and align stakeholders around a desired outcome.",
  },
];

// Big animated numbers on the landing page — keep to 4 for balance.
// `to` is the end value of the count-up; `prefix`/`suffix` wrap it.
export const quickNumbers: Array<{
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
}> = [
  { prefix: "$", to: 90, suffix: "K+", label: "Raised for St. Jude" },
  { to: 100, suffix: "+", label: "Members led at TKE" },
  { to: 40, suffix: "+", label: "Soldiers trained" },
  { to: 5, suffix: "+", label: "Years military service" },
];

// Featured experiences / wins for the landing page.
export const highlights: Array<{
  period: string;
  org: string;
  title: string;
  description: string;
  metric: string;
}> = [
  {
    period: "Jan 2026 — Present",
    org: "Luminate Wealth Management",
    title: "Wealth Management Intern",
    description:
      "Supporting advisors with client service, account maintenance, and CRM operations. Sitting in on portfolio discussions and learning asset allocation and tax-efficient planning inside a working wealth management office.",
    metric: "Active internship",
  },
  {
    period: "Fall 2025 — Fall 2026",
    org: "Tau Kappa Epsilon",
    title: "Chapter President",
    description:
      "Elected to lead a 100+ member chapter — overseeing a $100K+ budget, recruitment, philanthropy, and operations. Raised $90K+ for St. Jude during the term and represents the chapter to university and national leadership.",
    metric: "$90K+ for St. Jude",
  },
  {
    period: "Jan 2024 — Present",
    org: "Program for Excellence in Selling",
    title: "Student Sales Representative",
    description:
      "Live sales training using SPIN-based consultative methods. Cold outreach, discovery conversations, and Salesforce-tracked pipeline. Helped deliver the 2026 PES Open through sponsor acquisition and event coordination.",
    metric: "2+ years live training",
  },
  {
    period: "Aug 2020 — Present",
    org: "U.S. Army Reserves",
    title: "Team Leader, Corporal",
    description:
      "Leading squads under high-pressure conditions. Trained 40+ soldiers on classified SCIF access protocols, stewarded $100K+ in military equipment with zero loss, and ranked Top 25% in the 2000th MP Command Best Warrior Competition.",
    metric: "Top 25% Best Warrior",
  },
];

// ─── Images ────────────────────────────────────────────────────────────────
// Drop real files into /public/images/ and set the path here. An empty string
// renders a styled placeholder so the site never looks broken.
export const images = {
  portrait: "/images/portrait.jpeg",  // big hero headshot
  aboutPortrait: "/images/about.jpg",
  contactHero: "",       // /public/images/contact.jpg  — optional bg on /contact
  moments: [             // /public/images/moment-1.jpg … moment-6.jpg
    { src: "", caption: "Campus — the sales lab" },
    { src: "", caption: "Pitch night" },
    { src: "", caption: "Team offsite" },
    { src: "", caption: "First internship" },
    { src: "", caption: "Networking event" },
    { src: "", caption: "Coffee, always" },
  ],
  // Home page teaser tiles — one image per page link.
  teasers: {
    about: "/images/teaser-about.png",
    skills: "/images/teaser-skills.png",
    education: "/images/teaser-education.png",
    contact: "/images/teaser-contact.png",
  },
};

// Portfolio pages — drop portfolio-1.png … portfolio-N.png into /public.
export const portfolio = [
  "/portfolio-1.png",
  "/portfolio-2.png",
  "/portfolio-3.png",
  "/portfolio-4.png",
  "/portfolio-5.png",
];
