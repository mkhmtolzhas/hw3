import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Script from "next/script";
import "./globals.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "postHub",
  description: "postHub - not orange YouTube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Header />
        {children}
        <Footer />
        <Script defer src="./globe/three.min.js"></Script>
        <Script defer src="./globe/vanta.globe.min.js"></Script>
        <Script defer src="./globe/globe.js"></Script>
      </body>
    </html>
  );
}
