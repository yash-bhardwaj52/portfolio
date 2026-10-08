"use client";

import { useEffect, useRef, useState } from "react";
import SiteNav from "./site-nav";

const DESKTOP_RADIUS = 235;
const MOBILE_RADIUS = 150;

type Point = {
  x: number;
  y: number;
};

export default function GlassHero() {
  const heroRef = useRef<HTMLElement | null>(null);

  const rawPos = useRef<Point>({ x: -999, y: -999 });
  const smoothPos = useRef<Point>({ x: -999, y: -999 });
  const radius = useRef(0);
  const targetRadius = useRef(0);
  const tracking = useRef(false);
  const frameId = useRef(0);
  const reduceMotion = useRef(false);

  const [softwareText, setSoftwareText] = useState("");
  const [developerText, setDeveloperText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);

  /* ---------- Typing animation ---------- */

  useEffect(() => {
    const firstText = "Software";
    const secondText = "Developer";

    let firstIndex = 0;
    let secondIndex = 0;

    let firstTimer: number | undefined;
    let secondTimer: number | undefined;
    let subtitleTimer: number | undefined;
    let startTimer: number | undefined;

    const typeDeveloper = () => {
      secondTimer = window.setInterval(() => {
        secondIndex += 1;
        setDeveloperText(secondText.slice(0, secondIndex));

        if (secondIndex >= secondText.length) {
          if (secondTimer !== undefined) {
            window.clearInterval(secondTimer);
          }

          subtitleTimer = window.setTimeout(() => {
            setShowSubtitle(true);
          }, 180);
        }
      }, 85);
    };

    const typeSoftware = () => {
      firstTimer = window.setInterval(() => {
        firstIndex += 1;
        setSoftwareText(firstText.slice(0, firstIndex));

        if (firstIndex >= firstText.length) {
          if (firstTimer !== undefined) {
            window.clearInterval(firstTimer);
          }

          startTimer = window.setTimeout(typeDeveloper, 220);
        }
      }, 85);
    };

    startTimer = window.setTimeout(typeSoftware, 350);

    return () => {
      if (firstTimer !== undefined) {
        window.clearInterval(firstTimer);
      }

      if (secondTimer !== undefined) {
        window.clearInterval(secondTimer);
      }

      if (startTimer !== undefined) {
        window.clearTimeout(startTimer);
      }

      if (subtitleTimer !== undefined) {
        window.clearTimeout(subtitleTimer);
      }
    };
  }, []);

  /* ---------- Glass reveal interaction ---------- */

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    reduceMotion.current = mq.matches;

    const onMq = (e: MediaQueryListEvent) => {
      reduceMotion.current = e.matches;
    };

    mq.addEventListener("change", onMq);

    let lastX = NaN;
    let lastY = NaN;
    let lastR = NaN;

    const tick = () => {
      const posFactor = reduceMotion.current ? 1 : 0.14;
      const radiusFactor = reduceMotion.current ? 1 : 0.12;

      smoothPos.current.x +=
        (rawPos.current.x - smoothPos.current.x) * posFactor;

      smoothPos.current.y +=
        (rawPos.current.y - smoothPos.current.y) * posFactor;

      radius.current +=
        (targetRadius.current - radius.current) * radiusFactor;

      if (Math.abs(targetRadius.current - radius.current) < 0.05) {
        radius.current = targetRadius.current;
      }

      const x = smoothPos.current.x;
      const y = smoothPos.current.y;
      const r = radius.current;

      if (
        Number.isNaN(lastR) ||
        Math.abs(x - lastX) > 0.01 ||
        Math.abs(y - lastY) > 0.01 ||
        Math.abs(r - lastR) > 0.01
      ) {
        el.style.setProperty("--reveal-x", `${x.toFixed(2)}px`);
        el.style.setProperty("--reveal-y", `${y.toFixed(2)}px`);
        el.style.setProperty("--reveal-radius", `${r.toFixed(2)}px`);

        lastX = x;
        lastY = y;
        lastR = r;
      }

      frameId.current = window.requestAnimationFrame(tick);
    };

    frameId.current = window.requestAnimationFrame(tick);

    const setPoint = (e: PointerEvent, snap: boolean) => {
      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      rawPos.current.x = x;
      rawPos.current.y = y;

      if (snap) {
        smoothPos.current.x = x;
        smoothPos.current.y = y;
      }
    };

    const onPointerEnter = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;

      setPoint(e, radius.current < 1);
      targetRadius.current = DESKTOP_RADIUS;
    };

    const onPointerLeave = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;

      targetRadius.current = 0;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;

      if ((e.target as Element | null)?.closest("a, button")) {
        return;
      }

      tracking.current = true;

      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        /* pointer capture not supported */
      }

      setPoint(e, true);
      targetRadius.current = MOBILE_RADIUS;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        setPoint(e, false);
        return;
      }

      if (!tracking.current) return;

      setPoint(e, false);
    };

    const endTouch = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;

      if (!tracking.current) return;

      tracking.current = false;
      targetRadius.current = 0;

      try {
        if (el.hasPointerCapture(e.pointerId)) {
          el.releasePointerCapture(e.pointerId);
        }
      } catch {
        /* ignore */
      }
    };

    el.addEventListener("pointerenter", onPointerEnter);
    el.addEventListener("pointerleave", onPointerLeave);
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endTouch);
    el.addEventListener("pointercancel", endTouch);

    return () => {
      window.cancelAnimationFrame(frameId.current);

      mq.removeEventListener("change", onMq);

      el.removeEventListener("pointerenter", onPointerEnter);
      el.removeEventListener("pointerleave", onPointerLeave);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endTouch);
      el.removeEventListener("pointercancel", endTouch);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="glass-hero"
      aria-label="Introduction"
    >
      <div className="gh-layer gh-base" aria-hidden="true" />
      <div className="gh-layer gh-reveal" aria-hidden="true" />

      <div className="gh-grid" aria-hidden="true" />
      <div className="gh-circle" aria-hidden="true" />

      <div className="gh-copy">
        <h1 className="gh-headline">
          <span>{softwareText}</span>
          <span>{developerText}</span>

          <small
            className={showSubtitle ? "gh-subtitle-visible" : ""}
          >
            (Frontend / React.js)
          </small>
        </h1>

        <div className="gh-intro">
          <p>
            BCA graduate building modern web experiences with React,
            JavaScript and TypeScript.
          </p>

          <a className="gh-pill" href="/projects">
            Explore my work
          </a>
        </div>

        <p className="gh-tagline">
          <span>BUILD. LEARN.</span>
          <span>IMPROVE.</span>
          <span>REPEAT.</span>
        </p>
      </div>

      <SiteNav />
    </section>
  );
}