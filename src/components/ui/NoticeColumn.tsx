import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function NoticeColumn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col w-full gap-8", className)}>
      {children}
    </div>
  );
}
