"use client";

import { useEffect } from "react";
import { SITE_EMAIL } from "@/lib/site";

const THEME_KEY = "jws-theme";

/**
 * Progressive enhancement for the home page. Every section renders and reads
 * correctly without this; it only adds motion, the theme switch and the
 * email-draft form.
 */
export function HomeEffects() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const cleanups: Array<() => void> = [];
    const on = <K extends keyof WindowEventMap>(
      target: Window,
      type: K,
      fn: (e: WindowEventMap[K]) => void,
      opts?: AddEventListenerOptions,
    ) => {
      target.addEventListener(type, fn, opts);
      cleanups.push(() => target.removeEventListener(type, fn));
    };
    const onEl = (el: Element | null, type: string, fn: EventListener) => {
      if (!el) return;
      el.addEventListener(type, fn);
      cleanups.push(() => el.removeEventListener(type, fn));
    };

    // Theme
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved) root.dataset.theme = saved;
    } catch {}
    onEl(document.getElementById("themeBtn"), "click", () => {
      const dark = root.dataset.theme
        ? root.dataset.theme === "dark"
        : matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      try {
        localStorage.setItem(THEME_KEY, root.dataset.theme);
      } catch {}
    });

    // Hero build machine
    const machine = document.getElementById("machine");
    const prog = document.getElementById("mcProg");
    let raf = 0;
    if (machine && prog) {
      const btns = machine.querySelectorAll<HTMLButtonElement>(".mc-steps button");
      let stage = 1;
      let auto = !reduce;
      let t0 = performance.now();
      let last = 0;
      const DUR = 2800;
      const setStage = (s: number) => {
        stage = s;
        machine.dataset.stage = String(s);
        btns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.s === String(s))));
        t0 = performance.now();
      };
      btns.forEach((b) =>
        onEl(b, "click", () => {
          auto = false;
          prog.style.width = "100%";
          setStage(Number(b.dataset.s));
        }),
      );
      setStage(reduce ? 3 : 1);
      let visible = true;
      // Pause the demo while it is off screen or the tab is hidden.
      const vis = new IntersectionObserver((es) => {
        visible = es[0]?.isIntersecting ?? true;
      });
      vis.observe(machine);
      cleanups.push(() => vis.disconnect());
      const loop = (now: number) => {
        if (!visible || document.hidden) t0 += now - (last || now);
        last = now;
        if (auto && visible && !document.hidden) {
          const p = Math.min((now - t0) / DUR, 1);
          prog.style.width = `${((stage - 1 + p) / 3) * 100}%`;
          if (p >= 1) setStage((stage % 3) + 1);
        }
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    // Close the mobile menu after choosing a link
    document.querySelectorAll(".mnav-panel a").forEach((a) =>
      onEl(a, "click", () => document.querySelector(".mnav")?.removeAttribute("open")),
    );

    // Reveal on scroll
    root.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Scroll-driven details
    const bar = document.querySelector<HTMLElement>(".progress");
    const shot = document.getElementById("parallaxShot");
    const quote = document.getElementById("aboutQuote");
    const words = quote ? quote.querySelectorAll(".w") : [];
    const steps = document.getElementById("steps");
    const line = document.getElementById("stepsLine");
    const stepEls = steps ? steps.querySelectorAll(".step") : [];
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a"));
    const secs = navLinks.map((a) => document.querySelector(a.getAttribute("href") || ""));
    const clamp = (n: number) => Math.min(Math.max(n, 0), 1);

    const onScroll = () => {
      const h = innerHeight;
      const y = scrollY;
      const mobile = innerWidth <= 860;
      document.body.classList.toggle("scrolled", y > 20);
      if (bar) bar.style.transform = `scaleX(${y / Math.max(root.scrollHeight - h, 1)})`;

      if (shot && !reduce && shot.parentElement) {
        const r = shot.parentElement.getBoundingClientRect();
        shot.style.transform = `translateY(${-((h - r.top) / (h + r.height)) * 15}%)`;
      }
      if (quote) {
        const qr = quote.getBoundingClientRect();
        const qp = reduce ? 1 : clamp((h * 0.85 - qr.top) / (qr.height + h * 0.35));
        const n = Math.round(qp * words.length);
        words.forEach((w, i) => w.classList.toggle("on", i < n));
      }
      if (steps && line) {
        const sr = steps.getBoundingClientRect();
        const sp = reduce ? 1 : clamp((h * 0.75 - sr.top) / (sr.height * 0.9));
        line.style.width = mobile ? "100%" : `${sp * 100}%`;
        line.style.height = mobile ? `${sp * 100}%` : "100%";
        stepEls.forEach((s, i) =>
          s.classList.toggle("lit", sp > 0 && sp >= (mobile ? i / 2.2 : i / 2) - 0.001),
        );
      }
      let cur = -1;
      secs.forEach((s, i) => {
        if (s && s.getBoundingClientRect().top < h * 0.4) cur = i;
      });
      navLinks.forEach((a, i) => a.classList.toggle("active", i === cur));
    };
    on(window, "scroll", onScroll, { passive: true });
    on(window, "resize", onScroll);
    onScroll();

    // Cursor glow on dark panels
    document.querySelectorAll<HTMLElement>(".bp-work, .bp-contact").forEach((sec) => {
      const g = sec.querySelector<HTMLElement>(".glow");
      onEl(sec, "pointermove", (ev) => {
        const e = ev as PointerEvent;
        const r = sec.getBoundingClientRect();
        g?.style.setProperty("--mx", `${e.clientX - r.left}px`);
        g?.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    });

    // Care demo typing
    const word = document.getElementById("careWord");
    const status = document.getElementById("careStatus");
    const statusText = document.getElementById("careStatusText");
    let timer: ReturnType<typeof setTimeout> | undefined;
    const runCare = () => {
      if (!word || !status || !statusText) return;
      clearTimeout(timer);
      const done = () => {
        status.classList.add("ok");
        statusText.textContent = "Ready to review";
      };
      word.textContent = "business";
      status.classList.remove("ok");
      statusText.textContent = "Editing…";
      if (reduce) {
        word.textContent = "customers";
        done();
        return;
      }
      const from = "business";
      const to = "customers";
      let i = from.length;
      let phase: "del" | "type" = "del";
      const tick = () => {
        if (phase === "del") {
          word.textContent = from.slice(0, --i);
          if (i <= 0) phase = "type";
          timer = setTimeout(tick, 70);
        } else {
          word.textContent = to.slice(0, ++i);
          if (i < to.length) timer = setTimeout(tick, 95);
          else done();
        }
      };
      timer = setTimeout(tick, 900);
    };
    onEl(document.getElementById("careReplay"), "click", runCare);
    const careDemo = document.getElementById("careDemo");
    const careIO = new IntersectionObserver(
      (es) => {
        if (es[0]?.isIntersecting) {
          runCare();
          careIO.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (careDemo) careIO.observe(careDemo);

    onEl(document.querySelector('[data-topic="care"]'), "click", () => {
      const c = document.getElementById("c4") as HTMLInputElement | null;
      if (c) c.checked = true;
    });

    // Review form -> email draft in the visitor's mail app
    const form = document.getElementById("reviewForm") as HTMLFormElement | null;
    onEl(form, "submit", (e) => {
      e.preventDefault();
      if (!form) return;
      const biz = form.elements.namedItem("biz") as HTMLInputElement;
      const url = form.elements.namedItem("url") as HTMLInputElement;
      const msg = form.elements.namedItem("msg") as HTMLTextAreaElement;
      const name = biz.value.trim();
      if (!name) {
        biz.setAttribute("aria-invalid", "true");
        biz.focus();
        return;
      }
      biz.removeAttribute("aria-invalid");
      const helps = Array.from(form.querySelectorAll<HTMLInputElement>(".chips input:checked")).map(
        (c) => c.value,
      );
      const body = `Hi Jameson,\n\nBusiness name: ${name}\nCurrent website: ${url.value.trim() || "None yet"}\nI'd like help with: ${helps.join(", ") || "Not sure yet"}\n\n${msg.value.trim()}\n\nThanks,`;
      window.location.href = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(
        `Website enquiry: ${name}`,
      )}&body=${encodeURIComponent(body)}`;
    });
    const copyBtn = document.getElementById("copyBtn");
    onEl(copyBtn, "click", async () => {
      if (!copyBtn) return;
      try {
        await navigator.clipboard.writeText(SITE_EMAIL);
        copyBtn.textContent = "Copied ✓";
      } catch {
        copyBtn.textContent = "Select & copy";
      }
      setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
    });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      io.disconnect();
      careIO.disconnect();
      cleanups.forEach((c) => c());
    };
  }, []);

  return null;
}
