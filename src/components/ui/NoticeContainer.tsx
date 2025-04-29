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
    <div
      className={cn(
        "flex not-tablet:flex-col text-base gap-4 tablet:gap-16",
        className,
      )}
    >
      {children}
    </div>
  );
}
