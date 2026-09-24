import type { ReactNode } from "react";
import styles from "./PlaceholderNote.module.css";

type PlaceholderNoteProps = {
  children: ReactNode;
};

/** Marks missing real data so content stays truthful */
export function PlaceholderNote({ children }: PlaceholderNoteProps) {
  return <p className={styles.note}>{children}</p>;
}
