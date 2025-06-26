import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Loader } from "@/components/ui/loader";
import { Flag } from "lucide-react";
import React, { useState } from "react";
import { GotQuestionTypes } from "./question-card";

interface QuestionSelectedPropsTypes {
  test: GotQuestionTypes[];
  selectedTestOptions: GotQuestionTypes[];
  loading: boolean;
  setRoutingQuestionID: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuestionSelected({
  test,
  selectedTestOptions,
  loading,
  setRoutingQuestionID,
}: QuestionSelectedPropsTypes) {
  return (
    <>
      <Card>
        <CardContent className="mt-5 flex flex-wrap gap-2">
          {loading ? (
            <div className="w-full mx-auto my-5">
              <Loader />
            </div>
          ) : (
            test?.map((test: GotQuestionTypes, index: number) => (
              <div key={test?.id} className="size-10">
                <Button
                  onClick={() => {
                    setRoutingQuestionID(test?.id);
                    const element = document.getElementById(String(test?.id));
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  variant={
                    selectedTestOptions?.some(
                      (selectedTest: GotQuestionTypes) =>
                        selectedTest?.id === test?.id
                    )
                      ? "default"
                      : "ghost"
                  }
                  className="rounded-full border border-primary"
                >
                  {index + 1}
                </Button>
              </div>
            ))
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => {
              confirm("Do you want to finish test");
            }}
          >
            <Flag /> Testni yakunlash
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
