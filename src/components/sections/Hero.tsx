import { siteConfig } from "@/content/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import styles from "./Hero.module.css";

type MetaLink = {
  label: string;
  href: string;
  external?: boolean;
};

export function Hero() {
  const [firstName, ...rest] = siteConfig.name.split(" ");
  const lastNames = rest.join(" ");

  const links: MetaLink[] = [
    siteConfig.resumeUrl
      ? { label: "Resume", href: siteConfig.resumeUrl, external: true }
      : null,
    siteConfig.social.github
      ? { label: "GitHub", href: siteConfig.social.github, external: true }
      : null,
    siteConfig.social.linkedin
      ? { label: "LinkedIn", href: siteConfig.social.linkedin, external: true }
      : null,
    siteConfig.email
      ? { label: "Email", href: `mailto:${siteConfig.email}` }
      : null,
  ].filter(Boolean) as MetaLink[];

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.gridPlane} />
        <div className={styles.wash} />
        <div className={styles.orb} />
        <p className={styles.watermark}>MU</p>
        <div className={styles.codeRibbon}>
          <span>html</span>
          <span>css</span>
          <span>js</span>
          <span>react</span>
          <span>next</span>
          <span>php</span>
          <span>mysql</span>
          <span>design → code</span>
          <span>html</span>
          <span>css</span>
          <span>js</span>
          <span>react</span>
          <span>next</span>
          <span>php</span>
          <span>mysql</span>
          <span>design → code</span>
        </div>
      </div>

      <Container className={styles.inner}>
        <div className={styles.copy}>
          <p className={`${styles.role} ${styles.enter}`} style={{ ["--d" as string]: "0ms" }}>
            {siteConfig.role}
          </p>

          <h1 id="hero-heading" className={styles.name}>
            <span
              className={`${styles.nameLine} ${styles.enter}`}
              style={{ ["--d" as string]: "80ms" }}
            >
              {firstName}
            </span>
            <span
              className={`${styles.nameLine} ${styles.nameAccent} ${styles.enter}`}
              style={{ ["--d" as string]: "180ms" }}
            >
              {lastNames}
            </span>
          </h1>

          <p
            className={`${styles.positioning} ${styles.enter}`}
            style={{ ["--d" as string]: "280ms" }}
          >
            {siteConfig.positioning}
          </p>

          <div
            className={`${styles.bridge} ${styles.enter}`}
            style={{ ["--d" as string]: "360ms" }}
            aria-hidden="true"
          >
            <span>Design</span>
            <span className={styles.bridgeRule} />
            <span>Development</span>
          </div>

          <div
            className={`${styles.actions} ${styles.enter}`}
            style={{ ["--d" as string]: "440ms" }}
          >
            <Button href="#work" variant="primary">
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Let’s Work Together
            </Button>
          </div>

          {links.length > 0 ? (
            <ul
              className={`${styles.meta} ${styles.enter}`}
              style={{ ["--d" as string]: "520ms" }}
            >
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
            <p
              className={`${styles.todo} ${styles.enter}`}
              style={{ ["--d" as string]: "520ms" }}
            >
              [TODO: Add resume, GitHub, LinkedIn, and email in profile.ts]
            </p>
          )}
        </div>
      </Container>

      <a href="#about" className={styles.scrollCue} aria-label="Scroll to about">
        <span className={styles.scrollLine} aria-hidden="true" />
        <span>Scroll</span>
      </a>
    </section>
  );
}
