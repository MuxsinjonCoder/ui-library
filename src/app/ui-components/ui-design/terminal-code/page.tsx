import TerminalCodeContent from "@/components/ui-components/ui-design/terminal-code/terminal-code-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminal – Installation Commands",
  description:
    "Quickly copy and run terminal commands to install and initialize your custom UI library using pnpm, npm, yarn, or bun. Simple, flexible, and ready to use in your projects.",
  icons: "/logo.png",
};

export default function TerminalCodePage() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Terminal code
        </h1>
        <div className="mt-7">
          <TerminalCodeContent />
        </div>
      </div>
    </>
  );
}
