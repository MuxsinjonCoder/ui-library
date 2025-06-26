"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import TerminalCode from "@/components/reuseable/terminal-code";
import CodePreview from "@/components/reuseable/code-preview";
import { Suspense } from "react";
import CreateRoleModal from "./role-add-modal";

function RoleAddModalInner() {
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

  const terminalInputCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add input" },
    { type: "npm", code: "npx shadcn@latest add input" },
    { type: "yarn", code: "yarn shadcn@latest add input" },
    { type: "bun", code: "bunx --bun shadcn@latest add input" },
  ];

  const terminalCheckboxCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add checkbox" },
    { type: "npm", code: "npx shadcn@latest add checkbox" },
    { type: "yarn", code: "yarn shadcn@latest add checkbox" },
    { type: "bun", code: "bunx --bun shadcn@latest add checkbox" },
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
                <CreateRoleModal />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Install things bellow for use this role add modal:
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
                  Installation of checkbox:
                </h3>
                <TerminalCode terminalCodes={terminalCheckboxCodes} />
              </div>

              <div className="flex items-start gap-0 flex-col mt-5">
                <h3 className="font-medium text-white">
                  Installation of form:
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
                  Installation of input:
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
                Modal component and usage examples:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">
                  Default modal component:
                </h3>
                <CodePreview
                  fileName="role-add-modal.tsx"
                  code={`
"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const initialPermissions = [
  {
    id: 1,
    permName: "Users module",
    actions: ["READ", "CREATE", "UPDATE", "DELETE"],
  },
  {
    id: 2,
    permName: "Roles module",
    actions: ["READ", "CREATE", "UPDATE", "DELETE"],
  },
];

type SelectedPerm = { name: string; actions: string[] };

const formSchema = z.object({
  roleName: z
    .string()
    .min(3, { message: "Role name must be at least 3 characters" })
    .max(50, { message: "Role name must be maximum 50 characters!!!" }),
});

export default function CreateRoleModal() {
  const [selectedPerms, setSelectedPerms] = useState<SelectedPerm[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roleName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);
    console.log("selectedPerms:", selectedPerms);
  }

  const handleSelectAllPermissions = () => {
    if (
      selectedPerms.length === initialPermissions.length &&
      initialPermissions.every(
        (perm) =>
          selectedPerms.find((p) => p.name === perm.permName)?.actions
            .length === perm.actions.length
      )
    ) {
      setSelectedPerms([]);
    } else {
      setSelectedPerms(
        initialPermissions.map((perm) => ({
          name: perm.permName,
          actions: perm.actions,
        }))
      );
    }
  };

  const handleSelectAllActions = (permName: string, actions: string[]) => {
    const existingPerm = selectedPerms.find((p) => p.name === permName);
    if (existingPerm?.actions.length === actions.length) {
      setSelectedPerms((prev) => prev.filter((p) => p.name !== permName));
    } else {
      setSelectedPerms((prev) => {
        const otherPerms = prev.filter((p) => p.name !== permName);
        return [...otherPerms, { name: permName, actions }];
      });
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>+ Add role modal</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new role with permissions</DialogTitle>
          </DialogHeader>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="roleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role name</FormLabel>
                      <FormControl>
                        <Input placeholder="Admin" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-end mb-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSelectAllPermissions}
                  >
                    {selectedPerms.length === initialPermissions.length &&
                    initialPermissions.every(
                      (perm) =>
                        selectedPerms.find((p) => p.name === perm.permName)
                          ?.actions.length === perm.actions.length
                    )
                      ? "Diselect all"
                      : "Select all"}
                  </Button>
                </div>

                <div className="flex items-start gap-5 flex-col">
                  {initialPermissions?.map((perm, index) => (
                    <div
                      className="flex flex-col gap-2 items-start w-full border py-2 px-4 rounded-md"
                      key={index}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={selectedPerms.some(
                              (item) => item.name === perm.permName
                            )}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedPerms((prev) => [
                                  ...prev,
                                  { name: perm.permName, actions: ["READ"] },
                                ]);
                              } else {
                                setSelectedPerms((prev) =>
                                  prev.filter(
                                    (item) => item.name !== perm.permName
                                  )
                                );
                              }
                            }}
                            className="size-5 cursor-pointer border border-primary"
                          />
                          <span className="font-semibold">
                            {perm?.permName}
                          </span>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleSelectAllActions(perm.permName, perm.actions)
                          }
                        >
                          {selectedPerms.find((p) => p.name === perm.permName)
                            ?.actions.length === perm.actions.length
                            ? "Diselect all"
                            : "Select all"}
                        </Button>
                      </div>
                      {perm?.actions?.map((permActions, index) => (
                        <div
                          key={index}
                          className="ml-10 flex items-center gap-2 justify-start"
                        >
                          <Checkbox
                            checked={selectedPerms.some(
                              (permItem) =>
                                permItem.name === perm.permName &&
                                permItem.actions.includes(permActions)
                            )}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedPerms((prev) => {
                                  const existing = prev.find(
                                    (item) => item.name === perm.permName
                                  );
                                  if (existing) {
                                    return prev.map((item) =>
                                      item.name === perm.permName
                                        ? {
                                            ...item,
                                            actions: [
                                              ...new Set([
                                                ...item.actions,
                                                permActions,
                                              ]),
                                            ],
                                          }
                                        : item
                                    );
                                  } else {
                                    return [
                                      ...prev,
                                      {
                                        name: perm.permName,
                                        actions: [permActions],
                                      },
                                    ];
                                  }
                                });
                              } else {
                                setSelectedPerms((prev) =>
                                  prev
                                    .map((item) =>
                                      item.name === perm.permName
                                        ? {
                                            ...item,
                                            actions: item.actions.filter(
                                              (a) => a !== permActions
                                            ),
                                          }
                                        : item
                                    )
                                    .filter((item) => item.actions.length > 0)
                                );
                              }
                            }}
                            className="size-5 cursor-pointer border border-primary"
                          />
                          <span>{permActions}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <Button type="submit">Submit</Button>
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
                  Usage of role add modal modal:
                </h3>
                <CodePreview
                  code={`
"use client";

import CreateRoleModal from "./role-add-modal";

export default function RolesPage() {

  return (
    <CreateRoleModal />
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

export default function RoleAddModalContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RoleAddModalInner />
    </Suspense>
  );
}
