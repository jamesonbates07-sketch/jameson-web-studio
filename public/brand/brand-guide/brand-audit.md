# Jameson Web Studio brand audit

Audit date: 20 July 2026

Scope: the `jamesonbates07-sketch/jameson-web-studio` repository at commit
`b91149f`, before the brand pack was added.

## Current logo structure

The home-page logo is not a reusable image file. It is a React `Logo()`
component made from nested text spans:

- a 36 × 36 px dark rounded square;
- a bright green `J.` typeset as live text;
- a two-line `Jameson / Web Studio` wordmark typeset as live text.

The privacy-page header duplicates the square mark but changes the wordmark to a
single line. The app icon is a separate 64 × 64 SVG with a dark rounded square
and a green geometric `J`, but it has no period.

## Current colours

| Role             | HEX       | RGB             | HSL              |
| ---------------- | --------- | --------------- | ---------------- |
| Paper background | `#F2F0E9` | `242, 240, 233` | `47°, 26%, 93%`  |
| Ink              | `#171914` | `23, 25, 20`    | `84°, 11%, 9%`   |
| Acid green       | `#D8FF3E` | `216, 255, 62`  | `72°, 100%, 62%` |
| Moss green       | `#315C45` | `49, 92, 69`    | `148°, 30%, 28%` |

The ink/paper contrast ratio is 15.53:1. The acid/ink contrast ratio is
15.43:1. Acid green on white is only 1.15:1 and must not be used for body text
or fine standalone lettering.

## Current typography

- Body and navigation: `Arial, Helvetica, sans-serif`
- Heavy display: `"Arial Black", "Arial Bold", Arial, Helvetica, sans-serif`
- Editorial accent: `Georgia, "Times New Roman", serif`
- Code/technical details:
  `"SFMono-Regular", Consolas, "Liberation Mono", monospace`
- Header tile: 14 px, weight 900, letter-spacing −1.12 px
- Home wordmark: 13.12 px, weight 800, line-height 12.464 px,
  letter-spacing −0.4592 px

Because the current wordmark is live Arial text, its width and letter shapes can
vary by platform and installed font.

## Current spacing and header dimensions

Measured in the rendered home page at a 1280 × 720 px viewport:

- Header height: 96 px
- Logo position: 16 px from the left, 30 px from the top
- Complete home logo: 115.32 × 36 px
- Tile: 36 × 36 px
- Tile corner radius: 10 px
- Tile-to-wordmark gap: 12 px
- Home wordmark: 67.32 × 24.92 px
- Content shell: `min(100% - 2rem, 86rem)`

The header is absolutely positioned over the hero. The privacy-page header uses
the same 96 px height but a different wordmark treatment.

## Current favicon and social metadata

Next.js automatically exposes `app/icon.svg` as the only favicon. It is a
scalable SVG with an `any` size declaration. There is currently:

- no `.ico` fallback;
- no 16 × 16 or 32 × 32 PNG;
- no Apple touch icon;
- no Android icon set;
- no web app manifest;
- no declared Open Graph image;
- no declared Twitter image.

The new pack supplies these files but deliberately does not wire them into
`app/layout.tsx` during this review task.

## Existing brand files

Before this pack, the only standalone brand-like file was `app/icon.svg`.
The header logos were duplicated in `app/page.tsx` and
`app/privacy/page.tsx`. There was no `public/brand/` directory, master logo,
brand guide, social artwork, document logo or email asset.

## Inconsistencies found

1. The header tile says `J.` while the app icon contains only `J`.
2. The home page uses a two-line wordmark; the privacy page uses a single line.
3. The header wordmark is platform-dependent live text; the app icon is a path.
4. Logo markup is duplicated rather than sourced from one approved asset.
5. Corner proportions differ: 10 px on a 36 px header tile versus 16 px on a
   64 px app icon.
6. The logo has no documented clear space, minimum size or background rules.
7. Favicon support is SVG-only and social metadata has no preview image.
8. No monochrome, dark-background, email, social or document versions exist.

## Audit boundary

No existing logo component, app icon, favicon metadata, Open Graph metadata or
live page header has been changed as part of the asset-pack proposal.
