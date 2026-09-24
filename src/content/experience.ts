export type ExperienceEntry = {
  id: string;
  company: string;
  /** Exact title pending — keep as placeholder until confirmed */
  role: string;
  roleIsPlaceholder: boolean;
  period: string;
  location: string | null;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experienceContent = {
  eyebrow: "05 — Experience",
  title: "Professional experience",
  description:
    "Approximately four years of professional web development. Entries stay factual — titles and details can be refined as you provide them.",
  entries: [
    {
      id: "emenac",
      company: "Emenac.Inc",
      role: "[TODO: exact job title]",
      roleIsPlaceholder: true,
      period: "Professional tenure · ~4 years web development",
      location: null,
      summary:
        "Joined after Intermediate and began a professional technology path — first in graphic design (Photoshop, Illustrator, Adobe XD), then into web development across frontend, PHP/MySQL backends, and modern React/Next.js work.",
      highlights: [
        "Built and maintained websites using HTML, CSS, JavaScript, and jQuery",
        "Developed database-driven applications with PHP and MySQL",
        "Implemented responsive interfaces and design-to-code workflows",
        "Worked with React and Next.js for modern frontend development",
        "Applied design foundation to improve UI clarity and structure",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "PHP",
        "MySQL",
        "React",
        "Next.js",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe XD",
      ],
    },
  ] satisfies ExperienceEntry[],
  /** Empty slots remind that more roles can be added later */
  futureSlotsNote:
    "[TODO: Add additional roles or earlier positions here when available]",
} as const;
