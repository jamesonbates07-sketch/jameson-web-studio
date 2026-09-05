/* Original SVG artwork. The browser selects the approved theme variant. */
export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <picture className="brand-logo">
      <source
        media="(prefers-color-scheme: dark)"
        srcSet="/brand/svg/logo-compact-on-dark.svg"
      />
      <img
        src="/brand/svg/logo-compact-full-colour.svg"
        width="168"
        height="56"
        alt=""
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}
