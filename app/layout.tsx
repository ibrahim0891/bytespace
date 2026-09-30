import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/app/components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "ByteSpace — Discover Your Passion, Build Your Skills",
    template: "%s | ByteSpace",
  },
  description:
    "Explore a variety of courses across technology, design, and business from world-class creators on ByteSpace.",
  icons: {
    icon: "/bytespace-favicon.png",
    shortcut: "/bytespace-favicon.png",
    apple: "/bytespace-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
