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
      slug: "business-website-placeholder",
      name: "[TODO: Project name]",
      shortDescription:
        "Placeholder for a responsive business website built from design into production markup.",
      category: "Business Website",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      role: "[TODO: Your role — e.g. Web Developer]",
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
      liveUrl: null,
      githubUrl: null,
      screenshots: [],
    },
    {
      slug: "php-mysql-app-placeholder",
      name: "[TODO: Project name]",
      shortDescription:
        "Placeholder for a database-driven PHP/MySQL application with CRUD workflows.",
      category: "PHP/MySQL",
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      role: "[TODO: Your role]",
      challenge:
        "[TODO: Describe the data or workflow challenge without inventing metrics.]",
      approach:
        "[TODO: Outline database design, server logic, and interface approach.]",
      keyFeatures: [
        "[TODO: CRUD or admin feature]",
        "[TODO: User-facing feature]",
        "[TODO: Integration or reporting feature]",
      ],
      result: "[TODO: Verified result only]",
      isPlaceholder: true,
      liveUrl: null,
      githubUrl: null,
      screenshots: [],
    },
    {
      slug: "react-next-ui-placeholder",
      name: "[TODO: Project name]",
      shortDescription:
        "Placeholder for a modern frontend built with React or Next.js.",
      category: "React",
      technologies: ["React", "Next.js", "JavaScript", "CSS3"],
      role: "[TODO: Your role]",
      challenge:
        "[TODO: What interface or product need drove the frontend work?]",
      approach:
        "[TODO: Components, routing, data fetching, and responsive strategy.]",
      keyFeatures: [
        "[TODO: Component or page feature]",
        "[TODO: Interaction or state feature]",
        "[TODO: Performance or SEO consideration]",
      ],
      result: "[TODO: Verified result only]",
      isPlaceholder: true,
      liveUrl: null,
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
