import TabsContent from "@/components/ui-components/ui-design/tabs-ui/tabs-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabs – UI Library",
  description:
    "A set of flexible, accessible, and responsive tab components to organize content efficiently. Built with shadcn/ui for easy integration into modern interfaces.",
  icons: "/logo.png",
};

export default function TabsPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Tabs (ideas)
        </h1>
        <div className="mt-7">
          <TabsContent />
        </div>
      </div>
    </>
  );
}
