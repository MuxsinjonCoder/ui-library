import ButtonsContent from "@/components/ui-components/ui-design/buttons-ui/buttons-content";
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
          Modals (ideas)
        </h1>
        <div className="mt-7">
          <ButtonsContent />
        </div>
      </div>
    </>
  );
}
