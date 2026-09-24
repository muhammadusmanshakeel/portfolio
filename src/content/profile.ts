export const siteConfig = {
  name: "Muhammad Usman Shakeel",
  role: "Professional Web Developer",
  positioning:
    "Web developer with a designer’s eye for structure and detail.",
  /** [TODO: replace with live domain] */
  url: "https://example.com",
  locale: "en_US",
  email: "professional.muhammadusman@gmail.com",
  /** [TODO: add resume PDF path when available] */
  resumeUrl: null as string | null,
  social: {
    /** [TODO: add GitHub URL] */
    github: null as string | null,
    /** [TODO: add LinkedIn URL] */
    linkedin: null as string | null,
  },
} as const;

export type SiteConfig = typeof siteConfig;
