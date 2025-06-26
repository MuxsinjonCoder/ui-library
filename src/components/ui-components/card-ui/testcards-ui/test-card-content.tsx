"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import TerminalCode from "@/components/reuseable/terminal-code";
import CodePreview from "@/components/reuseable/code-preview";
import { Suspense } from "react";
import { GotQuestionTypes } from "./question-card";
import UserQuestions from "./user-question";

function TestCardInner() {
  // states
  const [tabValue, setTabValue] = useState("preview");
  const [selectedTestOptions, setSelectedTestOptions] = useState<
    GotQuestionTypes[]
  >([]);

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

  const terminalFramerCodes = [
    { type: "npm", code: "npm install framer-motion" },
    { type: "yarn", code: "yarn add framer-motion" },
    { type: "pnpm", code: "pnpm add framer-motion" },
  ];

  const terminalRadioCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add radio-group" },
    { type: "npm", code: "npx shadcn@latest add radio-group" },
    { type: "yarn", code: "yarn shadcn@latest add radio-group" },
    { type: "bun", code: "bunx --bun shadcn@latest add radio-group" },
  ];

  // useEffects
  useEffect(() => {
    const tab = searchParams.get("tab") || "preview";
    setTabValue(tab);
    const titles = { preview: "Preview", code: "Code" };
    const tabKey = tab === "preview" || tab === "code" ? tab : "preview";
    document.title = `Role modal - ${titles[tabKey]}`;
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
          <Card className="border-none -mt-5">
            {/* <CardHeader>
              <CardTitle className="text-white">Test :</CardTitle>
            </CardHeader> */}
            <CardContent className="m-0 p-0 border-none">
              <div className="relative">
                <UserQuestions
                  selectedTestOptions={selectedTestOptions}
                  setSelectedTestOptions={setSelectedTestOptions}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Install things bellow for use test card:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI:
                </h3>
                <TerminalCode terminalCodes={terminalShadcnCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Installation of card component:
                </h3>
                <TerminalCode terminalCodes={terminalCardCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Installation of lucide icons:
                </h3>
                <TerminalCode terminalCodes={terminalLucideCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Installation of framer motion:
                </h3>
                <TerminalCode terminalCodes={terminalFramerCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Installation of radio group:
                </h3>
                <TerminalCode terminalCodes={terminalRadioCodes} />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-5">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Test card component and usage examples:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">Test card component:</h3>
                <CodePreview
                  fileName="userQuestions.tsx"
                  code={`
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import QuestionSelected from "./question-selected";
import QuestionCard, { GotQuestionTypes } from "./question-card";
import QuestionsHeader from "./questions-header";

export const sampleQuestions: GotQuestionTypes[] = [
  {
    id: 1,
    text: "What is the capital of France?",
    optionA: "Berlin",
    optionB: "Madrid",
    optionC: "Paris",
    optionD: "Rome",
    correctOption: "C",
    testId: 101,
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-01T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 2,
    text: "Which planet is known as the Red Planet?",
    optionA: "Earth",
    optionB: "Mars",
    optionC: "Jupiter",
    optionD: "Saturn",
    correctOption: "B",
    testId: 101,
    createdAt: "2025-01-02T00:00:00Z",
    updatedAt: "2025-01-02T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 3,
    text: "Which is the largest ocean on Earth?",
    optionA: "Atlantic",
    optionB: "Indian",
    optionC: "Arctic",
    optionD: "Pacific",
    correctOption: "D",
    testId: 101,
    createdAt: "2025-01-03T00:00:00Z",
    updatedAt: "2025-01-03T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  
];

export interface GotTestsTypes {
  id: number;
  title: string;
  description: string;
  subjectName: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  deleted: boolean;
  durationInMinutes?: number;
}

interface UserQuestionsPropsTypes {
  setSelectedTestOptions: React.Dispatch<
    React.SetStateAction<GotQuestionTypes[]>
  >;
  selectedTestOptions: GotQuestionTypes[];
}

export default function UserQuestions({
  selectedTestOptions,
  setSelectedTestOptions,
}: UserQuestionsPropsTypes) {
  // states
  const [routingQuestionID, setRoutingQuestionID] = useState(0);

  // helpers
  // prevent leave website, refresh actions, close tab, copy, and screenshots
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue =
        "Are you sure you want to leave the test? If you leave, you won't be able to retake it!";
    };

    const handleRouteChange = () => {
      const confirmLeave = window.confirm(
        "Are you sure you want to leave the test? If you leave, you won't be able to retake it!"
      );
      if (!confirmLeave) {
        throw "Route change aborted.";
      }
    };

    // Prevent copy, cut, paste, and other actions
    const preventActions = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Prevent context menu (right-click)
    const preventContextMenu = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Prevent text selection
    const disableSelection = () => {
      document.body.style.userSelect = "none";
      document.body.style.webkitUserSelect = "none";
      document.body.style.userSelect = "none";
    };

    // Prevent keyboard shortcuts for copy, screenshot, and dev tools
    const preventShortcuts = (e: KeyboardEvent) => {
      // Block Ctrl+C, Ctrl+P, PrintScreen, F12, Ctrl+Shift+I, Ctrl+Shift+J, etc.
      if (
        e.key === "PrintScreen" ||
        (e.ctrlKey && ["c", "p", "u", "s"].includes(e.key.toLowerCase())) ||
        (e.metaKey && ["c", "p", "u", "s"].includes(e.key.toLowerCase())) ||
        e.key === "F12" ||
        (e.ctrlKey &&
          e.shiftKey &&
          ["i", "j", "c"].includes(e.key.toLowerCase())) ||
        (e.metaKey &&
          e.shiftKey &&
          ["i", "j", "c"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Prevent drag and drop
    const preventDrag = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Apply protections
    disableSelection();
    document.addEventListener("copy", preventActions, { capture: true });
    document.addEventListener("cut", preventActions, { capture: true });
    document.addEventListener("paste", preventActions, { capture: true });
    document.addEventListener("contextmenu", preventContextMenu, {
      capture: true,
    });
    document.addEventListener("keydown", preventShortcuts, { capture: true });
    document.addEventListener("dragstart", preventDrag, { capture: true });
    document.addEventListener("selectstart", preventActions, { capture: true });

    // Prevent navigation
    window.addEventListener("beforeunload", handleBeforeUnload, {
      capture: true,
    });
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      const confirmLeave = window.confirm(
        "Testdan chiqmoqchisiz. Chiqsangiz qayta yechib bo'lmaydi!"
      );
      if (!confirmLeave) {
        window.history.pushState(null, "", window.location.href);
      }
    };
    window.addEventListener("hashchange", handleRouteChange, { capture: true });

    // Attempt to blur screen on potential screenshot attempt
    const blurScreen = () => {
      document.body.style.filter = "blur(10px)";
      setTimeout(() => {
        document.body.style.filter = "";
      }, 100);
    };

    document.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        blurScreen();
      }
    });

    return () => {
      // Clean up event listeners
      document.removeEventListener("copy", preventActions, { capture: true });
      document.removeEventListener("cut", preventActions, { capture: true });
      document.removeEventListener("paste", preventActions, { capture: true });
      document.removeEventListener("contextmenu", preventContextMenu, {
        capture: true,
      });
      document.removeEventListener("keydown", preventShortcuts, {
        capture: true,
      });
      document.removeEventListener("dragstart", preventDrag, { capture: true });
      document.removeEventListener("selectstart", preventActions, {
        capture: true,
      });
      window.removeEventListener("beforeunload", handleBeforeUnload, {
        capture: true,
      });
      window.removeEventListener("hashchange", handleRouteChange, {
        capture: true,
      });
      window.onpopstate = null;
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
      document.body.style.userSelect = "";
      document.body.style.filter = "";
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 100, x: 500 }}
        animate={{ opacity: 100, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-md z-50 h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <div className="sticky w-full top-0 left-0 right-0 backdrop-blur-md">
            <QuestionsHeader title={"Sample test conllection"} />
          </div>
          <div className="flex px-5 items-start justify-between gap-5">
            <div className="flex flex-wrap gap-10 items-start justify-between w-[60%]">
              {sampleQuestions?.map(
                (question: GotQuestionTypes, index: number) => (
                  <QuestionCard
                    key={index}
                    setSelectedTestOptions={setSelectedTestOptions}
                    test={question}
                    index={index}
                    admin={false}
                    routingQuestionID={routingQuestionID}
                  />
                )
              )}
            </div>
            <div className="w-[35%] sticky top-20 right-0">
              <QuestionSelected
                test={sampleQuestions}
                selectedTestOptions={selectedTestOptions}
                loading={false}
                setRoutingQuestionID={setRoutingQuestionID}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

                  `}
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">Usage of test card:</h3>
                <CodePreview
                  code={`
"use client";

import UserQuestions from "./user-question";
import { useState } from "react";

export default function RolesPage() {
  const [selectedTestOptions, setSelectedTestOptions] = useState<
    GotQuestionTypes[]
  >([]);

  return (
     <UserQuestions
       selectedTestOptions={selectedTestOptions}
       setSelectedTestOptions={setSelectedTestOptions}
     />
  );
}
                  `}
                  fileName="button_examples.tsx"
                />
              </div>

              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Questions header component:
                </h3>
                <CodePreview
                  fileName="questions-header.tsx"
                  code={`
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface QuestionsHeaderPropsTypes {
  title: string;
}

export default function QuestionsHeader({ title }: QuestionsHeaderPropsTypes) {
  const durationInMinutes = 10; // progress time
  const totalDuration = durationInMinutes * 60 * 1000; // Convert minutes to milliseconds
  const [timeLeft, setTimeLeft] = useState<number>(totalDuration);

  useEffect(() => {
    if (totalDuration <= 0) return; // If no duration, exit the effect

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [totalDuration]); // Dependency array with totalDuration

  const progress = (timeLeft / totalDuration) * 100;

  const formatTime = (ms: number) => {
    if (ms <= 0) return "00:00";
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return \`\${String(minutes).padStart(2, "0")}:\${String(seconds).padStart(2, "0")}\`;
  };

  return (
    <div className="w-[90%] py-2 mx-auto container">
      <div className="flex items-center justify-between gap-5">
        <h1 className="mb-5 max-w-[90%] truncate">
          <span className="text-primary text-xl font-bold">{title}</span>
        </h1>
        <p className="text-xl">{formatTime(timeLeft)}</p>
      </div>
      <Progress value={progress} />
    </div>
  );
}
`}
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">
                  Usage of question header:
                </h3>
                <CodePreview
                  code={`
"use client";

import QuestionsHeader from "./questions-header";

export default function TestCards() {

  return (
    <QuestionsHeader title={"Sample test conllection"} />
  );
}
                  `}
                  fileName="testCards.tsx"
                />
              </div>

              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Reuseable questions card component:
                </h3>
                <CodePreview
                  fileName="questions-card.tsx"
                  code={`
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export interface GotQuestionTypes {
  id: number;
  text: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: string;
  testId: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  deleted: boolean;
  imageURL?: string;
}

interface TestCardProps {
  test: GotQuestionTypes;
  index: number;
  admin: boolean;
  setSelectedTestOptions?: React.Dispatch<
    React.SetStateAction<GotQuestionTypes[]>
  >;
  routingQuestionID?: number;
}

export default function QuestionCard({
  test,
  index,
  admin,
  setSelectedTestOptions,
  routingQuestionID,
}: TestCardProps) {
  return (
    <>
      <motion.div
        id={String(test?.id)}
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 100,
          y: 0,
          scale: 1,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
        transition={{
          opacity: { duration: 0.2 },
          y: { duration: 0.2 },
        }}
        {...(test?.id === routingQuestionID && {
          animate: {
            opacity: 100,
            y: 0,
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            ],
          },
          transition: {
            scale: { times: [0, 0.5, 1], duration: 0.6, ease: "easeInOut" },
            boxShadow: { times: [0, 0.5, 1], duration: 0.6, ease: "easeInOut" },
            opacity: { duration: 0.2 },
            y: { duration: 0.2 },
          },
        })}
        className={
          admin
            ? "w-full sm:w-[40%] md:w-[350px] border-b-4 border-primary rounded-xl overflow-hidden shadow-xl"
            : "w-full border-b-4 border-primary rounded-md shadow-xl"
        }
      >
        <Card className="w-full">
          {test?.imageURL && (
            <img
              className="w-full h-auto pb-5 border-b-2 border-primary"
              src={test?.imageURL}
              alt={test?.text}
            />
          )}
          <CardHeader className="font-semibold h-full">
            {index + 1}. {test?.text}
          </CardHeader>
          <CardContent className="flex items-start flex-col gap-2">
            {admin ? (
              <>
                <div className="flex items-start">
                  <span
                    className={\`mr-2 text-primary \${
                      test?.correctOption === "A" ? "font-bold" : ""
                    }\`}
                  >
                    A:
                  </span>
                  {test?.optionA}
                </div>
                <div className="flex items-start">
                  <span
                    className={\`mr-2 text-primary \${
                      test?.correctOption === "B" ? "font-bold" : ""
                    }\`}
                  >
                    B:
                  </span>
                  {test?.optionB}
                </div>
                <div className="flex items-start">
                  <span
                    className={\`mr-2 text-primary \${
                      test?.correctOption === "C" ? "font-bold" : ""
                    }\`}
                  >
                    C:
                  </span>
                  {test?.optionC}
                </div>
                <div className="flex items-start">
                  <span
                    className={\`mr-2 text-primary \${
                      test?.correctOption === "D" ? "font-bold" : ""
                    }\`}
                  >
                    D:
                  </span>
                  {test?.optionD}
                </div>
              </>
            ) : (
              <RadioGroup
                className="flex flex-col gap-2"
                onValueChange={(value) => {
                  if (!setSelectedTestOptions) return;

                  setSelectedTestOptions((prev) => {
                    const others = prev.filter((item) => item.id !== test.id);
                    return [...others, { ...test, correctOption: value }];
                  });
                }}
              >
                <label className="flex items-center cursor-pointer space-x-2">
                  <RadioGroupItem value="A" id='q-\${index}-A' />
                  <span>{test?.optionA}</span>
                </label>
                <label className="flex items-center cursor-pointer space-x-2">
                  <RadioGroupItem value="A" id='q-\${index}-B' />
                  <span>{test?.optionB}</span>
                </label>
                <label className="flex items-center cursor-pointer space-x-2">
                  <RadioGroupItem value="A" id='q-\${index}-C' />
                  <span>{test?.optionC}</span>
                </label>
                <label className="flex items-center cursor-pointer space-x-2">
                  <RadioGroupItem value="A" id='q-\${index}-D' />
                  <span>{test?.optionD}</span>
                </label>
              </RadioGroup>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}

                  `}
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">
                  Usage of question header:
                </h3>
                <CodePreview
                  code={`
"use client";

import QuestionCard, { GotQuestionTypes } from "./question-card";

export const sampleQuestions: GotQuestionTypes[] = [
  {
    id: 1,
    text: "What is the capital of France?",
    optionA: "Berlin",
    optionB: "Madrid",
    optionC: "Paris",
    optionD: "Rome",
    correctOption: "C",
    testId: 101,
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-01T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 2,
    text: "Which planet is known as the Red Planet?",
    optionA: "Earth",
    optionB: "Mars",
    optionC: "Jupiter",
    optionD: "Saturn",
    correctOption: "B",
    testId: 101,
    createdAt: "2025-01-02T00:00:00Z",
    updatedAt: "2025-01-02T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 3,
    text: "Which is the largest ocean on Earth?",
    optionA: "Atlantic",
    optionB: "Indian",
    optionC: "Arctic",
    optionD: "Pacific",
    correctOption: "D",
    testId: 101,
    createdAt: "2025-01-03T00:00:00Z",
    updatedAt: "2025-01-03T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  }
]

interface UserQuestionsPropsTypes {
  setSelectedTestOptions: React.Dispatch<
    React.SetStateAction<GotQuestionTypes[]>
  >;
  selectedTestOptions: GotQuestionTypes[];
}

export default function QuestionCardUsedComponent({
  selectedTestOptions,
  setSelectedTestOptions,
}: UserQuestionsPropsTypes) {

  return (
     {sampleQuestions?.map(
       (question: GotQuestionTypes, index: number) => (
         <QuestionCard
           key={index}
           setSelectedTestOptions={setSelectedTestOptions}
           test={question}
           index={index}
           admin={false}
           routingQuestionID={routingQuestionID}
         />
       )
     )}
  );
}
                  `}
                  fileName="questionCard.tsx"
                />
              </div>

              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Question selected component:
                </h3>
                <CodePreview
                  fileName="questions-selected.tsx"
                  code={`
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";
import { Flag } from "lucide-react";
import React, { useState } from "react";
import { GotQuestionTypes } from "./question-card";

interface QuestionSelectedPropsTypes {
  test: GotQuestionTypes[];
  selectedTestOptions: GotQuestionTypes[];
  loading: boolean;
  setRoutingQuestionID: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuestionSelected({
  test,
  selectedTestOptions,
  loading,
  setRoutingQuestionID,
}: QuestionSelectedPropsTypes) {
  return (
    <>
      <Card>
        <CardContent className="mt-5 flex flex-wrap gap-2">
          {loading ? (
            <div className="w-full mx-auto my-5">
              <Loader />
            </div>
          ) : (
            test?.map((test: GotQuestionTypes, index: number) => (
              <div key={test?.id} className="size-10">
                <Button
                  onClick={() => {
                    setRoutingQuestionID(test?.id);
                    const element = document.getElementById(String(test?.id));
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  variant={
                    selectedTestOptions?.some(
                      (selectedTest: GotQuestionTypes) =>
                        selectedTest?.id === test?.id
                    )
                      ? "default"
                      : "ghost"
                  }
                  className="rounded-full border border-primary"
                >
                  {index + 1}
                </Button>
              </div>
            ))
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => {
              confirm("Do you want to finish test");
            }}
          >
            <Flag /> Testni yakunlash
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

                  `}
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">
                  Usage of question selected:
                </h3>
                <CodePreview
                  code={`
"use client";

import QuestionSelected from "./question-selected";

export const sampleQuestions: GotQuestionTypes[] = [
  {
    id: 1,
    text: "What is the capital of France?",
    optionA: "Berlin",
    optionB: "Madrid",
    optionC: "Paris",
    optionD: "Rome",
    correctOption: "C",
    testId: 101,
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-01T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 2,
    text: "Which planet is known as the Red Planet?",
    optionA: "Earth",
    optionB: "Mars",
    optionC: "Jupiter",
    optionD: "Saturn",
    correctOption: "B",
    testId: 101,
    createdAt: "2025-01-02T00:00:00Z",
    updatedAt: "2025-01-02T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 3,
    text: "Which is the largest ocean on Earth?",
    optionA: "Atlantic",
    optionB: "Indian",
    optionC: "Arctic",
    optionD: "Pacific",
    correctOption: "D",
    testId: 101,
    createdAt: "2025-01-03T00:00:00Z",
    updatedAt: "2025-01-03T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  }
]

export default function QuestionCardUsedComponent() {

  return (
    <QuestionSelected
     test={sampleQuestions}
     selectedTestOptions={selectedTestOptions}
     loading={false}
     setRoutingQuestionID={setRoutingQuestionID}
   />
  );
}
                  `}
                  fileName="questionCard.tsx"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default function TestCardContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestCardInner />
    </Suspense>
  );
}
