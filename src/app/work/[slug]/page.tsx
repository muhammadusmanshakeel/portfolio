import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { Button } from "@/components/ui/Button";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/content/projects";
import { siteConfig } from "@/content/profile";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = project.isPlaceholder
    ? `Case study placeholder | ${siteConfig.name}`
    : `${project.name} | ${siteConfig.name}`;

  return {
    title: project.isPlaceholder ? "Case study placeholder" : project.name,
    description: project.shortDescription,
    openGraph: {
      title,
      description: project.shortDescription,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main id="main-content" className={styles.page}>
      <Container>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/#work">Selected work</Link>
          <span aria-hidden="true"> / </span>
          <span>{project.isPlaceholder ? "Case study" : project.name}</span>
        </nav>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            {project.isPlaceholder ? (
              <span className={styles.badge}>Placeholder</span>
            ) : null}
          </div>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.lead}>{project.shortDescription}</p>
          <p className={styles.role}>
            <span className={styles.roleLabel}>Role</span> {project.role}
          </p>
        </header>

        {project.isPlaceholder ? (
          <PlaceholderNote>
            This is a structural placeholder. Replace name, challenge, approach,
            features, result, screenshots, and links with real project data —
            do not invent outcomes.
          </PlaceholderNote>
        ) : null}

        <div className={styles.sections}>
          <section className={styles.block} aria-labelledby="challenge-heading">
            <h2 id="challenge-heading">Challenge</h2>
            <p>{project.challenge}</p>
          </section>

          <section className={styles.block} aria-labelledby="approach-heading">
            <h2 id="approach-heading">Approach</h2>
            <p>{project.approach}</p>
          </section>

          <section className={styles.block} aria-labelledby="tech-heading">
            <h2 id="tech-heading">Technologies</h2>
            <ul className={styles.tech}>
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>

          <section className={styles.block} aria-labelledby="features-heading">
            <h2 id="features-heading">Key features</h2>
            <ul className={styles.features}>
              {project.keyFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className={styles.block} aria-labelledby="result-heading">
            <h2 id="result-heading">Result</h2>
            <p>{project.result}</p>
          </section>

          {project.screenshots.length > 0 ? (
            <section
              className={styles.block}
              aria-labelledby="screenshots-heading"
            >
              <h2 id="screenshots-heading">Screenshots</h2>
              <ul className={styles.shots}>
                {project.screenshots.map((shot) => (
                  <li key={shot.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={shot.src} alt={shot.alt} />
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <PlaceholderNote>
              [TODO: Add project screenshots under public/images/projects/]
            </PlaceholderNote>
          )}
        </div>

        <div className={styles.actions}>
          {project.liveUrl ? (
            <Button href={project.liveUrl} variant="primary" external>
              Live project
            </Button>
          ) : (
            <span className={styles.todo}>[TODO: Live URL]</span>
          )}
          {project.githubUrl ? (
            <Button href={project.githubUrl} variant="secondary" external>
              GitHub
            </Button>
          ) : (
            <span className={styles.todo}>[TODO: GitHub URL]</span>
          )}
          <Button href="/#work" variant="ghost">
            Back to work
          </Button>
        </div>
      </Container>
    </main>
  );
}
