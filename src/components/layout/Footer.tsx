import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/content/profile";
import { Container } from "./Container";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  const contactLinks = [
    siteConfig.email
      ? { label: siteConfig.email, href: `mailto:${siteConfig.email}` }
      : null,
    siteConfig.social.github
      ? { label: "GitHub", href: siteConfig.social.github, external: true }
      : null,
    siteConfig.social.linkedin
      ? { label: "LinkedIn", href: siteConfig.social.linkedin, external: true }
      : null,
    siteConfig.resumeUrl
      ? { label: "Resume", href: siteConfig.resumeUrl, external: true }
      : null,
  ].filter(Boolean) as {
    label: string;
    href: string;
    external?: boolean;
  }[];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.identity}>
            <p className={styles.name}>{siteConfig.name}</p>
            <p className={styles.role}>{siteConfig.role}</p>
            <p className={styles.tagline}>{siteConfig.positioning}</p>
          </div>

          <nav aria-label="Footer">
            <ul className={styles.links}>
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.meta}>
            {contactLinks.length > 0 ? (
              <ul className={styles.contactLinks}>
                {contactLinks.map((link) => (
                  <li key={link.href}>
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
              <p className={styles.todo}>
                [TODO: email · GitHub · LinkedIn · resume]
              </p>
            )}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
