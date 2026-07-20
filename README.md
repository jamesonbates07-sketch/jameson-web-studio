# Jameson Web Studio

A polished, responsive one-page portfolio for a freelance web design service based in North London. Built with Next.js, TypeScript and Tailwind CSS, with a fully static production export for GitHub and Cloudflare Pages.

## What is included

- One-page studio portfolio with clear service positioning and calls to action
- Featured Archway Barber Co. portfolio demonstration
- Transparent fictional-project notice
- £350 launch offer and full package breakdown
- Three-step process and optional website care offer
- Email links pre-filled for a free website review request
- Separate privacy page at `/privacy/`
- Responsive, accessible layout with reduced-motion support
- Static export configuration in `next.config.ts`

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Lucide icons
- Static HTML export

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Brand asset review

The proposed Jameson Web Studio logo system is organised under
`public/brand/`. SVG is the master format; derived PNG, favicon, social, email
and document files can be regenerated with:

```bash
npm run brand:generate
```

Start the development server and open
[http://localhost:3000/brand-preview/](http://localhost:3000/brand-preview/) to
review every logo version and the main usage examples. This internal route is
set to `noindex,nofollow` and is not linked from the live site. The approved
implementation branch connects the compact responsive header logo, favicon set,
manifest and Open Graph image. Merge and deployment remain separate steps.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` creates the deployable static site in the `out` directory.

## Deploy to Cloudflare Pages from GitHub

1. Create a GitHub repository and push this project to the `main` branch.
2. In Cloudflare, open **Workers & Pages**, choose **Create application**, select the **Pages** tab, then choose **Import an existing Git repository**.
3. Connect the GitHub repository and use these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Next.js (Static HTML Export)` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |

No environment variables are required. The `.node-version` file pins Node.js `22.16.0` for Cloudflare's build environment.

After deployment, Cloudflare Pages will create a `*.pages.dev` address and automatically build new commits and pull-request previews from GitHub.

## Static export notes

The project uses:

```ts
output: "export"
trailingSlash: true
images: { unoptimized: true }
```

This means there is no Node.js server, server action, API route or Pages Function to maintain after deployment. All routes are pre-rendered as static files.

## Before publishing

- Replace or confirm the contact email in `app/page.tsx` and `app/privacy/page.tsx`.
- Review the prices and package wording.
- Review the privacy notice so it accurately matches the services, tools and data-handling practices used by the business.
- Add the final production domain to the site metadata if required.

## Project link

The featured Archway Barber Co. demonstration links to:

<https://archway-barber-co.pages.dev/>

The website clearly identifies this as a fictional portfolio demonstration, not a real client or trading business.
