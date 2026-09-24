import { Section } from "@/components/layout/Section";
import { growthContent } from "@/content/growth";
import styles from "./Growth.module.css";

export function Growth() {
  return (
    <Section
      id="growth"
      eyebrow={growthContent.eyebrow}
      title={growthContent.title}
      description={growthContent.description}
    >
      <ul className={styles.notes}>
        {growthContent.notes.map((note) => (
          <li key={note.id} className={styles.note}>
            <h3 className={styles.noteTitle}>{note.title}</h3>
            <p className={styles.noteDetail}>{note.detail}</p>
          </li>
        ))}
      </ul>
      <p className={styles.closing}>{growthContent.closing}</p>
    </Section>
  );
}
