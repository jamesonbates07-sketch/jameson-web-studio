# Redesign review — 5 September 2026

Implementation branch: `redesign/perranvale-refresh`. Reviewed application commit: `f49084b`.

Review preview: https://99b64e39.jameson-web-studio.pages.dev

Branch alias: https://redesign-perranvale-refresh.jameson-web-studio.pages.dev

## Delivery and release status

The refreshed homepage uses the approved studio logo, Geist, semantic light/dark themes and authentic Perranvale Publishing project captures. The six sections, navigation labels, anchors, email destination and prefilled review message are preserved. The Privacy page follows the new typography and theme while retaining its policy wording. Social artwork uses the real project screenshot.

Jameson approved production release on 5 September 2026 after reviewing the preview. PR #6 was merged to `main` as `8b2f5b2`, and the previously verified static export was published to https://jamesonwebstudio.co.uk/ through the existing Pages project. Production deployment: https://cad06717.jameson-web-studio.pages.dev.

The custom domain serves the new Perranvale homepage and remains indexable. Cloudflare's preview response still includes `X-Robots-Tag: noindex`; the internal brand preview retains its own `noindex,nofollow` metadata. Public canonicals and structured data retain the production domain. The existing domain email-protection feature rewrites email markup; browser verification confirmed every review button retains the correct decoded recipient, subject and prefilled message.

Previous production deployment retained for rollback: `9664ff8f-40ad-4dd4-bb82-afe5c60a7e65`, source `892c7aa`, https://9664ff8f.jameson-web-studio.pages.dev. No DNS change was needed.

## Verification

- `npm run lint`, `npm run typecheck` and `npm run build` passed. The production build exports all existing routes as static files.
- Dependency audit reports zero vulnerabilities. Compatible Next/React patches and audited transitive updates are included.
- Reviewed at 390, 768, 1024 and 1440px in light and dark styles. No horizontal overflow. Hero headline occupies two lines; both hero actions remain on one row and within the initial viewport.
- Reviewed the desktop and mobile work, offer, process, care and contact layouts. Authentic image assets load with reserved dimensions. Privacy was checked at mobile width in both styles.
- Mobile navigation opens with the keyboard, Escape closes it and restores focus, and selecting Work closes the menu and reaches the correct anchor. Focus styles have visible contrast in both themes.
- Checked reduced motion: no hero animation, no smooth scrolling and no Motion reveal transform when reduction is requested. Static content remains visible before JavaScript.
- Verified enquiry links retain the original recipient, subject and message. The Perranvale live link uses the verified client domain. No email was sent or checkout started.
- Homepage, Privacy, brand preview, robots, sitemap and social image return HTTP 200. Active homepage source, configuration and documentation contain no previous demonstration-client references. Its separate website was not changed.

The in-app browser supports viewport overrides but does not expose OS media emulation. Dark-theme checks used a local test server applying the existing dark media-query CSS and logo source. Reduced-motion checks used that same approach plus a test-only `matchMedia` response before hydration. These test transformations are outside the application and were not deployed. System preference switching should also be spot-checked on a physical device before release.

## Lighthouse measurements

Lighthouse 13.4.1, hosted immutable preview above, separate final mobile and desktop runs. Mobile uses the default simulated throttling (4× CPU slowdown, 150ms RTT, approximately 1.6Mbps); desktop uses the desktop preset. These are lab measurements, not field Core Web Vitals.

| Metric | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | 94 | 100 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| LCP | 2.94s | 0.7s |
| CLS | 0 | 0 |
| Total blocking time | 80ms | 0ms |
| First contentful paint | 1.0s | 0.3s |

CLS meets the <0.1 target in both runs. Desktop meets the <2.5s LCP target; throttled mobile remains above it. Earlier isolated mobile testing measured 2.7s; initial concurrent runs were slower. The final figures above are retained rather than selecting the fastest result. Hero screenshot movement was removed to improve its initial rendering and visual completion.

SEO scores 69 on both preview runs because indexing is intentionally blocked by Cloudflare's preview header. The only failing binary Lighthouse audit is preview crawlability. This does not measure production indexing.

Local evidence is retained in the ignored `.qa/` folder: `final-mobile.report.{html,json}`, `final-desktop.report.{html,json}` and `screenshots/`. Final review images are `screenshots/final-desktop.png` and `screenshots/final-mobile.png`; the eight viewport/theme captures are also retained. The stitched full-page capture is unsuitable for review because browser stitching duplicated parts of the page; use the viewport captures instead.
