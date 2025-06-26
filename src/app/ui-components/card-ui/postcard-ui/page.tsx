import PostCardContent from "@/components/ui-components/card-ui/postcard-ui/post-card-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post card – UI Library",
  description:
    "A collection of responsive, accessible, and customizable modal components for displaying dialogs, alerts, and more. Built with shadcn/ui for seamless integration.",
  icons: "/logo.png",
};

export default function PostCardUiPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Post cards
        </h1>
        <div className="mt-7">
          <PostCardContent />
        </div>
      </div>
    </>
  );
}
