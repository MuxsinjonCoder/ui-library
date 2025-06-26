"use client";

import { useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import Likes from "./likes";

export interface PostTypes {
  id: number;
  title: string;
  description: string;
  tags: { tag: string }[];
}

interface PostCardPropsTypes {
  post: PostTypes;
}

export default function PostCard({ post }: PostCardPropsTypes) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="border-b-4 overflow-hidden bg-primary-foreground border-t-4 border-x-0 border-primary">
          <Image
            src={"/default-post.png"}
            alt="default post image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto -mt-7"
            layout="responsive"
          />
          <CardHeader>
            <CardTitle>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {post?.title}
              </motion.p>
            </CardTitle>
            <CardDescription>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    maxHeight: isExpanded ? "none" : "100px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
                {!isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent flex items-end justify-end pr-2"
                  >
                    <span className="text-primaryBlue text-sm font-semibold">
                      ...
                    </span>
                  </motion.div>
                )}
              </div>
              <motion.button
                onClick={toggleDescription}
                className="text-primaryBlue text-sm font-semibold mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {isExpanded ? "Qisqartirish" : "Barchasini ko'rish"}
              </motion.button>
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-2 flex-wrap text-sm text-primary font-semibold pb-3">
            {post?.tags?.map((tags: { tag: string }, index: number) => (
              <span key={index}>
                <motion.p
                  className="text-primaryBlue"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {tags?.tag}
                </motion.p>
              </span>
            ))}
            <Likes />
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
}
