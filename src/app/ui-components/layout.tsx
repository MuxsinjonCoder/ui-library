import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "../globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";
import Link from "next/link";
import Providers from "../providers";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personal UI Components Library",
  description:
    "Explore a curated collection of reusable, responsive, and customizable UI components designed to accelerate your web development workflow.",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <div className="overflow-y-auto fixed inset-0 bg-fixed animate-gradient bg-gradient-to-br from-primary via-secondary to-primary bg-[length:300%_300%] transition-all duration-1000">
          <Providers>
            <SidebarProvider>
              <main className=" w-full">
                <div className="flex items-start gap-10 w-full container mx-auto">
                  <div className="mt-24 fixed bottom-5 h-[83%] overflow-y-auto hidden lg:block">
                    <AppSidebar />
                  </div>
                  <div className="flex flex-col gap-10 container mx-auto w-full">
                    <div className="z-50 fixed top-2 left-1/2 -translate-x-1/2 w-full">
                      <div className="container mx-auto backdrop-blur-[3px] border-2 border-secondary py-2 px-4 rounded-full">
                        <AppHeader />
                      </div>
                    </div>
                    <div className="w-auto mt-24 lg:ml-[250px]">{children}</div>
                  </div>
                </div>
                <div className="fixed right-5 bottom-5 z-50">
                  <Link href={"/tools"}>
                    <Button
                      className="border-2 border-background text-background"
                      variant={"icon"}
                      size={"sm"}
                    >
                      <PenTool />
                    </Button>
                  </Link>
                </div>
              </main>
            </SidebarProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}
