import { Section } from "@/components/layout/Section";
import { aboutContent } from "@/content/about";
import styles from "./About.module.css";

export function About() {
  return (
    <Section
      id="about"
      eyebrow={aboutContent.eyebrow}
      title={aboutContent.title}
      description={aboutContent.lead}
    >
      <div className={styles.layout}>
        <div className={styles.story}>
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <aside className={styles.aside} aria-label="Profile highlights">
          <ul className={styles.highlights}>
            {aboutContent.highlights.map((item) => (
              <li key={item.label} className={styles.highlight}>
                <span className={styles.highlightLabel}>{item.label}</span>
                <span className={styles.highlightValue}>{item.value}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
