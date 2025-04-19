import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function NoticeContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex text-base gap-16", className)}>{children}</div>
  );
}
