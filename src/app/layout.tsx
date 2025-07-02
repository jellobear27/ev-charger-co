import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EV-CALI - Get Paid to Host an EV Charger",
  description: "Earn passive income and bring more traffic to your business by hosting an EV charging station. No cost to you - we handle everything.",
  keywords: "EV charging, electric vehicle, passive income, business opportunity, California",
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
      </body>
    </html>
  );
}
