import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export function ArrowRightLink({
  className,
  children,
  href,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
  children?: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer noopener'
      className={"group flex gap-2 items-start"}
    >
      <span
        className={cn("text-xs tablet:text-sm text-neutral-700", className)}
      >
        {children}
      </span>

      <ArrowRight
        size={8}
        strokeWidth={4}
        className={cn(
          "size-4 rounded-full p-0.5 bg-bourdeaux text-porcelain group-hover:rotate-0 transition-transform -rotate-25",
          iconClassName,
        )}
      />
    </a>
  );
}
