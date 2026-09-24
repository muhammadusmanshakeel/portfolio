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
        "Live business website for an Islamic travel agency promoting Umrah, Hajj, visa services, and package bookings.",
      category: "Business Website",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      role: "Senior Web Developer",
      challenge:
        "Al Hijaz Travel needed a production website to present Ramadan Umrah and Hajj offerings, visa options, and multi-region contact details — so visitors could browse packages by duration, hotel star rating, and departure city, then submit booking or enquiry requests online.",
      approach:
        "Built a responsive business website focused on package discovery and lead capture. Structured the homepage around hero messaging, service highlights, categorized Umrah package listings with pricing, Hajj and visa sections, enquiry forms, and clear contact channels (email, phone, WhatsApp). Kept the stack practical with HTML, CSS, JavaScript, PHP, and MySQL for content-driven pages and form handling.",
      keyFeatures: [
        "Hero carousel and Ramadan Umrah campaign messaging with clear CTAs",
        "Enquiry / request form (passenger name, contact number, email)",
        "Umrah package catalogue by star rating, nights, and city (e.g. Ottawa, Edmonton, Toronto)",
        "Package pricing display with starting-from amounts",
        "Hajj 2027 information and booking-confidence messaging",
        "Visa services section (Umrah visa, tourist visa, and related support points)",
        "Service highlights such as hotel options, visa support, and transport messaging",
        "Multi-region contact bar with email, phone, and WhatsApp links",
        "Request Now call-to-action in the site header",
      ],
      result:
        "Delivered a live production site at alhijaztravel.com where travellers can browse Umrah packages, review visa and Hajj information, and submit enquiries through on-site contact and request forms.",
      isPlaceholder: false,
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
