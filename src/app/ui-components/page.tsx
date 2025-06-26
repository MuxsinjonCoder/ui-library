import Link from "next/link";
import { SidebarItems } from "@/constants/sidebar-data";

export const metadata = {
  title: "UI Components | MyApp",
  description:
    "Explore a collection of reusable and customizable UI components built with Tailwind CSS and shadcn/ui.",
  keywords: ["UI components", "Tailwind CSS", "shadcn/ui", "React", "Next.js"],
};

export default function ComponentsHome() {
  return (
    <section className="w-full bg-gradient-to-br from-primary via-secondary to-primary bg-fixed py-16 px-4 md:px-8 text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Welcome to the UI Components Library
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted max-w-2xl mx-auto">
            Browse and interact with a growing collection of reusable components
            designed using Tailwind CSS and shadcn/ui.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SidebarItems.map((group, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-xl backdrop-blur-sm hover:border-white/20 transition-colors"
            >
              <h2 className="text-lg font-semibold text-white mb-4 tracking-wide uppercase">
                {group.title}
              </h2>
              <ul className="space-y-2">
                {group.subItems?.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.url}
                      className="text-sm text-white/80 hover:text-white hover:underline transition"
                    >
                      → {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
