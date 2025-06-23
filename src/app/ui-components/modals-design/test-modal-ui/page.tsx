import TestAddModalContent from "@/components/ui-components/modals-design/test-modal-ui/test-add-modal-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test add modal – UI Library",
  description:
    "A collection of responsive, accessible, and customizable modal components for displaying dialogs, alerts, and more. Built with shadcn/ui for seamless integration.",
  icons: "/logo.png",
};

export default function TestAddModalDesignPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Test add modal
        </h1>
        <div className="mt-7">
          <TestAddModalContent />
        </div>
      </div>
    </>
  );
}
