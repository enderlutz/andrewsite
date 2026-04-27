// Single source of truth for site content — edit here to update everywhere.

export const site = {
  name: "Andrew Bieh-Mintah",
  role: "Student Sales Professional",
  tagline: "Finance brain. Sales instinct.",
  location: "United States",
  email: "tba@example.com",
  phone: "(570) 974-3489",
  resumeUrl: "/resume.pdf",
  portfolioUrl: "/portfolio",
  linkedinUrl:
    "https://linkedin.com/in/andrewbieh-mintah?skipRedirect=true&miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAE5hf4MBAf6MbmZXJyFV-IRicd5KwfP1YCw",

  // Contact page — swap the heading and footer line without touching the component.
  contactTitle: "Say hello.",
  contactIntro:
    "Currently open to finance internships, sales roles, and any excuse to nerd out about good businesses. The inbox is always on.",
  footerNote: "Always following up.",
};

export const backstory = [
  "Before college, Andrew spent his first adult years in the U.S. Army. The structure stuck: show up early, own your mistakes, and do the hard thing before anyone asks.",
  "Finance was the obvious major when he got out — numbers had always been the part of the world he could read most clearly. Sales was the surprise. An internship his sophomore year showed him the mechanics weren't so different from what he'd already been doing in uniform: listen more than you talk, build trust with people who don't have time to spare, and never confuse activity with progress.",
  "Today he's equal parts spreadsheet and showroom — modeling deal economics by day, sharpening his pitch by night. After graduation he's aiming for the intersection of capital and people: investor relations, high-touch B2B sales, or a growth role at an early-stage fintech that rewards someone equally comfortable with rigor and pressure.",
];

export const stats: Array<{ value: string; label: string }> = [
  { value: "Army", label: "U.S. veteran" },
  { value: "3+", label: "Years in sales roles" },
  { value: "2", label: "Finance internships" },
  { value: "$0→1", label: "Startup GTM experience" },
];

export const skills = {
  finance: [
    "Financial modeling",
    "DCF & comps valuation",
    "Three-statement modeling",
    "Excel / Google Sheets",
    "Bloomberg Terminal",
    "Equity research fundamentals",
  ],
  sales: [
    "Discovery & qualification",
    "Objection handling",
    "Pipeline management (HubSpot)",
    "Cold outreach that converts",
    "Deal negotiation",
    "Account mapping",
  ],
  other: [
    "Public speaking",
    "Stakeholder communication",
    "SQL basics",
    "Notion / Airtable power user",
    "Pitch deck design",
  ],
};

export const skillsMarquee = [
  "Financial Modeling",
  "B2B Sales",
  "DCF Valuation",
  "Pipeline Strategy",
  "Bloomberg",
  "Cold Outreach",
  "Excel",
  "Deal Negotiation",
  "Investor Relations",
  "Growth",
  "Pitch Decks",
  "HubSpot",
];

export const education: Array<{
  school: string;
  credential: string;
  period: string;
  highlights: string[];
}> = [
  {
    school: "Your University",
    credential: "B.S. in Finance, Minor in Sales",
    period: "Expected 2026",
    highlights: [
      "GPA: 3.X / 4.0",
      "Dean's List (multiple semesters)",
      "President, Tau Kappa Epsilon (Spring 2025 — Fall 2026)",
      "Finance & Investment Society",
    ],
  },
  {
    school: "Your High School",
    credential: "High School Diploma",
    period: "Graduated 20XX",
    highlights: ["Honor roll", "Student government", "Varsity athlete"],
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
    title: "Strategic selling",
    description:
      "Discovery, qualification, and close — with a focus on helping buyers see real outcomes, not just features.",
  },
  {
    title: "Financial rigor",
    description:
      "DCF, comps, and three-statement modeling — plus the judgment to tell when the number in the cell is lying.",
  },
  {
    title: "Client communication",
    description:
      "Translating spreadsheet math into language the room actually wants to hear. Equally comfortable in a pitch and in a board review.",
  },
  {
    title: "Pipeline discipline",
    description:
      "Clean CRM hygiene, accurate forecasting, and the habit of following up when other people don't.",
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
  { to: 140, suffix: "%", label: "Of quota as intern" },
  { to: 3, suffix: "+", label: "Years in sales roles" },
  { to: 12, suffix: "+", label: "Deals closed in sim" },
  { to: 2, label: "Finance internships" },
];

// Featured experiences / wins for the landing page. Replace with truth.
export const highlights: Array<{
  period: string;
  org: string;
  title: string;
  description: string;
  metric: string;
}> = [
  {
    period: "Summer 2025",
    org: "State Farm",
    title: "Top Performer, Summer Sales Internship",
    description:
      "Finished the summer at 140% of quota and first among 12 interns on close rate. Built a call-script A/B test that the team kept using after I left.",
    metric: "140% of quota",
  },
  {
    period: "Spring 2025 — Fall 2026",
    org: "Tau Kappa Epsilon",
    title: "Chapter President",
    description:
      "Leading chapter operations across a four-semester term — exec board, recruitment, philanthropy, academic standards, and campus presence.",
    metric: "4-semester term",
  },
  {
    period: "Spring 2025",
    org: "NCSC Regional",
    title: "Top 10 — National Collegiate Sales Competition",
    description:
      "Represented the university in the regional round of the largest collegiate sales competition in North America. Lost the gold on a 3-point rubric margin.",
    metric: "Top 10 finalist",
  },
  {
    period: "Ongoing",
    org: "Finance & Investment Society",
    title: "Consumer Discretionary Analyst",
    description:
      "Lead coverage on a $4B category; presented a long thesis to the club portfolio committee. Pitch got picked up for paper-portfolio deployment.",
    metric: "$4B coverage",
  },
];

// ─── Images ────────────────────────────────────────────────────────────────
// Drop real files into /public/images/ and set the path here. An empty string
// renders a styled placeholder so the site never looks broken.
export const images = {
  portrait: "/images/portrait.png",  // big hero headshot
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
