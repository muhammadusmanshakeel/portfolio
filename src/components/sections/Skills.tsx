import { Section } from "@/components/layout/Section";
import {
  skillLevelLabels,
  skillsContent,
  type SkillLevel,
} from "@/content/skills";
import styles from "./Skills.module.css";

function levelClass(level: SkillLevel) {
  return styles[level];
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow={skillsContent.eyebrow}
      title={skillsContent.title}
      description={skillsContent.description}
    >
      <div className={styles.legend} aria-label="Skill level key">
        {(Object.keys(skillLevelLabels) as SkillLevel[]).map((level) => (
          <span key={level} className={`${styles.legendItem} ${levelClass(level)}`}>
            {skillLevelLabels[level]}
          </span>
        ))}
      </div>

      <div className={styles.groups}>
        {skillsContent.groups.map((group) => (
          <article key={group.id} className={styles.group}>
            <header className={styles.groupHeader}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <p className={styles.groupSummary}>{group.summary}</p>
            </header>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className={`${styles.item} ${levelClass(item.level)}`}
                >
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.level}>
                    {skillLevelLabels[item.level]}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
