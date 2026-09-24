export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export const servicesContent = {
  eyebrow: "07 — Services",
  title: "What I do",
  description:
    "Capabilities grounded in real experience — design-aware implementation through backend and modern frontend work.",
  items: [
    {
      id: "custom-web",
      title: "Custom web development",
      description:
        "Build websites tailored to content, structure, and business needs — not one-size template dumps.",
    },
    {
      id: "responsive-frontend",
      title: "Responsive frontend development",
      description:
        "Implement layouts that work across mobile, tablet, and desktop with clear hierarchy and usable interaction.",
    },
    {
      id: "php-mysql",
      title: "PHP / MySQL development",
      description:
        "Create and maintain database-driven applications, CRUD systems, and server-side functionality.",
    },
    {
      id: "react-next",
      title: "React & Next.js development",
      description:
        "Build modern component-based interfaces and Next.js experiences where the project calls for them.",
    },
    {
      id: "modernization",
      title: "Website modernization",
      description:
        "Update existing sites for clearer UI, better structure, and more maintainable frontend code.",
    },
    {
      id: "ui-implementation",
      title: "UI implementation",
      description:
        "Translate visual designs into production HTML/CSS/JS with attention to spacing, type, and states.",
    },
    {
      id: "maintenance",
      title: "Website maintenance",
      description:
        "Keep sites running with ongoing fixes, content-structure updates, and practical improvements.",
    },
    {
      id: "debugging",
      title: "Bug fixing & optimization",
      description:
        "Diagnose issues, clean up broken behavior, and improve usability and performance where needed.",
    },
    {
      id: "design-to-code",
      title: "Design-to-code development",
      description:
        "Bridge design and engineering — turning Photoshop, Illustrator, or XD intent into working interfaces.",
    },
    {
      id: "google-ads",
      title: "Basic digital advertising / Google Ads",
      description:
        "Support projects with practical Google Ads familiarity and conversion-minded interface thinking.",
    },
  ] satisfies ServiceItem[],
} as const;
