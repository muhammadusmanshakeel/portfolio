import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { projectsContent } from "@/content/projects";
import styles from "./Work.module.css";

export function Work() {
  return (
    <Section
      id="work"
      eyebrow={projectsContent.eyebrow}
      title={projectsContent.title}
      description={projectsContent.description}
      tone="mist"
    >
      <ul className={styles.grid}>
        {projectsContent.projects.map((project, index) => (
          <li key={project.slug} className={styles.card}>
            <div className={styles.meta}>
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.category}>{project.category}</span>
              {project.isPlaceholder ? (
                <span className={styles.badge}>Placeholder</span>
              ) : null}
            </div>

            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.summary}>{project.shortDescription}</p>

            <ul className={styles.tech} aria-label="Technologies">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <Link href={`/work/${project.slug}`} className={styles.link}>
              View case study
              <span aria-hidden="true"> →</span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
