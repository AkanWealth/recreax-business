import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/homecomps/Header";
import Footer from "@/components/homecomps/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const tomato = localFont({
  src: [
    {
      path: "../fonts/TomatoGrotesk-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/TomatoGrotesk-BlackSlanted.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/TomatoGrotesk-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/TomatoGrotesk-ExtraBoldSlanted.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/TomatoGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/TomatoGrotesk-BoldSlanted.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/TomatoGrotesk-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/TomatoGrotesk-SemiBoldSlanted.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/TomatoGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/TomatoGrotesk-MediumSlanted.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/TomatoGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TomatoGrotesk-Slanted.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/TomatoGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/TomatoGrotesk-LightSlanted.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/TomatoGrotesk-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/TomatoGrotesk-ExtraLightSlanted.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/TomatoGrotesk-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/TomatoGrotesk-ThinSlanted.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-tomato",
});

export const metadata: Metadata = {
  title: "ReCreax Business",
  description: "ReCreax Business",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${tomato.className}   ${plusJakartaSans.variable}  antialiased bg-[#f3f3f3]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
