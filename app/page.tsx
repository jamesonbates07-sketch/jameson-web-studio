import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  MousePointer2,
  MoveUpRight,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import {
  DEMO_URL,
  SITE_EMAIL,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";
import { BrandLogo } from "./components/BrandLogo";

const email = SITE_EMAIL;
const demoHost = new URL(DEMO_URL).hostname;
const reviewMailto = `mailto:${email}?subject=${encodeURIComponent(
  "Free website review request",
)}&body=${encodeURIComponent(
  "Hi Jameson,\n\nI'd like a free review of my current website.\n\nBusiness name:\nCurrent website (if applicable):\nWhat I would like help with:\n\nThanks,",
)}`;

const included = [
  "Mobile-friendly design",
  "Up to five pages",
  "Contact form",
  "Opening hours",
  "Maps",
  "Social links",
  "Basic SEO",
  "Domain connection",
  "One revision round",
];

const process = [
  {
    number: "01",
    title: "Consultation",
    text: "We talk through your business, customers and what your website needs to achieve.",
  },
  {
    number: "02",
    title: "Build & preview",
    text: "I design and build your site, then send you a private preview to review on any device.",
  },
  {
    number: "03",
    title: "Launch",
    text: "After your revision round, I connect your domain and put the finished website live.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-ink/55">
        <span className="h-px w-8 bg-ink/35" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-black leading-[0.97] tracking-[-0.055em] text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink/65 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function BarberPreview() {
  return (
    <div className="project-window overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#ede9df] shadow-2xl shadow-black/20">
      <div className="flex h-11 items-center justify-between border-b border-black/10 bg-[#f8f4ea] px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#fb6a5a]" />
          <span className="size-2.5 rounded-full bg-[#f5bd4f]" />
          <span className="size-2.5 rounded-full bg-[#64c85b]" />
        </div>
        <span className="rounded-full bg-black/[0.06] px-4 py-1 text-[0.55rem] font-semibold tracking-wide text-black/45">
          {demoHost}
        </span>
        <div className="w-10" />
      </div>

      <div className="grid min-h-[28rem] bg-[#e8e3d7] md:grid-cols-[1.08fr_0.92fr]">
        <div className="relative flex flex-col justify-between overflow-hidden bg-[#171715] p-7 text-[#f1ede3] sm:p-10">
          <div className="barber-grain" />
          <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-5">
            <span className="max-w-28 font-serif text-sm font-semibold uppercase leading-[0.9] tracking-[0.12em]">
              Archway
              <br />
              Barber Co.
            </span>
            <span className="text-[0.5rem] font-bold uppercase tracking-[0.2em] text-white/55">
              London N19
            </span>
          </div>

          <div className="relative z-10 py-12">
            <span className="mb-5 block text-[0.55rem] font-bold uppercase tracking-[0.28em] text-[#b8a37a]">
              Traditional craft. Modern style.
            </span>
            <p className="font-serif text-[3.25rem] leading-[0.82] tracking-[-0.06em] sm:text-[4.4rem]">
              Sharp cuts.
              <br />
              Easy booking.
            </p>
          </div>

          <div className="relative z-10 flex items-end justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eee8db] px-4 py-2.5 text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#171715]">
              Book a chair <ArrowRight size={11} strokeWidth={3} />
            </span>
            <span className="text-right text-[0.48rem] font-medium uppercase leading-4 tracking-[0.16em] text-white/45">
              Mon–Sat
              <br />
              09:00–19:00
            </span>
          </div>
        </div>

        <div className="relative min-h-[19rem] overflow-hidden bg-[#b4a78f]">
          <div className="absolute inset-0 barber-photo" />
          <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-[46%] rounded-t-[48%] rounded-b-[42%] bg-[#2a2723] shadow-2xl sm:size-56" />
          <div className="absolute left-1/2 top-[24%] h-24 w-36 -translate-x-1/2 rounded-t-[55%] bg-[#0f0f0e] sm:h-32 sm:w-48" />
          <div className="absolute left-1/2 top-[42%] size-28 -translate-x-1/2 rounded-[46%] bg-[#a7856a] shadow-inner sm:size-36" />
          <div className="absolute bottom-0 left-1/2 h-[38%] w-[80%] -translate-x-1/2 rounded-t-[45%] bg-[#20201e]" />
          <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            Walk-ins welcome
          </div>
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2 text-[0.48rem] font-bold uppercase tracking-[0.14em] text-white">
            <div className="rounded-xl border border-white/15 bg-black/35 p-3 backdrop-blur-sm">
              Skin fade
              <span className="mt-1 block text-sm tracking-normal">£24</span>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/35 p-3 backdrop-blur-sm">
              Beard trim
              <span className="mt-1 block text-sm tracking-normal">£14</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a
        href={absoluteUrl("/#main-content")}
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="absolute inset-x-0 top-0 z-50">
        <div className="shell flex h-24 items-center justify-between gap-3">
          <Link
            href={SITE_URL}
            className="relative z-10 shrink-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label="Jameson Web Studio home"
          >
            <BrandLogo priority />
          </Link>

          <nav className="hidden shrink-0 items-center gap-8 rounded-full border border-ink/10 bg-white/50 px-7 py-3.5 text-sm font-bold text-ink/65 backdrop-blur-md md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-ink" href={absoluteUrl("/#work")}>Work</a>
            <a className="transition-colors hover:text-ink" href={absoluteUrl("/#offer")}>Offer</a>
            <a className="transition-colors hover:text-ink" href={absoluteUrl("/#process")}>Process</a>
          </nav>

          <a
            href={reviewMailto}
            className="group hidden shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-extrabold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Free website review
            <MoveUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={16} />
          </a>

          <a
            href={absoluteUrl("/#contact")}
            className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-white sm:hidden"
            aria-label="Go to contact section"
          >
            <ArrowDownRight size={19} />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-grid relative overflow-hidden border-b border-ink/10 pt-36 sm:pt-40">
          <div className="shell pb-20 sm:pb-28 lg:pb-32">
            <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.46fr] lg:gap-16">
              <div>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/80 px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-ink/65 backdrop-blur">
                  <MapPin size={13} className="text-moss" />
                  North London · Independent web studio
                </div>

                <h1 className="max-w-5xl font-display text-[clamp(3.7rem,9vw,8.8rem)] font-black leading-[0.82] tracking-[-0.075em] text-ink">
                  Modern websites
                  <span className="relative ml-[0.18em] inline-block font-serif font-normal italic tracking-[-0.06em] text-moss">
                    for
                    <span className="absolute -right-5 top-0 text-3xl not-italic text-acid sm:-right-8 sm:text-5xl" aria-hidden="true">✦</span>
                  </span>
                  <br />
                  local businesses
                </h1>
              </div>

              <div className="pb-1 lg:pb-3">
                <p className="text-lg leading-8 text-ink/68">
                  I redesign outdated websites and help local businesses look more professional online—with custom code, clear content and no unnecessary fuss.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href={reviewMailto}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-acid px-6 py-4 text-sm font-black text-ink shadow-[0_8px_0_#171914] transition-all hover:-translate-y-1 hover:shadow-[0_12px_0_#171914]"
                  >
                    Request a free website review
                    <ArrowRight size={17} strokeWidth={2.7} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={absoluteUrl("/#work")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-4 text-sm font-extrabold text-ink transition-colors hover:bg-white/55"
                  >
                    See featured work
                    <ArrowDownRight size={17} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-3 lg:mt-24">
              {[
                [Smartphone, "Mobile-first", "Designed for every screen"],
                [Zap, "Custom-coded", "Fast, focused and flexible"],
                [ShieldCheck, "Modern hosting", "GitHub + Cloudflare"],
              ].map(([Icon, title, text]) => {
                const FeatureIcon = Icon as typeof Smartphone;
                return (
                  <div key={title as string} className="flex items-center gap-4 bg-paper/85 p-5 backdrop-blur sm:p-6">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-acid">
                      <FeatureIcon size={18} strokeWidth={2.3} />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-ink">{title as string}</p>
                      <p className="mt-0.5 text-xs text-ink/55">{text as string}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-8 bg-ink py-24 text-white sm:py-32">
          <div className="shell">
            <div className="grid gap-10 lg:grid-cols-[0.62fr_1fr] lg:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-white/45">
                  <span className="h-px w-8 bg-white/30" />
                  Featured project
                </div>
                <h2 className="font-display text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl">
                  Archway
                  <br />
                  Barber Co.
                </h2>
              </div>
              <div className="max-w-2xl lg:justify-self-end">
                <p className="text-lg leading-8 text-white/62">
                  A bold, straightforward website concept for a neighbourhood barbershop—designed to put services, prices, opening hours and booking within easy reach.
                </p>
                <div className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-acid/20 bg-acid/8 p-4 text-sm leading-6 text-white/70">
                  <Sparkles className="mt-0.5 shrink-0 text-acid" size={18} />
                  <p>
                    <strong className="text-white">Portfolio demonstration:</strong> Archway Barber Co. is a fictional business created to show the kind of website I can build. It is not a real client or trading barbershop.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-16">
              <BarberPreview />
            </div>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {["Responsive design", "Service pages", "Local details", "Clear booking path"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 px-3.5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white/55">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white px-6 py-3.5 text-sm font-black text-ink transition-transform hover:-translate-y-0.5"
              >
                View the live demo
                <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </section>

        <section id="offer" className="scroll-mt-8 py-24 sm:py-32">
          <div className="shell">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
              <div>
                <SectionHeading
                  eyebrow="Launch offer"
                  title="A proper business website. One clear price."
                  text="A focused package for independent businesses that need a professional online presence without the agency-sized bill."
                />

                <div className="mt-10 rounded-[1.75rem] bg-acid p-7 text-ink shadow-[0_10px_0_#171914] sm:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-ink/15 bg-white/35 px-3 py-1.5 text-[0.63rem] font-black uppercase tracking-[0.16em]">
                      Custom website
                    </span>
                    <WandSparkles size={24} />
                  </div>
                  <div className="mt-10 flex items-end gap-3">
                    <span className="font-display text-[5.5rem] font-black leading-[0.72] tracking-[-0.08em] sm:text-[7rem]">£350</span>
                  </div>
                  <p className="mt-6 max-w-sm text-sm font-medium leading-6 text-ink/70">
                    Launch offer for a custom-built small business website, including design, build and getting it live on your domain.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-ink/12 bg-white/45 p-6 sm:p-9 lg:p-11">
                <div className="flex items-center justify-between border-b border-ink/12 pb-6">
                  <h3 className="text-xl font-black tracking-[-0.03em] text-ink">Everything you need to launch</h3>
                  <span className="hidden text-xs font-bold uppercase tracking-[0.16em] text-ink/40 sm:inline">Included</span>
                </div>
                <ul className="mt-3 grid sm:grid-cols-2 sm:gap-x-8" aria-label="Website package inclusions">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3 border-b border-ink/8 py-4 text-sm font-bold text-ink/75">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-moss text-white">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={reviewMailto}
                  className="group mt-8 inline-flex w-full items-center justify-between rounded-full bg-ink px-6 py-4 text-sm font-black text-white transition-colors hover:bg-moss"
                >
                  Tell me about your business
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-8 border-y border-ink/10 bg-white/40 py-24 sm:py-32">
          <div className="shell">
            <SectionHeading
              eyebrow="How it works"
              title="Simple from first chat to launch day."
              text="No drawn-out discovery process or confusing jargon. Just a clear route from what you have now to a website you are happy to share."
            />

            <div className="mt-14 grid gap-4 lg:grid-cols-3">
              {process.map((step, index) => (
                <article key={step.number} className="group relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper p-7 sm:p-9">
                  <span className="absolute -right-2 -top-7 font-display text-[8rem] font-black tracking-[-0.08em] text-ink/[0.035] transition-colors group-hover:text-acid/50" aria-hidden="true">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-moss">STEP {step.number}</span>
                      {index < process.length - 1 ? <ArrowRight className="hidden text-ink/20 lg:block" size={20} /> : <Check className="text-moss" size={20} />}
                    </div>
                    <h3 className="mt-20 text-2xl font-black tracking-[-0.04em] text-ink">{step.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-ink/60">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="shell">
            <div className="care-card relative overflow-hidden rounded-[2rem] bg-moss p-7 text-white sm:p-12 lg:p-16">
              <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-[0.65rem] font-black uppercase tracking-[0.16em] text-acid">
                    <Clock3 size={14} /> Optional website care
                  </span>
                  <h2 className="mt-8 max-w-2xl font-display text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                    Prefer not to look after the website yourself?
                  </h2>
                </div>
                <div className="lg:justify-self-end">
                  <div className="flex items-end gap-3">
                    <span className="font-display text-6xl font-black tracking-[-0.07em] text-acid">£39</span>
                    <span className="pb-2 text-sm font-bold text-white/60">from / month</span>
                  </div>
                  <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                    Optional ongoing care for content updates, routine checks and small changes after launch. Choose it only if it is useful to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 px-3 pb-3 sm:px-5 sm:pb-5">
          <div className="contact-grid relative overflow-hidden rounded-[2rem] bg-ink px-5 py-20 text-center text-white sm:px-10 sm:py-28">
            <div className="relative z-10 mx-auto max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.16em] text-white/55">
                <MousePointer2 size={14} className="text-acid" /> Your next step
              </span>
              <h2 className="mt-8 font-display text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.85] tracking-[-0.07em]">
                Let&apos;s improve how your business looks online.
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                Send me your current website and I&apos;ll give you a free, no-pressure review with a few practical ideas.
              </p>
              <a
                href={reviewMailto}
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-acid px-7 py-4 text-sm font-black text-ink shadow-[0_7px_0_rgba(255,255,255,0.18)] transition-transform hover:-translate-y-1"
              >
                <Mail size={17} />
                Request a free website review
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-6 text-xs text-white/35">
                Or email <a className="underline underline-offset-4 hover:text-white" href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell flex flex-col gap-6 py-10 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
        <BrandLogo />
        <p>
          Modern websites for independent businesses in North London.
          <br />
          <a className="font-bold hover:text-ink" href={SITE_URL}>
            jamesonwebstudio.co.uk
          </a>
        </p>
        <div className="flex flex-wrap gap-5 font-bold">
          <Link className="hover:text-ink" href={absoluteUrl("/privacy/")}>Privacy</Link>
          <a className="hover:text-ink" href={`mailto:${email}`}>Email</a>
        </div>
      </footer>
    </>
  );
}
