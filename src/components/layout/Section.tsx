import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "./Container";
import styles from "./Section.module.css";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  tone?: "paper" | "mist";
  narrow?: boolean;
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function extractIndex(eyebrow?: string) {
  if (!eyebrow) return null;
  const match = eyebrow.match(/^(\d+)/);
  return match?.[1] ?? null;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "paper",
  narrow = false,
}: SectionProps) {
  const index = extractIndex(eyebrow);

  return (
    <section
      id={id}
      className={cx(styles.section, styles[tone])}
      aria-labelledby={`${id}-heading`}
    >
      {index ? (
        <span className={styles.indexGhost} aria-hidden="true">
          {index}
        </span>
      ) : null}
      <Container narrow={narrow} className={styles.container}>
        <Reveal>
          <header className={styles.header}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            <h2 id={`${id}-heading`} className={styles.title}>
              {title}
            </h2>
            {description ? (
              <p className={styles.description}>{description}</p>
            ) : null}
          </header>
          {children ? <div className={styles.body}>{children}</div> : null}
        </Reveal>
      </Container>
    </section>
  );
}
