# Website imagery

## Perranvale project evidence

Captured on 5 September 2026 from the live website using the in-app browser:

- `public/work/perranvale/desktop-*.webp`: homepage at 1440 × 900. The opening scene was selected and the carousel paused through its public controls.
- `public/work/perranvale/mobile-390.webp`: same homepage at 390 × 844.
- `public/work/perranvale/book-*.webp`: `/product-page/regeneration-75-years-of-london-s-south-bank` at 1440 × 1000. No checkout was started or order created.

These are real website screenshots. Only proportional resizing and WebP compression were applied. Original PNG captures are retained in the ignored local `.qa/` folder. The desktop and book captures have 720, 1080 and 1440px variants; dimensions are reserved in markup to avoid layout shifts.

The case study describes the delivered responsive website, book presentation, author content and Wix-hosted checkout integration. It does not reproduce private correspondence, testimonials, billing information or project pricing. The client’s own yellow identity inside screenshots is part of the evidence, not a second studio accent colour.

## Decorative care image

File: `public/images/care-paper.webp` (1200 × 800).

Created with the built-in imagegen tool, then resized and compressed. This is abstract decorative artwork, not a photograph of the studio or client work. It has empty alternative text.

Prompt: “Use case: stylized-concept. Asset type: small decorative still life for a web design studio's website care section. Landscape 3:2. A sculptural loop of matte chartreuse paper, acid lime #D8FF3E, resting on a warm charcoal #171914 surface. One folded paper strip forming a gentle continuous arch, beautifully lit from the upper left, realistic paper texture, restrained soft shadow, abundant charcoal negative space. Minimal editorial product photography, close crop, tangible and quiet. No lettering, text, logo, screens, devices, people, interface, office, gradients, glowing lights, or additional colours. This is an abstract decorative material study, never client work or proof of results.”


## 13 November 2026 responsive refinement

Added 160px and 260px phone variants derived directly from the existing genuine 390px Perranvale capture, using Sharp WebP quality 80. Regenerate with `npm run assets:optimize`. Hero and case-study sizes now reflect their displayed widths. Added desktop AVIF variants at 720, 1080 and 1440px (quality 55) for the hero, with the original WebP captures as format fallbacks. The hero uses a format-specific responsive preload. Original desktop, phone and book-page captures remain preserved. Launch-era captures are identified as such on the case study; no results are inferred from them.

The new `public/social/studio-presence.png` sharing image combines the existing on-dark SVG logo, the retained headline and the genuine desktop capture. Regenerate with `npm run social:generate`. The original logo masters are unchanged.
