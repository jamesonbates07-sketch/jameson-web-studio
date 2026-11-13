"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import styles from "./CareStudio.module.css";

type Phase = "select" | "refine" | "done";

/** A clearly labelled local example, not a maintenance dashboard or a live edit. */
export function CareStudio() {
  const [phase, setPhase] = useState<Phase>("done");
  const [manual, setManual] = useState(false);
  const root = useRef<HTMLElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reduce = useRef(false);
  const playing = phase !== "done";
  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const finish = () => {
    clear();
    setPhase("done");
  };
  const replay = () => {
    clear();
    setManual(true);
    if (reduce.current) {
      setPhase("done");
      return;
    }
    setPhase("select");
    timers.current = [
      setTimeout(() => setPhase("refine"), 650),
      setTimeout(() => setPhase("done"), 1650),
    ];
  };
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    reduce.current = media.matches;
    const settle = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      setPhase("done");
    };
    const preference = () => {
      reduce.current = media.matches;
      settle();
    };
    let introduced = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          settle();
          return;
        }
        if (introduced) return;
        introduced = true;
        if (media.matches) return;
        setPhase("select");
        timers.current = [
          setTimeout(() => setPhase("refine"), 650),
          setTimeout(() => setPhase("done"), 1650),
        ];
      },
      { threshold: 0.45 },
    );
    if (root.current) observer.observe(root.current);
    const visibility = () => {
      if (document.hidden) settle();
    };
    media.addEventListener("change", preference);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      timers.current.forEach(clearTimeout);
      media.removeEventListener("change", preference);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  return (
    <figure
      className={styles.studio}
      ref={root}
      data-phase={phase}
      aria-labelledby="care-example-label"
      aria-describedby="care-example-description"
    >
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.sceneTitle}>
          <span>Studio care</span>
          <span>Content refinement</span>
        </div>
        <div className={styles.browser}>
          <div className={styles.browserBar}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.siteMark}
              src="/brand/svg/favicon-icon.svg"
              width="15"
              height="15"
              alt=""
              loading="lazy"
            />
            <span>jamesonwebstudio.co.uk</span>
          </div>
          <div className={styles.page}>
            {/* Original approved artwork, shown in its existing on-dark variant. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.logo}
              src="/brand/svg/logo-compact-on-dark.svg"
              width="150"
              height="50"
              alt=""
              loading="lazy"
            />
            <div className={styles.pageTitle}>
              Small business.
              <br />
              Big presence.
            </div>
            <div className={styles.copyLine}>Designed around your</div>
            <div className={styles.wordSlot}>
              <span className={styles.oldWord}>business.</span>
              <span className={styles.newWord}>customers.</span>
              <span className={styles.selection} />
            </div>
            <div className={styles.pageRule} />
            <div className={styles.pageFoot}>
              <span>Independent web design</span>
              <span>North London</span>
            </div>
          </div>
        </div>
        <div className={styles.editNote}>
          <div className={styles.noteHeader}>
            <span>A small wording update</span>
            <span className={styles.noteLine} />
          </div>
          <div className={styles.diff}>
            <span className={styles.removed}>business.</span>
            <span className={styles.inserted}>customers.</span>
          </div>
          <div className={styles.noteFooter}>
            <span className={styles.proofMark}>↳</span>
            <span>
              Same character.
              <br />A clearer message.
            </span>
          </div>
        </div>
      </div>
      <figcaption className={styles.caption} id="care-example-caption">
        <span className="sr-only" id="care-example-description">
          Example: “Designed around your business” becomes “Designed around your
          customers”. This is a visual demonstration, not an edit to the live
          site.
        </span>
        <div>
          <span className={styles.exampleLabel} id="care-example-label">
            Illustrative text update
          </span>
          <span className={styles.state}>
            {phase === "select"
              ? "Considering the detail"
              : phase === "refine"
                ? "Refining the wording"
                : "Ready to review"}
          </span>
        </div>
        <button
          className={styles.replay}
          type="button"
          onClick={() => {
            if (reduce.current) {
              clear();
              setManual(true);
              setPhase((current) => (current === "select" ? "done" : "select"));
            } else if (playing) finish();
            else replay();
          }}
        >
          <RotateCcw size={14} />
          <span className={styles.motionLabel}>
            {playing ? "Finish preview" : "Replay update"}
          </span>
          <span className={styles.staticLabel}>Compare wording</span>
        </button>
        <span className="sr-only" aria-live="polite">
          {manual
            ? playing
              ? "Previewing an example wording update."
              : "Example update ready to review. No live website content was changed."
            : ""}
        </span>
      </figcaption>
      <noscript>
        <style>{`.${styles.replay}{display:none}`}</style>
      </noscript>
    </figure>
  );
}
