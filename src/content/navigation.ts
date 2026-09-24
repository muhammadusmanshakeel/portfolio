export type NavItem = {
  label: string;
  href: string;
};

/** Primary section navigation — order matches approved site structure */
export const primaryNav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Design", href: "#design" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Growth", href: "#growth" },
  { label: "Contact", href: "#contact" },
];

export const footerNav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
