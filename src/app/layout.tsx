import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Welcome from "./components/layout/Welcome"
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
        <Welcome />
        {children}
        <Footer />
        <Script src="./globe/three.min.js"></Script>
        <Script src="./globe/vanta.globe.min.js"></Script>
        <Script src="./globe/globe.js"></Script>
      </body>
    </html>
  );
}
