import sharp from "sharp";

// Responsive derivatives of the existing genuine project capture, not new artwork.
for (const width of [160, 260]) {
  await sharp("public/work/perranvale/mobile-390.webp")
    .resize(width)
    .webp({ quality: 80 })
    .toFile(`public/work/perranvale/mobile-${width}.webp`);
}

for (const width of [720, 1080, 1440]) {
  await sharp("public/work/perranvale/desktop-1440.webp")
    .resize(width)
    .avif({ quality: 55, effort: 5 })
    .toFile(`public/work/perranvale/desktop-${width}.avif`);
}
