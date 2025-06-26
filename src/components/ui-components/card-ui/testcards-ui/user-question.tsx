"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import QuestionSelected from "./question-selected";
import QuestionCard, { GotQuestionTypes } from "./question-card";
import QuestionsHeader from "./questions-header";

export const sampleQuestions: GotQuestionTypes[] = [
  {
    id: 1,
    text: "What is the capital of France?",
    optionA: "Berlin",
    optionB: "Madrid",
    optionC: "Paris",
    optionD: "Rome",
    correctOption: "C",
    testId: 101,
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-01T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 2,
    text: "Which planet is known as the Red Planet?",
    optionA: "Earth",
    optionB: "Mars",
    optionC: "Jupiter",
    optionD: "Saturn",
    correctOption: "B",
    testId: 101,
    createdAt: "2025-01-02T00:00:00Z",
    updatedAt: "2025-01-02T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 3,
    text: "Which is the largest ocean on Earth?",
    optionA: "Atlantic",
    optionB: "Indian",
    optionC: "Arctic",
    optionD: "Pacific",
    correctOption: "D",
    testId: 101,
    createdAt: "2025-01-03T00:00:00Z",
    updatedAt: "2025-01-03T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 4,
    text: "What is the boiling point of water?",
    optionA: "100°C",
    optionB: "90°C",
    optionC: "80°C",
    optionD: "70°C",
    correctOption: "A",
    testId: 101,
    createdAt: "2025-01-04T00:00:00Z",
    updatedAt: "2025-01-04T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 5,
    text: "What gas do plants absorb from the atmosphere?",
    optionA: "Oxygen",
    optionB: "Nitrogen",
    optionC: "Carbon Dioxide",
    optionD: "Hydrogen",
    correctOption: "C",
    testId: 101,
    createdAt: "2025-01-05T00:00:00Z",
    updatedAt: "2025-01-05T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 6,
    text: "Who wrote 'Romeo and Juliet'?",
    optionA: "Charles Dickens",
    optionB: "William Shakespeare",
    optionC: "Jane Austen",
    optionD: "Mark Twain",
    correctOption: "B",
    testId: 101,
    createdAt: "2025-01-06T00:00:00Z",
    updatedAt: "2025-01-06T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 7,
    text: "Which element has the chemical symbol O?",
    optionA: "Gold",
    optionB: "Oxygen",
    optionC: "Osmium",
    optionD: "Oganesson",
    correctOption: "B",
    testId: 101,
    createdAt: "2025-01-07T00:00:00Z",
    updatedAt: "2025-01-07T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 8,
    text: "What is the square root of 144?",
    optionA: "10",
    optionB: "12",
    optionC: "14",
    optionD: "16",
    correctOption: "B",
    testId: 101,
    createdAt: "2025-01-08T00:00:00Z",
    updatedAt: "2025-01-08T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 9,
    text: "In which year did World War II end?",
    optionA: "1940",
    optionB: "1942",
    optionC: "1945",
    optionD: "1950",
    correctOption: "C",
    testId: 101,
    createdAt: "2025-01-09T00:00:00Z",
    updatedAt: "2025-01-09T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 10,
    text: "Which instrument has 88 keys?",
    optionA: "Violin",
    optionB: "Flute",
    optionC: "Guitar",
    optionD: "Piano",
    correctOption: "D",
    testId: 101,
    createdAt: "2025-01-10T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 11,
    text: "What is the main language spoken in Brazil?",
    optionA: "Spanish",
    optionB: "Portuguese",
    optionC: "French",
    optionD: "English",
    correctOption: "B",
    testId: 101,
    createdAt: "2025-01-11T00:00:00Z",
    updatedAt: "2025-01-11T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 12,
    text: "What is the currency of Japan?",
    optionA: "Yuan",
    optionB: "Won",
    optionC: "Yen",
    optionD: "Dollar",
    correctOption: "C",
    testId: 101,
    createdAt: "2025-01-12T00:00:00Z",
    updatedAt: "2025-01-12T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 13,
    text: "Which continent is the Sahara Desert located on?",
    optionA: "Asia",
    optionB: "Africa",
    optionC: "Australia",
    optionD: "Europe",
    correctOption: "B",
    testId: 101,
    createdAt: "2025-01-13T00:00:00Z",
    updatedAt: "2025-01-13T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 14,
    text: "What is the largest planet in our Solar System?",
    optionA: "Earth",
    optionB: "Saturn",
    optionC: "Neptune",
    optionD: "Jupiter",
    correctOption: "D",
    testId: 101,
    createdAt: "2025-01-14T00:00:00Z",
    updatedAt: "2025-01-14T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
  {
    id: 15,
    text: "What color is chlorophyll?",
    optionA: "Red",
    optionB: "Blue",
    optionC: "Green",
    optionD: "Yellow",
    correctOption: "C",
    testId: 101,
    createdAt: "2025-01-15T00:00:00Z",
    updatedAt: "2025-01-15T00:00:00Z",
    createdBy: "admin",
    updatedBy: "admin",
    deleted: false,
    imageURL: "",
  },
];

export interface GotTestsTypes {
  id: number;
  title: string;
  description: string;
  subjectName: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  deleted: boolean;
  durationInMinutes?: number;
}

interface UserQuestionsPropsTypes {
  setSelectedTestOptions: React.Dispatch<
    React.SetStateAction<GotQuestionTypes[]>
  >;
  selectedTestOptions: GotQuestionTypes[];
}

export default function UserQuestions({
  selectedTestOptions,
  setSelectedTestOptions,
}: UserQuestionsPropsTypes) {
  // states
  const [routingQuestionID, setRoutingQuestionID] = useState(0);

  // helpers
  // prevent leave website, refresh actions, close tab, copy, and screenshots
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue =
        "Are you sure you want to leave the test? If you leave, you won't be able to retake it!";
    };

    const handleRouteChange = () => {
      const confirmLeave = window.confirm(
        "Are you sure you want to leave the test? If you leave, you won't be able to retake it!"
      );
      if (!confirmLeave) {
        throw "Route change aborted.";
      }
    };

    // Prevent copy, cut, paste, and other actions
    const preventActions = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Prevent context menu (right-click)
    const preventContextMenu = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Prevent text selection
    const disableSelection = () => {
      document.body.style.userSelect = "none";
      document.body.style.webkitUserSelect = "none";
      document.body.style.userSelect = "none";
    };

    // Prevent keyboard shortcuts for copy, screenshot, and dev tools
    const preventShortcuts = (e: KeyboardEvent) => {
      // Block Ctrl+C, Ctrl+P, PrintScreen, F12, Ctrl+Shift+I, Ctrl+Shift+J, etc.
      if (
        e.key === "PrintScreen" ||
        (e.ctrlKey && ["c", "p", "u", "s"].includes(e.key.toLowerCase())) ||
        (e.metaKey && ["c", "p", "u", "s"].includes(e.key.toLowerCase())) ||
        e.key === "F12" ||
        (e.ctrlKey &&
          e.shiftKey &&
          ["i", "j", "c"].includes(e.key.toLowerCase())) ||
        (e.metaKey &&
          e.shiftKey &&
          ["i", "j", "c"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Prevent drag and drop
    const preventDrag = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Apply protections
    disableSelection();
    document.addEventListener("copy", preventActions, { capture: true });
    document.addEventListener("cut", preventActions, { capture: true });
    document.addEventListener("paste", preventActions, { capture: true });
    document.addEventListener("contextmenu", preventContextMenu, {
      capture: true,
    });
    document.addEventListener("keydown", preventShortcuts, { capture: true });
    document.addEventListener("dragstart", preventDrag, { capture: true });
    document.addEventListener("selectstart", preventActions, { capture: true });

    // Prevent navigation
    window.addEventListener("beforeunload", handleBeforeUnload, {
      capture: true,
    });
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      const confirmLeave = window.confirm(
        "Testdan chiqmoqchisiz. Chiqsangiz qayta yechib bo'lmaydi!"
      );
      if (!confirmLeave) {
        window.history.pushState(null, "", window.location.href);
      }
    };
    window.addEventListener("hashchange", handleRouteChange, { capture: true });

    // Attempt to blur screen on potential screenshot attempt
    const blurScreen = () => {
      document.body.style.filter = "blur(10px)";
      setTimeout(() => {
        document.body.style.filter = "";
      }, 100);
    };

    document.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        blurScreen();
      }
    });

    return () => {
      // Clean up event listeners
      document.removeEventListener("copy", preventActions, { capture: true });
      document.removeEventListener("cut", preventActions, { capture: true });
      document.removeEventListener("paste", preventActions, { capture: true });
      document.removeEventListener("contextmenu", preventContextMenu, {
        capture: true,
      });
      document.removeEventListener("keydown", preventShortcuts, {
        capture: true,
      });
      document.removeEventListener("dragstart", preventDrag, { capture: true });
      document.removeEventListener("selectstart", preventActions, {
        capture: true,
      });
      window.removeEventListener("beforeunload", handleBeforeUnload, {
        capture: true,
      });
      window.removeEventListener("hashchange", handleRouteChange, {
        capture: true,
      });
      window.onpopstate = null;
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
      document.body.style.userSelect = "";
      document.body.style.filter = "";
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 100, x: 500 }}
        animate={{ opacity: 100, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-md z-50 h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <div className="sticky w-full top-0 left-0 right-0 backdrop-blur-md">
            <QuestionsHeader title={"Sample test conllection"} />
          </div>
          <div className="flex px-5 items-start justify-between gap-5 flex-col lg:flex-row">
            <div className="flex flex-wrap gap-5 items-start justify-center w-full lg:w-[60%]">
              {sampleQuestions?.map((question, index) => (
                <QuestionCard
                  key={index}
                  setSelectedTestOptions={setSelectedTestOptions}
                  test={question}
                  index={index}
                  admin={false}
                  routingQuestionID={routingQuestionID}
                />
              ))}
            </div>
            <div className="w-full lg:w-[35%] sticky top-20 right-0 mt-5 lg:mt-0">
              <QuestionSelected
                test={sampleQuestions}
                selectedTestOptions={selectedTestOptions}
                loading={false}
                setRoutingQuestionID={setRoutingQuestionID}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
