"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { REVIEW_MAILTO, SITE_EMAIL } from "@/lib/site";

/** Email stays a real link; copying provides an alternative for webmail users. */
export function ReviewContact() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const [emailOpened, setEmailOpened] = useState(false);
  const reset = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (reset.current) clearTimeout(reset.current);
    },
    [],
  );
  const copy = async () => {
    if (reset.current) clearTimeout(reset.current);
    try {
      await navigator.clipboard.writeText(SITE_EMAIL);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    reset.current = setTimeout(() => setStatus("idle"), 6000);
  };
  return (
    <div className="review-contact">
      <h3>A fresh pair of eyes on your website.</h3>
      <p className="review-expectation">
        I’ll look at the design, mobile layout and how easy it is to get in
        touch, then email you a few practical suggestions.
      </p>
      <div className="review-send">
        <span>To get started, send me:</span>
        <ul>
          <li>Your business name</li>
          <li>Your website link, if you have one</li>
          <li>What you’d like help with</li>
        </ul>
      </div>
      <a
        className="button button-primary"
        href={REVIEW_MAILTO}
        onClick={() => setEmailOpened(true)}
      >
        Request a free review <ArrowUpRight size={18} />
      </a>
      <p className="email-explainer">
        Opens a draft in your email app. Send the email there to request your
        review. There’s no obligation to book a project.
      </p>
      {emailOpened && (
        <p className="email-help" role="status">
          No draft opened? Use the address below in your usual email service.
        </p>
      )}
      <div className="email-copy-row">
        <a className="contact-email" href={`mailto:${SITE_EMAIL}`}>
          {SITE_EMAIL}
        </a>
        <button
          className="copy-email"
          type="button"
          onClick={copy}
          aria-label={
            status === "copied" ? "Email address copied" : "Copy email address"
          }
        >
          {status === "copied" ? <Check size={17} /> : <Copy size={17} />}
        </button>
      </div>
      <p className="copy-status" role="status">
        {status === "copied"
          ? "Email address copied. Paste it into your email service."
          : status === "failed"
            ? "Copy is unavailable here. Select and copy the email address above."
            : "Prefer webmail? Copy the address and write your own message."}
      </p>
      <noscript>
        <style>{".copy-email { display:none; }"}</style>
      </noscript>
    </div>
  );
}
