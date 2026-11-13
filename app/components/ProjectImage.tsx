type ProjectImageProps = {
  name: "desktop" | "mobile" | "book";
  alt: string;
  className?: string;
  priority?: boolean;
  sizes: string;
};
const dimensions = {
  desktop: [1440, 900],
  mobile: [390, 844],
  book: [1440, 1000],
};
export function ProjectImage({
  name,
  alt,
  className = "",
  priority = false,
  sizes,
}: ProjectImageProps) {
  const [width, height] = dimensions[name];
  const widths = name === "mobile" ? [160, 260, 390] : [720, 1080, 1440];
  const modern = name === "desktop" && priority;
  const sourceSet = widths
    .map((w) => `/work/perranvale/${name}-${w}.avif ${w}w`)
    .join(", ");
  const image = (
    // Static export has no image server; variants are generated ahead of the build.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={`/work/perranvale/${name}-${widths[0]}.webp`}
      srcSet={widths
        .map((w) => `/work/perranvale/${name}-${w}.webp ${w}w`)
        .join(", ")}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority && !modern ? "high" : "auto"}
      decoding="async"
    />
  );
  if (!modern) return image;
  return (
    <>
      <link
        rel="preload"
        as="image"
        type="image/avif"
        href={`/work/perranvale/${name}-${widths[0]}.avif`}
        imageSrcSet={sourceSet}
        imageSizes={sizes}
        fetchPriority="high"
      />
      <picture className="project-picture">
        <source type="image/avif" srcSet={sourceSet} sizes={sizes} />
        {image}
      </picture>
    </>
  );
}
