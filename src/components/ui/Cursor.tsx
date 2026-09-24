"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

const INTERACTIVE =
  "a, button, input, textarea, select, label, [role='button'], [data-cursor]";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const visible = useRef(false);
  const hovering = useRef(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!finePointer || reduceMotion) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    document.documentElement.classList.add("cursor-custom");

    function render() {
      ring.current.x += (pos.current.x - ring.current.x) * 0.16;
      ring.current.y += (pos.current.y - ring.current.y) * 0.16;

      const scale = hovering.current ? 1.75 : 1;
      const show = visible.current ? "1" : "0";

      dot!.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      ringEl!.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      dot!.style.opacity = show;
      ringEl!.style.opacity = show;

      raf.current = requestAnimationFrame(render);
    }

    function onMove(event: MouseEvent) {
      pos.current.x = event.clientX;
      pos.current.y = event.clientY;
      if (!visible.current) {
        visible.current = true;
        ring.current.x = event.clientX;
        ring.current.y = event.clientY;
      }
    }

    function onOver(event: MouseEvent) {
      const target = event.target as Element | null;
      hovering.current = Boolean(target?.closest(INTERACTIVE));
      document.documentElement.classList.toggle(
        "cursor-hover",
        hovering.current,
      );
    }

    function onDown() {
      document.documentElement.classList.add("cursor-down");
    }

    function onUp() {
      document.documentElement.classList.remove("cursor-down");
    }

    function onLeave() {
      visible.current = false;
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove(
        "cursor-custom",
        "cursor-hover",
        "cursor-down",
      );
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className={styles.root} aria-hidden="true">
      <div ref={ringRef} className={styles.ring} />
      <div ref={dotRef} className={styles.dot} />
    </div>
  );
}
