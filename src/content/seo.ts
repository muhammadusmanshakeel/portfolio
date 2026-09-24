import { siteConfig } from "./profile";

export const seo = {
  title: `${siteConfig.name} | Senior Web Developer`,
  titleTemplate: `%s | ${siteConfig.name}`,
  description:
    "Muhammad Usman Shakeel is a senior web developer with a graphic design foundation. Building responsive, database-driven websites with HTML, CSS, JavaScript, React, Next.js, PHP, and MySQL.",
  keywords: [
    "Muhammad Usman Shakeel",
    "Senior Web Developer",
    "Web Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "PHP",
    "MySQL",
    "Portfolio",
  ],
  openGraph: {
    title: `${siteConfig.name} | Senior Web Developer`,
    description:
      "Design-aware web development — from interface thinking to production-ready sites.",
    type: "website" as const,
    locale: siteConfig.locale,
  },
};
