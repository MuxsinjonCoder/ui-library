"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen text-primary">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl font-semibold">Page Not Found</p>
        <p className="text-sm opacity-75">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Button onClick={() => router.back()} className="mt-4">
          Back
        </Button>
      </div>
    </div>
  );
}
