import { siteConfig } from "@/content/profile";
import { seo } from "@/content/seo";

export function JsonLd() {
  const sameAs = [
    siteConfig.social.github,
    siteConfig.social.linkedin,
  ].filter((url): url is string => Boolean(url));

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: seo.description,
    url: siteConfig.url,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    knowsAbout: [
      "Web Development",
      "Frontend Development",
      "React",
      "Next.js",
      "PHP",
      "MySQL",
      "Responsive Web Design",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — Portfolio`,
    url: siteConfig.url,
    description: seo.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
