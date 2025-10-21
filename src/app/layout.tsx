import type { Metadata } from "next";
import { Poppins, Montserrat, Gelasio } from "next/font/google";
import "./globals.css";
import ReCaptchaProvider from '@/components/ReCaptchaProvider';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: 'swap',
  preload: true,
});

const gelasio = Gelasio({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gelasio",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "EV Charge Partners of California – Host an EV Station, Earn High Dollar Commissions",
  description: "Join EV Charge Partners of California and earn high dollar commissions by hosting a free EV charger at your business.",
  keywords: "EV charging, electric vehicle, high dollar commissions, business opportunity, California, EV station host, charging partners",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "EV Charge Partners of California – Host an EV Station, Earn High Dollar Commissions",
    description: "Join EV Charge Partners of California and earn high dollar commissions by hosting a free EV charger at your business.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Charge Partners of California – Host an EV Station, Earn High Dollar Commissions",
    description: "Join EV Charge Partners of California and earn high dollar commissions by hosting a free EV charger at your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'A8bMjSm3h0EON78BvgbGUu5oiNSE43vqDA12L237mt0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} ${gelasio.variable} font-sans`}>
        <ReCaptchaProvider>
          {children}
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
