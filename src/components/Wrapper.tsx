import { cn } from "@/lib/utils";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={cn("mx-6 desktop:mx-0 tablet:mx-29 flex-1 w-full", className)}
    >
      <div className='desktop:mx-auto max-w-full w-full desktop:max-w-desktop'>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
