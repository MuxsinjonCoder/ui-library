"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import CodePreview from "@/components/reuseable/code-preview";
import { Suspense } from "react";
import AddPostModal from "./post-add-modal";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react";
import TerminalCode from "@/components/reuseable/terminal-code";

function PostModalContentInner() {
  // states
  const [isAddPostModalOpen, setAddPostModalOpen] = useState(false);
  const [tabValue, setTabValue] = useState("preview");
  const [content, setContent] = useState<string>(`
    <p style="font-weight: bold; text-align: center;">
      Lorem ipsum dolor sit amet, 
      <span style="font-style: italic;">consectetur adipiscing elit.</span>
    </p>
    <p style="text-decoration: underline; text-align: right;">
      Sed do eiusmod tempor incididunt ut labore et 
      <span style="color: #2563eb;">dolore magna aliqua.</span>
    </p>
    <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  `);

  // helpers
  const router = useRouter();
  const searchParams = useSearchParams();
  const divRef = useRef<HTMLDivElement>(null);

  const terminalShadcnCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest init" },
    { type: "npm", code: "npx shadcn@latest init" },
    { type: "yarn", code: "yarn shadcn@latest init" },
    { type: "bun", code: "bunx --bun shadcn@latest init" },
  ];

  const terminalDialogCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add dialog" },
    { type: "npm", code: "npx shadcn@latest add dialog" },
    { type: "yarn", code: "yarn shadcn@latest add dialog" },
    { type: "bun", code: "bunx --bun shadcn@latest add dialog" },
  ];

  const terminalFormCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add form" },
    { type: "npm", code: "npx shadcn@latest add form" },
    { type: "yarn", code: "yarn shadcn@latest add form" },
    { type: "bun", code: "bunx --bun shadcn@latest add form" },
  ];

  const terminalTextareaCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add textarea" },
    { type: "npm", code: "npx shadcn@latest add textarea" },
    { type: "yarn", code: "yarn shadcn@latest add textarea" },
    { type: "bun", code: "bunx --bun shadcn@latest add textarea" },
  ];

  const terminalInputCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add input" },
    { type: "npm", code: "npx shadcn@latest add input" },
    { type: "yarn", code: "yarn shadcn@latest add input" },
    { type: "bun", code: "bunx --bun shadcn@latest add input" },
  ];

  const terminalBadgeCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add badge" },
    { type: "npm", code: "npx shadcn@latest add badge" },
    { type: "yarn", code: "yarn shadcn@latest add badge" },
    { type: "bun", code: "bunx --bun shadcn@latest add badge" },
  ];

  const terminalToogleGroupCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add toggle-group" },
    { type: "npm", code: "npx shadcn@latest add toggle-group" },
    { type: "yarn", code: "yarn shadcn@latest add toggle-group" },
    { type: "bun", code: "bunx --bun shadcn@latest add toggle-group" },
  ];

  const terminalZodCodes = [
    { type: "pnpm", code: "pnpm add zod" },
    { type: "npm", code: "npm install zod" },
    { type: "yarn", code: "yarn add zod" },
  ];

  const terminalHookFormCodes = [
    { type: "pnpm", code: "pnpm add react-hook-form" },
    { type: "npm", code: "npm install react-hook-form" },
    { type: "yarn", code: "yarn add react-hook-form" },
  ];

  const applyCommand = (command: string): void => {
    document.execCommand(command, false);
    if (divRef.current) {
      setContent(divRef.current.innerHTML);
    }
  };

  const styleLinks = (element: HTMLDivElement | null): void => {
    if (element) {
      const links = element.getElementsByTagName("a");
      for (let link of links) {
        link.style.color = "#2563eb";
        link.style.textDecoration = "underline";
      }
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>): void => {
    const element = e.currentTarget;
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT);
    while (walker.nextNode()) {
      const node = walker.currentNode as HTMLElement;
      node.style.backgroundColor = "";
      node.style.color = "";
    }
    setContent(element.innerHTML);
    styleLinks(element);
  };

  // useEffects
  useEffect(() => {
    const tab = searchParams.get("tab") || "preview";
    setTabValue(tab);
    const titles = { preview: "Preview", code: "Code" };
    const tabKey = tab === "preview" || tab === "code" ? tab : "preview";
    document.title = `Drawer - ${titles[tabKey]}`;
  }, [searchParams]);

  // Ensure cursor starts at the end of content
  useEffect(() => {
    if (divRef.current) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(divRef.current);
      range.collapse(false); // Collapse to end
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [content]);

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
        <TabsList className="w-[300px] mb-5 rounded-lg">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Drawer types below:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setAddPostModalOpen(true)}>
                Open add post modal
              </Button>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mt-5 -mb-5">
                  Post content input:
                </h3>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-4">
                      <div
                        contentEditable
                        ref={divRef}
                        onInput={handleInput}
                        suppressContentEditableWarning
                        className="border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 min-h-[200px] bg-white shadow-sm text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    </div>
                    <div className="flex backdrop-blur-sm border border-gray-200 rounded-full bg-white/80 items-center justify-center gap-2 p-2 shadow-sm">
                      <ToggleGroup type="multiple" className="gap-1">
                        <ToggleGroupItem
                          value="format-bold"
                          onClick={() => applyCommand("bold")}
                          className="rounded-full hover:scale-[1.5] hover:bg-transparent transition-all duration-300 cursor-pointer data-[state=on]:bg-transparent"
                        >
                          <Bold className="text-blue-600 size-5" />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="format-italic"
                          onClick={() => applyCommand("italic")}
                          className="rounded-full hover:scale-[1.5] hover:bg-transparent transition-all duration-300 cursor-pointer data-[state=on]:bg-transparent"
                        >
                          <Italic className="text-blue-600 size-5" />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="format-underline"
                          onClick={() => applyCommand("underline")}
                          className="rounded-full hover:scale-[1.5] hover:bg-transparent transition-all duration-300 cursor-pointer data-[state=on]:bg-transparent"
                        >
                          <Underline className="text-blue-600 size-5" />
                        </ToggleGroupItem>
                      </ToggleGroup>
                      <ToggleGroup type="single" className="gap-1">
                        <ToggleGroupItem
                          value="align-left"
                          onClick={() => applyCommand("justifyLeft")}
                          className="rounded-full hover:scale-[1.5] hover:bg-transparent transition-all duration-300 cursor-pointer data-[state=on]:bg-transparent"
                        >
                          <AlignLeft className="text-blue-600 size-5" />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="align-center"
                          onClick={() => applyCommand("justifyCenter")}
                          className="rounded-full hover:scale-[1.5] hover:bg-transparent transition-all duration-300 cursor-pointer data-[state=on]:bg-transparent"
                        >
                          <AlignCenter className="text-blue-600 size-5" />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="align-right"
                          onClick={() => applyCommand("justifyRight")}
                          className="rounded-full hover:scale-[1.5] hover:bg-transparent transition-all duration-300 cursor-pointer data-[state=on]:bg-transparent"
                        >
                          <AlignRight className="text-blue-600 size-5" />
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                  </div>
                  <div>
                    <CodePreview
                      fileName="Post content"
                      code={content || "<p>Start typing...</p>"}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="text-white text-xl">
                You need to install tools below for use drawer:
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
                  Installation of shadcnUI default modal:
                </h3>
                <TerminalCode terminalCodes={terminalDialogCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI badge:
                </h3>
                <TerminalCode terminalCodes={terminalBadgeCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI form:
                </h3>
                <TerminalCode terminalCodes={terminalFormCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI zod:
                </h3>
                <TerminalCode terminalCodes={terminalZodCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI react hook form:
                </h3>
                <TerminalCode terminalCodes={terminalHookFormCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI input:
                </h3>
                <TerminalCode terminalCodes={terminalInputCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI textarea:
                </h3>
                <TerminalCode terminalCodes={terminalTextareaCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of shadcnUI toogle group:
                </h3>
                <TerminalCode terminalCodes={terminalToogleGroupCodes} />
              </div>
            </CardContent>
          </Card>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Post add modal component file and usage of this modal below:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Post add modal codes below:
                </h3>
                <CodePreview
                  fileName="post-add-modal.tsx"
                  code={`
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Inbox,
  Italic,
  Underline,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface AddPostPropsTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const formSchema = z.object({
  title: z.string(),
  description: z
    .string()
    .min(10, { message: "Post uchun ma'lumot kiritish majburiy" }),
  tags: z.array(z.object({ tag: z.string() })),
});

const applyCommand = (command: string, value?: string) => {
  document.execCommand(command, false, value);
};

const styleLinks = (element: HTMLElement | null) => {
  if (!element) return;
  const links = element.querySelectorAll("a[href]");
  links.forEach((a) => {
    a.classList.add("text-primary", "underline");
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
    a.setAttribute("data-tooltip", a.getAttribute("href") || "");
    (a as HTMLElement).style.textDecorationColor = "#3b82f6";
    (a as HTMLElement).style.color = "#3b82f6";
    a.addEventListener("mouseenter", () => {
      (a as HTMLElement).style.cursor = "pointer";
    });
  });
};

export default function AddPostModal({ open, setOpen }: AddPostPropsTypes) {
  // states
  const divRef = useRef<HTMLDivElement>(null);
  const [linkPopoverOpen, setLinkPopoverOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  // forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: [],
    },
  });

  // halpers
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("modal") === "add-post") {
      setOpen(true);
    }
  }, []);

  // functions
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("values", values);
    setOpen(false);
  };

  const handleOpenPopover = () => {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    if (!range) return;

    const parentAnchor = range.startContainer.parentElement?.closest("a");
    if (parentAnchor) {
      setLinkUrl(parentAnchor.getAttribute("href") || "");
    } else {
      setLinkUrl("");
    }
    setLinkPopoverOpen(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setTimeout(() => form.reset(), 0);
          setOpen(false);
        } else {
          setOpen(true);
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new post modal title here</DialogTitle>
          <DialogDescription>
            Add new post modal desription text here
          </DialogDescription>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter title for post" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description/Content</FormLabel>
                    <FormControl>
                      <div>
                        <div
                          contentEditable
                          ref={divRef}
                          onInput={(e) => {
                            const element = e.currentTarget;
                            const walker = document.createTreeWalker(
                              element,
                              NodeFilter.SHOW_ELEMENT,
                              null
                            );
                            while (walker.nextNode()) {
                              const node = walker.currentNode as HTMLElement;
                              node.style.backgroundColor = "";
                              node.style.color = "";
                            }
                            field.onChange(element.innerHTML);
                            styleLinks(divRef.current);
                          }}
                          suppressContentEditableWarning
                          className="border border-secondary outline-primary rounded-sm py-2 px-3 min-h-[100px] space-y-1"
                        />
                        <input type="hidden" {...field} />
                      </div>
                    </FormControl>
                    <div className="flex items-center justify-center gap-2">
                      <ToggleGroup type="multiple">
                        <ToggleGroupItem
                          value="format-bold"
                          onClick={() => applyCommand("bold")}
                        >
                          <Bold className="text-primary size-5" />{" "}
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="format-italic"
                          onClick={() => applyCommand("italic")}
                        >
                          <Italic className="text-primary size-5" />{" "}
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="format-underline"
                          onClick={() => applyCommand("underline")}
                        >
                          <Underline className="text-primary size-5" />{" "}
                        </ToggleGroupItem>
                      </ToggleGroup>

                      <ToggleGroup type="single">
                        <ToggleGroupItem
                          value="align-left"
                          onClick={() => applyCommand("justifyLeft")}
                        >
                          <AlignLeft className="text-primary size-5" />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="align-center"
                          onClick={() => applyCommand("justifyCenter")}
                        >
                          <AlignCenter className="text-primary size-5" />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="align-right"
                          onClick={() => applyCommand("justifyRight")}
                        >
                          <AlignRight className="text-primary size-5" />
                        </ToggleGroupItem>
                      </ToggleGroup>

                      {/* <Popover
                        open={linkPopoverOpen}
                        onOpenChange={setLinkPopoverOpen}
                      >
                        <PopoverTrigger asChild>
                          <ToggleGroup type="single">
                            <ToggleGroupItem
                              value="link"
                              onClick={handleOpenPopover}
                            >
                              <LinkIcon className="text-primary size-5" />
                            </ToggleGroupItem>
                          </ToggleGroup>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="space-y-2">
                            <Input
                              placeholder="https://example.com"
                              value={linkUrl}
                              onChange={(e) => setLinkUrl(e.target.value)}
                            />
                            <Button
                              onClick={() => {
                                applyCommand("createLink", linkUrl);
                                setTimeout(() => styleLinks(divRef.current), 0);
                                setLinkPopoverOpen(false);
                                setLinkUrl("");
                              }}
                            >
                              Saqlash
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover> */}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* tags */}
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <div>
                        <Input
                          placeholder="Enter tag and press enter for add"
                          onKeyDown={(e) => {
                            if (
                              e.key === "Enter" &&
                              e.currentTarget.value.trim()
                            ) {
                              e.preventDefault();
                              const newTag = e.currentTarget.value.trim();
                              field.onChange([...field.value, { tag: newTag }]);
                              e.currentTarget.value = "";
                            }
                          }}
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                          {field.value.map((item, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="flex items-center font-semibold gap-2 py-0 px-4 rounded-md text-xs"
                            >
                              #{item.tag}
                              <Button
                                type="button"
                                variant={"icon"}
                                size={"sm"}
                              >
                                <X
                                  className="size-4 cursor-pointer"
                                  onClick={() => {
                                    const updated = [...field.value];
                                    updated.splice(idx, 1);
                                    field.onChange(updated);
                                  }}
                                />
                              </Button>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="flex items-center justify-between gap-5">
                <Button
                  onClick={() => {
                    setOpen(false);
                    form.reset();
                  }}
                  variant={"outline"}
                  type="button"
                  className="text-primary"
                >
                  Draft post
                </Button>
                <Button variant={"submit"} type="submit">
                  <Inbox /> Publish
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

                    `}
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">
                  Usage of drawer component:
                </h3>
                <CodePreview
                  code={`
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import AddPostModal from "./post-add-modal";

export default function DrawerExample() {
const [isAddPostModalOpen, setAddPostModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setAddPostModalOpen(true)}>
        Open add post modal
      </Button>
   
      {/* add post modal */}
      <AddPostModal open={isAddPostModalOpen} setOpen={setAddPostModalOpen} />
    </>
}
                    `}
                  fileName="Used place of drawer"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* add post modal */}
      <AddPostModal open={isAddPostModalOpen} setOpen={setAddPostModalOpen} />
    </>
  );
}

export default function PostModalContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostModalContentInner />
    </Suspense>
  );
}
