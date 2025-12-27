// app/portfolio/page.tsx
import PortfolioView from "./PortfolioView";
import type { Metadata } from "next";

// This changes the browser tab title
export const metadata: Metadata = {
  title: "My Computer Science Portfolio",
  description: "Full stack developer portfolio built with Next.js",
};

export default function PortfolioPage() {
  return <PortfolioView />;
}