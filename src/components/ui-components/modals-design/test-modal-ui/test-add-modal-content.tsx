"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import TerminalCode from "@/components/reuseable/terminal-code";
import CodePreview from "@/components/reuseable/code-preview";
import { Suspense } from "react";

import QuestionAddForm from "./test-add-modal";

function TestAddModalsContentInner() {
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

  // useEffects
  useEffect(() => {
    const tab = searchParams.get("tab") || "preview";
    setTabValue(tab);
    const titles = { preview: "Preview", code: "Code" };
    const tabKey = tab === "preview" || tab === "code" ? tab : "preview";
    document.title = `Test modal - ${titles[tabKey]}`;
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
              <QuestionAddForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Install shadcn-ui for using these modals:
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
                  Installation of shadcnUI form:
                </h3>
                <TerminalCode terminalCodes={terminalFormCodes} />
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
            </CardContent>
          </Card>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Test add modal component and usage examples:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Test add modal component:
                </h3>
                <CodePreview
                  fileName="test-add-modal.tsx"
                  code={`
"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import ImageUpload from "./image-upload";

// form schemas
const formSchema = z.object({
  text: z
    .string()
    .min(4, { message: "Savol kamida 4 ta harfdan iborat bo'lishi kerak." })
    .max(300, { message: "Savol maksimal 300 ta harfdan oshmasligi kerak." })
    .nonempty({ message: "Savol kiritish majburiy." }),
  optionA: z
    .string()
    .min(1, { message: "A javob variantini kiritish kerak." })
    .max(200, { message: "A javob maksimal 200 ta harfdan oshmasligi kerak." })
    .nonempty({ message: "A javob kiritish majburiy." }),
  optionB: z
    .string()
    .min(1, { message: "B javob variantini kiritish kerak." })
    .max(200, { message: "B javob maksimal 200 ta harfdan oshmasligi kerak." })
    .nonempty({ message: "B javob kiritish majburiy." }),
  optionC: z
    .string()
    .min(1, { message: "C javob variantini kiritish kerak." })
    .max(200, { message: "C javob maksimal 200 ta harfdan oshmasligi kerak." })
    .nonempty({ message: "C javob kiritish majburiy." }),
  optionD: z
    .string()
    .min(1, { message: "D javob variantini kiritish kerak." })
    .max(200, { message: "D javob maksimal 200 ta harfdan oshmasligi kerak." })
    .nonempty({ message: "D javob kiritish majburiy." }),
  correctOption: z
    .string()
    .length(1, {
      message: "To'g'ri javob faqat bitta harfdan iborat bo'lishi kerak.",
    })
    .refine((val) => ["A", "B", "C", "D"].includes(val.toUpperCase()), {
      message: "To'g'ri javob A, B, C yoki D bo'lishi kerak.",
    })
    .transform((val) => val.toUpperCase()),
});

export default function QuestionAddForm() {
  // states
  const [isOpen, setIsOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState("");

  // forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctOption: "",
    },
  });

  // functions
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const submittingData = {
      text: values?.text,
      optionA: values?.optionA,
      optionB: values?.optionB,
      optionC: values?.optionC,
      optionD: values?.optionD,
      correctOption: values?.correctOption,
      imageURL: uploadedImage,
    };

    console.log(submittingData);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="">
            <Button onClick={() => setIsOpen(true)}>Open test add modal</Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add new test (question) modal title</DialogTitle>
          </DialogHeader>
          <div className="my-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="my-5">
                  <ImageUpload setUploadedImage={setUploadedImage} />
                </div>
                {/* text */}
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Question</FormLabel>
                      <FormControl>
                        <Textarea
                          className="resize-none h-[100px]"
                          placeholder="Enter question of test"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />

                {/* optionA */}
                <FormField
                  control={form.control}
                  name="optionA"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Option A</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Option A"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />

                {/* optionB */}
                <FormField
                  control={form.control}
                  name="optionB"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Option B</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Option B"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />

                {/* optionC */}
                <FormField
                  control={form.control}
                  name="optionC"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Option C</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Option C"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />

                {/* optionD */}
                <FormField
                  control={form.control}
                  name="optionD"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Option D</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter Option D"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />

                {/* correctOption */}
                <FormField
                  control={form.control}
                  name="correctOption"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correct answer</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter correct option (only A, B, C or D)"
                          maxLength={1}
                          onChange={(e) => {
                            const value = e.target.value.toUpperCase();
                            if (/^[ABCD]?$/.test(value)) {
                              field.onChange(value);
                            }
                          }}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />

                <DialogFooter className="flex items-center justify-between gap-5 pt-4">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      form.reset();
                      setIsOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="submit">
                    Add test
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
                    `}
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">
                  Usage of test add modal:
                </h3>
                <CodePreview
                  code={`
import QuestionAddForm from "./test-add-modal";

export default function TestAddPage() {

  return (
    <QuestionAddForm />
  );
}
                  `}
                  fileName="page.tsx"
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-20">
                <h3 className="font-medium text-white">
                  Image upload component:
                </h3>
                <CodePreview
                  fileName="image-upload.tsx"
                  code={`
import React, { useState } from "react";
import { Image } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  setUploadedImage?: React.Dispatch<React.SetStateAction<string>>;
}

export default function ImageUpload({ setUploadedImage }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Please, only upload image files (JPEG, PNG yoki GIF)");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be maximum 5MB");
        return;
      }

      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
      if (setUploadedImage) {
        setUploadedImage(imageURL);
      }
    }
  };

  const handleRemove = () => {
    if (setUploadedImage) {
      setUploadedImage("");
    }
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
  };

  return (
    <div className="flex flex-col gap-3">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="image-upload"
      />
      {!preview && (
        <label htmlFor="image-upload" className="w-full">
          <Button
            type="button"
            onClick={() => document.getElementById("image-upload")?.click()}
          >
            <span className="flex items-center gap-5">
              <Image /> Upload image
            </span>
          </Button>
        </label>
      )}
      {preview && (
        <div className="mt-2 flex items-center justify-between gap-10">
          <img
            src={preview}
            alt="preview"
            className="max-w-[100px] rounded-sm shadow"
          />
          <Button
            className="w-[50%]"
            type="button"
            variant={"danger"}
            onClick={handleRemove}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}
                    `}
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">
                  Usage of image upload component:
                </h3>
                <CodePreview
                  code={`
"use client";

import ImageUpload from "./image-upload";

export default function ConfirmModalExample() {
const [uploadedImage, setUploadedImage] = useState("");

  return (
     <ImageUpload setUploadedImage={setUploadedImage} />
  );
}
                  `}
                  fileName="test-add-modal.tsx"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default function TestAddModalContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestAddModalsContentInner />
    </Suspense>
  );
}
