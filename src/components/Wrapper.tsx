import { cn } from "@/lib/utils";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn("flex-1 mx-6", className)}>
      <div className='desktop:mx-auto desktop:max-w-desktop'>{children}</div>
    </div>
  );
};

export default Wrapper;
