import { Section } from "@/components/layout/Section";
import { designContent } from "@/content/design";
import styles from "./DesignBackground.module.css";

export function DesignBackground() {
  return (
    <Section
      id="design"
      eyebrow={designContent.eyebrow}
      title={designContent.title}
      description={designContent.lead}
      tone="mist"
    >
      <div className={styles.layout}>
        <div className={styles.toolsBlock}>
          <h3 className={styles.blockTitle}>Tools that shaped the start</h3>
          <ul className={styles.tools}>
            {designContent.tools.map((tool) => (
              <li key={tool.name} className={styles.tool}>
                <p className={styles.toolName}>{tool.name}</p>
                <p className={styles.toolUse}>{tool.use}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.benefitsBlock}>
          <h3 className={styles.blockTitle}>What carried into development</h3>
          <ul className={styles.benefits}>
            {designContent.benefits.map((benefit) => (
              <li key={benefit.title} className={styles.benefit}>
                <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                <p className={styles.benefitDetail}>{benefit.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={styles.closing}>{designContent.closing}</p>
    </Section>
  );
}
