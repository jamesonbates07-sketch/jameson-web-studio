import type { Metadata, Viewport } from "next";
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE_URL,
  absoluteUrl,
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} | Websites for North London businesses`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Modern, mobile-friendly websites for local businesses in North London. Custom-coded design, clear pricing and straightforward support.",
  keywords: [
    "web designer North London",
    "small business website",
    "local business web design",
    "freelance web designer London",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Web design",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: absoluteUrl("/icon.svg"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} | Modern websites for local businesses`,
    description:
      "Custom-coded, mobile-friendly websites for small businesses in North London.",
    url: SITE_URL,
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
    title: `${SITE_NAME} | Modern websites for local businesses`,
    description:
      "Custom-coded, mobile-friendly websites for small businesses in North London.",
    images: [SOCIAL_IMAGE_URL],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f0e9",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl("/icon.svg"),
      email: SITE_EMAIL,
      areaServed: {
        "@type": "AdministrativeArea",
        name: "North London",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "Modern, mobile-friendly websites for local businesses in North London.",
      inLanguage: "en-GB",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
