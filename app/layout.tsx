import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Modern websites for local businesses",
    description:
      "Custom-coded, mobile-friendly websites for small businesses in North London.",
    type: "website",
    locale: "en_GB",
    siteName: "Jameson Web Studio",
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
