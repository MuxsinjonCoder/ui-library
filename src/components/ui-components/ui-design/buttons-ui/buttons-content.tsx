"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import TerminalCode from "@/components/reuseable/terminal-code";
import CodePreview from "@/components/reuseable/code-preview";
import { Suspense } from "react";
import { Copy, Download, Loader2, Plus, Trash2 } from "lucide-react";

function ButtonsContentInner() {
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
              <CardTitle className="text-white">Button Variants:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Default and Submit */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-white font-medium">Default & Submit</h3>
                  <Button variant="default">Default Button</Button>
                  <Button variant="submit">Submit Button</Button>
                </div>

                {/* Secondary and Outline */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-white font-medium">
                    Secondary & Outline
                  </h3>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                </div>

                {/* Danger and Ghost */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-white font-medium">Danger & Ghost</h3>
                  <Button variant="danger">Danger Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>

                {/* Icon and Loading */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-white font-medium">Icon & Loading</h3>
                  <div className="flex gap-2">
                    <Button variant="icon" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="icon" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button variant="icon" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="default"
                    onClick={handleLoadingClick}
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {isLoading ? "Loading..." : "Click to Load"}
                  </Button>
                </div>

                {/* Nav and NavHover */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-white font-medium">Navigation</h3>
                  <Button variant="nav">Nav Button</Button>
                  <Button variant="navHover">Nav Hover Button</Button>
                </div>

                {/* Sizes */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-white font-medium">Sizes</h3>
                  <Button variant="default" size="sm">
                    Small Button
                  </Button>
                  <Button variant="default" size="default">
                    Default Button
                  </Button>
                  <Button variant="default" size="lg" className="py-3 px-6">
                    Large Button
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Install shadcn-ui for using these buttons:
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
                  Installation of shadcnUI button:
                </h3>
                <TerminalCode terminalCodes={terminalButtonCodes} />
              </div>
            </CardContent>
          </Card>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                Button component and usage examples:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-0 flex-col">
                <h3 className="font-medium text-white">Button component:</h3>
                <CodePreview
                  code={`
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center cursor-pointer justify-center gap-2 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-md",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 flex items-center justify-center rounded-md",
        secondary:
          "bg-secondary border border-primary text-secondary-foreground shadow-sm hover:bg-secondary/90 rounded-md flex items-center justify-center",
        danger:
          "bg-destructive text-primary-foreground shadow-sm hover:bg-destructive/90 rounded-md",
        nav: "text-white bg-primary rounded-r-full hover:bg-primary/90 border-l-2",
        navHover:
          "bg-transparent hover:bg-primary/70 hover:text-white rounded-r-full hover:border-l-2",
        ghost: "bg-transparent hover:bg-primary/20 rounded-md",
        icon: "bg-transparent py-2 px-2 hover:bg-primary/20 rounded-full",
        outline: "bg-transparent border-2 rounded-md text-white",
        submit:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 flex items-center justify-center rounded-md",
      },
      size: {
        default: "py-2 px-4 w-full",
        sm: "p-2",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
                  `}
                  fileName="button.tsx"
                />
              </div>

              <div className="flex items-start gap-0 flex-col mt-10">
                <h3 className="font-medium text-white">Usage examples:</h3>
                <CodePreview
                  code={`
"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Plus, Trash2, Download } from "lucide-react";
import { useState } from "react";

export default function ButtonExamples() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* Default and Submit */}
      <div className="flex flex-col gap-3">
        <Button variant="default">Default Button</Button>
        <Button variant="submit">Submit Button</Button>
      </div>

      {/* Secondary and Outline */}
      <div className="flex flex-col gap-3">
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>

      {/* Danger and Ghost */}
      <div className="flex flex-col gap-3">
        <Button variant="danger">Danger Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>

      {/* Icon and Loading */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Button variant="icon" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="icon" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="icon" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="default"
          onClick={handleLoadingClick}
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Loading..." : "Click to Load"}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-3">
        <Button variant="nav">Nav Button</Button>
        <Button variant="navHover">Nav Hover Button</Button>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-3">
        <Button variant="sm" size="default">Small Button</Button>
        <Button variant="default" size="default">Default Button</Button>
        <Button variant="default" size="lg" className="py-3 px-6">
          Large Button
        </Button>
      </div>
    </div>
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

export default function ButtonsContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ButtonsContentInner />
    </Suspense>
  );
}
