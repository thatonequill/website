import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#be185d',
};

export const metadata: Metadata = {
  title: "Qwill's personal website",
  description: "Multi purpose website by Quill made with Next.js",
  openGraph: {
    title: "Qwill's personal website",
    description: "Multi purpose website by Quill made with Next.js",
    url: "https://qtqwill.dev", 
    siteName: "QtQwill",
    type: "website",
    images: [
      { url: '/images/LandingPage.avif', width: 1920, height: 1080, alt: 'QtQwill\'s Landing Page' },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Analytics /> */}
        {children}
      </body>
    </html>
  );
}
