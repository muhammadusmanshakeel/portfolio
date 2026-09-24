import { Section } from "@/components/layout/Section";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { contactContent } from "@/content/contact";
import { siteConfig } from "@/content/profile";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.css";

export function Contact() {
  const links = [
    siteConfig.email
      ? { label: "Email", href: `mailto:${siteConfig.email}`, external: false }
      : null,
    siteConfig.social.github
      ? {
          label: "GitHub",
          href: siteConfig.social.github,
          external: true,
        }
      : null,
    siteConfig.social.linkedin
      ? {
          label: "LinkedIn",
          href: siteConfig.social.linkedin,
          external: true,
        }
      : null,
  ].filter(Boolean) as { label: string; href: string; external: boolean }[];

  return (
    <Section
      id="contact"
      eyebrow={contactContent.eyebrow}
      title={contactContent.title}
      description={contactContent.description}
      tone="mist"
    >
      <div className={styles.layout}>
        <div className={styles.formCol}>
          <ContactForm />
        </div>

        <aside className={styles.aside} aria-label="Direct contact">
          <p className={styles.asideLabel}>Direct</p>
          <p className={styles.name}>{siteConfig.name}</p>
          <p className={styles.role}>{siteConfig.role}</p>

          {links.length > 0 ? (
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <PlaceholderNote>
              [TODO: Add email, GitHub, and LinkedIn in src/content/profile.ts]
            </PlaceholderNote>
          )}
        </aside>
      </div>
    </Section>
  );
}
