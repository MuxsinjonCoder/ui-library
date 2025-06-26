import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export interface GotQuestionTypes {
  id: number;
  text: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: string;
  testId: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  deleted: boolean;
  imageURL?: string;
}

interface TestCardProps {
  test: GotQuestionTypes;
  index: number;
  admin: boolean;
  setSelectedTestOptions?: React.Dispatch<
    React.SetStateAction<GotQuestionTypes[]>
  >;
  routingQuestionID?: number;
}

export default function QuestionCard({
  test,
  index,
  admin,
  setSelectedTestOptions,
  routingQuestionID,
}: TestCardProps) {
  return (
    <>
      <motion.div
        id={String(test?.id)}
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 100,
          y: 0,
          scale: 1,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
        transition={{
          opacity: { duration: 0.2 },
          y: { duration: 0.2 },
        }}
        {...(test?.id === routingQuestionID && {
          animate: {
            opacity: 100,
            y: 0,
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            ],
          },
          transition: {
            scale: { times: [0, 0.5, 1], duration: 0.6, ease: "easeInOut" },
            boxShadow: { times: [0, 0.5, 1], duration: 0.6, ease: "easeInOut" },
            opacity: { duration: 0.2 },
            y: { duration: 0.2 },
          },
        })}
        className={
          admin
            ? "w-full sm:w-[40%] md:w-[350px] border-b-4 border-primary rounded-xl overflow-hidden shadow-xl"
            : "w-full border-b-4 border-primary rounded-md shadow-xl"
        }
      >
        <Card className="w-full">
          {test?.imageURL && (
            <img
              className="w-full h-auto pb-5 border-b-2 border-primary"
              src={test?.imageURL}
              alt={test?.text}
            />
          )}
          <CardHeader className="font-semibold h-full">
            {index + 1}. {test?.text}
          </CardHeader>
          <CardContent className="flex items-start flex-col gap-2">
            {admin ? (
              <>
                <div className="flex items-start">
                  <span
                    className={`mr-2 text-primary ${
                      test?.correctOption === "A" ? "font-bold" : ""
                    }`}
                  >
                    A:
                  </span>
                  {test?.optionA}
                </div>
                <div className="flex items-start">
                  <span
                    className={`mr-2 text-primary ${
                      test?.correctOption === "B" ? "font-bold" : ""
                    }`}
                  >
                    B:
                  </span>
                  {test?.optionB}
                </div>
                <div className="flex items-start">
                  <span
                    className={`mr-2 text-primary ${
                      test?.correctOption === "C" ? "font-bold" : ""
                    }`}
                  >
                    C:
                  </span>
                  {test?.optionC}
                </div>
                <div className="flex items-start">
                  <span
                    className={`mr-2 text-primary ${
                      test?.correctOption === "D" ? "font-bold" : ""
                    }`}
                  >
                    D:
                  </span>
                  {test?.optionD}
                </div>
              </>
            ) : (
              <RadioGroup
                className="flex flex-col gap-2"
                onValueChange={(value) => {
                  if (!setSelectedTestOptions) return;

                  setSelectedTestOptions((prev) => {
                    const others = prev.filter((item) => item.id !== test.id);
                    return [...others, { ...test, correctOption: value }];
                  });
                }}
              >
                <label className="flex items-center cursor-pointer space-x-2">
                  <RadioGroupItem value="A" id={`q-${index}-A`} />
                  <span>{test?.optionA}</span>
                </label>
                <label className="flex items-center cursor-pointer space-x-2">
                  <RadioGroupItem value="B" id={`q-${index}-B`} />
                  <span>{test?.optionB}</span>
                </label>
                <label className="flex items-center cursor-pointer space-x-2">
                  <RadioGroupItem value="C" id={`q-${index}-C`} />
                  <span>{test?.optionC}</span>
                </label>
                <label className="flex items-center cursor-pointer space-x-2">
                  <RadioGroupItem value="D" id={`q-${index}-D`} />
                  <span>{test?.optionD}</span>
                </label>
              </RadioGroup>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
