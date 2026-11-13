# Jameson Web Studio

A responsive studio website for independent businesses in North London. Built with Next.js, TypeScript, Tailwind CSS and a static export for Cloudflare Pages.

## Website

- Approved Jameson logo and paper, charcoal and lime identity
- Interactive website-building hero: an actual Perranvale project moves through layout, design and the finished responsive website
- Oversized Geist typography, system light/dark themes and reduced-motion support
- Responsive CTA hover feedback, staggered typography and progressive scroll reveals
- Perranvale Publishing homepage case study with authentic desktop, phone and book-page captures
- Websites from £350, one consolidated revision round, optional £39/month care
- A clearer free-review explanation, prefilled email draft and email-copy fallback, with no form backend or trackers
- Personal introduction, explained package scope and accessible native scope disclosures
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

Project captures in `public/work/perranvale/` show the actual [Perranvale Publishing website](https://www.perranvalepublishing.com/). They are WebP variants, not generated interfaces. See `docs/asset-provenance.md` for capture details. `npm run assets:optimize` regenerates the smaller phone variants. The interactive website-building hero is described in `docs/immersive-redesign.md`. No client testimonial or commercial-performance metric is claimed.

The care section uses a custom, clearly labelled interactive text-refinement study built from the real studio identity. Its replay is a local illustration and never changes live website content. The previous folded-paper asset has been retired. Jameson approved publication of this care-visual replacement on 13 November 2026. Production deployment: `dcadb780-36d4-40bf-bdf6-902d6bbbf948`; previous production `94e7380d-9af3-4270-8f25-7cdba28851ba` is retained for rollback. Live responsive and interaction checks passed.

The 13 November follow-up polish was approved and published to the live site. Production deployment: `94e7380d-9af3-4270-8f25-7cdba28851ba`. The previous `6a2ffab1-1968-410c-83bd-9deeaff5d829` deployment is retained for rollback.

## Preview and release

The existing Cloudflare Pages project is `jameson-web-studio`. Current hosting uses direct uploads, not automatic GitHub builds. Its production branch is `main`; use a named non-production branch for review:

```bash
wrangler pages deploy out --project-name jameson-web-studio --branch redesign-perranvale-refresh
```

Cloudflare supplies `X-Robots-Tag: noindex` for preview deployments. Verify that response header after upload. `/brand-preview/` remains unlinked and `noindex,nofollow`. Production canonicals, robots and sitemap continue to use `https://jamesonwebstudio.co.uk`.

Production release follows review approval. Preserve the previous production deployment in Cloudflare for rollback. Do not change DNS for this visual refresh.

## Configuration

Site identity, email, Perranvale link and prefilled enquiry message live in `lib/site.ts`. No environment variables are required. The Cloudflare Node build version remains in `.node-version`.
