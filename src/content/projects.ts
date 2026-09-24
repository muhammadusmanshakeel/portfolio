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
        "Booking / enquiry form (passenger name, contact number, email, nights, travellers, hotel star options)",
        "Umrah package catalogue by star rating, nights, and city (e.g. Ottawa, Edmonton, Toronto)",
        "Package pricing display with starting-from amounts",
        "Hajj 2027 information and booking-confidence messaging",
        "Visa services section (Umrah visa, tourist visa, and related support points)",
        "Service highlights such as hotel options, visa support, and transport messaging",
        "Multi-region contact bar with email, phone, and WhatsApp links",
        "Request Now call-to-action and full site navigation for packages, hotels, visa, and Hajj",
      ],
      result:
        "Delivered a live production site at alhijaztravel.com where travellers can browse Umrah packages, review visa and Hajj information, and submit enquiries through on-site booking and request forms.",
      isPlaceholder: false,
      liveUrl: "https://www.alhijaztravel.com/",
      githubUrl: null,
      screenshots: [],
    },
    {
      slug: "baitullah-travel",
      name: "Baitullah Travel",
      shortDescription:
        "Live UK Hajj and Umrah travel agency website with package search, deals, city-based Umrah routes, and enquiry flows.",
      category: "Business Website",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      role: "Senior Web Developer",
      challenge:
        "Baitullah Travel needed a UK-focused Islamic travel website where pilgrims could discover Umrah and Hajj packages by season and departure city, compare deals with clear pricing, explore related content, and submit package requests or call-back enquiries online.",
      approach:
        "Built a content-rich business website centred on package discovery and lead capture. Organised navigation around Umrah package categories (Ramadan, December, city routes such as London, Manchester, Birmingham, Glasgow), Hajj package types, and Halal holidays. Added homepage search/request tools, priced package cards with inclusions, Ziyaraat guidance content, FAQs, and UK contact channels (phone and WhatsApp). Used HTML, CSS, JavaScript, PHP, and MySQL for a practical production stack.",
      keyFeatures: [
        "Package finder form (nights, travellers) with submit-request flow",
        "Umrah package categories by season and UK city (London, Manchester, Birmingham, Glasgow, Leicester, Bradford, and more)",
        "Hajj sections for shifting and non-shifting packages",
        "Halal Holidays section in primary navigation",
        "Umrah deal cards with nights, hotel star rating, price, deposit, and inclusions (flight, hotel, visa, transport)",
        "Call me back / Get Details enquiry actions on packages",
        "Hajj deal promotions with hotel and ritual-site details",
        "Explore Ziyaraat content covering Makkah and Madinah landmarks",
        "Booking process guidance and FAQ content for UK pilgrims",
        "Direct WhatsApp and phone contact CTAs for UK support",
      ],
      result:
        "Delivered a live production site at baitullahtravel.co.uk where UK visitors can browse Hajj and Umrah packages, compare priced deals, explore pilgrimage guidance, and submit requests or contact the agency directly.",
      isPlaceholder: false,
      liveUrl: "https://www.baitullahtravel.co.uk/",
      githubUrl: null,
      screenshots: [],
    },
    {
      slug: "islamic-travel-agency",
      name: "Islamic Travel Agency",
      shortDescription:
        "Live Canadian Umrah and Hajj travel agency website with city-based packages, visa services, hotels, and enquiry flows.",
      category: "Business Website",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      role: "Senior Web Developer",
      challenge:
        "Islamic Travel Agency needed a Canada-focused website where pilgrims could explore Umrah and Hajj packages by hotel star rating and departure city, understand visa/hotel/transport inclusions, and enquire or request quotes online with clear Canadian contact support.",
      approach:
        "Built a responsive business website organised around Canadian package discovery and conversion. Structured navigation for Umrah seasons, Hajj package types, Makkah/Madinah hotels, city-based Umrah routes (Toronto, Calgary, Edmonton, Ottawa, Vancouver, Montreal), visa applications, blogs, and enquiry CTAs. Presented priced package cards with inclusions, service overviews, reviews, booking steps, and FAQ content. Implemented with HTML, CSS, JavaScript, PHP, and MySQL.",
      keyFeatures: [
        "Umrah package listings by star rating with CAD pricing and inclusions (flights, visa, hotel, transport)",
        "City-based Umrah package navigation (Toronto, Calgary, Edmonton, Ottawa, Vancouver, Montreal)",
        "Seasonal package categories (December, Ramadan, Easter)",
        "Hajj sections for shifting and non-shifting packages with Nusuk support messaging",
        "Umrah visa application / apply-visa pathway",
        "Makkah and Madinah hotel booking sections",
        "Service overview blocks for visa, transport, hotels, packages, Ziyarat, and Hajj",
        "Enquiry CTAs (Enquire Now, Send Enquiry, Beat My Quote, WhatsApp, phone, email)",
        "Customer reviews, why-book-with-us points, 5-step booking guidance, and FAQ content",
        "Canadian contact details and multi-location support messaging",
      ],
      result:
        "Delivered a live production site at islamictravelagency.ca where Canadian visitors can browse Umrah and Hajj packages, review services and guidance content, and contact the agency through enquiry forms and direct channels.",
      isPlaceholder: false,
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
