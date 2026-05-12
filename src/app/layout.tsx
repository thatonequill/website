import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Qwill's personal website",
  description: "Multi purpose website by Quill made with Next.js",
  themeColor: '#be185d',
  openGraph: {
    title: "Qwill's personal website",
    description: "Multi purpose website by Quill made with Next.js",
    url: "https://qtqwill.dev", 
    siteName: "QtQwill",
    type: "website",
    // images: [
    //   { url: '/favicon-32x32.png', width: 32, height: 32, alt: 'QtQwill Favicon' },
    // ],
  },
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
