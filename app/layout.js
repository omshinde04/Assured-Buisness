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
  title: "AB Corporation",
  description: "Corporate Infrastructure & Technology Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-background-light text-text-dark selection:bg-accent/20 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}