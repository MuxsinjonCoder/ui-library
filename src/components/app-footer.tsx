import { LibraryBig } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function AppFooter() {
  return (
    <footer className="bg-transparent">
      <div className="container mx-auto px-5 border-t-2 py-6">
        <div className="flex items-start gap-5 justify-between">
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
          <Button className="w-fit" variant={"secondary"}>
            <a target="_blank" href="https://muxsinjon.cv">
              Contact
            </a>
          </Button>
        </div>
        <p className="text-sm md:text-base text-muted text-center mt-5 md:m-0">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">ui.mern.uz</span> — All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
