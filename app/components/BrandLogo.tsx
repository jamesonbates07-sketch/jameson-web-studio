import Image from "next/image";

export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center" aria-hidden="true">
      <Image
        className="hidden h-auto w-[10.5rem] min-[360px]:block"
        src="/brand/svg/logo-compact-full-colour.svg"
        width={168}
        height={56}
        alt=""
        priority={priority}
      />
      <Image
        className="size-[2.625rem] min-[360px]:hidden"
        src="/brand/svg/icon-square-full-colour.svg"
        width={42}
        height={42}
        alt=""
        priority={priority}
      />
    </span>
  );
}
