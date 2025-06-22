"use client";

import { Button } from "@/components/ui/button";
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

function TabsContentInner() {
  const [tabValue, setTabValue] = useState("preview");
  const router = useRouter();
  const searchParams = useSearchParams();

  const terminalShadcnCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest init" },
    { type: "npm", code: "npx shadcn@latest init" },
    { type: "yarn", code: "yarn shadcn@latest init" },
    { type: "bun", code: "bunx --bun shadcn@latest init" },
  ];

  const terminalTabsCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add tabs" },
    { type: "npm", code: "npx shadcn@latest add tabs" },
    { type: "yarn", code: "yarn shadcn@latest add tabs" },
    { type: "bun", code: "bunx --bun shadcn@latest add tabs" },
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
            <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-medium text-xl">Average tabs</h3>
                <Tabs defaultValue="overview">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="overview" className="gap-2">
                      <BarChart3 className="h-4 w-4" /> Overview
                    </TabsTrigger>
                    <TabsTrigger value="users" className="gap-2">
                      <Users className="h-4 w-4" /> Users
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="gap-2">
                      <Settings className="h-4 w-4" /> Settings
                    </TabsTrigger>
                  </TabsList>
                  <UITabsContent value="overview" className="pt-4">
                    <p className="text-white">
                      Overview content with charts and metrics.
                    </p>
                  </UITabsContent>
                  <UITabsContent value="users" className="pt-4">
                    <p className="text-white">User management and profiles.</p>
                  </UITabsContent>
                  <UITabsContent value="settings" className="pt-4">
                    <p className="text-white">
                      Application settings and configurations.
                    </p>
                  </UITabsContent>
                </Tabs>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-medium text-xl">
                  Bordered tabs
                </h3>
                <Tabs defaultValue="overview">
                  <TabsList className="w-full p-0 m-0">
                    <TabsTrigger
                      value="overview"
                      className="gap-2 rounded-l-full"
                    >
                      <BarChart3 className="h-4 w-4" /> Overview
                    </TabsTrigger>
                    <TabsTrigger value="users" className="gap-2 rounded-none">
                      <Users className="h-4 w-4" /> Users
                    </TabsTrigger>
                    <TabsTrigger
                      value="settings"
                      className="gap-2 rounded-r-full"
                    >
                      <Settings className="h-4 w-4" /> Settings
                    </TabsTrigger>
                  </TabsList>
                  <UITabsContent value="overview" className="pt-4">
                    <p className="text-white">
                      Overview content with charts and metrics.
                    </p>
                  </UITabsContent>
                  <UITabsContent value="users" className="pt-4">
                    <p className="text-white">User management and profiles.</p>
                  </UITabsContent>
                  <UITabsContent value="settings" className="pt-4">
                    <p className="text-white">
                      Application settings and configurations.
                    </p>
                  </UITabsContent>
                </Tabs>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-medium text-xl">
                  Border bottom tabs
                </h3>
                <Tabs defaultValue="overview">
                  <TabsList className="w-full p-0 m-0 border-b border-gray-500 overflow-hidden">
                    <TabsTrigger
                      value="overview"
                      className="gap-2 rounded-l-full relative data-[state=active]:bg-gray-100 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[4px] data-[state=active]:after:bg-transparent data-[state=active]:after:border-b-4 data-[state=active]:after:border-primary"
                    >
                      <BarChart3 className="h-4 w-4" /> Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="users"
                      className="gap-2 rounded-none relative data-[state=active]:bg-gray-100 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[4px] data-[state=active]:after:bg-transparent data-[state=active]:after:border-b-4 data-[state=active]:after:border-primary"
                    >
                      <Users className="h-4 w-4" /> Users
                    </TabsTrigger>
                    <TabsTrigger
                      value="settings"
                      className="gap-2 rounded-r-full relative data-[state=active]:bg-gray-100 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[4px] data-[state=active]:after:bg-transparent data-[state=active]:after:border-b-4 data-[state=active]:after:border-primary"
                    >
                      <Settings className="h-4 w-4" /> Settings
                    </TabsTrigger>
                  </TabsList>
                  <UITabsContent value="overview" className="pt-4">
                    <p className="text-white">
                      Overview content with charts and metrics.
                    </p>
                  </UITabsContent>
                  <UITabsContent value="users" className="pt-4">
                    <p className="text-white">User management and profiles.</p>
                  </UITabsContent>
                  <UITabsContent value="settings" className="pt-4">
                    <p className="text-white">
                      Application settings and configurations.
                    </p>
                  </UITabsContent>
                </Tabs>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-medium text-xl">
                  Outline transparent tabs
                </h3>
                <Tabs defaultValue="overview">
                  <TabsList className="w-full justify-start bg-transparent backdrop-blur-xs border border-secondary">
                    <TabsTrigger
                      value="overview"
                      className="gap-2 text-white data-[state=active]:text-black data-[state=active]:bg-gray-200"
                    >
                      <BarChart3 className="h-4 w-4" /> Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="users"
                      className="gap-2 text-white data-[state=active]:text-black data-[state=active]:bg-gray-200"
                    >
                      <Users className="h-4 w-4" /> Users
                    </TabsTrigger>
                    <TabsTrigger
                      value="settings"
                      className="gap-2 text-white data-[state=active]:text-black data-[state=active]:bg-gray-200"
                    >
                      <Settings className="h-4 w-4" /> Settings
                    </TabsTrigger>
                  </TabsList>

                  <UITabsContent value="overview" className="pt-4">
                    <p className="text-white">
                      Overview content with charts and metrics.
                    </p>
                  </UITabsContent>
                  <UITabsContent value="users" className="pt-4">
                    <p className="text-white">User management and profiles.</p>
                  </UITabsContent>
                  <UITabsContent value="settings" className="pt-4">
                    <p className="text-white">
                      Application settings and configurations.
                    </p>
                  </UITabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </UITabsContent>
        <UITabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Install shadcn-ui for using these tabs:
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
                  Installation of shadcnUI tabs:
                </h3>
                <TerminalCode terminalCodes={terminalTabsCodes} />
              </div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Tabs component and usage examples:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-white">tabs component:</h3>
                  <CodePreview
                    code={`
"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background cursor-pointer dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
`}
                    fileName="tabs.tsx"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-white">Usage examples:</h3>
                  <CodePreview
                    code={`
"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Users, Settings } from "lucide-react";

export default function TabsExample() {
  return (
      <div className="flex flex-col gap-3">
                <h3 className="text-white font-medium text-xl">Average tabs</h3>
                <Tabs defaultValue="overview">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="overview" className="gap-2">
                      <BarChart3 className="h-4 w-4" /> Overview
                    </TabsTrigger>
                    <TabsTrigger value="users" className="gap-2">
                      <Users className="h-4 w-4" /> Users
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="gap-2">
                      <Settings className="h-4 w-4" /> Settings
                    </TabsTrigger>
                  </TabsList>
                  <UITabsContent value="overview" className="pt-4">
                    <p className="text-white">
                      Overview content with charts and metrics.
                    </p>
                  </UITabsContent>
                  <UITabsContent value="users" className="pt-4">
                    <p className="text-white">User management and profiles.</p>
                  </UITabsContent>
                  <UITabsContent value="settings" className="pt-4">
                    <p className="text-white">
                      Application settings and configurations.
                    </p>
                  </UITabsContent>
                </Tabs>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-medium text-xl">
                  Bordered tabs
                </h3>
                <Tabs defaultValue="overview">
                  <TabsList className="w-full p-0 m-0">
                    <TabsTrigger
                      value="overview"
                      className="gap-2 rounded-l-full"
                    >
                      <BarChart3 className="h-4 w-4" /> Overview
                    </TabsTrigger>
                    <TabsTrigger value="users" className="gap-2 rounded-none">
                      <Users className="h-4 w-4" /> Users
                    </TabsTrigger>
                    <TabsTrigger
                      value="settings"
                      className="gap-2 rounded-r-full"
                    >
                      <Settings className="h-4 w-4" /> Settings
                    </TabsTrigger>
                  </TabsList>
                  <UITabsContent value="overview" className="pt-4">
                    <p className="text-white">
                      Overview content with charts and metrics.
                    </p>
                  </UITabsContent>
                  <UITabsContent value="users" className="pt-4">
                    <p className="text-white">User management and profiles.</p>
                  </UITabsContent>
                  <UITabsContent value="settings" className="pt-4">
                    <p className="text-white">
                      Application settings and configurations.
                    </p>
                  </UITabsContent>
                </Tabs>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-medium text-xl">
                  Border bottom tabs
                </h3>
                <Tabs defaultValue="overview">
                  <TabsList className="w-full p-0 m-0 border-b border-gray-500 overflow-hidden">
                    <TabsTrigger
                      value="overview"
                      className="gap-2 rounded-l-full relative data-[state=active]:bg-gray-100 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[4px] data-[state=active]:after:bg-transparent data-[state=active]:after:border-b-4 data-[state=active]:after:border-primary"
                    >
                      <BarChart3 className="h-4 w-4" /> Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="users"
                      className="gap-2 rounded-none relative data-[state=active]:bg-gray-100 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[4px] data-[state=active]:after:bg-transparent data-[state=active]:after:border-b-4 data-[state=active]:after:border-primary"
                    >
                      <Users className="h-4 w-4" /> Users
                    </TabsTrigger>
                    <TabsTrigger
                      value="settings"
                      className="gap-2 rounded-r-full relative data-[state=active]:bg-gray-100 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[4px] data-[state=active]:after:bg-transparent data-[state=active]:after:border-b-4 data-[state=active]:after:border-primary"
                    >
                      <Settings className="h-4 w-4" /> Settings
                    </TabsTrigger>
                  </TabsList>
                  <UITabsContent value="overview" className="pt-4">
                    <p className="text-white">
                      Overview content with charts and metrics.
                    </p>
                  </UITabsContent>
                  <UITabsContent value="users" className="pt-4">
                    <p className="text-white">User management and profiles.</p>
                  </UITabsContent>
                  <UITabsContent value="settings" className="pt-4">
                    <p className="text-white">
                      Application settings and configurations.
                    </p>
                  </UITabsContent>
                </Tabs>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-medium text-xl">
                  Outline transparent tabs
                </h3>
                <Tabs defaultValue="overview">
                  <TabsList className="w-full justify-start bg-transparent backdrop-blur-xs border border-secondary">
                    <TabsTrigger
                      value="overview"
                      className="gap-2 text-white data-[state=active]:text-black data-[state=active]:bg-gray-200"
                    >
                      <BarChart3 className="h-4 w-4" /> Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="users"
                      className="gap-2 text-white data-[state=active]:text-black data-[state=active]:bg-gray-200"
                    >
                      <Users className="h-4 w-4" /> Users
                    </TabsTrigger>
                    <TabsTrigger
                      value="settings"
                      className="gap-2 text-white data-[state=active]:text-black data-[state=active]:bg-gray-200"
                    >
                      <Settings className="h-4 w-4" /> Settings
                    </TabsTrigger>
                  </TabsList>

                  <UITabsContent value="overview" className="pt-4">
                    <p className="text-white">
                      Overview content with charts and metrics.
                    </p>
                  </UITabsContent>
                  <UITabsContent value="users" className="pt-4">
                    <p className="text-white">User management and profiles.</p>
                  </UITabsContent>
                  <UITabsContent value="settings" className="pt-4">
                    <p className="text-white">
                      Application settings and configurations.
                    </p>
                  </UITabsContent>
                </Tabs>
              </div>
  );
}
`}
                    fileName="tabs-example.tsx"
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

export default function TabsContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TabsContentInner />
    </Suspense>
  );
}
