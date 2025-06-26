"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface TerminalCodeProps {
  terminalCodes: { type: string; code: string }[];
}

export default function TerminalCode({ terminalCodes }: TerminalCodeProps) {
  const [selectedCommand, setSelectedCommand] = useState(
    terminalCodes[0]?.code || ""
  );
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(selectedCommand);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full mx-auto my-4">
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-md shadow-2xl border border-gray-700 overflow-hidden">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 py-3 text-gray-300">
          <div className="overflow-x-auto w-full">
            <div className="flex gap-2 w-max pr-10">
              {/* `pr-10` copy tugmasi joyi uchun */}
              {terminalCodes.map((cmd) => (
                <button
                  key={cmd.type}
                  onClick={() => setSelectedCommand(cmd.code)}
                  className={cn(
                    "px-4 py-1 rounded-full cursor-pointer text-xs font-mono transition-colors whitespace-nowrap",
                    selectedCommand === cmd.code
                      ? "bg-green-400 text-gray-900"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  )}
                >
                  {cmd.type}
                </button>
              ))}
            </div>
          </div>
          <div className="absolute right-4 top-3 sm:static sm:right-auto sm:top-auto">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              className={cn(
                "text-gray-300 hover:text-white transition-colors duration-200",
                isCopied && "text-green-400"
              )}
              title={isCopied ? "Copied!" : "Copy command"}
            >
              {isCopied ? (
                <Check className="h-5 w-5 animate-pulse" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        <div className="px-5 py-3 bg-gray-900">
          <p className="w-full bg-transparent text-white font-mono text-base">
            {selectedCommand}
          </p>
        </div>
      </div>
    </div>
  );
}
