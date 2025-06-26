import CodePreviewContent from "@/components/ui-components/ui-design/code-preview/code-preview-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminal Code Usage – Custom UI Library",
  description:
    "Learn how to implement and use the custom TerminalCode component with multiple command types. Easily display and switch between installation commands like pnpm, npm, yarn, or bun in a visually organized code preview block.",
  icons: "/logo.png",
};

export default function CodePreviewPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Code preview page
        </h1>
        <div className="mt-7">
          <CodePreviewContent />
        </div>
      </div>
    </>
  );
}
