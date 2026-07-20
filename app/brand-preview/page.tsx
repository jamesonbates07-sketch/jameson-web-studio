import type { Metadata } from "next";
import Image from "next/image";
import styles from "./preview.module.css";

export const metadata: Metadata = {
  title: "Brand asset review",
  description: "Internal review page for the Jameson Web Studio brand pack.",
  robots: {
    index: false,
    follow: false,
  },
};

const versions = [
  {
    name: "1 · Full horizontal",
    note: "Primary lock-up for wide placements",
    src: "/brand/svg/logo-horizontal-full-colour.svg",
    width: 520,
    height: 96,
  },
  {
    name: "2 · Compact horizontal",
    note: "Proposed header and navigation lock-up",
    src: "/brand/svg/logo-compact-full-colour.svg",
    width: 288,
    height: 96,
  },
  {
    name: "3 · Stacked",
    note: "Centred covers and vertical placements",
    src: "/brand/svg/logo-stacked-full-colour.svg",
    width: 320,
    height: 300,
  },
  {
    name: "4 · Square J. icon",
    note: "Avatar, app tile and icon-led layouts",
    src: "/brand/svg/icon-square-full-colour.svg",
    width: 160,
    height: 160,
  },
  {
    name: "5 · Favicon icon",
    note: "Simplified symbol, tested to 16 px",
    src: "/brand/svg/favicon-icon.svg",
    width: 96,
    height: 96,
  },
  {
    name: "6 · Light-background",
    note: "Full-colour mark on paper or white",
    src: "/brand/svg/logo-horizontal-on-light.svg",
    width: 520,
    height: 96,
  },
  {
    name: "7 · Dark-background",
    note: "White wordmark and paper tile keyline",
    src: "/brand/svg/logo-horizontal-on-dark.svg",
    width: 520,
    height: 96,
    dark: true,
  },
  {
    name: "8 · Full-colour",
    note: "Ink, acid and transparent background",
    src: "/brand/svg/logo-compact-full-colour.svg",
    width: 288,
    height: 96,
  },
  {
    name: "9 · Black",
    note: "Single-colour print and office use",
    src: "/brand/svg/logo-horizontal-black.svg",
    width: 520,
    height: 96,
  },
  {
    name: "10 · White",
    note: "Single-colour reversed use",
    src: "/brand/svg/logo-horizontal-white.svg",
    width: 520,
    height: 96,
    dark: true,
  },
];

const palette = [
  {
    name: "Paper",
    hex: "#F2F0E9",
    rgb: "242, 240, 233",
    hsl: "47°, 26%, 93%",
  },
  {
    name: "Ink",
    hex: "#171914",
    rgb: "23, 25, 20",
    hsl: "84°, 11%, 9%",
  },
  {
    name: "Acid",
    hex: "#D8FF3E",
    rgb: "216, 255, 62",
    hsl: "72°, 100%, 62%",
  },
  {
    name: "Moss",
    hex: "#315C45",
    rgb: "49, 92, 69",
    hsl: "148°, 30%, 28%",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function BrandPreviewPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroTopline}>
            <span>Jameson Web Studio</span>
            <span className={styles.reviewBadge}>Review candidate · v1.0</span>
          </div>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Brand asset pack</p>
              <h1>
                Familiar at a glance.
                <br />
                Built to work everywhere.
              </h1>
            </div>
            <div className={styles.heroCopy}>
              <p>
                A complete vector-led system built from the website’s existing
                dark tile, acid-green J. and modern wordmark direction.
              </p>
              <div className={styles.heroLinks}>
                <a href="/brand/brand-guide/brand-guide.md">
                  Read the brand guide
                </a>
                <a href="/brand/brand-guide/asset-index.md">Open asset index</a>
              </div>
            </div>
          </div>
          <div className={styles.heroMark}>
            <Image
              src="/brand/svg/logo-horizontal-on-dark.svg"
              width={520}
              height={96}
              priority
              alt="Jameson Web Studio horizontal logo in white, acid green and ink"
            />
          </div>
        </div>
      </section>

      <section className={styles.section} id="logos">
        <div className={styles.shell}>
          <SectionHeading
            eyebrow="01 · Logo system"
            title="One identity, ten practical versions."
            text="Every lock-up uses the same original geometric artwork. The variations solve real format and contrast needs without changing the idea."
          />
          <div className={styles.versionGrid}>
            {versions.map((version) => (
              <article
                className={`${styles.versionCard} ${version.dark ? styles.darkCard : ""}`}
                key={version.name}
              >
                <div className={styles.assetStage}>
                  <Image
                    src={version.src}
                    width={version.width}
                    height={version.height}
                    alt={`${version.name} Jameson Web Studio logo`}
                  />
                </div>
                <div className={styles.assetCaption}>
                  <div>
                    <h3>{version.name}</h3>
                    <p>{version.note}</p>
                  </div>
                  <a href={version.src} download>
                    SVG
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.inkSection}`}
        id="backgrounds"
      >
        <div className={styles.shell}>
          <SectionHeading
            eyebrow="02 · Surface test"
            title="Strong on light and dark."
            text="The mark keeps its dark-square character on both surfaces. A quiet paper keyline separates the tile from ink backgrounds."
          />
          <div className={styles.surfaceGrid}>
            <div className={styles.lightSurface}>
              <span>Paper · #F2F0E9</span>
              <Image
                src="/brand/svg/logo-compact-full-colour.svg"
                width={288}
                height={96}
                alt="Compact full-colour logo on a paper background"
              />
            </div>
            <div className={styles.darkSurface}>
              <span>Ink · #171914</span>
              <Image
                src="/brand/svg/logo-compact-on-dark.svg"
                width={288}
                height={96}
                alt="Compact logo on an ink background"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="scale">
        <div className={styles.shell}>
          <SectionHeading
            eyebrow="03 · Scale"
            title="Clear down to browser-tab size."
            text="Use a wordmark when space allows, then step down to the square mark. The dedicated favicon carries only the essential J. silhouette."
          />
          <div className={styles.scalePanel}>
            <div className={styles.wordmarkScale}>
              <div>
                <span>240 px</span>
                <Image
                  src="/brand/svg/logo-horizontal-full-colour.svg"
                  width={240}
                  height={45}
                  alt="Full horizontal logo at 240 pixels wide"
                />
              </div>
              <div>
                <span>160 px minimum</span>
                <Image
                  src="/brand/svg/logo-horizontal-full-colour.svg"
                  width={160}
                  height={30}
                  alt="Full horizontal logo at its 160 pixel minimum"
                />
              </div>
              <div>
                <span>120 px compact minimum</span>
                <Image
                  src="/brand/svg/logo-compact-full-colour.svg"
                  width={120}
                  height={40}
                  alt="Compact logo at its 120 pixel minimum"
                />
              </div>
            </div>
            <div className={styles.iconScale}>
              {[64, 48, 32, 24, 16].map((size) => (
                <div key={size}>
                  <Image
                    src={
                      size === 16
                        ? "/brand/favicon/favicon-16x16.png"
                        : "/brand/svg/favicon-icon.svg"
                    }
                    width={size}
                    height={size}
                    alt={`Jameson Web Studio icon at ${size} pixels`}
                  />
                  <span>{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.paletteSection}`}
        id="colours"
      >
        <div className={styles.shell}>
          <SectionHeading
            eyebrow="04 · Colour"
            title="Warm neutral. Near-black ink. One bright signal."
            text="The existing website palette is retained exactly, with moss supporting longer-form content and acid reserved for high-impact accents."
          />
          <div className={styles.palette}>
            {palette.map((colour) => (
              <article key={colour.name}>
                <div
                  className={styles.swatch}
                  style={{ backgroundColor: colour.hex }}
                />
                <h3>{colour.name}</h3>
                <strong>{colour.hex}</strong>
                <span>RGB {colour.rgb}</span>
                <span>HSL {colour.hsl}</span>
              </article>
            ))}
          </div>
          <div className={styles.contrastNote}>
            <strong>Accessibility:</strong> ink/paper is 15.53:1 and acid/ink is
            15.43:1. Acid on white is decorative only.
          </div>
        </div>
      </section>

      <section className={styles.section} id="examples">
        <div className={styles.shell}>
          <SectionHeading
            eyebrow="05 · In context"
            title="Ready for the places a studio shows up."
            text="These examples use the supplied exports at their intended ratios. Contact details remain selectable text rather than being baked into artwork."
          />
          <div className={styles.mockupGrid}>
            <article className={`${styles.mockup} ${styles.headerMockup}`}>
              <p className={styles.mockupLabel}>Website header</p>
              <div className={styles.websiteBar}>
                <Image
                  src="/brand/svg/logo-compact-full-colour.svg"
                  width={180}
                  height={60}
                  alt="Proposed compact logo in a website header example"
                />
                <div className={styles.fakeNav}>
                  <span>Work</span>
                  <span>Offer</span>
                  <span>Process</span>
                  <b>Free review</b>
                </div>
              </div>
              <p className={styles.mockupFootnote}>
                Review example only — the live header remains unchanged.
              </p>
            </article>

            <article className={`${styles.mockup} ${styles.gmailMockup}`}>
              <p className={styles.mockupLabel}>Gmail profile</p>
              <div className={styles.gmailRow}>
                <Image
                  src="/brand/social/gmail-profile.png"
                  width={76}
                  height={76}
                  alt="Jameson Web Studio Gmail profile image"
                />
                <div>
                  <strong>Jameson Web Studio</strong>
                  <span>Independent web studio</span>
                  <small>Profile image · circular crop</small>
                </div>
              </div>
            </article>

            <article className={`${styles.mockup} ${styles.socialMockup}`}>
              <p className={styles.mockupLabel}>Social profile</p>
              <div className={styles.socialProfile}>
                <Image
                  src="/brand/social/social-profile.png"
                  width={116}
                  height={116}
                  alt="Jameson Web Studio social profile image"
                />
                <div>
                  <strong>Jameson Web Studio</strong>
                  <span>@jamesonwebstudio</span>
                  <p>Modern websites for local businesses.</p>
                </div>
              </div>
            </article>

            <article className={`${styles.mockup} ${styles.browserMockup}`}>
              <p className={styles.mockupLabel}>Favicon</p>
              <div className={styles.browserChrome}>
                <div className={styles.browserDots}>
                  <i />
                  <i />
                  <i />
                </div>
                <div className={styles.browserTab}>
                  <Image
                    src="/brand/favicon/favicon-16x16.png"
                    width={16}
                    height={16}
                    alt="Jameson Web Studio favicon"
                  />
                  <span>Jameson Web Studio</span>
                  <b>×</b>
                </div>
              </div>
            </article>

            <article className={`${styles.mockup} ${styles.invoiceMockup}`}>
              <p className={styles.mockupLabel}>Invoice</p>
              <div className={styles.invoicePaper}>
                <div className={styles.invoiceTop}>
                  <Image
                    src="/brand/documents/invoice-logo.svg"
                    width={210}
                    height={39}
                    alt="Black Jameson Web Studio invoice logo"
                  />
                  <strong>INVOICE</strong>
                </div>
                <div className={styles.invoiceLines}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.invoiceTotal}>
                  <span>Total</span>
                  <strong>£350.00</strong>
                </div>
              </div>
            </article>

            <article className={`${styles.mockup} ${styles.emailMockup}`}>
              <p className={styles.mockupLabel}>Email signature</p>
              <div className={styles.signature}>
                <Image
                  src="/brand/email/email-signature-logo.png"
                  width={144}
                  height={48}
                  alt="Compact Jameson Web Studio email signature logo"
                />
                <div className={styles.signatureRule} />
                <div>
                  <strong>Jameson Bates</strong>
                  <span>Jameson Web Studio</span>
                  <small>Modern websites for local businesses</small>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.approvalSection}`}
        id="approval"
      >
        <div className={styles.shell}>
          <div className={styles.approvalGrid}>
            <div>
              <p className={styles.eyebrow}>Approval boundary</p>
              <h2>The pack is complete. Adoption is a separate decision.</h2>
            </div>
            <ul>
              <li>Approve the refined J. and geometric wordmark</li>
              <li>Choose whether to replace the current header mark</li>
              <li>Approve favicon and social metadata wiring</li>
              <li>Approve external Gmail, social and document rollout</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.shell}>
          <span>Jameson Web Studio brand asset review</span>
          <span>No production logo changes · No deployment</span>
        </div>
      </footer>
    </main>
  );
}
