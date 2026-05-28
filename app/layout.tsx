import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "St. Rita's Catholic Church Dakwo - Welcome to Our Parish",
  description: "St. Rita's Catholic Church Dakwo - A place of worship, faith, and community. Join us for Mass, events, and spiritual growth.",
  keywords: "Catholic Church, Dakwo, Mass Schedule, Parish, Worship, Faith, Community",
  openGraph: {
    title: "St. Rita's Catholic Church Dakwo",
    description: "Welcome to St. Rita's Catholic Church - Growing together in Christ",
    url: "https://strita-church.ng",
    siteName: "St. Rita's Church",
    images: [
      {
        url: "https://images.unsplash.com/photo-1578512494519-e21cc028cb29?w=1200&h=630",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-cream dark:bg-navy text-navy dark:text-cream transition-colors duration-300">
        <Toaster position="top-right" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
