import { ArrowLeft, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE_URL,
  absoluteUrl,
} from "@/lib/site";
import { BrandLogo } from "../components/BrandLogo";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the Jameson Web Studio website.",
  alternates: {
    canonical: absoluteUrl("/privacy/"),
  },
  openGraph: {
    title: `Privacy | ${SITE_NAME}`,
    description: "Privacy information for the Jameson Web Studio website.",
    url: absoluteUrl("/privacy/"),
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    images: [
      {
        url: SOCIAL_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — modern websites for local businesses`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy | ${SITE_NAME}`,
    description: "Privacy information for the Jameson Web Studio website.",
    images: [SOCIAL_IMAGE_URL],
  },
};

const email = SITE_EMAIL;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="border-b border-ink/10">
        <div className="shell flex h-24 items-center justify-between gap-3">
          <Link
            href={SITE_URL}
            className="relative z-10 shrink-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label="Jameson Web Studio home"
          >
            <BrandLogo priority />
          </Link>
          <Link href={SITE_URL} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-xs font-bold transition-colors hover:bg-white">
            <ArrowLeft size={14} /> Back to website
          </Link>
        </div>
      </header>

      <div className="shell grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
        <aside>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-moss">Privacy</p>
          <h1 className="mt-5 font-display text-5xl font-black leading-[0.93] tracking-[-0.06em] sm:text-6xl">The plain-English version.</h1>
          <p className="mt-6 text-sm leading-7 text-ink/55">Last updated: 20 July 2026</p>
        </aside>

        <article className="privacy-copy rounded-[2rem] border border-ink/10 bg-white/50 p-6 sm:p-10 lg:p-14">
          <section>
            <h2>Overview</h2>
            <p>
              Jameson Web Studio respects your privacy. This notice explains what information may be received when you use this website or contact the studio, and how that information is handled.
            </p>
            <p>
              This notice applies to{" "}
              <a href={SITE_URL} className="font-bold text-moss underline decoration-moss/30 underline-offset-4 hover:decoration-moss">
                jamesonwebstudio.co.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Information you provide</h2>
            <p>
              If you email Jameson Web Studio, the information you choose to send may include your name, email address, business details and anything else in your message. This information is used to respond to your enquiry, discuss a potential project and, where relevant, provide requested services.
            </p>
          </section>

          <section>
            <h2>Why information is used</h2>
            <p>
              Enquiry information is normally used because it is in the studio&apos;s legitimate interests to reply and discuss potential work. If you request a quote or commission a project, information may also be used to take steps at your request before entering a contract or to perform that contract. Some records may be kept where there is a legal obligation to do so.
            </p>
          </section>

          <section>
            <h2>Technical information</h2>
            <p>
              This website does not use analytics, advertising trackers or a contact-form database by default. The hosting provider may process limited technical information, such as an IP address and request logs, to deliver the site securely and reliably.
            </p>
          </section>

          <section>
            <h2>Cookies and external links</h2>
            <p>
              This website does not set non-essential cookies. It includes links to external websites, including the featured project demonstration. Those websites have their own privacy practices, which are outside Jameson Web Studio&apos;s control.
            </p>
          </section>

          <section>
            <h2>Keeping and sharing information</h2>
            <p>
              Enquiry information is kept only for as long as it is reasonably needed for communication, project administration or legal and accounting requirements. Personal information is not sold. It may be shared with service providers only where needed to operate the business or deliver agreed work.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>
              Depending on the circumstances, you may have rights to access, correct, erase or restrict the use of your personal information, to object to certain uses, or to receive a portable copy. Some rights and requests are subject to legal conditions or exceptions.
            </p>
          </section>

          <section>
            <h2>Questions or complaints</h2>
            <p>
              Please contact Jameson Web Studio first if you have a concern so it can be addressed. You also have the right to raise a data protection complaint with the UK Information Commissioner&apos;s Office.
            </p>
            <a
              href="https://ico.org.uk/make-a-complaint/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-bold text-moss underline decoration-moss/30 underline-offset-4 hover:decoration-moss"
            >
              Visit the ICO complaints page
            </a>
          </section>

          <section>
            <h2>Contact</h2>
            <p>For a privacy question or request, email:</p>
            <a href={`mailto:${email}`} className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-moss">
              <Mail size={15} /> {email}
            </a>
          </section>
        </article>
      </div>
    </main>
  );
}
