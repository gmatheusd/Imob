import { JsonLd } from "@/components/JsonLd";
import { getSiteJsonLd } from "@/config/schema";
import { siteConfig } from "@/config/siteConfig";
import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-5HNC36L7";
const GA_MEASUREMENT_ID = "G-7795HDPKXG";

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
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd data={getSiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
