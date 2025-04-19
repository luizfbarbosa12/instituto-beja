import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function List({
  title,
  children,
  className,
}: {
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn(className, "flex flex-col gap-8")}>
      <div className='h-[3px] w-2/3 bg-retro-ochre' />
      {title && (
        <h3 className='text-[32px] leading-[100%] w-full editorial'>{title}</h3>
      )}

      <ul className='flex flex-col gap-11 '>{children}</ul>
    </section>
  );
}
