import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/brand");
const colours = {
  paper: "#F2F0E9",
  ink: "#171914",
  acid: "#D8FF3E",
  moss: "#315C45",
  black: "#000000",
  white: "#FFFFFF",
};

const directories = [
  "svg",
  "png",
  "favicon",
  "social",
  "email",
  "documents",
  "brand-guide",
];

for (const directory of directories) {
  await mkdir(path.join(root, directory), { recursive: true });
}

const glyphs = {
  A: {
    width: 8.4,
    path: "M0 12 4.2 0l4.2 12M1.4 8h5.6",
  },
  B: {
    width: 8.4,
    path: "M0 0v12M0 0h4.5c2 0 3.2 1.1 3.2 3 0 1.5-.8 2.5-2.2 3 1.8.3 2.8 1.3 2.8 2.9 0 2.1-1.5 3.1-3.8 3.1H0M0 6h4.8",
  },
  D: {
    width: 8.8,
    path: "M0 0v12h3.4c3.6 0 5.4-2 5.4-6S7 0 3.4 0H0",
  },
  E: {
    width: 8,
    path: "M8 0H0v12h8M0 6h6.5",
  },
  I: {
    width: 5,
    path: "M0 0h5M2.5 0v12M0 12h5",
  },
  J: {
    width: 7.2,
    path: "M7.2 0v8.1c0 2.6-1.3 3.9-3.7 3.9-1.7 0-2.8-.7-3.5-1.9",
  },
  M: {
    width: 10,
    path: "M0 12V0l5 6.7L10 0v12",
  },
  N: {
    width: 9,
    path: "M0 12V0l9 12V0",
  },
  O: {
    width: 9,
    path: "M4.5 0c2.9 0 4.3 2 4.3 6s-1.4 6-4.3 6S.2 10 .2 6 1.6 0 4.5 0Z",
  },
  S: {
    width: 8.4,
    path: "M8.1 1.3C6.9.4 5.6 0 4 0 1.7 0 .3 1.2.3 3c0 1.6 1.1 2.5 3.9 3 2.8.5 4 1.4 4 3.1 0 1.9-1.6 2.9-4.3 2.9-1.8 0-3.3-.5-4.5-1.4",
  },
  T: {
    width: 9,
    path: "M0 0h9M4.5 0v12",
  },
  U: {
    width: 9,
    path: "M0 0v8c0 2.7 1.5 4 4.5 4S9 10.7 9 8V0",
  },
  W: {
    width: 11,
    path: "m0 0 2.5 12 3-8 3 8L11 0",
  },
};

function wordWidth(text, tracking = 2.8) {
  const characters = [...text];
  return characters.reduce((total, character, index) => {
    const width = character === " " ? 6 : glyphs[character].width;
    const spacing = index === characters.length - 1 ? 0 : tracking;
    return total + width + spacing;
  }, 0);
}

function wordmark({
  text,
  x,
  y,
  scale,
  colour,
  tracking = 2.8,
  strokeWidth = 1.75,
}) {
  let cursor = 0;
  const paths = [];

  for (const character of text) {
    if (character === " ") {
      cursor += 6 + tracking;
      continue;
    }

    const glyph = glyphs[character];
    paths.push(`<path d="${glyph.path}" transform="translate(${cursor} 0)"/>`);
    cursor += glyph.width + tracking;
  }

  return `<g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="${colour}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${paths.join("")}</g>`;
}

function icon({
  x = 0,
  y = 0,
  size = 64,
  mode = "full-colour",
  title = false,
}) {
  const scale = size / 64;
  const monochrome = mode === "black" || mode === "white";
  const foreground =
    mode === "black"
      ? colours.black
      : mode === "white"
        ? colours.white
        : colours.acid;
  const background = monochrome ? "none" : colours.ink;
  const border =
    mode === "on-dark" ? colours.paper : monochrome ? foreground : "none";
  const borderWidth = border === "none" ? 0 : 2;

  return `<g transform="translate(${x} ${y}) scale(${scale})"${title ? ' role="img" aria-label="Jameson Web Studio icon"' : ""}>
    <rect x="${borderWidth / 2}" y="${borderWidth / 2}" width="${64 - borderWidth}" height="${64 - borderWidth}" rx="${16 - borderWidth / 2}" fill="${background}" stroke="${border}" stroke-width="${borderWidth}"/>
    <path d="M20 15h24v8H31v13c0 8.7-4.7 13-13.8 13H14v-8h3.2c3.9 0 5.8-1.8 5.8-5.4V23h-3V15Z" fill="${foreground}"/>
    <circle cx="44" cy="45" r="4" fill="${foreground}"/>
  </g>`;
}

function svgDocument({
  title,
  viewBox,
  content,
  description = "Jameson Web Studio brand artwork",
}) {
  const titleId = title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-labelledby="${titleId}-title ${titleId}-description">
  <title id="${titleId}-title">${title}</title>
  <desc id="${titleId}-description">${description}</desc>
  ${content}
</svg>
`;
}

function horizontalLogo(mode = "full-colour") {
  const wordColour =
    mode === "on-dark" || mode === "white"
      ? colours.white
      : mode === "black"
        ? colours.black
        : colours.ink;

  return svgDocument({
    title: `Jameson Web Studio horizontal logo ${mode}`,
    viewBox: "0 0 520 96",
    content: `${icon({ size: 96, mode })}
  ${wordmark({
    text: "JAMESON WEB STUDIO",
    x: 128,
    y: 36,
    scale: 2,
    colour: wordColour,
    tracking: 2.7,
  })}`,
  });
}

function compactLogo(mode = "full-colour") {
  const wordColour =
    mode === "on-dark" || mode === "white"
      ? colours.white
      : mode === "black"
        ? colours.black
        : colours.ink;

  return svgDocument({
    title: `Jameson Web Studio compact logo ${mode}`,
    viewBox: "0 0 288 96",
    content: `${icon({ size: 96, mode })}
  ${wordmark({
    text: "JAMESON",
    x: 126,
    y: 24,
    scale: 1.55,
    colour: wordColour,
    tracking: 2.6,
  })}
  ${wordmark({
    text: "WEB STUDIO",
    x: 126,
    y: 58,
    scale: 1.08,
    colour: wordColour,
    tracking: 2.7,
  })}`,
  });
}

function stackedLogo(mode = "full-colour") {
  const wordColour =
    mode === "on-dark" || mode === "white"
      ? colours.white
      : mode === "black"
        ? colours.black
        : colours.ink;
  const jamesonWidth = wordWidth("JAMESON", 2.6) * 2.05;
  const studioWidth = wordWidth("WEB STUDIO", 2.7) * 1.22;

  return svgDocument({
    title: `Jameson Web Studio stacked logo ${mode}`,
    viewBox: "0 0 320 300",
    content: `${icon({ x: 84, y: 12, size: 152, mode })}
  ${wordmark({
    text: "JAMESON",
    x: (320 - jamesonWidth) / 2,
    y: 208,
    scale: 2.05,
    colour: wordColour,
    tracking: 2.6,
  })}
  ${wordmark({
    text: "WEB STUDIO",
    x: (320 - studioWidth) / 2,
    y: 254,
    scale: 1.22,
    colour: wordColour,
    tracking: 2.7,
  })}`,
  });
}

function squareIcon(mode = "full-colour", title = "Jameson Web Studio icon") {
  return svgDocument({
    title: `${title} ${mode}`,
    viewBox: "0 0 64 64",
    content: icon({ mode }),
    description:
      "A dark rounded square containing a bright green geometric J and period.",
  });
}

const svgAssets = {
  "logo-horizontal-full-colour.svg": horizontalLogo("full-colour"),
  "logo-horizontal-on-light.svg": horizontalLogo("full-colour"),
  "logo-horizontal-on-dark.svg": horizontalLogo("on-dark"),
  "logo-horizontal-black.svg": horizontalLogo("black"),
  "logo-horizontal-white.svg": horizontalLogo("white"),
  "logo-compact-full-colour.svg": compactLogo("full-colour"),
  "logo-compact-on-dark.svg": compactLogo("on-dark"),
  "logo-compact-black.svg": compactLogo("black"),
  "logo-compact-white.svg": compactLogo("white"),
  "logo-stacked-full-colour.svg": stackedLogo("full-colour"),
  "logo-stacked-on-dark.svg": stackedLogo("on-dark"),
  "logo-stacked-black.svg": stackedLogo("black"),
  "logo-stacked-white.svg": stackedLogo("white"),
  "icon-square-full-colour.svg": squareIcon("full-colour"),
  "icon-square-on-dark.svg": squareIcon("on-dark"),
  "icon-square-black.svg": squareIcon("black"),
  "icon-square-white.svg": squareIcon("white"),
  "favicon-icon.svg": squareIcon("full-colour", "Jameson Web Studio favicon"),
};

for (const [filename, content] of Object.entries(svgAssets)) {
  await writeFile(path.join(root, "svg", filename), content);
}

async function renderPng(svg, outputPath, options) {
  let pipeline = sharp(Buffer.from(svg), { density: 288 });

  if (options.width || options.height) {
    pipeline = pipeline.resize({
      width: options.width,
      height: options.height,
      fit: options.fit ?? "contain",
    });
  }

  if (options.background) {
    pipeline = pipeline.flatten({ background: options.background });
  }

  await pipeline
    .png({ compressionLevel: 9, palette: false })
    .toFile(outputPath);
}

const iconSizes = [32, 48, 64, 128, 256, 512, 1024];

for (const size of iconSizes) {
  await renderPng(
    svgAssets["icon-square-full-colour.svg"],
    path.join(root, "png", `icon-square-${size}.png`),
    { width: size, height: size },
  );
}

const pngLogoAssets = [
  ["logo-horizontal-full-colour.svg", "logo-horizontal-full-colour.png", 1040],
  ["logo-horizontal-on-dark.svg", "logo-horizontal-on-dark.png", 1040],
  ["logo-horizontal-black.svg", "logo-horizontal-black.png", 1040],
  ["logo-horizontal-white.svg", "logo-horizontal-white.png", 1040],
  ["logo-compact-full-colour.svg", "logo-compact-full-colour.png", 576],
  ["logo-compact-on-dark.svg", "logo-compact-on-dark.png", 576],
  ["logo-stacked-full-colour.svg", "logo-stacked-full-colour.png", 640],
  ["logo-stacked-on-dark.svg", "logo-stacked-on-dark.png", 640],
];

for (const [source, filename, width] of pngLogoAssets) {
  await renderPng(svgAssets[source], path.join(root, "png", filename), {
    width,
  });
}

const faviconSvg = svgAssets["favicon-icon.svg"];
const faviconRenders = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["android-chrome-192x192.png", 192],
  ["android-chrome-512x512.png", 512],
  ["apple-touch-icon.png", 180],
];

for (const [filename, size] of faviconRenders) {
  await renderPng(faviconSvg, path.join(root, "favicon", filename), {
    width: size,
    height: size,
  });
}

await writeFile(path.join(root, "favicon", "favicon.svg"), faviconSvg);

function buildIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const directory = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;

  images.forEach(({ buffer, size }, index) => {
    const entryOffset = index * 16;
    directory.writeUInt8(size >= 256 ? 0 : size, entryOffset);
    directory.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1);
    directory.writeUInt8(0, entryOffset + 2);
    directory.writeUInt8(0, entryOffset + 3);
    directory.writeUInt16LE(1, entryOffset + 4);
    directory.writeUInt16LE(32, entryOffset + 6);
    directory.writeUInt32LE(buffer.length, entryOffset + 8);
    directory.writeUInt32LE(offset, entryOffset + 12);
    offset += buffer.length;
  });

  return Buffer.concat([
    header,
    directory,
    ...images.map(({ buffer }) => buffer),
  ]);
}

const icoImages = await Promise.all(
  [16, 32, 48].map(async (size) => ({
    size,
    buffer: await sharp(Buffer.from(faviconSvg), { density: 288 })
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toBuffer(),
  })),
);

await writeFile(path.join(root, "favicon", "favicon.ico"), buildIco(icoImages));

const manifest = {
  name: "Jameson Web Studio",
  short_name: "JWS",
  icons: [
    {
      src: "/brand/favicon/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/brand/favicon/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  theme_color: colours.ink,
  background_color: colours.paper,
  display: "standalone",
};

await writeFile(
  path.join(root, "favicon", "site.webmanifest"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

const gmailProfileSvg = svgDocument({
  title: "Jameson Web Studio Gmail profile image",
  viewBox: "0 0 1000 1000",
  description:
    "A profile-safe Jameson Web Studio icon on a warm neutral background.",
  content: `<rect width="1000" height="1000" fill="${colours.paper}"/>
  <circle cx="500" cy="500" r="390" fill="${colours.acid}"/>
  ${icon({ x: 260, y: 260, size: 480, mode: "full-colour" })}`,
});

const socialProfileSvg = svgDocument({
  title: "Jameson Web Studio social profile image",
  viewBox: "0 0 1080 1080",
  description:
    "A high-contrast Jameson Web Studio icon designed for circular social profile crops.",
  content: `<rect width="1080" height="1080" fill="${colours.acid}"/>
  <circle cx="540" cy="540" r="410" fill="${colours.paper}" opacity=".38"/>
  ${icon({ x: 240, y: 240, size: 600, mode: "full-colour" })}`,
});

const ogLogoScale = 1.85;
const openGraphSvg = svgDocument({
  title: "Jameson Web Studio Open Graph image",
  viewBox: "0 0 1200 630",
  description:
    "Jameson Web Studio social sharing card with logo and business positioning.",
  content: `<rect width="1200" height="630" fill="${colours.ink}"/>
  <path d="M0 120h1200M0 240h1200M0 360h1200M0 480h1200M180 0v630M360 0v630M540 0v630M720 0v630M900 0v630M1080 0v630" fill="none" stroke="${colours.paper}" stroke-opacity=".045"/>
  <circle cx="1110" cy="50" r="230" fill="${colours.acid}" opacity=".08"/>
  <g transform="translate(76 70) scale(${ogLogoScale})">
    ${icon({ size: 96, mode: "on-dark" })}
    ${wordmark({
      text: "JAMESON WEB STUDIO",
      x: 128,
      y: 36,
      scale: 2,
      colour: colours.white,
      tracking: 2.7,
    })}
  </g>
  <rect x="76" y="340" width="64" height="8" rx="4" fill="${colours.acid}"/>
  <text x="76" y="430" fill="${colours.paper}" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="800" letter-spacing="-2">Modern websites for local businesses.</text>
  <text x="78" y="504" fill="${colours.paper}" fill-opacity=".65" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="3">NORTH LONDON · INDEPENDENT WEB STUDIO</text>`,
});

await writeFile(
  path.join(root, "social", "gmail-profile.svg"),
  gmailProfileSvg,
);
await writeFile(
  path.join(root, "social", "social-profile.svg"),
  socialProfileSvg,
);
await writeFile(path.join(root, "social", "open-graph.svg"), openGraphSvg);

await renderPng(
  gmailProfileSvg,
  path.join(root, "social", "gmail-profile.png"),
  { width: 1000, height: 1000 },
);
await renderPng(
  socialProfileSvg,
  path.join(root, "social", "social-profile.png"),
  { width: 1080, height: 1080 },
);
await renderPng(openGraphSvg, path.join(root, "social", "open-graph.png"), {
  width: 1200,
  height: 630,
});

const emailSignatureSvg = compactLogo("full-colour");
await writeFile(
  path.join(root, "email", "email-signature-logo.svg"),
  emailSignatureSvg,
);
await renderPng(
  emailSignatureSvg,
  path.join(root, "email", "email-signature-logo.png"),
  { width: 576 },
);

const invoiceSvg = horizontalLogo("black");
const proposalSvg = horizontalLogo("full-colour");
await writeFile(path.join(root, "documents", "invoice-logo.svg"), invoiceSvg);
await writeFile(path.join(root, "documents", "proposal-logo.svg"), proposalSvg);
await renderPng(invoiceSvg, path.join(root, "documents", "invoice-logo.png"), {
  width: 1040,
});
await renderPng(
  proposalSvg,
  path.join(root, "documents", "proposal-logo.png"),
  { width: 1040 },
);

console.log(`Generated Jameson Web Studio brand assets in ${root}`);
