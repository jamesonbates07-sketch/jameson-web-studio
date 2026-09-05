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
  const widths = name === "mobile" ? [390] : [720, 1080, 1440];
  return (
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
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
