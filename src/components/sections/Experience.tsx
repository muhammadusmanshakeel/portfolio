import { Section } from "@/components/layout/Section";
import { experienceContent } from "@/content/experience";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow={experienceContent.eyebrow}
      title={experienceContent.title}
      description={experienceContent.description}
    >
      <ul className={styles.list}>
        {experienceContent.entries.map((entry) => (
          <li key={entry.id} className={styles.entry}>
            <header className={styles.header}>
              <div>
                <p className={styles.company}>{entry.company}</p>
                <h3 className={styles.role}>
                  {entry.role}
                  {entry.roleIsPlaceholder ? (
                    <span className={styles.badge}>Pending</span>
                  ) : null}
                </h3>
              </div>
              <p className={styles.period}>{entry.period}</p>
            </header>

            <p className={styles.summary}>{entry.summary}</p>

            <ul className={styles.highlights}>
              {entry.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ul className={styles.tech} aria-label="Technologies">
              {entry.technologies.map((tech) => (
                <li key={tech} className={styles.techItem}>
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
