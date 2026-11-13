import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE_URL,
  absoluteUrl,
} from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `Independent web designer in North London | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Independent web design in North London. Websites from £350, optional £39/month care and personal support from Jameson. Start with a free website review.",
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
  manifest: "/brand/favicon/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/brand/favicon/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/brand/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/brand/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/brand/favicon/favicon.ico",
    apple: [
      {
        url: "/brand/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
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
    title: `Small business. Big presence. | ${SITE_NAME}`,
    description:
      "Independent web design by Jameson. Mobile-friendly websites from £350, optional care and a clear process from brief to launch.",
    url: SITE_URL,
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    images: [
      {
        url: SOCIAL_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME}: Small business. Big presence.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Small business. Big presence. | ${SITE_NAME}`,
    description:
      "Independent web design by Jameson. Mobile-friendly websites from £350, optional care and a clear process from brief to launch.",
    images: [SOCIAL_IMAGE_URL],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f0e9" },
    { media: "(prefers-color-scheme: dark)", color: "#171914" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl("/brand/png/icon-square-512.png"),
      email: SITE_EMAIL,
      areaServed: { "@type": "AdministrativeArea", name: "North London" },
      description:
        "An independent web design studio personally managed by Jameson in North London.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "Independent web design for small businesses in North London.",
      inLanguage: "en-GB",
      publisher: { "@id": `${SITE_URL}/#organization` },
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
      <body className={geist.variable}>
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
