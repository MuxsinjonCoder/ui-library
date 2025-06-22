"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Reuseabledrawer from "./reuseabledrawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import TerminalCode from "@/components/reuseable/terminal-code";
import CodePreview from "@/components/reuseable/code-preview";

export default function DrawerContent() {
  // states
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerOrientation, setDrawerOrientation] = useState<
    "left" | "right" | "top" | "bottom" | undefined
  >("right");
  const [tabValue, setTabValue] = useState("preview");

  // halpers
  const router = useRouter();
  const searchParams = useSearchParams();

  const terminalFramerCodes = [
    { type: "npm", code: "npm install framer-motion" },
    { type: "yarn", code: "yarn add framer-motion" },
    { type: "pnpm", code: "pnpm add framer-motion" },
  ];

  const terminalLucideCodes = [
    { type: "npm", code: "npm install lucide-react" },
    { type: "yarn", code: "yarn add lucide-react" },
    { type: "pnpm", code: "pnpm add lucide-react" },
  ];

  // useEffects
  useEffect(() => {
    const tab = searchParams.get("tab") || "preview";
    setTabValue(tab);
    const titles = { preview: "Preview", code: "Code" };
    const tabKey = tab === "preview" || tab === "code" ? tab : "preview";
    document.title = `Drawer - ${titles[tabKey]}`;
  }, [searchParams]);

  // functions
  const handleTabChange = (value: string) => {
    setTabValue(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <Tabs className="mb-7" value={tabValue} onValueChange={handleTabChange}>
        <TabsList className="w-[300px] mb-5">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle className="text-white">Drawer types below:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-5 w-full">
                <Button
                  onClick={() => {
                    setDrawerOpen(true);
                    setDrawerOrientation("left");
                  }}
                  variant={"outline"}
                >
                  Left drawer
                </Button>
                <Button
                  onClick={() => {
                    setDrawerOpen(true);
                    setDrawerOrientation("right");
                  }}
                  variant={"outline"}
                >
                  Right drawer
                </Button>
                <Button
                  onClick={() => {
                    setDrawerOpen(true);
                    setDrawerOrientation("bottom");
                  }}
                  variant={"outline"}
                >
                  Bottom drawer
                </Button>
                <Button
                  onClick={() => {
                    setDrawerOpen(true);
                    setDrawerOrientation("top");
                  }}
                  variant={"outline"}
                >
                  Top drawer
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="text-white text-xl">
                You need to install tools bellow for use drawer:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Framer motion for animation and drawer:
                </h3>
                <TerminalCode terminalCodes={terminalFramerCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Lucide icons for icons in drawer (optional):
                </h3>
                <TerminalCode terminalCodes={terminalLucideCodes} />
              </div>
            </CardContent>
          </Card>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Drawer component file and useage of this drawer bellow:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">Drawer codes bellow:</h3>
                <CodePreview
                  code={`
    "use client";

    import { useState } from "react";
    import { Copy } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import { cn } from "@/lib/utils";

    interface TerminalCodePropsTypes {
      code: string;
      fileName: string;
    }

    export default function CodePreview({ code, fileName }: TerminalCodePropsTypes) {
      const [isCopied, setIsCopied] = useState(false);

      const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(code);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      };

      return (
        <div className="relative w-full max-w-3xl mx-auto my-4">
          <div className="bg-gray-900 rounded-md shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm text-gray-400 ml-2">{fileName}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopy}
                className={cn(
                  "text-gray-400 hover:text-white transition-colors",
                  isCopied && "text-green-400"
                )}
                title={isCopied ? "Copied!" : "Copy code"}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm font-mono text-gray-200">
                {code}
              </code>
            </pre>
          </div>
        </div>
      );
    }
  `}
                  fileName="reuseableDrawer.tsx"
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">
                  Useage of drawer component:
                </h3>
                <CodePreview
                  code={`
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Reuseabledrawer from "@/components/Reuseabledrawer";

export default function DrawerExample() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerOrientation, setDrawerOrientation] = useState<
    "left" | "right" | "top" | "bottom"
  >("right");

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Open drawer button */}
      <Button
        onClick={() => {
          setDrawerOpen(true);
          setDrawerOrientation("left");
        }}
        variant="outline"
        className="w-fit"
      >
        Open Drawer
      </Button>

      {/* Reusable drawer component */}
      <Reuseabledrawer
        open={isDrawerOpen}
        setOpen={setDrawerOpen}
        orientation={drawerOrientation}
        title="Drawer Title"
      >
        <div className="text-gray-200 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </div>
      </Reuseabledrawer>
    </div>
  );
}
                    `}
                  fileName="Used place of drawer"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Reuseabledrawer */}
      <Reuseabledrawer
        open={isDrawerOpen}
        setOpen={setDrawerOpen}
        orientation={drawerOrientation}
        title={`${drawerOrientation} drawer`}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ab
          similique blanditiis eos eveniet explicabo omnis dignissimos
          consectetur suscipit aliquid, ipsum corporis pariatur laborum
          quibusdam architecto fugit, voluptates deleniti. Ipsa!
        </div>
      </Reuseabledrawer>
    </>
  );
}
