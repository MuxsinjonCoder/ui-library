import RoleAddModalContent from "@/components/ui-components/modals-design/role-add-modal-ui/role-add-modal-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Role add modal – UI Library",
  description:
    "A collection of responsive, accessible, and customizable modal components for displaying dialogs, alerts, and more. Built with shadcn/ui for seamless integration.",
  icons: "/logo.png",
};

export default function RoleAddModalUIPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Role add modal with permissions
        </h1>
        <div className="mt-7">
          <RoleAddModalContent />
        </div>
      </div>
    </>
  );
}
