import type { Metadata, Viewport } from "next";
import { Elms_Sans, Sniglet, Jersey_10, Modern_Antiqua } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const elmsSans = Elms_Sans({
  variable: "--font-default",
  subsets: ["latin"],
  display: "swap",
});

const sniglet = Sniglet({
  weight: ["400", "800"], // Sniglet has 400 and 800 weights
  variable: "--font-website-title",
  subsets: ["latin"],
  display: "swap",
});

const jersey10 = Jersey_10({
  weight: "400", // Jersey 10 has only 400 weight
  variable: "--font-bench-title",
  subsets: ["latin"],
  display: "swap",
});

const modernAntiqua = Modern_Antiqua({
  weight: "400", // Modern Antiqua has only 400 weight
  variable: "--font-crux-title",
  subsets: ["latin"],
  display: "swap",
});

// Exporting for potential use in other components if needed, though not directly used in layout.
export { elmsSans, sniglet, jersey10, modernAntiqua };


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
      { url: '/LandingPage.avif', width: 1920, height: 1080, alt: 'QtQwill\'s Landing Page' },
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
  children: React.ReactNode; // Default font for the entire application
}>) {
  return (
    <html lang="en">
      <body className={`${elmsSans.variable} ${sniglet.variable} ${jersey10.variable} ${modernAntiqua.variable} antialiased`}>
        {/* <Analytics /> */}
        {children}
      </body>
    </html>
  );
}
