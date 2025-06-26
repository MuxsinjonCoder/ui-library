"use client";

import {
  MessageCircleMore,
  Repeat,
  Send,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Likes() {
  return (
    <>
      <div className="mt-5 flex items-center justify-between w-full gap-5">
        {/* likes */}
        <motion.div className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"icon"} size={"sm"}>
                  <ThumbsUp className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Yoqdi</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"icon"} size={"sm"}>
                  <ThumbsDown className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Yoqmadi</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>

        {/* comment */}
        <motion.div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"icon"} size={"sm"}>
                  <MessageCircleMore className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Izoh yozish</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>

        {/* repost */}
        <motion.div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"icon"} size={"sm"}>
                  <Repeat className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Repost (qayta qo'yish)</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>

        {/* send */}
        <motion.div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"icon"} size={"sm"}>
                  <Send className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Ulashish</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </div>
    </>
  );
}