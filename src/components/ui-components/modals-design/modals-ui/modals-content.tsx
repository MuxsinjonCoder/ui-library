"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import TerminalCode from "@/components/reuseable/terminal-code";
import CodePreview from "@/components/reuseable/code-preview";
import { Suspense } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function ModalsContentInner() {
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

  const terminalAlertDialogCodes = [
    { type: "pnpm", code: "pnpm dlx shadcn@latest add alert-dialog" },
    { type: "npm", code: "npx shadcn@latest add alert-dialog" },
    { type: "yarn", code: "yarn shadcn@latest add alert-dialog" },
    { type: "bun", code: "bunx --bun shadcn@latest add alert-dialog" },
  ];

  // useEffects
  useEffect(() => {
    const tab = searchParams.get("tab") || "preview";
    setTabValue(tab);
    const titles = { preview: "Preview", code: "Code" };
    const tabKey = tab === "preview" || tab === "code" ? tab : "preview";
    document.title = `Buttons - ${titles[tabKey]}`;
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
            <CardHeader>
              <CardTitle className="text-white">Modals Variants:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Default modal</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>It is default and average modal</DialogTitle>
                      <DialogDescription>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Possimus necessitatibus repudiandae labore velit
                        enim quidem ipsa quae doloribus, eum porro accusantium
                        blanditiis aliquid ipsam fugit vitae dolorem molestias,
                        a animi.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="danger">Confirm modal</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        This is confirm modal for extreme situations
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus doloremque pariatur ut dolor aut, iure fugit,
                        accusantium vitae porro quasi ex vel nam culpa facilis
                        quidem harum id rerum in?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel asChild>
                        <Button className="text-primary" variant={"outline"}>
                          Close
                        </Button>
                      </AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Button
                          className="bg-destructive hover:bg-destructive/80"
                          variant={"danger"}
                        >
                          I know
                        </Button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
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
                  Installation of shadcnUI confirm modal:
                </h3>
                <TerminalCode terminalCodes={terminalAlertDialogCodes} />
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
                  fileName="defaultModal.tsx"
                  code={`
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background max-h-[90%] overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-md border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
                    `}
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">
                  Usage of default modal:
                </h3>
                <CodePreview
                  code={`
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DefaultModalExample() {

  return (
    <Dialog>
     <DialogTrigger asChild>
       <Button variant="outline">Default modal</Button>
     </DialogTrigger>
     <DialogContent>
       <DialogHeader>
         <DialogTitle>It is default and average modal</DialogTitle>
         <DialogDescription>
           Lorem ipsum dolor sit amet, consectetur adipisicing
           elit. Possimus necessitatibus repudiandae labore velit
           enim quidem ipsa quae doloribus, eum porro accusantium
           blanditiis aliquid ipsam fugit vitae dolorem molestias,
           a animi.
         </DialogDescription>
       </DialogHeader>
     </DialogContent>
   </Dialog>
  );
}
                  `}
                  fileName="button_examples.tsx"
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-20">
                <h3 className="font-medium text-white">
                  Confirm modal component:
                </h3>
                <CodePreview
                  fileName="confirmModal.tsx"
                  code={`
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
                    `}
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">
                  Usage of default modal:
                </h3>
                <CodePreview
                  code={`
"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ConfirmModalExample() {

  return (
   <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="danger">Confirm modal</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          This is confirm modal for extreme situations
        </AlertDialogTitle>
        <AlertDialogDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus doloremque pariatur ut dolor aut, iure fugit,
          accusantium vitae porro quasi ex vel nam culpa facilis
          quidem harum id rerum in?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel asChild>
          <Button className="text-primary" variant={"outline"}>
            Close
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button
            className="bg-destructive hover:bg-destructive/80"
            variant={"danger"}
          >
            I know
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
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

export default function ModalsContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ModalsContentInner />
    </Suspense>
  );
}
