export type GrowthNote = {
  id: string;
  title: string;
  detail: string;
};

export const growthContent = {
  eyebrow: "09 — Growth",
  title: "Learning & growth",
  description:
    "The stack keeps evolving. I grow deliberately — and stay honest about where knowledge is still developing.",
  notes: [
    {
      id: "design-to-modern",
      title: "Design foundation → modern web",
      detail:
        "Continuing to strengthen the bridge from visual craft to production interfaces with React and Next.js.",
    },
    {
      id: "fullstack-depth",
      title: "Full-stack practice",
      detail:
        "Deepening PHP/MySQL application work — cleaner structure, better data modeling, and more reliable CRUD systems.",
    },
    {
      id: "python-basic",
      title: "Python — basic familiarity",
      detail:
        "I have basic knowledge of Python. I’m not positioning it as a primary professional strength unless project evidence supports more.",
    },
    {
      id: "seo-ads",
      title: "SEO & digital awareness",
      detail:
        "Building sites with clearer structure for discoverability, and applying practical Google Ads familiarity where relevant.",
    },
    {
      id: "quality",
      title: "Quality & maintainability",
      detail:
        "Focusing on readable code, debugging discipline, accessibility basics, and interfaces that stay easy to improve.",
    },
  ] satisfies GrowthNote[],
  closing:
    "Growth means expanding capability without overstating it — every skill listed on this site reflects real use or clearly marked learning level.",
} as const;
