import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

// Original logo artwork and an authentic project capture, composed for link sharing.
const logo = (
  await readFile("public/brand/svg/logo-compact-full-colour.svg")
).toString("base64");
const project = (
  await readFile("public/work/perranvale/desktop-1080.webp")
).toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#F2F0E9"/>
<image href="data:image/svg+xml;base64,${logo}" x="56" y="44" width="180" height="60"/>
<g fill="#171914" font-family="Arial,Helvetica,sans-serif" font-size="52" font-weight="600" letter-spacing="-2">
<text x="56" y="236">Websites for</text><text x="56" y="300">independent</text><text x="56" y="364">businesses.</text></g>
<rect x="56" y="414" width="280" height="50" rx="25" fill="#D8FF3E"/>
<text x="84" y="445" fill="#171914" font-family="Arial,Helvetica,sans-serif" font-size="18">jamesonwebstudio.co.uk</text>
<defs><clipPath id="project"><rect x="590" y="155" width="554" height="346" rx="16"/></clipPath></defs>
<image href="data:image/webp;base64,${project}" x="590" y="155" width="554" height="346" clip-path="url(#project)"/>
<text x="590" y="536" fill="#55594E" font-family="Arial,Helvetica,sans-serif" font-size="16">Featured work: Perranvale Publishing</text>
</svg>`;
await writeFile("public/brand/social/open-graph.svg", svg);
await sharp(Buffer.from(svg))
  .png()
  .toFile("public/brand/social/open-graph.png");
