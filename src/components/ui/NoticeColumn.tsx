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
    <div
      className={cn(
        "flex text-xs leading-[160%] tablet:text-base tablet:leading-[160%] flex-col w-full gap-4 tablet:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
