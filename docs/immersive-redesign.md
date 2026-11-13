## Production release · 13 November 2026

Jameson approved the reviewed hero with “Looks good” and then explicitly authorised replacing the live website. Published the exact reviewed `out/` export to the existing Cloudflare Pages project `jameson-web-studio`, production branch `main`.

- New production deployment: `6a2ffab1-1968-410c-83bd-9deeaff5d829`, https://6a2ffab1.jameson-web-studio.pages.dev/.
- Live domain verified: https://jamesonwebstudio.co.uk/.
- Previous production retained for rollback: `8d40b3f1-d22f-4b07-896d-7733eacddd5b`, https://8d40b3f1.jameson-web-studio.pages.dev/.
- The deployed export has 113 files; its SHA-256 manifest is retained privately in `.qa/release-2026-11-13-manifest.json`. This release contains reviewed uncommitted working-tree changes; the deployment's base Git hash is not a standalone source commit for the new implementation.
- Live browser verified the three stages, replay completion, 390px mobile layout/menu and anchor closure, actual decoded enquiry email/subject, Privacy and hero images; no uncaught page errors. Desktop and mobile screenshots retained locally. No enquiry email was sent.
- HTTP 200 verified for home, Privacy, internal brand preview, robots, sitemap and representative logo/project assets. Home remains index/follow with production domain metadata; internal brand preview remains noindex. Production response has no preview noindex header.
- No DNS, pricing, care-plan, tracking or client-account changes. Prior local-only and approval-pending statements in this document are superseded by this release.

# Website-building hero revision · 13 November 2026

This revision supersedes the abstract sculpture hero documented below. Jameson rejected that concept as unrelated to the studio’s work and authorised a new hero centred on web design and the transformation of an online presence.

The current hero uses real Perranvale Publishing desktop and mobile captures. It presents a clearly labelled layout study, a visual design layer and the finished responsive website. The layout study is a process illustration, not a claim about an earlier client website. Typography, business facts, existing logo, palette, contact actions and all lower-page sections are retained.

The headline and visual have separate columns at desktop sizes. Mobile recomposes them vertically. CSS perspective and subtle pointer response establish depth without WebGL or an animation runtime. An initial desktop sequence assembles the interface and reaches its resting state in under two seconds. Layout / Design / Website tabs let visitors inspect the stages; Replay build walks through them. Manual selection cancels replay, and pending timers are cleaned up on unmount. Keyboard arrow keys, Home and End operate the tabs. Reduced motion removes spatial transitions and shows the finished website immediately. Without JavaScript, the real finished capture and project link remain visible and inactive controls are hidden.

No new dependencies, client claims, pricing changes, backend or tracking were introduced. The sculpture component and its public asset were removed. Publication was subsequently approved and completed as recorded above. No DNS change was made.

Verification: build, lint, standalone TypeScript and diff whitespace checks passed. Browser checks exercised all three stages at 320, 390, 768, 1024 and 1440px (15 layout/state combinations), with no horizontal document overflow or projected layers overlapping the process controls. Desktop headline and scene columns remain separate. Dark desktop, mobile and intermediate layouts and light mobile were visually inspected. The 1366 × 768 desktop check confirmed the primary CTA remains in the initial viewport.

Keyboard arrows/Home/End, stage selection, replay completion, manual cancellation of replay, reduced motion, no-JavaScript static content, mobile navigation closure, unchanged enquiry destination and loaded hero images passed. No uncaught page errors were recorded. The initial desktop motion was inspected through early, middle and completed browser captures; the scene reaches its finished state and does not loop. Screenshots and local QA evidence are in ignored `output/playwright/` and `.qa/`.

Previous Lighthouse figures below apply to the superseded version and are not measurements of this hero. Physical-device GPU/compositor performance and Safari were not measured in this revision.

---

## Earlier iteration (superseded)

# Immersive studio redesign · 13 November 2026

## Verified brief and audit

Private implementation authorised by Jameson. Audience: independent businesses seeking a clear, professional website. Primary conversion: the existing free website review email. Identity remains Jameson Web Studio, matching the established logo and verified business records; the request's “Jameson Web Services” wording is not treated as a rebrand.

The existing Next.js 16 / React 19 / TypeScript / Tailwind 4 site was retained. Its approved original SVG logo, acid #D8FF3E, ink #171914 and paper #F2F0E9 identity, Geist font, metadata, structured data, canonicals, sitemap, robots, Privacy wording and genuine Perranvale captures remain. Existing Work / Offer / Process navigation and all route/anchor destinations remain. The previous uncommitted copy and layout changes were inspected and snapshotted in ignored `.qa/before-immersive/` before implementation; their explicit package wording, selectable email and full-width project presentation are retained in the new composition.

Confirmed commercial offer: websites from £350 for up to five standard pages and one consolidated revision round; £175 deposit and £175 before launch for a £350 job; optional £39/month care with approximately 30 minutes of small updates. Larger work and third-party costs remain separate. No new business claims, portfolio clients, testimonials, awards, deadlines, ecommerce, trackers, form backend or recurring services were added. No business manual or client register change is required.

## Creative direction

Original editorial / sculptural aesthetic, design variance 9, motion intensity 8, visual density 3. Oversized two-line typography and an acid-green folded-loop sculpture create the first impression. The layout then gives the real Perranvale project a large photographic presentation, followed by distinct offer, process, care and contact compositions. System light/dark themes share the same palette and structure.

The sculpture is original parametric geometry rendered with native WebGL and custom lighting shaders. It uses a single draw call without a Three.js dependency. Pointer interaction affects its orientation; its slow rotation is capped at approximately 30 fps to limit GPU work, while interface animations use normal browser refresh. Pixel density is capped at 1.5. Touch-first devices and known software renderers initially use the static artwork with an explicit Explore in 3D control, keeping rendering out of their initial load. Offscreen/hidden rendering is suspended. Paused and reduced-motion scenes do not continuously redraw. GPU resources and observers are cleaned up on unmount. Unsupported WebGL, shader failure and context loss retain the local transparent WebP poster. The poster is a render of the same original geometry, not stock imagery or client evidence.

The main CTA and navigation use directional hover feedback, disabled for reduced motion. Hero typography has a short staggered introduction. Project imagery has a progressive CSS scroll reveal; unsupported browsers retain the complete image. Section reveals use native IntersectionObserver and CSS animations, avoiding an animation runtime download. Native mobile navigation works without JavaScript and has keyboard Escape/focus restoration with JavaScript.

## Run and review

Run `npm ci` if dependencies are absent, then `npm run dev` from `studio-website/`. No additional dependencies or environment variables are needed. `npm run build` creates `out/`; serve it with `python3 -m http.server 4187 --directory out` for a local production review.

The contact action opens the visitor's email application with the established recipient, subject and message. No new enquiry form is presented and no email is sent automatically.

Implementation remains local. No hosting upload, live-domain change, DNS change or client communication is part of this task. Production publication remains a separate reviewed decision.

## Validation

See the final verification notes below. Browser screenshots and local audit data live in ignored `.qa/` and `output/playwright/` directories, not in the static export.

### Final results

- `npm run lint`, `npm run typecheck`, `npm run build` and `git diff --check` passed. The static build exports the existing homepage, Privacy, internal brand preview, sitemap, robots and icon routes.
- Browser automation verified 320, 390, 768, 1024 and 1440px in light and dark: no document overflow, no headline clipping, primary hero CTA inside the initial 900px test viewport. Visual review also covered 390 × 844 mobile and the complete desktop page.
- Verified native menu opening, keyboard activation, Escape/focus restoration, Work anchor navigation/menu closure, unchanged encoded email recipient/subject/body, Privacy route, successfully decoded local images, animation pause via matching settled canvas screenshots and reduced-motion stability.
- Verified no-JavaScript navigation/poster, unavailable-WebGL fallback, and touch-device initial poster plus successful explicit 3D activation. No uncaught page errors in the final interaction run. Email links were inspected without sending messages; there is no contact form to submit.
- Final Lighthouse 13.6 local lab run with gzip text compression: mobile **94 performance / 100 accessibility / 100 best practices / 100 SEO**, LCP **2.53s** (slightly above the 2.5s target), CLS **0**, TBT **200ms**. Desktop: **100 / 100 / 100 / 100**, LCP **0.6s**, CLS **0**, TBT **0ms**. No failing binary audits. These are local lab results, not field Core Web Vitals or a guarantee of live performance. The initial uncompressed Python-server mobile result after GPU fallback was 80; compression materially affects this Next.js export.
- Lighthouse used a separately launched native ARM headless browser through CDP because the installed x64 Node runtime is rejected by the Lighthouse CLI's Apple Silicon launcher. Browser tests also used the installed ARM headless shell after the installed modified Chrome renderer stalled. Software-rendered browser audits exercise the deliberate static-first path; full-motion 3D activation, pause and reduced-motion were tested separately. Physical hardware GPU frame rate, Safari and live delivery remain unmeasured.
- Local production preview: `http://localhost:4187/`. The review server on port 4188 additionally serves gzip text for the lab measurement. Neither server is publicly deployed.

The original logo assets, current email flow and business rules are retained. No commercial records need updating. No production release has been performed.
