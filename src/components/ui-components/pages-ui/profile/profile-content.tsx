"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import TerminalCode from "@/components/reuseable/terminal-code";
import CodePreview from "@/components/reuseable/code-preview";
import { Suspense } from "react";
import ProfilePage from "./profile";

function ProfilePageInner() {
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

  const terminalFormCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add form" },
    { type: "npm", code: "npx shadcn@latest add form" },
    { type: "yarn", code: "yarn shadcn@latest add form" },
    { type: "bun", code: "bunx --bun shadcn@latest add form" },
  ];

  const terminalLucideCodes = [
    { type: "npm", code: "npm install lucide-react" },
    { type: "yarn", code: "yarn add lucide-react" },
    { type: "pnpm", code: "pnpm add lucide-react" },
  ];

  const terminalInputCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add input" },
    { type: "npm", code: "npx shadcn@latest add input" },
    { type: "yarn", code: "yarn shadcn@latest add input" },
    { type: "bun", code: "bunx --bun shadcn@latest add input" },
  ];

  const terminalCardCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add card" },
    { type: "npm", code: "npx shadcn@latest add card" },
    { type: "yarn", code: "yarn shadcn@latest add card" },
    { type: "bun", code: "bunx --bun shadcn@latest add card" },
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
          <Card className="bg-primary-foreground">
            {/* <CardHeader>
              <CardTitle className="text-white">Modals Variants:</CardTitle>
            </CardHeader> */}
            <CardContent>
              <div>
                <ProfilePage />
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
                  Installation of shadcnUI modal (dialog):
                </h3>
                <TerminalCode terminalCodes={terminalDialogCodes} />
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
                  Installation of shadcnUI form:
                </h3>
                <TerminalCode terminalCodes={terminalFormCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of react-hook-form:
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
                <h3 className="font-medium text-white">Installation of zod:</h3>
                <TerminalCode terminalCodes={terminalZodCodes} />
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
                <h3 className="font-medium text-white">Profile page:</h3>
                <CodePreview
                  fileName="profile.tsx"
                  code={`
import { Metadata } from "next";
import ChangePassword from "./update-password";
import ProfileUpdate from "./profile-update";

export const metadata: Metadata = {
  title: "Profile – UI Components Library",
  description:
    "Manage and customize your user profile with responsive and accessible components. Built using shadcn/ui for seamless integration and great user experience.",
  icons: {
    icon: "/logo.png",
  },
};

export default function ProfilePage() {
  return (
    <>
      <div>
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-5 mb-5">
          <h1 className="text-2xl font-bold">Profile page</h1>
          <ChangePassword />
        </div>
        <ProfileUpdate />
      </div>
    </>
  );
}
                    `}
                />
              </div>

              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Change password component:
                </h3>
                <CodePreview
                  fileName="change-password.tsx"
                  code={`
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

// form schemas
const formSchema = z
  .object({
    oldPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(50, {
        message: "Password must not exceed 50 characters.",
      }),
    newPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(50, {
        message: "Password must not exceed 50 characters.",
      }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .max(50, {
        message: "Password must not exceed 50 characters.",
      }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function ChangePassword() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // handle password update logic here
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="max-w-[300px]">
          <Button onClick={() => setIsOpen(true)}>Change Password</Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            Choose a password that's easy to remember and secure. Store it
            somewhere safe if needed.
          </DialogDescription>
        </DialogHeader>
        <div className="my-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showOldPassword ? "text" : "password"}
                          placeholder="Enter your current password"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="icon"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => setShowOldPassword(!showOldPassword)}
                        >
                          {showOldPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showNewPassword ? "text" : "password"}
                          placeholder="Enter a new password"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="icon"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Must match the new password"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="icon"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
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
                  Change Password
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

              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Profile update component:
                </h3>
                <CodePreview
                  fileName="profile-update.tsx"
                  code={`
"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

// form schemas
const formSchema = z.object({
  phone: z
    .string()
    .min(9, {
      message: "Enter a valid phone number.",
    })
    .max(50, { message: "Phone number must not exceed 50 digits." }),
  fullName: z
    .string()
    .min(5, { message: "Full name must be at least 5 characters." })
    .max(50, { message: "Full name must not exceed 50 characters." }),
  email: z.string({ required_error: "Enter a valid email address." }),
});

export default function ProfileUpdate() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "930981409",
      fullName: "Muxsinjon Maxsudovich",
      email: "muxsincoder@gamil.com",
    },
  });

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // handle profile update logic here
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <span className="text-primary text-xl font-bold">
              {/* {user?.fullName} */}User Name
            </span>
            's profile information
          </CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="flex items-center justify-between gap-4 flex-wrap">
              <div className="w-full md:w-[30%]">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full md:w-[30%]">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full md:w-[30%]">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            +998
                          </span>
                          <Input
                            type="text"
                            placeholder="11 222 3344"
                            {...field}
                            value={field.value
                              ?.replace(/\D/g, "")
                              .slice(0, 9)
                              .replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3")}
                            onChange={(e) => {
                              const raw = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 9);
                              field.onChange(raw);
                            }}
                            className="pl-16"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-5 w-full md:w-[500px] mt-5">
              <Button type="submit" variant={"submit"}>
                Save
              </Button>
              <Button
                type="button"
                variant={"secondary"}
                onClick={() => form.reset()}
              >
                Reset
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
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

export default function ProfilePageContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfilePageInner />
    </Suspense>
  );
}
