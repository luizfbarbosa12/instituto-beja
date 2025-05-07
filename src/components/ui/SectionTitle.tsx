import { cn } from "@/lib/utils";

export function SectionTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "tablet:text-8xl editorial text-[28px] leading-[65px] tablet:leading-none",
        className,
      )}
    >
      {title}
    </h2>
  );
}
