import { Geist_Mono, Instrument_Serif } from "next/font/google";
import { PROJECT_URL, SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";
import { HomeEffects } from "./components/HomeEffects";
import "./home.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const inclusions = [
  {
    title: "Designed around your business",
    items: [
      "Up to five standard pages",
      "Mobile-friendly design",
      "Your services, hours and contact details",
    ],
  },
  {
    title: "Made for the next step",
    items: [
      "Standard contact functionality",
      "Map and social links where useful",
      "Basic on-page SEO",
    ],
  },
  {
    title: "Supported through launch",
    items: [
      "One consolidated revision round",
      "Connection to your existing domain",
      "Final checks and launch support",
    ],
  },
];

const faqs = [
  {
    q: "What do I need to provide?",
    a: "Your logo, photographs you have permission to use, and accurate business details and wording. We’ll agree what is needed for your pages before the build.",
  },
  {
    q: "How does the revision round work?",
    a: "You review a private preview and send one complete list of reasonable changes. New pages, new features, major redesigns or further revision rounds may need a separate quote.",
  },
  {
    q: "What is quoted separately?",
    a: "Extra pages, ecommerce, booking systems, extensive copywriting and larger features. Domain, hosting and other third-party fees are separate. Basic on-page SEO is included; a full SEO campaign is not.",
  },
  {
    q: "Who will I actually be talking to?",
    a: "Me — Jameson. I design and build your website myself, so your brief and feedback go straight to the person doing the work.",
  },
];

const steps = [
  {
    title: "Consultation",
    text: "We talk through your business, your customers and what the website needs to do.",
  },
  {
    title: "Build & preview",
    text: "I design and build your site. You review a private preview and send one consolidated list of changes.",
  },
  {
    title: "Launch",
    text: "After your approval and final payment, I run the checks, connect your domain and put the site live.",
  },
];

const marqueeWords = [
  "Cafés",
  "independent shops",
  "Publishers",
  "salons & studios",
  "Trades",
  "restaurants",
  "Practitioners",
  "makers",
];

const aboutText =
  "I’m Jameson, an independent web designer based in North London. I design and build your website — and I’m the person you speak to throughout the project.";

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <span className="arr" aria-hidden="true">
      <svg viewBox="0 0 12 12" fill="none" strokeWidth="1.6">
        <path d={down ? "M6 1v10M1.5 6.5 6 11l4.5-4.5" : "M1 6h10M6.5 1.5 11 6l-4.5 4.5"} />
      </svg>
    </span>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 22 22" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill="var(--accent)" />
      <path
        d="m6.5 11.2 3 3 6-6.4"
        fill="none"
        stroke="#171914"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Shot({
  name,
  alt,
  sizes,
  className,
  id,
  eager = false,
}: {
  name: "desktop" | "mobile";
  alt: string;
  sizes: string;
  className?: string;
  id?: string;
  eager?: boolean;
}) {
  const widths = name === "mobile" ? [160, 260, 390] : [720, 1080, 1440];
  const [w, h] = name === "mobile" ? [390, 844] : [1440, 900];
  return (
    // Static export has no image server; variants are generated ahead of the build.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      id={id}
      className={className}
      src={`/work/perranvale/${name}-${widths[widths.length - 1]}.webp`}
      srcSet={widths.map((x) => `/work/perranvale/${name}-${x}.webp ${x}w`).join(", ")}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: `Independent web designer in North London | ${SITE_NAME}`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#website-design` },
      inLanguage: "en-GB",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#website-design`,
      name: "Small business website design and development",
      serviceType: "Website design and development",
      url: `${SITE_URL}/#offer`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "AdministrativeArea", name: "North London" },
      description:
        "Mobile-friendly websites of up to five standard pages, basic on-page SEO, one consolidated revision round and launch support. Starting from £350; additional scope quoted separately.",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className={`bp ${serif.variable} ${mono.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip" href="#main-content">
        Skip to content
      </a>
      <div className="progress" aria-hidden="true" />

      <header className="nav">
        <div className="wrap">
          <nav className="nav-pill" aria-label="Main">
            <a className="logo" href="#top" aria-label={`${SITE_NAME}, home`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="logo-light" src="/brand/svg/logo-compact-full-colour.svg" alt="" width={34} height={34} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="logo-dark" src="/brand/svg/logo-compact-on-dark.svg" alt="" width={34} height={34} />
              <b>
                Jameson <span>Web Studio</span>
              </b>
            </a>
            <div className="nav-links">
              <a href="#work">Work</a>
              <a href="#offer">Offer</a>
              <a href="#about">About</a>
              <a href="#process">Process</a>
              <a href="#care">Care</a>
            </div>
          </nav>
          <div className="nav-pill">
            <button className="theme-btn" id="themeBtn" type="button" aria-label="Switch colour theme">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </button>
            <a className="btn btn-primary nav-cta" href="#contact">
              <span>
                Free <span className="lbl-long">website </span>review
              </span>
            </a>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        {/* HERO */}
        <section className="bp-hero" id="top" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div>
              <p className="kicker fade-in">Independent web design · North London</p>
              <h1 id="hero-title">
                <span className="line">
                  <span>Small business.</span>
                </span>
                <span className="line">
                  <span>
                    <span className="hl serif">Big</span> presence.
                  </span>
                </span>
              </h1>
              <p className="lede fade-in" style={{ animationDelay: ".5s" }}>
                Thoughtful websites for independent businesses. Designed around your customers.{" "}
                <strong>Built by Jameson</strong> — the one person you speak to from first chat to launch.
              </p>
              <div className="hero-ctas fade-in" style={{ animationDelay: ".65s" }}>
                <a className="btn btn-primary" href="#contact">
                  Get a free website review <Arrow />
                </a>
                <a className="btn btn-ghost" href="#work">
                  See the work <Arrow down />
                </a>
              </div>
              <div className="hero-meta fade-in" style={{ animationDelay: ".8s" }}>
                <div>
                  <b>From £350</b>Up to five pages
                </div>
                <div>
                  <b>1 person</b>Design, build &amp; support
                </div>
                <div>
                  <b>Every screen</b>Mobile-first layouts
                </div>
              </div>
            </div>

            <div
              className="machine fade-in"
              id="machine"
              data-stage="1"
              style={{ animationDelay: ".3s" }}
              role="img"
              aria-label="Animated demo: the Perranvale Publishing website going from layout, to design, to live on desktop and phone"
            >
              <div className="mc-tag" aria-hidden="true">
                <i /> A website, considered from every angle
              </div>
              <div className="mc-browser" aria-hidden="true">
                <div className="mc-bar">
                  <i />
                  <i />
                  <i />
                  <div className="mc-url">perranvalepublishing.com</div>
                </div>
                <div className="mc-page">
                  <div className="mc-nav">
                    <div className="blk" style={{ width: "22%", height: 12 }} />
                    <div style={{ display: "flex", gap: 8 }}>
                      <div className="blk" style={{ width: 34, height: 8 }} />
                      <div className="blk" style={{ width: 34, height: 8 }} />
                      <div className="blk ac" style={{ width: 54, height: 16, borderRadius: 99 }} />
                    </div>
                  </div>
                  <div className="mc-hero">
                    <div>
                      <div className="mc-title">
                        A London story.
                        <br />
                        <em>A new perspective.</em>
                      </div>
                      <div className="tline" style={{ transition: "opacity .5s" }}>
                        <div className="blk" style={{ height: 16, width: "90%", marginBottom: 8 }} />
                        <div className="blk" style={{ height: 16, width: "70%", marginBottom: 16 }} />
                      </div>
                      <div className="blk" style={{ height: 7, width: "85%", margin: "14px 0 6px" }} />
                      <div className="blk" style={{ height: 7, width: "65%", marginBottom: 16 }} />
                      <div className="blk ac" style={{ height: 22, width: "42%", borderRadius: 99 }} />
                    </div>
                    <div className="mc-img">
                      <Shot name="desktop" alt="" sizes="(max-width: 960px) 60vw, 30vw" eager />
                    </div>
                  </div>
                  <div className="mc-cards">
                    <div className="blk" />
                    <div className="blk" />
                    <div className="blk" />
                  </div>
                </div>
              </div>
              <div className="mc-phone" aria-hidden="true">
                <div>
                  <Shot name="mobile" alt="" sizes="160px" eager />
                </div>
              </div>
              <div className="mc-steps" role="group" aria-label="Demo stage">
                <button type="button" data-s="1" aria-pressed="true">
                  Layout
                </button>
                <button type="button" data-s="2" aria-pressed="false">
                  Design
                </button>
                <button type="button" data-s="3" aria-pressed="false">
                  Live
                </button>
                <span className="prog" aria-hidden="true">
                  <i id="mcProg" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i}>{w}</span>
            ))}
          </div>
        </div>

        {/* WORK */}
        <div style={{ height: "clamp(16px,2vw,28px)" }} />
        <section className="bp-work sec" id="work" aria-labelledby="work-title">
          <div className="glow" aria-hidden="true" />
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <p className="kicker">Selected work · Perranvale Publishing</p>
                <h2 id="work-title">
                  A London story. <span className="serif">A new perspective.</span>
                </h2>
              </div>
              <p>
                A photography-led website for an independent publisher, connecting a London story with a clear
                route to the book.
              </p>
            </div>

            <div className="case-stage reveal">
              <Shot
                id="parallaxShot"
                className="shot"
                name="desktop"
                alt="Perranvale Publishing homepage on desktop, with Anthony Bates’s photograph of London’s South Bank and a link to the book Regeneration"
                sizes="(max-width: 1320px) 100vw, 1220px"
              />
              <div className="case-cap">
                <span className="chip" aria-hidden="true">
                  perranvalepublishing.com
                </span>
                <a className="chip" href={PROJECT_URL} target="_blank" rel="noopener">
                  Visit live site ↗<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>

            <div className="case-grid">
              <article className="case-card reveal">
                <span className="mono">01 — The brief</span>
                <h3 className="case-h">
                  Lead with the story. <span className="serif">Make the next step clear.</span>
                </h3>
                <p>
                  Give <em>Regeneration: 75 Years of London’s South Bank</em> a distinctive home online — while
                  keeping the publisher’s existing Wix shop.
                </p>
                <p>
                  Anthony Bates’s opening photograph sets the scene. Short, readable copy introduces the book,
                  with a prominent book link so visitors can explore the story or move towards buying without
                  hunting for the next step.
                </p>
              </article>
              <article className="case-card phone-card reveal reveal-d1">
                <div className="phone">
                  <div>
                    <Shot name="mobile" alt="Perranvale Publishing homepage on a phone" sizes="170px" />
                  </div>
                </div>
                <div>
                  <span className="mono">02 — On mobile</span>
                  <h3 className="case-h">
                    Same story. <span className="serif">Smaller screen.</span>
                  </h3>
                  <p>
                    A compact menu, readable type and the book link close to the introduction keep priorities
                    intact. The photography still has room to breathe.
                  </p>
                </div>
              </article>
            </div>

            <div className="case-stats">
              <div className="case-stat reveal">
                <b>Story first</b>
                <span>Photography-led opening that sets the place before the pitch.</span>
              </div>
              <div className="case-stat reveal reveal-d1">
                <b>Clear route to checkout</b>
                <span>Book details and previews together, one tap from buying.</span>
              </div>
              <div className="case-stat reveal reveal-d2">
                <b>Shop kept intact</b>
                <span>Wix still runs products, stock, payments and orders.</span>
              </div>
            </div>
            <p className="case-note">Project captures show the original launch design.</p>
          </div>
        </section>

        {/* OFFER */}
        <section className="sec" id="offer" aria-labelledby="offer-title">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <p className="kicker">The offer</p>
                <h2 id="offer-title">
                  Ambition, meet <span className="serif">straightforward.</span>
                </h2>
              </div>
              <p>Tell me what you need. I’ll confirm the scope and price before you commit — no surprises, no jargon.</p>
            </div>

            <div className="offer-grid">
              <div className="price-card reveal">
                <svg className="spin" viewBox="0 0 200 200" aria-hidden="true">
                  <defs>
                    <path id="circ" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
                  </defs>
                  <text fontFamily="var(--mono)" fontSize="13" letterSpacing="3.2" fill="#171914">
                    <textPath href="#circ">· FIXED SCOPE · CLEAR PRICE · NO SURPRISES </textPath>
                  </text>
                </svg>
                <p className="from">Small business website · from</p>
                <p className="price-num" aria-label="£350">
                  <sup>£</sup>350
                </p>
                <p>
                  A straightforward website of up to five standard pages, with mobile-friendly design and personal
                  support from brief to launch.
                </p>
                <div className="pay-split">
                  <div>
                    <b>£175</b>
                    <span>Deposit before work starts</span>
                  </div>
                  <div>
                    <b>£175</b>
                    <span>After approval, before launch</span>
                  </div>
                </div>
                <a className="btn btn-primary" href="#contact">
                  Discuss your website <Arrow />
                </a>
              </div>

              <div className="incl">
                {inclusions.map((g, gi) => (
                  <div className="incl-group reveal" key={g.title}>
                    <h3>
                      <span className="n">0{gi + 1}</span> {g.title}
                    </h3>
                    <ul>
                      {g.items.map((item) => (
                        <li key={item}>
                          <Tick />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <p className="small-print">
                  Extra pages, ecommerce, booking systems and larger features are quoted separately. Third-party
                  fees are additional.
                </p>
              </div>
            </div>

            <div className="faq">
              <div className="reveal">
                <p className="kicker">Good to know</p>
                <h2>
                  Clear before <span className="serif">we start.</span>
                </h2>
              </div>
              <div className="faq-list reveal reveal-d1">
                {faqs.map((f) => (
                  <details key={f.q}>
                    <summary>
                      {f.q}{" "}
                      <span className="pm" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <div className="ans">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="sec" id="about" style={{ paddingTop: 0 }} aria-labelledby="about-title">
          <div className="wrap">
            <h2 className="kicker reveal" id="about-title" style={{ fontSize: 12, margin: 0, fontWeight: 400 }}>
              One person · with you all the way
            </h2>
            <p className="about-quote" id="aboutQuote">
              {aboutText.split(" ").map((w, i) => (
                <span className="w" key={i}>
                  {w}{" "}
                </span>
              ))}
            </p>
            <div className="pillars">
              <div className="pillar reveal">
                <div className="ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
                  </svg>
                </div>
                <h3>A direct conversation</h3>
                <p>Your brief and feedback go straight to the person doing the work. No account managers, no hand-offs.</p>
              </div>
              <div className="pillar reveal reveal-d1">
                <div className="ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="m15.5 8.5-2 5-5 2 2-5z" />
                  </svg>
                </div>
                <h3>Your business sets the direction</h3>
                <p>The design starts with your services, your customers and what they need to do next.</p>
              </div>
              <div className="pillar reveal reveal-d2">
                <div className="ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 12h16M14 6l6 6-6 6" />
                  </svg>
                </div>
                <h3>A clear way forward</h3>
                <p>An agreed scope, a private preview and one consolidated revision round keep everything understandable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process sec" id="process" aria-labelledby="process-title">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <p className="kicker">How it works</p>
                <h2 id="process-title">
                  Three steps. <span className="serif">Zero guesswork.</span>
                </h2>
              </div>
              <p>From first conversation to live website, you always know where things stand and what happens next.</p>
            </div>
            <ol className="steps" id="steps">
              <li className="steps-line" aria-hidden="true">
                <i id="stepsLine" />
              </li>
              {steps.map((s, i) => (
                <li className="step" key={s.title}>
                  <div className="dot" aria-hidden="true">
                    0{i + 1}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CARE */}
        <section className="sec" id="care" aria-labelledby="care-title">
          <div className="wrap care-grid">
            <div className="care-demo reveal" id="careDemo">
              <div className="mc-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <div className="mc-url">jamesonwebstudio.co.uk</div>
              </div>
              <div className="care-body">
                <div className="sm">Studio care · content refinement</div>
                <div className="care-h" aria-live="polite">
                  Designed around your
                  <br />
                  <span className="care-swap">
                    <span id="careWord">business</span>
                    <span className="caret" aria-hidden="true" />
                  </span>
                  .
                </div>
                <div className="care-status">
                  <span className="status-pill" id="careStatus">
                    <i />
                    <span id="careStatusText">Editing…</span>
                  </span>
                  <button className="replay" id="careReplay" type="button">
                    Replay update ↻
                  </button>
                </div>
              </div>
              <p className="care-note">Illustrative example of a small wording update — not an edit to a live site.</p>
            </div>
            <div className="reveal reveal-d1">
              <p className="kicker">Optional website care</p>
              <h2 className="h2" id="care-title">
                Looked after, <span className="serif">even after launch.</span>
              </h2>
              <div className="care-cost">
                <b>£39</b>
                <span>/ month</span>
              </div>
              <p className="care-p">
                Routine checks, small text or image updates, and a familiar point of contact when your website
                needs attention. Includes roughly 30 minutes of small updates each month.
              </p>
              <p className="care-p care-p-sm">
                New pages, redesigns, larger features and third-party fees are separate. Care is entirely optional.
              </p>
              <a className="btn btn-ghost" href="#contact" data-topic="care" style={{ marginTop: 12 }}>
                Ask about website care <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="bp-contact sec" id="contact" aria-labelledby="contact-title">
          <div className="glow" aria-hidden="true" />
          <div className="wrap" style={{ position: "relative" }}>
            <p className="kicker reveal">Your next chapter</p>
            <h2 className="big-cta reveal" id="contact-title">
              Let’s make it <span className="serif">happen.</span>
            </h2>
            <div className="contact-grid">
              <div className="paths">
                <div className="path reveal">
                  <b>Already have a website?</b>Start with a free review. I’ll look at the design, mobile layout and
                  how easy it is to get in touch, then email you a few practical suggestions.
                </div>
                <div className="path reveal reveal-d1">
                  <b>No website yet?</b>Tell me about your business and what you’d like it to do online.
                </div>
                <div className="path reveal reveal-d2">
                  <b>No obligation.</b>A review is free, and there’s no pressure to book a project.
                </div>
              </div>
              <form className="form reveal reveal-d1" id="reviewForm" noValidate>
                <h3>A fresh pair of eyes on your website.</h3>
                <p>Fill this in and it’ll open a ready-written email in your mail app.</p>
                <div className="field">
                  <label htmlFor="fBiz">Business name</label>
                  <input id="fBiz" name="biz" autoComplete="organization" placeholder="e.g. Highgate Florist" required />
                </div>
                <div className="field">
                  <label htmlFor="fUrl">
                    Website link <span className="opt">(if you have one)</span>
                  </label>
                  <input id="fUrl" name="url" inputMode="url" placeholder="yourbusiness.co.uk" />
                </div>
                <fieldset className="field chips-field">
                  <legend>What would you like help with?</legend>
                  <div className="chips">
                    <input type="checkbox" id="c1" value="A free website review" defaultChecked />
                    <label htmlFor="c1">Free review</label>
                    <input type="checkbox" id="c2" value="A new website" />
                    <label htmlFor="c2">New website</label>
                    <input type="checkbox" id="c3" value="A redesign" />
                    <label htmlFor="c3">Redesign</label>
                    <input type="checkbox" id="c4" value="Website care" />
                    <label htmlFor="c4">Website care</label>
                  </div>
                </fieldset>
                <div className="field">
                  <label htmlFor="fMsg">Anything else?</label>
                  <textarea
                    id="fMsg"
                    name="msg"
                    placeholder="Tell me a little about your customers and what you’d like the website to do."
                  />
                </div>
                <div className="form-foot">
                  <button className="btn btn-primary" type="submit">
                    Request a free review <Arrow />
                  </button>
                  <small>Opens a draft in your email app — send it from there. No obligation.</small>
                </div>
                <div className="copy-mail">
                  Prefer webmail? <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                  <button type="button" id="copyBtn">
                    Copy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bp-footer">
        <div className="wrap">
          <div className="wordmark" aria-hidden="true">
            Jameson<span>.</span>
          </div>
          <div className="foot">
            <div>© {new Date().getFullYear()} {SITE_NAME} · Independent web design, North London</div>
            <div className="foot-links">
              <a href="#work">Work</a>
              <a href="#offer">Offer</a>
              <a href="#process">Process</a>
              <a href="/privacy/">Privacy</a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
      <HomeEffects />
    </div>
  );
}
