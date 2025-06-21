import DrawerContent from "@/components/ui-components/ui-design/drawers-ui/drawer-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drawer – UI Library",
  description:
    "A clean, responsive, and flexible drawer component to enhance navigation and UX in your web application. Built with shadcn/ui for seamless integration.",
  icons: "/logo.png",
};

export default function DrawersPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Drawer Components
        </h1>
        <div className="mt-7">
          <DrawerContent />
        </div>
      </div>
    </>
  );
}
