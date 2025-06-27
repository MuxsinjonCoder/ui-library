import HeroSection from "@/components/home/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My UI Library – Beautiful and Reusable Components",
  description:
    "Explore a collection of modern, reusable, and accessible UI components built with React, Tailwind CSS, and shadcn/ui.",
  keywords: [
    "UI library",
    "React components",
    "Tailwind CSS",
    "shadcn/ui",
    "design system",
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
