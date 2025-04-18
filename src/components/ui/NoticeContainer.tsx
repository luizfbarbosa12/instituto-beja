import { ReactNode } from "react";

export function NoticeContainer({ children }: { children: ReactNode }) {
  return <div className='flex gap-16 text-base'>{children}</div>;
}
