import { Section } from "@/components/layout/Section";
import { approachContent } from "@/content/approach";
import styles from "./Approach.module.css";

export function Approach() {
  return (
    <Section
      id="approach"
      eyebrow={approachContent.eyebrow}
      title={approachContent.title}
      description={approachContent.description}
      tone="mist"
    >
      <ol className={styles.steps}>
        {approachContent.steps.map((step) => (
          <li key={step.number} className={styles.step}>
            <span className={styles.number}>{step.number}</span>
            <div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
