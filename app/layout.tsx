import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jameson-web-studio.pages.dev"),
  applicationName: "Jameson Web Studio",
  title: {
    default: "Jameson Web Studio | Websites for North London businesses",
    template: "%s | Jameson Web Studio",
  },
  description:
    "Modern, mobile-friendly websites for local businesses in North London. Custom-coded design, clear pricing and straightforward support.",
  keywords: [
    "web designer North London",
    "small business website",
    "local business web design",
    "freelance web designer London",
  ],
  authors: [{ name: "Jameson Web Studio" }],
  creator: "Jameson Web Studio",
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
  openGraph: {
    title: "Modern websites for local businesses",
    description:
      "Custom-coded, mobile-friendly websites for small businesses in North London.",
    type: "website",
    locale: "en_GB",
    siteName: "Jameson Web Studio",
    images: [
      {
        url: "/brand/social/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Jameson Web Studio — Modern websites for local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern websites for local businesses",
    description:
      "Custom-coded, mobile-friendly websites for small businesses in North London.",
    images: ["/brand/social/open-graph.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f0e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
