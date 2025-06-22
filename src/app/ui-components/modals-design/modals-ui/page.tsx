import ModalsContent from "@/components/ui-components/modals-design/modals-ui/modals-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modals – UI Library",
  description:
    "A collection of responsive, accessible, and customizable modal components for displaying dialogs, alerts, and more. Built with shadcn/ui for seamless integration.",
  icons: "/logo.png",
};

export default function ModalsPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Modals
        </h1>
        <div className="mt-7">
          <ModalsContent />
        </div>
      </div>
    </>
  );
}
