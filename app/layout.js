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
    default: "AB Corporation | Infrastructure & Technology Solutions",
    template: "%s | AB Corporation",
  },

  description:
    "AB Corporation is a leading infrastructure and technology company providing innovative engineering, corporate infrastructure, and digital transformation solutions across India.",

  keywords: [
    "AB Corporation",
    "Infrastructure company India",
    "Technology solutions company",
    "Corporate engineering services",
    "Industrial infrastructure solutions",
    "Digital transformation services",
    "Enterprise technology India",
  ],

  authors: [{ name: "AB Corporation" }],
  creator: "AB Corporation",
  publisher: "AB Corporation",

  alternates: {
    canonical: "https://abcorpindia.com",
  },

  openGraph: {
    title: "AB Corporation | Infrastructure & Technology Solutions",
    description:
      "Delivering world-class infrastructure development and innovative technology solutions for modern enterprises.",
    url: "https://abcorpindia.com",
    siteName: "AB Corporation",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AB Corporation | Infrastructure & Technology Solutions",
    description:
      "Leading infrastructure and corporate technology solutions provider in India.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Corporate Infrastructure & Technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}