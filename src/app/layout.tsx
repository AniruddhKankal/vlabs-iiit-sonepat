import localFont from "next/font/local";
import { Inria_Serif } from "next/font/google";
import { type ReactNode } from "react";
import "./globals.css";

const hostGrotesk = localFont({
  src: "../../public/fonts/host-grotesk-latin-variable.woff2",
  weight: "300 800",
  style: "normal",
  variable: "--font-sans",
  display: "swap",
});

const aleo = localFont({
  src: "../../public/fonts/aleo-latin-300.woff2",
  weight: "300",
  style: "normal",
  variable: "--font-serif",
  display: "swap",
});

const azeretMono = localFont({
  src: "../../public/fonts/azeret-mono-latin-variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-mono",
  display: "swap",
});

const vt323 = localFont({
  src: "../../public/fonts/vt323-latin-400.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-retro",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter-latin-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter-latin-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-product",
  display: "swap",
});

const inriaSerif = Inria_Serif({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inria",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${hostGrotesk.variable} ${aleo.variable} ${azeretMono.variable} ${vt323.variable} ${inter.variable} ${inriaSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
