"use client";

import { useState } from "react";
import CodePreview from "../reuseable/code-preview";
import TerminalCode from "../reuseable/terminal-code";
import UserQuestions from "../ui-components/card-ui/testcards-ui/user-question";
import { GotQuestionTypes } from "../ui-components/card-ui/testcards-ui/question-card";
import PostCard from "@/app/ui-components/card-ui/postcard-ui/post-card";
import { motion } from "framer-motion";
import Link from "next/link";

const dummyPost = {
  id: 1,
  title: "ULife platformasidagi birinchi post",
  description:
    "<b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Eos magnam velit harum possimus tempora maiores illum esse repudiandae molestiae nisi iste eius odit, amet quasi modi voluptatibus, error quod tenetur?",
  tags: [
    { tag: "#ULife" },
    { tag: "#birinchi" },
    { tag: "#newpost" },
    { tag: "#tag" },
    { tag: "#tags" },
  ],
};

export default function ExampleComps() {
  const [selectedTestOptions, setSelectedTestOptions] = useState<
    GotQuestionTypes[]
  >([]);

  const terminalCodeExample = [
    { type: "Type1", code: "Type1 terminal code example" },
    { type: "Type2", code: "Type2 terminal code example" },
    { type: "Type3", code: "Type3 terminal code example" },
    { type: "Type4", code: "Type4 terminal code example" },
    { type: "Type5", code: "Type5 terminal code example" },
  ];

  return (
    <section className="py-10 px-4 md:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Explore Components
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Check out some of the beautifully styled, reusable UI components
          below.
        </p>
      </div>
      <div className="columns-1 md:columns-2 gap-4 space-y-4">
        <div className="break-inside-avoid">
          <TerminalCode terminalCodes={terminalCodeExample} />
        </div>
        <div className="break-inside-avoid">
          <CodePreview
            fileName="file-name.tsx"
            code={`
<div className="text-center mb-10">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
    Explore Components
  </h2>
  <p className="text-muted text-lg max-w-xl mx-auto">
    Check out some of the beautifully styled, reusable UI components
    below.
  </p>
</div>
            `}
          />
        </div>
        <div className="break-inside-avoid">
          <PostCard post={dummyPost} />
        </div>
      </div>
      <div className="mt-5">
        <UserQuestions
          selectedTestOptions={selectedTestOptions}
          setSelectedTestOptions={setSelectedTestOptions}
        />
      </div>
      <div className="my-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <Link
            href="/ui-components"
            className="relative inline-block px-8 py-3 font-semibold rounded-lg bg-secondary text-secondary-foreground overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              layoutId="shine"
            />
            <span className="relative z-10">Explore all components</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
