import NotificationsPageContent from "@/components/ui-components/pages-ui/notifications/notifications-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications – UI Components Library",
  description:
    "Explore a versatile set of responsive, accessible, and fully customizable notification components including dialogs, alerts, and more — seamlessly integrated with shadcn/ui.",
  icons: {
    icon: "/logo.png",
  },
};

export default function NotificationsPages() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Notifications page UI
        </h1>
        <div className="mt-7">
          <NotificationsPageContent />
        </div>
      </div>
    </>
  );
}
