export type ProjectCategory =
  | "Web Development"
  | "Frontend"
  | "Full-Stack"
  | "PHP/MySQL"
  | "React"
  | "Next.js"
  | "UI / Design"
  | "Business Website"
  | "Other";

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  category: ProjectCategory;
  technologies: string[];
  role: string;
  challenge: string;
  approach: string;
  keyFeatures: string[];
  result: string;
  isPlaceholder: boolean;
  liveUrl: string | null;
  githubUrl: string | null;
  /** Screenshot paths under /public when available */
  screenshots: { src: string; alt: string }[];
};

export const projectsContent = {
  eyebrow: "06 — Work",
  title: "Selected work",
  description:
    "Case-study style showcases. Placeholder projects demonstrate structure — replace with real work when ready.",
  projects: [
    {
      slug: "al-hijaz-travel",
      name: "Al Hijaz Travel",
      shortDescription:
        "Business website for a travel company — live production site.",
      category: "Business Website",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      role: "Senior Web Developer",
      challenge:
        "[TODO: What problem or business need did this project address?]",
      approach:
        "[TODO: How did you structure the work — layout, frontend, backend, content?]",
      keyFeatures: [
        "[TODO: Key feature 1]",
        "[TODO: Key feature 2]",
        "[TODO: Key feature 3]",
      ],
      result: "[TODO: Outcome — only add verified results]",
      isPlaceholder: true,
      liveUrl: "https://www.alhijaztravel.com/",
      githubUrl: null,
      screenshots: [],
    },
    {
      slug: "baitullah-travel",
      name: "Baitullah Travel",
      shortDescription:
        "UK Hajj and Umrah travel agency website — live production site.",
      category: "Business Website",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      role: "Senior Web Developer",
      challenge:
        "[TODO: Describe the data or workflow challenge without inventing metrics.]",
      approach:
        "[TODO: Outline database design, server logic, and interface approach.]",
      keyFeatures: [
        "[TODO: Key feature 1]",
        "[TODO: Key feature 2]",
        "[TODO: Key feature 3]",
      ],
      result: "[TODO: Verified result only]",
      isPlaceholder: true,
      liveUrl: "https://www.baitullahtravel.co.uk/",
      githubUrl: null,
      screenshots: [],
    },
    {
      slug: "islamic-travel-agency",
      name: "Islamic Travel Agency",
      shortDescription:
        "Canadian Islamic travel agency website — live production site.",
      category: "Business Website",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      role: "Senior Web Developer",
      challenge:
        "[TODO: What interface or product need drove the frontend work?]",
      approach:
        "[TODO: How did you structure the work — layout, frontend, backend, content?]",
      keyFeatures: [
        "[TODO: Key feature 1]",
        "[TODO: Key feature 2]",
        "[TODO: Key feature 3]",
      ],
      result: "[TODO: Verified result only]",
      isPlaceholder: true,
      liveUrl: "https://www.islamictravelagency.ca/",
      githubUrl: null,
      screenshots: [],
    },
  ] satisfies Project[],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsContent.projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsContent.projects.map((project) => project.slug);
}
