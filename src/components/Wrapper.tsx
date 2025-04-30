type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={`max-w-full px-6 tablet:px-29 desktop:max-w-desktop desktop:mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
