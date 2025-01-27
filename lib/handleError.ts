"use client";
import { toaster } from "@/components/ui/toaster";

function handleError(error: Error) {
  toaster.create({
    title: "Toast Title",
    description: `un handled error: ${error.message}`,
    type: "error",
  })
}

export default handleError;