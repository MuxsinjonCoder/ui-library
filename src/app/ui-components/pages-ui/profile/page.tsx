import ProfilePageContent from "@/components/ui-components/pages-ui/profile/profile-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile – UI Components Library",
  description:
    "Manage and customize your user profile with responsive and accessible components. Built using shadcn/ui for seamless integration and great user experience.",
  icons: {
    icon: "/logo.png",
  },
};

export default function ProfilePages() {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Profile page UI
        </h1>
        <div className="mt-7">
          <ProfilePageContent />
        </div>
      </div>
    </>
  );
}
