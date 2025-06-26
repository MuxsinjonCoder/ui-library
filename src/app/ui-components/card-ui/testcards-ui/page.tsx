import TestCardContent from "@/components/ui-components/card-ui/testcards-ui/test-card-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test card – UI Library",
  description:
    "A collection of responsive, accessible, and customizable modal components for displaying dialogs, alerts, and more. Built with shadcn/ui for seamless integration.",
  icons: "/logo.png",
};

export default function TestcardsUIPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Test cards
        </h1>
        <div className="mt-7">
          <TestCardContent />
        </div>
      </div>
    </>
  );
}
