"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { primaryNav } from "@/content/navigation";
import { siteConfig } from "@/content/profile";
import { Container } from "./Container";
import styles from "./Header.module.css";

function sectionIdFromHref(href: string) {
  return href.startsWith("#") ? href.slice(1) : null;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.matchMedia("(min-width: 1100px)").matches) {
        setOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const sections = primaryNav
      .map((item) => sectionIdFromHref(item.href))
      .filter((id): id is string => Boolean(id))
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          );

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function close() {
    setOpen(false);
  }

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={close}>
          <span className={styles.brandName}>{siteConfig.name}</span>
          <span className={styles.brandRole}>{siteConfig.role}</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {primaryNav.map((item) => {
              const id = sectionIdFromHref(item.href);
              const isActive = id !== null && id === activeId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                    data-active={isActive || undefined}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuBars} data-open={open || undefined} />
        </button>
      </Container>

      <div
        id={menuId}
        className={styles.mobilePanel}
        data-open={open || undefined}
        hidden={!open}
      >
        <nav aria-label="Mobile primary">
          <ul className={styles.mobileList}>
            {primaryNav.map((item) => {
              const id = sectionIdFromHref(item.href);
              const isActive = id !== null && id === activeId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.mobileLink}
                    data-active={isActive || undefined}
                    aria-current={isActive ? "true" : undefined}
                    onClick={close}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
