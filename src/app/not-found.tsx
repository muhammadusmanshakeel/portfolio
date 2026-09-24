import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/profile";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main id="main-content" className={styles.page}>
      <Container narrow>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.copy}>
          That route doesn’t exist. Head back to {siteConfig.name}’s portfolio
          home.
        </p>
        <div className={styles.actions}>
          <Button href="/" variant="primary">
            Back to home
          </Button>
          <Button href="/#work" variant="secondary">
            View work
          </Button>
        </div>
        <p className={styles.hint}>
          Or browse{" "}
          <Link href="/#contact">contact</Link> if you’re looking for something
          specific.
        </p>
      </Container>
    </main>
  );
}
