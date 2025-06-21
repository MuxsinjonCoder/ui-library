import LessonScheduleTable from "@/components/lesson-schedule/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function LessonSchedulePage() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-5">
          <CardTitle>
            <h1 className="text-xl font-bold">Dars jadvali</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LessonScheduleTable />
        </CardContent>
      </Card>
    </>
  );
}
