# Jameson Web Studio

A responsive studio website for independent businesses in North London. Built with Next.js, TypeScript, Tailwind CSS and a static export for Cloudflare Pages.

## Website

- Approved Jameson logo and paper, charcoal and lime identity
- Geist typography, system light/dark themes and reduced-motion support
- Perranvale Publishing homepage case study with authentic desktop, phone and book-page captures
- Websites from £350, one consolidated revision round, optional £39/month care
- Existing prefilled free-review email route, with no form backend or trackers
- Existing `/privacy/`, `/brand-preview/`, `#work`, `#offer`, `#process` and `#contact` destinations
- Native mobile navigation that also works without JavaScript

## Develop and check

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

The build creates `out/`. It uses `output: "export"`, `trailingSlash: true` and pre-generated image variants. There is no production Node server or image-optimisation endpoint. A local static preview can be served with `python3 -m http.server 4173 --directory out`.

## Assets

The existing SVG brand pack is preserved under `public/brand/`. `npm run brand:generate` regenerates the pack, followed by the refreshed website social card. `npm run social:generate` regenerates only the 1200 × 630 Open Graph SVG and PNG from the original logo and real project screenshot.

Project captures in `public/work/perranvale/` show the actual [Perranvale Publishing website](https://www.perranvalepublishing.com/). They are WebP variants, not generated interfaces. See `docs/asset-provenance.md` for capture details. No client testimonial or commercial-performance metric is claimed.

The decorative care-section paper image is generated artwork, kept separate from project evidence.

## Preview and release

The existing Cloudflare Pages project is `jameson-web-studio`. Current hosting uses direct uploads, not automatic GitHub builds. Its production branch is `main`; use a named non-production branch for review:

```bash
wrangler pages deploy out --project-name jameson-web-studio --branch redesign-perranvale-refresh
```

Cloudflare supplies `X-Robots-Tag: noindex` for preview deployments. Verify that response header after upload. `/brand-preview/` remains unlinked and `noindex,nofollow`. Production canonicals, robots and sitemap continue to use `https://jamesonwebstudio.co.uk`.

Production release follows review approval. Preserve the previous production deployment in Cloudflare for rollback. Do not change DNS for this visual refresh.

## Configuration

Site identity, email, Perranvale link and prefilled enquiry message live in `lib/site.ts`. No environment variables are required. The Cloudflare Node build version remains in `.node-version`.
