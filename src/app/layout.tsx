import { JsonLd } from "@/components/JsonLd";
import { getSiteJsonLd } from "@/config/schema";
import { siteConfig } from "@/config/siteConfig";
import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  openGraph: {
    title: siteConfig.seo.title.default,
    description: siteConfig.seo.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.legalName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Danilo Ventura Negócios Imobiliários",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title.default,
    description: siteConfig.seo.description,
    images: ["/assets/img/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.siteUrl },
  icons: {
    icon: [
      { url: "/assets/img/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/img/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/img/favicon/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/assets/img/favicon/apple-touch-icon.png" },
    other: [
      { rel: "icon", url: "/assets/img/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/assets/img/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={getSiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
