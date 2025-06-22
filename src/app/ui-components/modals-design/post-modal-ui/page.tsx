import PostModalContent from "@/components/ui-components/modals-design/post-modal-ui/post-modal-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social medial post add modals – UI Library",
  description:
    "A collection of responsive, accessible, and customizable modal components for displaying dialogs, alerts, and more. Built with shadcn/ui for seamless integration.",
  icons: "/logo.png",
};

export default function SocialMediaModalsPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Social media post add modal
        </h1>
        <div className="mt-7">
          <PostModalContent />
        </div>
      </div>
    </>
  );
}
