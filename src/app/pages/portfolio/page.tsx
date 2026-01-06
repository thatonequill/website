// app/portfolio/page.tsx
import PortfolioView from "./PortfolioView";
import type { Metadata } from "next";

// This changes the browser tab title
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Full stack developer portfolio built with Next.js by Paul-Elouan Guyard-Lecerf",
};

export default function PortfolioPage() {
  return <PortfolioView />;
}