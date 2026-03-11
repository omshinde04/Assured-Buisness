import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://abcorpindia.com"),

  title: {
    default: "AB Corporation | Infrastructure & Technology Solutions in India",
    template: "%s | AB Corporation",
  },

  description:
    "AB Corporation is a leading infrastructure and technology company in India delivering engineering services, corporate infrastructure solutions, digital transformation, and enterprise technology development.",

  keywords: [
    "AB Corporation",
    "Infrastructure company India",
    "Engineering company India",
    "Corporate infrastructure solutions",
    "Enterprise technology India",
    "Digital transformation services",
    "Industrial infrastructure solutions",
    "Technology consulting India",
    "Engineering consulting company",
  ],

  authors: [{ name: "AB Corporation" }],
  creator: "AB Corporation",
  publisher: "AB Corporation",

  alternates: {
    canonical: "https://abcorpindia.com",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Infrastructure & Technology",

  openGraph: {
    title: "AB Corporation | Infrastructure & Technology Solutions",
    description:
      "Delivering innovative infrastructure development and enterprise technology solutions across India.",
    url: "https://abcorpindia.com",
    siteName: "AB Corporation",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AB Corporation Infrastructure & Technology",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AB Corporation | Infrastructure & Technology Solutions",
    description:
      "Leading infrastructure and corporate technology solutions provider in India.",
    images: ["/og-image.jpg"],
  },

  verification: {
    google: "google-site-verification-code",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AB Corporation",
              url: "https://abcorpindia.com",
              logo: "https://abcorpindia.com/logo.png",
              sameAs: [
                "https://linkedin.com/company/abcorporation",
                "https://twitter.com/abcorporation"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}