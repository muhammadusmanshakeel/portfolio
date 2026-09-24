export type ApproachStep = {
  number: string;
  title: string;
  description: string;
};

export const approachContent = {
  eyebrow: "08 — Approach",
  title: "Development approach",
  description:
    "A practical process from understanding the goal to shipping a maintainable result.",
  steps: [
    {
      number: "01",
      title: "Understand",
      description:
        "Clarify business requirements, audience needs, and what success looks like for the project.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "Define structure, content priorities, technology choices, and the primary user flows.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Shape a clean interface — hierarchy, layout, and interaction states that support the goal.",
    },
    {
      number: "04",
      title: "Develop",
      description:
        "Build responsive frontend and backend functionality with maintainable, readable code.",
    },
    {
      number: "05",
      title: "Test",
      description:
        "Check functionality, responsiveness, edge cases, and browser behavior before release.",
    },
    {
      number: "06",
      title: "Refine",
      description:
        "Improve usability, performance, and clarity based on review and practical feedback.",
    },
    {
      number: "07",
      title: "Launch",
      description:
        "Prepare deployment, verify critical paths, and hand off a site ready for real use.",
    },
  ] satisfies ApproachStep[],
} as const;
