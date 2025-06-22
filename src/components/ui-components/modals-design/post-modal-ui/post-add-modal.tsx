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
