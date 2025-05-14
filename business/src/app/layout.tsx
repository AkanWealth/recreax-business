import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/homecomps/Header";
import Footer from "@/components/homecomps/Footer";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recreax Buisness",
  description: "Recreax Buisness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${plusJakartaSans.variable} antialiased bg-[#f3f3f3]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
