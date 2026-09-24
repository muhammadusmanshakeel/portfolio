export type SkillLevel = "professional" | "working" | "basic";

export type SkillItem = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  id: string;
  title: string;
  summary: string;
  items: SkillItem[];
};

export const skillLevelLabels: Record<SkillLevel, string> = {
  professional: "Professional",
  working: "Working knowledge",
  basic: "Basic",
};

export const skillsContent = {
  eyebrow: "03 — Skills",
  title: "Tech stack",
  description:
    "Grouped by how work flows — not a wall of badges, and no artificial percentages. Levels reflect real use.",
  groups: [
    {
      id: "fundamentals",
      title: "Web fundamentals",
      summary: "Markup, styling, and browser-ready structure used every day.",
      items: [
        { name: "HTML5", level: "professional" },
        { name: "CSS3", level: "professional" },
        { name: "Responsive web design", level: "professional" },
        { name: "Semantic HTML", level: "professional" },
        { name: "Browser fundamentals", level: "working" },
      ],
    },
    {
      id: "javascript",
      title: "JavaScript & frontend",
      summary: "Interactive interfaces and modern component-based UI.",
      items: [
        { name: "JavaScript", level: "professional" },
        { name: "jQuery", level: "professional" },
        { name: "React", level: "working" },
        { name: "Next.js", level: "working" },
        { name: "DOM manipulation", level: "professional" },
        { name: "AJAX", level: "working" },
      ],
    },
    {
      id: "backend",
      title: "Backend & database",
      summary: "Server-side logic and data-driven application work.",
      items: [
        { name: "PHP", level: "professional" },
        { name: "MySQL", level: "professional" },
        { name: "Database-driven applications", level: "professional" },
        { name: "CRUD systems", level: "professional" },
        { name: "APIs", level: "working" },
      ],
    },
    {
      id: "design",
      title: "Design",
      summary: "Visual tools and design-to-development fluency.",
      items: [
        { name: "Adobe Photoshop", level: "working" },
        { name: "Adobe Illustrator", level: "working" },
        { name: "Adobe XD", level: "working" },
        { name: "UI design awareness", level: "working" },
        { name: "Design-to-development", level: "professional" },
        { name: "Responsive interface design", level: "professional" },
      ],
    },
    {
      id: "seo-digital",
      title: "SEO & digital",
      summary: "Discoverability, performance awareness, and paid search familiarity.",
      items: [
        { name: "SEO fundamentals", level: "working" },
        { name: "Google Ads", level: "working" },
        { name: "Website performance awareness", level: "working" },
        { name: "Conversion-focused interfaces", level: "working" },
      ],
    },
    {
      id: "other",
      title: "Other",
      summary: "Supporting skills used honestly at their current level.",
      items: [
        { name: "Python", level: "basic" },
      ],
    },
  ] satisfies SkillGroup[],
} as const;
