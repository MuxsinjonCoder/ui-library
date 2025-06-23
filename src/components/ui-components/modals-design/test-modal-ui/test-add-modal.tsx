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
