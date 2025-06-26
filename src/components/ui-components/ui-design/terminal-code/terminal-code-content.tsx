"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import {
  Tabs,
  TabsContent as UITabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import TerminalCode from "@/components/reuseable/terminal-code";
import CodePreview from "@/components/reuseable/code-preview";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Calendar, Settings, Users } from "lucide-react";

function TerminalCodeInner() {
  const [tabValue, setTabValue] = useState("preview");
  const router = useRouter();
  const searchParams = useSearchParams();

  const terminalCodeExample = [
    { type: "Type1", code: "Type1 terminal code example" },
    { type: "Type2", code: "Type2 terminal code example" },
    { type: "Type3", code: "Type3 terminal code example" },
    { type: "Type4", code: "Type4 terminal code example" },
    { type: "Type5", code: "Type5 terminal code example" },
  ];

  const terminalShadcnCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest init" },
    { type: "npm", code: "npx shadcn@latest init" },
    { type: "yarn", code: "yarn shadcn@latest init" },
    { type: "bun", code: "bunx --bun shadcn@latest init" },
  ];

  const terminalButtonCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add button" },
    { type: "npm", code: "npx shadcn@latest add button" },
    { type: "yarn", code: "yarn shadcn@latest add button" },
    { type: "bun", code: "bunx --bun shadcn@latest add button" },
  ];

  const terminalLucideCodes = [
    { type: "npm", code: "npm install lucide-react" },
    { type: "yarn", code: "yarn add lucide-react" },
    { type: "pnpm", code: "pnpm add lucide-react" },
  ];

  useEffect(() => {
    const tab = searchParams.get("tab") || "preview";
    setTabValue(tab);
    const titles = { preview: "Preview", code: "Code" };
    const tabKey = tab === "preview" || tab === "code" ? tab : "preview";
    document.title = `Tabs - ${titles[tabKey]}`;
  }, [searchParams]);

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
        <UITabsContent value="preview">
          <Card>
            {/* <CardHeader> */}
            {/* <CardTitle className="text-white">Button Variants:</CardTitle> */}
            {/* </CardHeader> */}
            <CardContent>
              <div>
                <TerminalCode terminalCodes={terminalCodeExample} />
              </div>
            </CardContent>
          </Card>
        </UITabsContent>
        <UITabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Install shadcn-ui for using terminal code reuseable component:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI:
                </h3>
                <TerminalCode terminalCodes={terminalShadcnCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI button:
                </h3>
                <TerminalCode terminalCodes={terminalButtonCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of lucide icons:
                </h3>
                <TerminalCode terminalCodes={terminalLucideCodes} />
              </div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Terminal code component and usage examples:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-white">
                    Terminal code component:
                  </h3>
                  <CodePreview
                    fileName="terminal-code.tsx"
                    code={`
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface TerminalCodeProps {
  terminalCodes: { type: string; code: string }[];
}

export default function TerminalCode({ terminalCodes }: TerminalCodeProps) {
  const [selectedCommand, setSelectedCommand] = useState(
    terminalCodes[0]?.code || ""
  );
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(selectedCommand);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full mx-auto my-4">
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-md shadow-2xl border border-gray-700 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 text-gray-300">
          <div className="flex space-x-3">
            {terminalCodes.map((cmd) => (
              <button
                key={cmd.type}
                onClick={() => setSelectedCommand(cmd.code)}
                className={cn(
                  "px-4 py-1 rounded-full cursor-pointer text-xs font-mono transition-colors",
                  selectedCommand === cmd.code
                    ? "bg-green-400 text-gray-900"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                )}
              >
                {cmd.type}
              </button>
            ))}
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className={cn(
              "text-gray-300 hover:text-white transition-colors duration-200",
              isCopied && "text-green-400"
            )}
            title={isCopied ? "Copied!" : "Copy command"}
          >
            {isCopied ? (
              <Check className="h-5 w-5 animate-pulse" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </Button>
        </div>
        <div className="px-5 py-3 bg-gray-900">
          <p className="w-full bg-transparent text-white font-mono text-base">
            {selectedCommand}
          </p>
        </div>
      </div>
    </div>
  );
}
                    `}
                  />
                </div>

                <div>
                  <h3 className="font-medium text-white">
                    Usage of terminal code component:
                  </h3>
                  <CodePreview
                    fileName="Terminal code useage"
                    code={`
import TerminalCode from "@/components/reuseable/terminal-code";
                    
export default function TerminalCodeUsedComp() {
const terminalCodeExample = [
   { type: "Type1", code: "Type1 terminal code example" },
   { type: "Type2", code: "Type2 terminal code example" },
   { type: "Type3", code: "Type3 terminal code example" },
   { type: "Type4", code: "Type4 terminal code example" },
   { type: "Type5", code: "Type5 terminal code example" },
];

return (
  <TerminalCode terminalCodes={terminalCodeExample} />
);
}
                    `}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </UITabsContent>
      </Tabs>
    </>
  );
}

export default function TerminalCodeContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TerminalCodeInner />
    </Suspense>
  );
}
