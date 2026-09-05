import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageSquare,
  PencilRuler,
  Rocket,
} from "lucide-react";
import { PROJECT_URL, REVIEW_MAILTO, SITE_EMAIL } from "@/lib/site";
import { Header } from "./components/Header";
import { BrandLogo } from "./components/BrandLogo";
import { ProjectImage } from "./components/ProjectImage";
import { Reveal } from "./components/Reveal";

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

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Independent web design</p>
              <h1 id="hero-title">
                Websites for
                <br className="desktop-break" /> independent businesses.
              </h1>
              <p className="hero-description">
                I design and build clear, mobile-friendly websites, with
                straightforward pricing and personal support from brief to
                launch.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={REVIEW_MAILTO}>
                  Free website review <ArrowUpRight size={18} />
                </a>
                <a className="button button-outline" href="#work">
                  View work <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <ProjectImage
                name="desktop"
                alt="Perranvale Publishing website, designed by Jameson Web Studio, showing the South Bank book introduction"
                sizes="(max-width: 767px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        <section
          id="work"
          className="work section"
          aria-labelledby="work-title"
        >
          <div className="shell">
            <Reveal className="work-intro">
              <div className="project-meta">
                <span>Selected work</span>
                <span>Website design & development</span>
              </div>
              <h2 id="work-title">Perranvale Publishing</h2>
              <p className="section-intro">
                An independent publisher. A richly illustrated book. A website
                that brings the story into focus.
              </p>
            </Reveal>
            <Reveal className="project-feature">
              <ProjectImage
                name="desktop"
                alt="Desktop homepage for Perranvale Publishing with Anthony Bates’s Royal Festival Hall photograph"
                sizes="(max-width: 767px) 100vw, 65vw"
              />
              <div className="project-story">
                <h3>A new home for a London story.</h3>
                <p>
                  The brief was to give{" "}
                  <cite>Regeneration: 75 Years of London’s South Bank</cite> a
                  clear, engaging home online while retaining the publisher’s
                  existing shop.
                </p>
                <p>
                  I built a responsive website around the photography, book
                  previews and author’s story, with a direct route to Wix’s
                  hosted checkout.
                </p>
                <a
                  className="text-link"
                  href={PROJECT_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Perranvale <ArrowUpRight size={18} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </Reveal>
            <div className="project-details">
              <Reveal className="mobile-case">
                <div className="mobile-capture">
                  <ProjectImage
                    name="mobile"
                    alt="Perranvale homepage on a phone, with readable text and clear book links"
                    sizes="240px"
                  />
                </div>
                <div>
                  <h3>Considered on every screen.</h3>
                  <p>
                    Clear navigation, readable type and a layout that makes room
                    for the photography, from phone to desktop.
                  </p>
                </div>
              </Reveal>
              <Reveal className="book-case">
                <ProjectImage
                  name="book"
                  alt="Perranvale book page with cover gallery, book information and the button leading to Wix checkout"
                  sizes="(max-width: 767px) 100vw, 55vw"
                />
                <div>
                  <h3>From browsing to buying.</h3>
                  <p>
                    Book details and an image gallery sit together, with Wix
                    continuing to manage products, orders and secure checkout.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="offer"
          className="offer section"
          aria-labelledby="offer-title"
        >
          <div className="shell offer-layout">
            <Reveal className="offer-summary">
              <h2 id="offer-title">
                A proper website.
                <br />A clear starting price.
              </h2>
              <div className="price">
                <span>From</span>
                <strong>£350</strong>
              </div>
              <p>
                A focused website for a small business, personally managed from
                the first conversation to the final checks.
              </p>
              <p className="payment-note">
                £175 deposit and £175 before launch for a £350 project.
              </p>
              <a className="button button-primary" href={REVIEW_MAILTO}>
                Free website review <ArrowUpRight size={18} />
              </a>
            </Reveal>
            <Reveal className="offer-inclusions">
              {inclusions.map((group) => (
                <div className="inclusion-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <Check size={17} strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="scope-note">
                Extra pages, ecommerce, booking systems and larger features are
                quoted separately. Third-party fees are additional.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          id="process"
          className="process section"
          aria-labelledby="process-title"
        >
          <div className="shell">
            <Reveal className="process-title">
              <h2 id="process-title">
                You speak to the person
                <br />
                building your website.
              </h2>
              <p className="section-intro">
                That’s me, Jameson. A clear conversation, a considered design
                and a preview you can take your time with.
              </p>
            </Reveal>
            <Reveal className="process-path">
              <article>
                <MessageSquare size={25} strokeWidth={1.7} />
                <h3>Consultation</h3>
                <p>
                  We talk through your business, your customers and what the
                  website needs to do.
                </p>
              </article>
              <article>
                <PencilRuler size={25} strokeWidth={1.7} />
                <h3>Build & preview</h3>
                <p>
                  I design and build your site. You review a private preview and
                  send one consolidated list of changes.
                </p>
              </article>
              <article>
                <Rocket size={25} strokeWidth={1.7} />
                <h3>Launch</h3>
                <p>
                  After your approval and final payment, I run the checks,
                  connect your domain and put the site live.
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="care section" aria-labelledby="care-title">
          <div className="shell">
            <Reveal className="care-panel">
              <div className="care-art" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/care-paper.webp"
                  width="1200"
                  height="800"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="care-copy">
                <p className="eyebrow">Optional website care</p>
                <h2 id="care-title">
                  Looked after,
                  <br />
                  even after launch.
                </h2>
                <p>
                  Routine checks, small updates and a familiar point of contact
                  when your website needs attention.
                </p>
                <div className="care-price">
                  <strong>£39</strong>
                  <span>/ month</span>
                </div>
                <p className="care-detail">
                  Includes approximately 30 minutes of small updates each month.
                  Larger changes and third-party fees are separate.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="contact"
          className="contact section"
          aria-labelledby="contact-title"
        >
          <div className="shell">
            <Reveal>
              <h2 id="contact-title">
                Let’s make your website
                <br />
                work for your business.
              </h2>
              <p>
                Send me what you have. I’ll take a look and share a few
                practical ideas, with no pressure to commit.
              </p>
              <a className="button button-primary" href={REVIEW_MAILTO}>
                Free website review <ArrowUpRight size={18} />
              </a>
              <a className="contact-email" href={`mailto:${SITE_EMAIL}`}>
                {SITE_EMAIL}
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <Link href="/" aria-label="Jameson Web Studio home">
            <BrandLogo />
          </Link>
          <p>
            Websites for independent businesses.
            <br />
            Based in North London.
          </p>
          <nav aria-label="Footer navigation">
            <Link href="/privacy/">Privacy</Link>
            <a href={`mailto:${SITE_EMAIL}`}>
              Email <ArrowUpRight size={14} />
            </a>
          </nav>
          <span className="copyright">
            © {new Date().getFullYear()} Jameson Web Studio
          </span>
        </div>
      </footer>
    </>
  );
}
