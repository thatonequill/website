// app/zzz/page.tsx
import ZZZBuilderView from "./ZZZTrackerView";
import type { Metadata } from "next";

// This changes the browser tab title
export const metadata: Metadata = {
  title: "ZZZ",
  description: "Character builder / tracker for ZZZ",
};

export default function ZZZPage() {
  return <ZZZBuilderView />;
}