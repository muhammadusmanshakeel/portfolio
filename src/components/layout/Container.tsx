import type { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
  as?: "div" | "article";
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Container({
  children,
  narrow = false,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cx(styles.container, narrow && styles.narrow, className)}>
      {children}
    </Tag>
  );
}
