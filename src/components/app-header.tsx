"use client";

import { Button } from "./ui/button";
import { Bell, Dot, LibraryBig } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AppSidebar } from "./app-sidebar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function AppHeader() {
  const [canPlaySound, setCanPlaySound] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const enableSound = () => {
      setCanPlaySound(true);
      document.removeEventListener("click", enableSound);
    };
    document.addEventListener("click", enableSound);
    return () => document.removeEventListener("click", enableSound);
  }, []);

  const logout = () => {
    router.replace("/auth/login");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="flex items-center justify-between gap-5">
        <Link href={"/"}>
          <div className="flex items-center">
            <LibraryBig className="text-white sm:size-10" />
            <h2 className="text-white text-xl font-bold sm:text-2xl pl-2 border-l-2 ml-1 relative">
              UI{" "}
              <span className="text-xs sm:text-sm absolute -top-2 left-8 opacity-70">
                library
              </span>
            </h2>
          </div>
        </Link>

        <div className="hidden lg:flex items-center justify-end gap-5">
          <Link
            className={`flex items-center gap-0 ${
              path === "/"
                ? "text-white font-bold"
                : "text-white opacity-70 font-medium"
            }`}
            href={"/"}
          >
            {path === "/" && <Dot className="text-white size-10 -mr-3" />} Home
          </Link>
          <Link
            className={`flex items-center gap-0 ${
              path === "/docs"
                ? "text-white font-bold"
                : "text-white opacity-70 font-medium"
            }`}
            href={"/docs"}
          >
            {path === "/docs" && <Dot className="text-white size-10 -mr-3" />}{" "}
            Docs
          </Link>
          <Link
            className={`flex items-center gap-0 ${
              path === "/ui-components" || path?.includes("/ui-components")
                ? "text-white font-bold"
                : "text-white opacity-70 font-medium"
            }`}
            href={"/ui-components"}
          >
            {path === "/ui-components" ||
              (path?.includes("/ui-components") && (
                <Dot className="text-white size-10 -mr-3" />
              ))}{" "}
            Components
          </Link>
        </div>

        <Button
          className="lg:hidden"
          variant="icon"
          size="sm"
          onClick={() => setDrawerOpen(true)}
        >
          <div className="flex flex-col items-end justify-end gap-2">
            <div className="bg-white w-8 h-[2px]" />
            <div className="bg-white w-5 h-[2px]" />
            <div className="bg-white w-8 h-[2px]" />
          </div>
        </Button>
      </div>

      <Sheet open={isDrawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent
          side="left"
          className="p-0 w-[16rem] bg-gradient-to-b from-gray-900 to-gray-800 text-white border-r border-gray-700 shadow-xl"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Mobile sidebar navigation</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
            <AppSidebar onLinkClick={() => setDrawerOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
