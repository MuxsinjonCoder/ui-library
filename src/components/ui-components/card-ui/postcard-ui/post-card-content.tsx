"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import TerminalCode from "@/components/reuseable/terminal-code";
import CodePreview from "@/components/reuseable/code-preview";
import { Suspense } from "react";
import PostCard, {
  PostTypes,
} from "@/app/ui-components/card-ui/postcard-ui/post-card";

const initialPosts = [
  {
    id: 1,
    title: "ULife platformasidagi birinchi post",
    description:
      "<b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur?",
    tags: [
      {
        tag: "#ULife",
      },
      {
        tag: "#birinchi",
      },
      {
        tag: "#newpost",
      },
      {
        tag: "#tag",
      },
      {
        tag: "#tags",
      },
    ],
  },
  {
    id: 2,
    title: "ULife platformasidagi birinchi post",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur?",
    tags: [
      {
        tag: "#ULife",
      },
      {
        tag: "#birinchi",
      },
      {
        tag: "#newpost",
      },
      {
        tag: "#tag",
      },
      {
        tag: "#tags",
      },
    ],
  },
];

function PostCardInner() {
  // states
  const [tabValue, setTabValue] = useState("preview");

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

  const terminalTooltipCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add tooltip" },
    { type: "npm", code: "npx shadcn@latest add tooltip" },
    { type: "yarn", code: "yarn shadcn@latest add tooltip" },
    { type: "bun", code: "bunx --bun shadcn@latest add tooltip" },
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
          <Card>
            {/* <CardHeader>
              <CardTitle className="text-white">Test :</CardTitle>
            </CardHeader> */}
            <CardContent>
              <div>
                <div className="flex flex-col items-center gap-5 max-w-xl mx-auto">
                  {initialPosts?.map((post: PostTypes, index: number) => (
                    <PostCard key={index} post={post} />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Install things bellow for use post card:
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
                  Installation of tooltip:
                </h3>
                <TerminalCode terminalCodes={terminalTooltipCodes} />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-5">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Post card component and usage examples:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">Post card component:</h3>
                <CodePreview
                  fileName="post-card.tsx"
                  code={`
"use client";

import { useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import Likes from "./likes";

export interface PostTypes {
  id: number;
  title: string;
  description: string;
  tags: { tag: string }[];
}

interface PostCardPropsTypes {
  post: PostTypes;
}

export default function PostCard({ post }: PostCardPropsTypes) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="border-b-4 overflow-hidden bg-primary-foreground border-t-4 border-x-0 border-primary">
          <Image
            src={"/default-post.png"}
            alt="default post image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto -mt-7"
            layout="responsive"
          />
          <CardHeader>
            <CardTitle>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {post?.title}
              </motion.p>
            </CardTitle>
            <CardDescription>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    maxHeight: isExpanded ? "none" : "100px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
                {!isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent flex items-end justify-end pr-2"
                  >
                    <span className="text-primaryBlue text-sm font-semibold">
                      ...
                    </span>
                  </motion.div>
                )}
              </div>
              <motion.button
                onClick={toggleDescription}
                className="text-primaryBlue text-sm font-semibold mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {isExpanded ? "Qisqartirish" : "Barchasini ko'rish"}
              </motion.button>
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-2 flex-wrap text-sm text-primary font-semibold pb-3">
            {post?.tags?.map((tags: { tag: string }, index: number) => (
              <span key={index}>
                <motion.p
                  className="text-primaryBlue"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {tags?.tag}
                </motion.p>
              </span>
            ))}
            <Likes />
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
}

                    `}
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">Usage of post card:</h3>
                <CodePreview
                  code={`
"use client";

import PostCard, { PostTypes } from "@/app/ui-components/card-ui/postcard-ui/post-card";

export default function RolesPage() {

  return (
    {initialPosts?.map((post: PostTypes, index: number) => (
     <PostCard key={index} post={post} />
    ))}
  );
}
                  `}
                  fileName="button_examples.tsx"
                />
              </div>

              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">Likes component:</h3>
                <CodePreview
                  fileName="likes.tsx"
                  code={`
                "use client";

import {
  MessageCircleMore,
  Repeat,
  Send,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Likes() {
  return (
    <>
      <div className="mt-5 flex items-center justify-between w-full gap-5">
        {/* likes */}
        <motion.div className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"icon"} size={"sm"}>
                  <ThumbsUp className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Yoqdi</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"icon"} size={"sm"}>
                  <ThumbsDown className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Yoqmadi</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>

        {/* comment */}
        <motion.div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"icon"} size={"sm"}>
                  <MessageCircleMore className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Izoh yozish</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>

        {/* repost */}
        <motion.div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"icon"} size={"sm"}>
                  <Repeat className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Repost (qayta qo'yish)</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>

        {/* send */}
        <motion.div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"icon"} size={"sm"}>
                  <Send className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Ulashish</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </div>
    </>
  );
}
                    `}
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">
                  Usage of likes in post card:
                </h3>
                <CodePreview
                  code={`
"use client";

import Likes from "./likes";

export default function RolesPage() {

  return (
    <Likes />
  );
}
                  `}
                  fileName="button_examples.tsx"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default function PostCardContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostCardInner />
    </Suspense>
  );
}
