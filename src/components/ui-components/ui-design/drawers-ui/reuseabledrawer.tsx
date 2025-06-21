"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface ReuseabledrawerPropsTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orientation?: "left" | "right" | "top" | "bottom";
  children?: React.ReactNode;
  title: string;
}

export default function Reuseabledrawer({
  open,
  setOpen,
  orientation = "right",
  children,
  title,
}: ReuseabledrawerPropsTypes) {
  const getDrawerStyle = () => {
    switch (orientation) {
      case "left":
        return {
          initial: { x: "-100%" },
          animate: { x: 0 },
          exit: { x: "-100%" },
          className: "left-0 top-0 h-full",
        };
      case "right":
        return {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "right-0 top-0 h-full",
        };
      case "top":
        return {
          initial: { y: "-100%" },
          animate: { y: 0 },
          exit: { y: "-100%" },
          className: "top-0 left-0 w-full",
        };
      case "bottom":
        return {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          className: "bottom-0 left-0 w-full",
        };
      default:
        return {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "right-0 top-0 h-full",
        };
    }
  };

  const drawer = getDrawerStyle();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={`fixed px-5 py-3 bg-card backdrop-blur-md w-[320px] z-50 shadow-2xl overflow-hidden ${
              drawer.className
            } ${
              orientation === "left"
                ? "rounded-r-lg border-r-2 border-primary"
                : orientation === "right"
                ? "rounded-l-lg border-l-2 border-primary"
                : orientation === "top"
                ? "rounded-b-lg border-b-2 border-primary"
                : "rounded-t-lg border-t-2 border-primary"
            }`}
            initial={drawer.initial}
            animate={drawer.animate}
            exit={drawer.exit}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-primary font-semibold uppercase text-xl">
                {title}
              </h3>
              <Button
                onClick={() => setOpen(false)}
                variant={"icon"}
                size={"sm"}
              >
                <X className="text-primary" />
              </Button>
            </div>
            <div className="h-full py-4 overflow-y-auto">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
