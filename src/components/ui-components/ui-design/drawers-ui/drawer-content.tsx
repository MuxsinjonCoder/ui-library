"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Reuseabledrawer from "./reuseabledrawer";

export default function DrawerContent() {
  // states
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerOrientation, setDrawerOrientation] = useState<
    "left" | "right" | "top" | "bottom" | undefined
  >("right");

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-white">Drawer types bellow:</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-5 w-full">
            <Button
              onClick={() => {
                setDrawerOpen(true);
                setDrawerOrientation("left");
              }}
              variant={"outline"}
            >
              Left drawer
            </Button>
            <Button
              onClick={() => {
                setDrawerOpen(true);
                setDrawerOrientation("right");
              }}
              variant={"outline"}
            >
              Right drawer
            </Button>
            <Button
              onClick={() => {
                setDrawerOpen(true);
                setDrawerOrientation("bottom");
              }}
              variant={"outline"}
            >
              Bottom drawer
            </Button>
            <Button
              onClick={() => {
                setDrawerOpen(true);
                setDrawerOrientation("top");
              }}
              variant={"outline"}
            >
              Top drawer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reuseabledrawer */}
      <Reuseabledrawer
        open={isDrawerOpen}
        setOpen={setDrawerOpen}
        orientation={drawerOrientation}
        title={`${drawerOrientation} drawer`}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ab
          similique blanditiis eos eveniet explicabo omnis dignissimos
          consectetur suscipit aliquid, ipsum corporis pariatur laborum
          quibusdam architecto fugit, voluptates deleniti. Ipsa!
        </div>
      </Reuseabledrawer>
    </>
  );
}
