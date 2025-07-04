import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EV Charge Partner – Host an EV Station, Earn 10%",
  description: "Become an EV Charge Partner and earn passive income by hosting a free EV charger at your California business.",
  keywords: "EV charging, electric vehicle, passive income, business opportunity, California, EV station host, charging partner",
  openGraph: {
    title: "EV Charge Partner – Host an EV Station, Earn 10%",
    description: "Become an EV Charge Partner and earn passive income by hosting a free EV charger at your California business.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Charge Partner – Host an EV Station, Earn 10%",
    description: "Become an EV Charge Partner and earn passive income by hosting a free EV charger at your California business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
