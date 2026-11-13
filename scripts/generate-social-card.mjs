import { mkdir, readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

// Preserve the original logo and compose a share image from a real project capture.
const logo = (
  await readFile("public/brand/svg/logo-compact-on-dark.svg")
).toString("base64");
const project = (
  await sharp("public/work/perranvale/desktop-1080.webp")
    .resize(560)
    .png()
    .toBuffer()
).toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#171914"/>
<image href="data:image/svg+xml;base64,${logo}" x="54" y="42" width="180" height="60"/>
<g fill="#F2F0E9" font-family="Arial,Helvetica,sans-serif" font-size="58" font-weight="500" letter-spacing="-3">
<text x="54" y="264">Small business.</text><text x="54" y="334">Big presence.</text></g>
<path d="M54 367h365" stroke="#D8FF3E" stroke-width="4"/>
<text x="54" y="422" fill="#BBC1AF" font-family="Arial,Helvetica,sans-serif" font-size="19">Independent web design. North London.</text>
<text x="54" y="553" fill="#D8FF3E" font-family="Arial,Helvetica,sans-serif" font-size="18">jamesonwebstudio.co.uk</text>
<rect x="583" y="163" width="563" height="362" rx="7" fill="#24281F" stroke="#657150"/>
<circle cx="598" cy="179" r="3" fill="#D8FF3E"/>
<text x="610" y="183" fill="#BBC1AF" font-family="Arial,Helvetica,sans-serif" font-size="11">Perranvale Publishing / selected work</text>
<defs><clipPath id="project"><rect x="585" y="195" width="560" height="328" rx="2"/></clipPath></defs>
<image href="data:image/png;base64,${project}" x="585" y="195" width="560" height="350" clip-path="url(#project)"/>
</svg>`;
await mkdir("public/social", { recursive: true });
await writeFile("public/social/studio-presence.svg", svg);
await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile("public/social/studio-presence.png");
