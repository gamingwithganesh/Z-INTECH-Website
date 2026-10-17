import type { Metadata, Viewport } from "next";
import { Raleway, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/data/company";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111110",
};

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} — AI, Automation & Cloud Engineering`,
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description: COMPANY_INFO.positioning,
  keywords: [
    "Z INTECH Private Limited",
    "Enterprise AI Solutions Nagpur",
    "Business Process Automation Maharashtra",
    "Cloud Infrastructure AWS Wardha",
    "Custom Software Engineering India",
    "Retrieval-Augmented Generation RAG",
    "Next.js Enterprise Development",
  ],
  authors: [{ name: COMPANY_INFO.name, url: COMPANY_INFO.website }],
  creator: COMPANY_INFO.name,
  metadataBase: new URL(COMPANY_INFO.website),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: COMPANY_INFO.website,
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} — Your Vision, Our Technology.`,
    description: COMPANY_INFO.positioning,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.shortName} — Enterprise AI & Cloud`,
    description: COMPANY_INFO.positioning,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: COMPANY_INFO.website,
    logo: `${COMPANY_INFO.website}/logo.png`,
    description: COMPANY_INFO.positioning,
    telephone: COMPANY_INFO.contacts.phonePrimary,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: COMPANY_INFO.locations[0].address,
        addressLocality: COMPANY_INFO.locations[0].city,
        addressRegion: COMPANY_INFO.locations[0].state,
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: COMPANY_INFO.locations[1].address,
        addressLocality: COMPANY_INFO.locations[1].city,
        addressRegion: COMPANY_INFO.locations[1].state,
        addressCountry: "IN",
      },
    ],
    sameAs: [
      COMPANY_INFO.socials.linkedin,
      COMPANY_INFO.socials.github,
      COMPANY_INFO.socials.x,
    ],
  };

  return (
    <html
      lang="en"
      className={`${raleway.variable} ${geistMono.variable} h-full antialiased font-sans`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#111110] text-[#F5F1E9] selection:bg-[#D97745] selection:text-[#111110] overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
