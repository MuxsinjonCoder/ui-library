import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Edit2, Settings2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Badge } from "../ui/badge";

const initialSubjects = {
  elements: 120,
  page: 12,
  data: [
    {
      id: 1,
      name: "Matematika",
      class: "6",
      teacher: "Teacher 1",
      bookCount: "120",
      courses: true,
    },
    {
      id: 2,
      name: "Fizika",
      class: "7",
      teacher: "Teacher 2",
      bookCount: "100",
      courses: true,
    },
    {
      id: 3,
      name: "Kimyo",
      class: "8",
      teacher: "Teacher 3",
      bookCount: "90",
      courses: false,
    },
    {
      id: 4,
      name: "Biologiya",
      class: "6",
      teacher: "Teacher 4",
      bookCount: "110",
      courses: true,
    },
    {
      id: 5,
      name: "Ingliz tili",
      class: "9",
      teacher: "Teacher 5",
      bookCount: "80",
      courses: true,
    },
    {
      id: 6,
      name: "Adabiyot",
      class: "5",
      teacher: "Teacher 6",
      bookCount: "130",
      courses: false,
    },
    {
      id: 7,
      name: "Tarix",
      class: "7",
      teacher: "Teacher 7",
      bookCount: "95",
      courses: true,
    },
    {
      id: 8,
      name: "Geografiya",
      class: "6",
      teacher: "Teacher 8",
      bookCount: "115",
      courses: true,
    },
    {
      id: 9,
      name: "Informatika",
      class: "8",
      teacher: "Teacher 9",
      bookCount: "85",
      courses: false,
    },
    {
      id: 10,
      name: "San'at",
      class: "5",
      teacher: "Teacher 10",
      bookCount: "70",
      courses: true,
    },
  ],
};

export default function SubjectsTable() {
  return (
    <>
      <div>
        <Table className="bg-background">
          <TableHeader className="bg-accent">
            <TableRow>
              <TableHead className="w-[50px] text-center">N</TableHead>
              <TableHead>Fan nomi</TableHead>
              <TableHead>O'tiladigan sinf</TableHead>
              <TableHead>O'qituvchi</TableHead>
              <TableHead>Kitoblar soni</TableHead>
              <TableHead>Kurslar</TableHead>
              <TableHead className="text-right w-[100px]">
                <Settings2 className="size-5 text-primary mx-auto" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialSubjects?.data?.map((item, index) => (
              <TableRow key={index}>
                <TableHead className="w-[50px] text-center">
                  {index + 1}
                </TableHead>
                <TableHead>{item?.name}</TableHead>
                <TableHead>{item?.class}</TableHead>
                <TableHead>{item?.teacher}</TableHead>
                <TableHead>{item?.bookCount}</TableHead>
                <TableHead>
                  {item?.courses ? (
                    <Badge className="py-1 px-4 w-full bg-primary/90 cursor-default">
                      Bor
                    </Badge>
                  ) : (
                    <Badge className="py-1 px-4 w-full bg-destructive cursor-default">
                      Yo'q
                    </Badge>
                  )}
                </TableHead>
                <TableHead className="w-[100px] flex items-center justify-center gap-1">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant={"icon"} size={"sm"}>
                          <Trash2 className="size-5 text-destructive" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>O'chirish</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant={"icon"} size={"sm"}>
                          <Edit2 className="size-5 text-primary" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Tahrirlash</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableHead>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* pagination */}
        <Pagination className="mt-5">
          <PaginationContent>
            <PaginationItem>
              <Button variant={"icon"} size={"sm"}>
                <PaginationPrevious href="#" />
              </Button>
            </PaginationItem>
            {[...Array(Math.min(2, initialSubjects.page))].map((_, i) => (
              <PaginationItem key={i}>
                <Button variant={"icon"} size={"sm"}>
                  <PaginationLink
                    href="#"
                    isActive={i + 1 === initialSubjects.page}
                  >
                    {i + 1}
                  </PaginationLink>
                </Button>
              </PaginationItem>
            ))}
            <PaginationItem className="hidden sm:block">
              <Button variant={"icon"} size={"sm"}>
                <PaginationLink href="#" isActive={3 === initialSubjects.page}>
                  3
                </PaginationLink>
              </Button>
            </PaginationItem>
            <PaginationItem className="hidden sm:block">
              <Button variant={"icon"} size={"sm"}>
                <PaginationLink href="#" isActive={4 === initialSubjects.page}>
                  4
                </PaginationLink>
              </Button>
            </PaginationItem>
            <PaginationItem className="hidden sm:block">
              <Button variant={"icon"} size={"sm"}>
                <PaginationLink href="#" isActive={5 === initialSubjects.page}>
                  5
                </PaginationLink>
              </Button>
            </PaginationItem>
            {initialSubjects.page > 5 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <Button variant={"icon"} size={"sm"}>
                <PaginationNext href="#" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
