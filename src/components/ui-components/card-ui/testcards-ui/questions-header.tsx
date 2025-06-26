import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface QuestionsHeaderPropsTypes {
  title: string;
}

export default function QuestionsHeader({ title }: QuestionsHeaderPropsTypes) {
  const durationInMinutes = 10; // progress time
  const totalDuration = durationInMinutes * 60 * 1000; // Convert minutes to milliseconds
  const [timeLeft, setTimeLeft] = useState<number>(totalDuration);

  useEffect(() => {
    if (totalDuration <= 0) return; // If no duration, exit the effect

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [totalDuration]); // Dependency array with totalDuration

  const progress = (timeLeft / totalDuration) * 100;

  const formatTime = (ms: number) => {
    if (ms <= 0) return "00:00";
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="w-[90%] py-2 mx-auto container">
      <div className="flex items-center justify-between gap-5">
        <h1 className="mb-5 max-w-[90%] truncate">
          <span className="text-primary text-xl font-bold">{title}</span>
        </h1>
        <p className="text-xl">{formatTime(timeLeft)}</p>
      </div>
      <Progress value={progress} />
    </div>
  );
}
