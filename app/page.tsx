import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageSquare,
  PencilRuler,
  Rocket,
} from "lucide-react";
import { PROJECT_URL, SITE_EMAIL, SITE_URL, SITE_NAME } from "@/lib/site";
import { Header } from "./components/Header";
import { BrandLogo } from "./components/BrandLogo";
import { ProjectImage } from "./components/ProjectImage";
import { Reveal } from "./components/Reveal";
import { WebsiteStage } from "./components/WebsiteStage";
import { ReviewContact } from "./components/ReviewContact";
import { CareStudio } from "./components/CareStudio";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                areaServed: {
                  "@type": "AdministrativeArea",
                  name: "North London",
                },
                description:
                  "Mobile-friendly websites of up to five standard pages, basic on-page SEO, one consolidated revision round and launch support. Starting from £350; additional scope quoted separately.",
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Independent web design. North London.</p>
              <h1 id="hero-title">
                Small business.
                <br />
                <span>Big presence.</span>
              </h1>
              <p className="hero-description">
                Thoughtful websites for independent businesses. Designed around
                your customers. Built by Jameson.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Free website review <ArrowUpRight size={18} />
                </a>
                <a className="hero-work-link" href="#work">
                  View work <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <WebsiteStage />
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
              <p className="project-meta">
                Selected work / Perranvale Publishing
              </p>
              <h2 id="work-title">
                A London story.
                <br />
                <span>A new perspective.</span>
              </h2>
              <p className="section-intro">
                A photography-led website for an independent publisher,
                connecting a London story with a clear route to the book.
              </p>
            </Reveal>
            <Reveal className="project-feature">
              <ProjectImage
                name="desktop"
                alt="Desktop homepage for Perranvale Publishing with Anthony Bates’s Royal Festival Hall photograph"
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 64px), (max-width: 1552px) calc(100vw - 112px), 1440px"
              />
              <div className="project-story">
                <h3>
                  Lead with the story.
                  <br />
                  Make the next step clear.
                </h3>
                <p>
                  The brief was to give{" "}
                  <cite>Regeneration: 75 Years of London’s South Bank</cite> a
                  distinctive home online while retaining the publisher’s
                  existing Wix shop.
                </p>
                <p>
                  Anthony Bates’s opening photograph establishes the setting.
                  Short, readable copy introduces the book, with a prominent
                  book link so visitors can explore the story or move towards
                  buying without searching for the next step.
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
                    sizes="(max-width: 360px) 110px, (max-width: 1100px) 130px, 160px"
                  />
                </div>
                <div>
                  <h3>
                    Same story.
                    <br />
                    Smaller screen.
                  </h3>
                  <p>
                    A compact menu, readable type and the book link close to the
                    introduction keep the priorities intact on a phone. The
                    photography still has room to breathe.
                  </p>
                </div>
              </Reveal>
              <Reveal className="book-case">
                <ProjectImage
                  name="book"
                  alt="Perranvale book page with cover gallery, book information and the button leading to Wix checkout"
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) 48vw, 54vw"
                />
                <div>
                  <h3>A clear route to checkout.</h3>
                  <p>
                    Book details and image previews sit together. Wix continues
                    to manage products, stock, payments and orders, keeping the
                    existing shop behind the new browsing experience.
                  </p>
                </div>
              </Reveal>
            </div>
            <p className="project-capture-note">
              Project captures show the original launch design.
            </p>
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
                Ambition, meet
                <br />
                <span>straightforward.</span>
              </h2>
              <div className="price">
                <span>From</span>
                <strong>£350</strong>
              </div>
              <p>
                A straightforward website of up to five standard pages for a
                small business, with mobile-friendly design and personal support
                from brief to launch.
              </p>
              <p className="payment-note">
                For a £350 project: £175 deposit before work starts, then £175
                after approval and before launch.
              </p>
              <p className="offer-next">
                Tell me what you need. I’ll confirm the scope and price before
                you commit.
              </p>
              <a className="text-link" href="#contact">
                Discuss your website <ArrowUpRight size={18} />
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
            <div className="offer-questions">
              <h3>Clear before we start.</h3>
              <div className="scope-answers">
                <details>
                  <summary>What do I need to provide?</summary>
                  <p>
                    Your logo, photographs you have permission to use, and
                    accurate business details and wording. We’ll agree what is
                    needed for your pages before the build.
                  </p>
                </details>
                <details>
                  <summary>How does the revision round work?</summary>
                  <p>
                    You review a private preview and send one complete list of
                    reasonable changes. New pages, new features, major redesigns
                    or further revision rounds may need a separate quote.
                  </p>
                </details>
                <details>
                  <summary>What is quoted separately?</summary>
                  <p>
                    Extra pages, ecommerce, booking systems, extensive
                    copywriting and larger features. Domain, hosting and other
                    third-party fees are separate. Basic on-page SEO is
                    included; a full SEO campaign is not.
                  </p>
                </details>
              </div>
            </div>
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
                One person.
                <br />
                <span>With you all the way.</span>
              </h2>
              <div className="designer-intro">
                <p className="designer-lead">
                  I’m Jameson, an independent web designer based in North
                  London. I design and build your website, and I’m the person
                  you speak to throughout the project.
                </p>
                <dl className="designer-benefits">
                  <div>
                    <dt>A direct conversation</dt>
                    <dd>
                      Your brief and feedback go straight to the person doing
                      the work.
                    </dd>
                  </div>
                  <div>
                    <dt>Your business sets the direction</dt>
                    <dd>
                      The design starts with your services, your customers and
                      what they need to do next.
                    </dd>
                  </div>
                  <div>
                    <dt>A clear way forward</dt>
                    <dd>
                      An agreed scope, a private preview and one consolidated
                      revision round keep the process understandable.
                    </dd>
                  </div>
                </dl>
              </div>
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

        <section
          id="care"
          className="care section"
          aria-labelledby="care-title"
        >
          <div className="shell">
            <Reveal className="care-panel">
              <CareStudio />
              <div className="care-copy">
                <p className="care-label">Optional website care</p>
                <h2 id="care-title">
                  Looked after,
                  <br />
                  even after launch.
                </h2>
                <p>
                  Optional care for routine checks, small text or image updates,
                  and a familiar point of contact when your website needs
                  attention.
                </p>
                <div className="care-price">
                  <strong>£39</strong>
                  <span>/ month</span>
                </div>
                <p className="care-detail">
                  Includes approximately 30 minutes of small updates each month.
                  New pages, redesigns, larger features and third-party fees are
                  separate. Care is optional.
                </p>
                <a className="text-link" href="#contact">
                  Ask about website care <ArrowUpRight size={18} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="contact"
          tabIndex={-1}
          className="contact section"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-layout">
            <Reveal className="contact-intro">
              <h2 id="contact-title">
                Your next chapter
                <br />
                <span>starts here.</span>
              </h2>
              <p>
                Not sure what your website needs? Start with a free review and a
                few useful ideas.
              </p>
              <p>
                No website yet? Tell me about your business and what you’d like
                it to do online.
              </p>
            </Reveal>
            <ReviewContact />
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
