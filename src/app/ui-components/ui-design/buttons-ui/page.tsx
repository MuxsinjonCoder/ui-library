import ButtonsContent from "@/components/ui-components/ui-design/buttons-ui/buttons-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buttons – UI Library",
  description:
    "A collection of customizable, responsive, and accessible button components designed to fit any UI. Built with shadcn/ui for seamless integration into modern web applications.",
  icons: "/logo.png",
};

export default function ButtonsPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Buttons (ideas)
        </h1>
        <div className="mt-7">
          <ButtonsContent />
        </div>
      </div>
    </>
  );
}
