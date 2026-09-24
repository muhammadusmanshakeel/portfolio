import { Section } from "@/components/layout/Section";
import { journeyContent } from "@/content/journey";
import styles from "./Journey.module.css";

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow={journeyContent.eyebrow}
      title={journeyContent.title}
      description={journeyContent.description}
      tone="mist"
    >
      <ol className={styles.timeline}>
        {journeyContent.steps.map((step, index) => (
          <li key={step.id} className={styles.step}>
            <span className={styles.number} aria-hidden="true">
              {step.number}
            </span>
            <div className={styles.rail} aria-hidden="true">
              <span className={styles.dot} />
              {index < journeyContent.steps.length - 1 ? (
                <span className={styles.line} />
              ) : null}
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>
                <span className={styles.numberMobile}>{step.number}</span>
                {step.title}
              </h3>
              <p className={styles.subtitle}>{step.subtitle}</p>
              <p className={styles.detail}>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
