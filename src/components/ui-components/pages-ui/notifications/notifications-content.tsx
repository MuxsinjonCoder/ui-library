"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import TerminalCode from "@/components/reuseable/terminal-code";
import CodePreview from "@/components/reuseable/code-preview";
import { Suspense } from "react";
import NotificationsList from "./notificataions-list";

function NotificationsPageInner() {
  // states
  const [tabValue, setTabValue] = useState("preview");
  const [isLoading, setIsLoading] = useState(false);

  // helpers
  const router = useRouter();
  const searchParams = useSearchParams();

  const terminalShadcnCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest init" },
    { type: "npm", code: "npx shadcn@latest init" },
    { type: "yarn", code: "yarn shadcn@latest init" },
    { type: "bun", code: "bunx --bun shadcn@latest init" },
  ];

  const terminalCardCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add card" },
    { type: "npm", code: "npx shadcn@latest add card" },
    { type: "yarn", code: "yarn shadcn@latest add card" },
    { type: "bun", code: "bunx --bun shadcn@latest add card" },
  ];

  const terminalLucideCodes = [
    { type: "npm", code: "npm install lucide-react" },
    { type: "yarn", code: "yarn add lucide-react" },
    { type: "pnpm", code: "pnpm add lucide-react" },
  ];

  const terminalTooltipCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add tooltip" },
    { type: "npm", code: "npx shadcn@latest add tooltip" },
    { type: "yarn", code: "yarn shadcn@latest add tooltip" },
    { type: "bun", code: "bunx --bun shadcn@latest add tooltip" },
  ];

  const terminalBadgeCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add badge" },
    { type: "npm", code: "npx shadcn@latest add badge" },
    { type: "yarn", code: "yarn shadcn@latest add badge" },
    { type: "bun", code: "bunx --bun shadcn@latest add badge" },
  ];

  const terminalButtonCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add button" },
    { type: "npm", code: "npx shadcn@latest add button" },
    { type: "yarn", code: "yarn shadcn@latest add button" },
    { type: "bun", code: "bunx --bun shadcn@latest add button" },
  ];

  // useEffects
  useEffect(() => {
    const tab = searchParams.get("tab") || "preview";
    setTabValue(tab);
    const titles = { preview: "Preview", code: "Code" };
    const tabKey = tab === "preview" || tab === "code" ? tab : "preview";
    document.title = `Notifications - ${titles[tabKey]}`;
  }, [searchParams]);

  // functions
  const handleTabChange = (value: string) => {
    setTabValue(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", value);
    router.push(`?${params.toString()}`);
  };

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
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
            {/* <CardHeader>
              <CardTitle className="text-white">Modals Variants:</CardTitle>
            </CardHeader> */}
            <CardContent>
              <div>
                <NotificationsList />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Install things bellow for use notifications page:
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
                  Installation of shadcnUI badge:
                </h3>
                <TerminalCode terminalCodes={terminalBadgeCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI button:
                </h3>
                <TerminalCode terminalCodes={terminalButtonCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI card:
                </h3>
                <TerminalCode terminalCodes={terminalCardCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of lucide icons:
                </h3>
                <TerminalCode terminalCodes={terminalLucideCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI tooltip:
                </h3>
                <TerminalCode terminalCodes={terminalTooltipCodes} />
              </div>
            </CardContent>
          </Card>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Notifications page component and usage examples:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Notifications component:
                </h3>
                <CodePreview
                  fileName="notifications-list.tsx"
                  code={`
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import NoData from "@/components/ui/noData";
import Link from "next/link";
import { Loader } from "@/components/ui/loader";

const notificationTypeStyles: Record<string, string> = {
  TEST_SCHEDULED: "bg-yellow-100 hover:bg-yellow-200 text-primary",
  TEST_STARTED: "bg-blue-100 hover:bg-blue-200 text-primary",
  TEST_COMPLETED: "bg-green-100 hover:bg-green-200 text-primary",
  INTERVIEW_SCHEDULED: "bg-indigo-100 hover:bg-indigo-200 text-primary",
  INTERVIEW_RESULT: "bg-purple-100 hover:bg-purple-200 text-primary",
  DEMO_LESSON_SCHEDULED: "bg-orange-100 hover:bg-orange-200 text-primary",
  DEMO_LESSON_RESULT: "bg-emerald-100 hover:bg-emerald-200 text-primary",
};

const notificationLabels: Record<string, string> = {
  TEST_SCHEDULED: "Test scheduled",
  TEST_STARTED: "Test started",
  TEST_COMPLETED: "Test completed",
  INTERVIEW_SCHEDULED: "Interview scheduled",
  INTERVIEW_RESULT: "Interview result",
  DEMO_LESSON_SCHEDULED: "Demo lesson scheduled",
  DEMO_LESSON_RESULT: "Demo lesson result",
};

const dummyNotifications = [
  {
    id: 1,
    title: "Math test scheduled",
    content: "Math test will be held on May 10 at 14:00.",
    notificationStatus: "TEST_SCHEDULED",
    read: false,
  },
  {
    id: 2,
    title: "Test started",
    content: "The math test has now started.",
    notificationStatus: "TEST_STARTED",
    read: true,
  },
  {
    id: 3,
    title: "Interview scheduled",
    content: "The interview is scheduled for May 12 at 10:00.",
    notificationStatus: "INTERVIEW_SCHEDULED",
    read: false,
  },
  {
    id: 4,
    title: "Interview result",
    content: "You successfully passed the interview!",
    notificationStatus: "INTERVIEW_RESULT",
    read: false,
  },
  {
    id: 5,
    title: "Demo lesson scheduled",
    content: "Demo lesson will take place on May 15 at 16:00.",
    notificationStatus: "DEMO_LESSON_SCHEDULED",
    read: true,
  },
];

export default function NotificationsList() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [loadingStates, setLoadingStates] = useState<{
    [key: number]: { read: boolean; delete: boolean };
  }>({});

  const filteredData =
    activeFilter === "ALL"
      ? dummyNotifications
      : dummyNotifications.filter(
          (item) => item.notificationStatus === activeFilter
        );

  const handleDelete = (id: number) => {
    setLoadingStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], delete: true },
    }));
    setTimeout(() => {
      setLoadingStates((prev) => ({
        ...prev,
        [id]: { ...prev[id], delete: false },
      }));
    }, 1000);
  };

  const handleReadNotification = (id: number) => {
    setLoadingStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], read: true },
    }));
    setTimeout(() => {
      setLoadingStates((prev) => ({
        ...prev,
        [id]: { ...prev[id], read: false },
      }));
    }, 1000);
  };

  return (
    <>
      <Card className="min-w-[90vw] sm:min-w-[95vw] xl:min-w-full">
        <CardContent className="flex items-center gap-2 md:gap-5 flex-wrap">
          <Badge
            onClick={() => setActiveFilter("ALL")}
            className={cn(
              activeFilter === "ALL" ? "" : "bg-muted text-muted-foreground"
            )}
          >
            All
          </Badge>
          {Object.entries(notificationLabels).map(([key, label]) => (
            <Badge
              key={key}
              onClick={() => setActiveFilter(key)}
              className={cn(
                activeFilter === key ? "" : notificationTypeStyles[key]
              )}
            >
              {label}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-5 mt-5">
        {filteredData?.length ? (
          filteredData.map((item, index) => (
            <Card
              key={index}
              className={cn(
                "min-w-[90vw] sm:min-w-[95vw] xl:min-w-full transition-all duration-300 hover:scale-[1.01]",
                item.notificationStatus === "TEST_SCHEDULED" && "bg-yellow-100",
                item.notificationStatus === "TEST_STARTED" && "bg-blue-100",
                item.notificationStatus === "TEST_COMPLETED" && "bg-green-100",
                item.notificationStatus === "INTERVIEW_SCHEDULED" &&
                  "bg-indigo-100",
                item.notificationStatus === "INTERVIEW_RESULT" &&
                  "bg-purple-100",
                item.notificationStatus === "DEMO_LESSON_SCHEDULED" &&
                  "bg-orange-100",
                item.notificationStatus === "DEMO_LESSON_RESULT" &&
                  "bg-emerald-100",
                item?.read ? "" : "border-4 border-primary"
              )}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <Link
                  className="w-full"
                  href={
                    item.notificationStatus === "TEST_SCHEDULED"
                      ? "/user/tests"
                      : item.notificationStatus === "TEST_COMPLETED"
                      ? "/users"
                      : "/user/dashboard"
                  }
                >
                  <CardHeader className="max-w-[90%]">
                    <CardTitle>{item?.title}</CardTitle>
                    <CardDescription>{item?.content}</CardDescription>
                  </CardHeader>
                </Link>
                <CardContent className="py-2 px-4 flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          disabled={loadingStates[item?.id]?.read}
                          onClick={() =>
                            handleReadNotification(Number(item?.id))
                          }
                          variant={"icon"}
                          size={"sm"}
                        >
                          {loadingStates[item?.id]?.read ? (
                            <Loader />
                          ) : (
                            <CheckCircle className="text-primary" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Mark as read</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          disabled={loadingStates[item?.id]?.delete}
                          onClick={() => handleDelete(Number(item?.id))}
                          variant={"icon"}
                          size={"sm"}
                        >
                          {loadingStates[item?.id]?.delete ? (
                            <Loader />
                          ) : (
                            <Trash2 className="text-destructive" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Delete notification</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              </div>
            </Card>
          ))
        ) : (
          <NoData />
        )}
      </div>
    </>
  );
}

                    `}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default function NotificationsPageContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotificationsPageInner />
    </Suspense>
  );
}
