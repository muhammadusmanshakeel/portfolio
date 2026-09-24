export type JourneyStep = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  detail: string;
};

export const journeyContent = {
  eyebrow: "02 — Journey",
  title: "Professional journey",
  description:
    "A clear path from foundational studies through design, web development, and modern frontend practice.",
  steps: [
    {
      id: "foundation",
      number: "01",
      title: "Foundation",
      subtitle: "Intermediate",
      detail:
        "Completed Intermediate studies and prepared to enter professional technology work.",
    },
    {
      id: "design",
      number: "02",
      title: "Design",
      subtitle: "Graphic design at Emenac.Inc",
      detail:
        "Learned Adobe Photoshop, Adobe Illustrator, and Adobe XD — building visual hierarchy, composition, and interface awareness.",
    },
    {
      id: "web",
      number: "03",
      title: "Web development",
      subtitle: "HTML · CSS · JavaScript · jQuery",
      detail:
        "Transitioned into building websites for the browser — structure, styling, interaction, and responsive layouts.",
    },
    {
      id: "fullstack",
      number: "04",
      title: "Full-stack development",
      subtitle: "PHP · MySQL",
      detail:
        "Expanded into server-side logic and database-driven applications — CRUD workflows and data-backed sites.",
    },
    {
      id: "modern",
      number: "05",
      title: "Modern frontend",
      subtitle: "React · Next.js",
      detail:
        "Adopted component-based UI development and modern React/Next.js workflows for contemporary interfaces.",
    },
    {
      id: "growth",
      number: "06",
      title: "Digital growth",
      subtitle: "Google Ads",
      detail:
        "Gained practical familiarity with Google Ads and how web interfaces connect to discovery and conversion goals.",
    },
    {
      id: "practice",
      number: "07",
      title: "Professional practice",
      subtitle: "Approximately 4 years",
      detail:
        "Ongoing professional web development — building, maintaining, and improving real websites and applications.",
    },
  ] satisfies JourneyStep[],
} as const;
