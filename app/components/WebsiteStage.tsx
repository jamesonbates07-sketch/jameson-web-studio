"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, Layers3, RotateCcw } from "lucide-react";
import { PROJECT_URL } from "@/lib/site";
import { ProjectImage } from "./ProjectImage";

const stages = [
  {
    name: "Layout",
    description: "A clear structure. Every element has a purpose.",
  },
  {
    name: "Design",
    description: "Photography, typography and a character of its own.",
  },
  { name: "Website", description: "Brought together. Ready for every screen." },
];

/** A process study of a real project, never a fictional before-and-after. */
export function WebsiteStage() {
  const [stage, setStage] = useState(2);
  const [replaying, setReplaying] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const root = useRef<HTMLDivElement>(null);
  const pointerFrame = useRef<number>(0);
  const reduceMotion = useRef(false);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const stop = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    root.current?.classList.remove("first-build");
    cancelAnimationFrame(pointerFrame.current);
  };
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = media.matches;
    if (media.matches) root.current?.classList.remove("first-build");
    const finish = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      cancelAnimationFrame(pointerFrame.current);
      root.current?.classList.remove("first-build");
      root.current?.style.setProperty("--look-x", "0deg");
      root.current?.style.setProperty("--look-y", "0deg");
      setReplaying(false);
      setStage(2);
    };
    const preference = () => {
      reduceMotion.current = media.matches;
      if (media.matches) finish();
    };
    const visibility = () => {
      if (document.hidden) finish();
    };
    const intro = setTimeout(
      () => root.current?.classList.remove("first-build"),
      1700,
    );
    media.addEventListener("change", preference);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      clearTimeout(intro);
      timers.current.forEach(clearTimeout);
      cancelAnimationFrame(pointerFrame.current);
      media.removeEventListener("change", preference);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  const select = (index: number) => {
    stop();
    setReplaying(false);
    setStage(index);
    root.current?.style.setProperty("--look-x", "0deg");
    root.current?.style.setProperty("--look-y", "0deg");
  };
  const replay = () => {
    stop();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage(2);
      return;
    }
    setReplaying(true);
    setStage(0);
    timers.current = [
      setTimeout(() => setStage(1), 1050),
      setTimeout(() => {
        setStage(2);
        setReplaying(false);
      }, 2250),
    ];
  };
  return (
    <div
      className="website-stage first-build"
      data-stage={stage}
      data-replaying={replaying}
      ref={root}
      style={{ "--look-x": "0deg", "--look-y": "0deg" } as CSSProperties}
    >
      <div className="stage-heading">
        <Layers3 size={15} strokeWidth={1.5} />
        <span>A website, considered from every angle.</span>
      </div>
      <div
        className="website-scene"
        onPointerMove={(event) => {
          if (
            event.pointerType !== "mouse" ||
            reduceMotion.current ||
            replaying
          )
            return;
          const box = event.currentTarget.getBoundingClientRect();
          const x = ((event.clientY - box.top) / box.height - 0.5) * -3;
          const y = ((event.clientX - box.left) / box.width - 0.5) * 4;
          cancelAnimationFrame(pointerFrame.current);
          pointerFrame.current = requestAnimationFrame(() => {
            root.current?.style.setProperty("--look-x", `${x}deg`);
            root.current?.style.setProperty("--look-y", `${y}deg`);
          });
        }}
        onPointerLeave={() => {
          cancelAnimationFrame(pointerFrame.current);
          root.current?.style.setProperty("--look-x", "0deg");
          root.current?.style.setProperty("--look-y", "0deg");
        }}
      >
        <div className="scene-ground" aria-hidden="true" />
        <div className="website-assembly">
          <div className="layout-plane" aria-hidden="true">
            <div className="layout-toolbar">
              <span>Layout study</span>
              <span>Desktop</span>
            </div>
            <div className="layout-content">
              <div className="layout-text">
                <span className="layout-kicker">A London story</span>
                <strong>
                  South Bank,
                  <br />
                  regenerated.
                </strong>
                <span className="layout-line" />
                <span className="layout-line short" />
                <span className="layout-action" />
              </div>
              <div className="layout-photo">
                <span>Photography</span>
              </div>
            </div>
            <div className="layout-baseline" />
          </div>
          <div className="design-plane" aria-hidden="true">
            <span>Typography</span>
            <strong>Aa</strong>
            <div className="design-swatches">
              <i />
              <i />
              <i />
            </div>
            <span>Image / type / colour</span>
          </div>
          <div className="site-window">
            <div className="browser-toolbar" aria-hidden="true">
              <span className="browser-symbol" aria-hidden="true">
                ↗
              </span>
              <span>perranvalepublishing.com</span>
              <span className="browser-type">Website</span>
            </div>
            <div className="site-capture">
              <ProjectImage
                name="desktop"
                priority
                sizes="(max-width: 767px) 82vw, (max-width: 1100px) 43vw, (max-width: 1600px) 46vw, 680px"
                alt="The real Perranvale Publishing website, with its South Bank photography, book introduction and clear navigation."
              />
            </div>
          </div>
          <div className="responsive-window" aria-hidden="true">
            <div className="phone-speaker" />
            <ProjectImage
              name="mobile"
              sizes="(max-width: 767px) 20vw, 150px"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="stage-console">
        <div
          className="stage-tabs"
          role="tablist"
          aria-label="Explore the website design process"
        >
          {stages.map((item, index) => (
            <button
              key={item.name}
              role="tab"
              id={`build-tab-${index}`}
              aria-selected={stage === index}
              aria-controls="build-panel"
              tabIndex={stage === index ? 0 : -1}
              ref={(element) => {
                buttons.current[index] = element;
              }}
              onClick={() => select(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % 3;
                else if (event.key === "ArrowLeft") next = (index + 2) % 3;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = 2;
                else return;
                event.preventDefault();
                select(next);
                buttons.current[next]?.focus();
              }}
            >
              <span className="stage-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.name}
            </button>
          ))}
        </div>
        <button
          className="stage-replay"
          onClick={() => (replaying ? select(stage) : replay())}
          aria-pressed={replaying}
          aria-label={replaying ? "Stop replay" : "Replay build"}
        >
          <RotateCcw size={15} />
          <span>{replaying ? "Stop replay" : "Replay build"}</span>
        </button>
      </div>
      <div
        className="stage-caption"
        id="build-panel"
        role="tabpanel"
        aria-labelledby={`build-tab-${stage}`}
        tabIndex={0}
      >
        <p aria-live="polite">{stages[stage].description}</p>
        <a href={PROJECT_URL} target="_blank" rel="noreferrer">
          View Perranvale Publishing <ArrowUpRight size={14} />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <noscript>
        <style>{".stage-console { visibility: hidden; }"}</style>
        <p className="stage-nojs">
          A real website by Jameson Web Studio. The finished design is shown
          above.
        </p>
      </noscript>
    </div>
  );
}
