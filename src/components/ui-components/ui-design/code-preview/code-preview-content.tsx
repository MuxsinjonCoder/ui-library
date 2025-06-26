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

function CodePreviewInner() {
  const [tabValue, setTabValue] = useState("preview");
  const router = useRouter();
  const searchParams = useSearchParams();

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

  const terminalFramerCodes = [
    { type: "npm", code: "npm install framer-motion" },
    { type: "yarn", code: "yarn add framer-motion" },
    { type: "pnpm", code: "pnpm add framer-motion" },
  ];

  const terminalPrismCodes = [
    { type: "pnpm", code: "pnpm add prism-react-renderer" },
    { type: "npm", code: "npm install prism-react-renderer" },
    { type: "yarn", code: "yarn add prism-react-renderer" },
    { type: "bun", code: "bun add prism-react-renderer" },
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
                <CodePreview
                  fileName="terminal-code.tsx"
                  code={`
"use client";
F
import { useState } from "react";
import { Copy, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";

interface TerminalCodePropsTypes {
  code: string;
  fileName: string;
  language?: string;
}

export default function CodePreview({
  code,
  fileName,
  language = "tsx",
}: TerminalCodePropsTypes) {
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="relative w-full mx-auto my-4">
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
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ height: 200 }}
            animate={{ height: isExpanded ? "auto" : 200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <Highlight theme={themes.vsDark} code={code} language={language}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={cn("px-4 py-2 text-sm overflow-x-auto", className)}
                  style={style}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center py-2 bg-gray-900 border-t border-gray-800">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                Collapse <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Expand <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
                    `}
                />
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

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of framer-motion:
                </h3>
                <TerminalCode terminalCodes={terminalFramerCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of prism-react-renderer:
                </h3>
                <TerminalCode terminalCodes={terminalPrismCodes} />
              </div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Code preview component and usage examples:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-white">
                    Code preview component:
                  </h3>
                  <CodePreview
                    fileName="terminal-code.tsx"
                    code={`
"use client";

import { useState } from "react";
import { Copy, ChevronDown, ChevronUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";

interface TerminalCodePropsTypes {
  code: string;
  fileName: string;
  language?: string;
}

export default function CodePreview({
  code,
  fileName,
  language = "tsx",
}: TerminalCodePropsTypes) {
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="relative w-full mx-auto my-4">
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
            {isCopied ? (
              <Check className="size-5" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ height: 200 }}
            animate={{ height: isExpanded ? "auto" : 200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <Highlight theme={themes.vsDark} code={code} language={language}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={cn("px-4 py-2 text-sm overflow-x-auto", className)}
                  style={style}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center py-2 bg-gray-900 border-t border-gray-800">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                Collapse <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Expand <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
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
                    Usage of code preview component:
                  </h3>
                  <CodePreview
                    fileName="Terminal code useage"
                    code={`
<CodePreview
fileName="terminal-code.tsx"
code={\`
"use client";

import { useState } from "react";
import { Copy, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";

interface TerminalCodePropsTypes {
  code: string;
  fileName: string;
  language?: string;
}

export default function CodePreview({
  code,
  fileName,
  language = "tsx",
}: TerminalCodePropsTypes) {
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="relative w-full mx-auto my-4">
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
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ height: 200 }}
            animate={{ height: isExpanded ? "auto" : 200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <Highlight theme={themes.vsDark} code={code} language={language}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={cn("px-4 py-2 text-sm overflow-x-auto", className)}
                  style={style}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center py-2 bg-gray-900 border-t border-gray-800">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                Collapse <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Expand <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
\`}
/>
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

export default function CodePreviewContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CodePreviewInner />
    </Suspense>
  );
}
