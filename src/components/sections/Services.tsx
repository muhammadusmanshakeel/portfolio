import { Section } from "@/components/layout/Section";
import { servicesContent } from "@/content/services";
import styles from "./Services.module.css";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow={servicesContent.eyebrow}
      title={servicesContent.title}
      description={servicesContent.description}
    >
      <ul className={styles.grid}>
        {servicesContent.items.map((item, index) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.number} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
