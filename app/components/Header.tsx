"use client";

import Link from "next/link";

import { useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { REVIEW_MAILTO } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const close = (restoreFocus = false) => {
    if (!menuRef.current) return;
    menuRef.current.open = false;
    if (restoreFocus) menuRef.current.querySelector("summary")?.focus();
  };
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" aria-label="Jameson Web Studio home">
          <BrandLogo priority />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#offer">Offer</Link>
          <Link href="/#process">Process</Link>
        </nav>
        <a className="button button-quiet header-review" href={REVIEW_MAILTO}>
          Free website review <ArrowUpRight size={16} />
        </a>
        <details
          ref={menuRef}
          className="mobile-menu"
          onKeyDown={(event) => {
            if (event.key === "Escape") close(true);
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) close();
          }}
        >
          <summary aria-label="Navigation menu">
            <Menu size={23} className="menu-open" />
            <X size={23} className="menu-close" />
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/#work" onClick={() => close()}>
              Work <ArrowUpRight size={18} />
            </Link>
            <Link href="/#offer" onClick={() => close()}>
              Offer <ArrowUpRight size={18} />
            </Link>
            <Link href="/#process" onClick={() => close()}>
              Process <ArrowUpRight size={18} />
            </Link>
            <a href={REVIEW_MAILTO} onClick={() => close()}>
              Free website review <ArrowUpRight size={18} />
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
