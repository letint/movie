"use client";
import { ReactNode } from "react";
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <Dialog defaultOpen={true} onOpenChange={() => router.back()}>
      <DialogTitle></DialogTitle>
      <DialogOverlay className="fixed z-40 bg-white w-full" />
      <DialogContent className="fixed z-50 w-full sm:max-w-fill">
        {children}
      </DialogContent>
    </Dialog>
  );
}