import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import SmoothScrollHandler from "@/components/SmoothScrollHandler";
import { HeroUIProvider } from "@heroui/react";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: {
    default: "Glumia Solutions - Technology & IT Consulting Agency",
    template: "%s | Glumia Solutions"
  },
  description: "Empowering businesses with innovative digital solutions. Custom software development, data analytics, Web3 solutions, and more.",
  keywords: [
    "Technology Consulting",
    "IT Consulting",
    "Software Development",
    "Data Analytics",
    "Web3 Development",
    "Blockchain Solutions",
    "Digital Marketing",
    "Custom Software",
    "Business Solutions",
    "Technology Innovation",
    "Digital Transformation",
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "AI Solutions"
  ],
  authors: [{ name: "Glumia Solutions", url: "https://glumia.com" }],
  creator: "Glumia Solutions",
  publisher: "Glumia Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glumia.com",
    siteName: "Glumia Solutions",
    title: "Glumia Solutions - Technology & IT Consulting Agency",
    description: "Empowering businesses with innovative digital solutions. Custom software development, data analytics, Web3 solutions, and more.",
    images: [
      {
        url: "/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glumia Solutions - Technology & IT Consulting Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glumia Solutions - Technology & IT Consulting Agency",
    description: "Empowering businesses with innovative digital solutions. Custom software development, data analytics, Web3 solutions, and more.",
    images: ["/assets/img/og-image.jpg"],
    creator: "@glumiang",
  },
  alternates: {
    canonical: "https://glumia.com",
  },
  category: "Technology",
  classification: "Technology Consulting Services",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/assets/img/favicons/favicon.ico", sizes: "32x32" },
    ],
    apple: [
      { url: "/assets/img/favicons/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/assets/img/favicons/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/assets/img/favicons/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/assets/img/favicons/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/assets/img/favicons/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/assets/img/favicons/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/assets/img/favicons/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/assets/img/favicons/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
  },
  manifest: "/assets/img/favicons/manifest.json",
  other: {
    "msapplication-TileColor": "#055fa3",
    "msapplication-config": "/assets/img/favicons/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Glumia Solutions",
              "url": "https://glumia.com",
              "logo": "https://glumia.com/assets/img/logo.svg",
              "description": "Empowering businesses with innovative digital solutions. Custom software development, data analytics, Web3 solutions, and more.",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Acworth",
                "addressRegion": "GA",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+19432589932",
                "contactType": "customer service",
                "email": "info@glumia.com"
              },
              "sameAs": [
                "https://www.x.com/glumiang",
                "https://www.instagram.com/glumiaofficial"
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technology Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Software Development",
                      "description": "Custom software development solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web3 Development",
                      "description": "Blockchain and Web3 solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Data Analytics",
                      "description": "Data analysis and business intelligence"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing",
                      "description": "Digital marketing and growth strategies"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${quicksand.className} gray-body`}>
        <HeroUIProvider>
          <SmoothScrollHandler />
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
        </HeroUIProvider>

        {/* Scroll to top button */}
        <div className="scroll-top fixed bottom-8 right-8 z-50">
          <svg className="progress-circle svg-content w-12 h-12" viewBox="-1 -1 102 102">
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              className="stroke-primary-500 stroke-2 fill-none transition-all duration-300"
            />
          </svg>
        </div>
      </body>
    </html>
  );
}