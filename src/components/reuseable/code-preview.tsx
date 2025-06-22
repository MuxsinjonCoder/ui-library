"use client";

import { useState } from "react";
import { Copy, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";

interface TerminalCodePropsTypes {
  code: string;
  fileName: string;
  language?: string;
}

export default function CodePreview({
  code,
  fileName,
  language = "tsx",
}: TerminalCodePropsTypes) {
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative w-full mx-auto my-4">
      <div className="bg-gray-900 rounded-md shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm text-gray-400 ml-2">{fileName}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className={cn(
              "text-gray-400 hover:text-white transition-colors",
              isCopied && "text-green-400"
            )}
            title={isCopied ? "Copied!" : "Copy code"}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <AnimatePresence initial={false}>
          <motion.div
            initial={{ height: 200 }}
            animate={{ height: isExpanded ? "auto" : 200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <Highlight theme={themes.vsDark} code={code} language={language}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={cn("px-4 py-2 text-sm overflow-x-auto", className)}
                  style={style}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center py-2 bg-gray-900 border-t border-gray-800">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                Collapse <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Expand <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
