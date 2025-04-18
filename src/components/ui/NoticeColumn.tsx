import { ReactNode } from "react";

export function NoticeColumn({ children }: { children: ReactNode }) {
  return <div className='flex flex-col w-full gap-8'>{children}</div>;
}
