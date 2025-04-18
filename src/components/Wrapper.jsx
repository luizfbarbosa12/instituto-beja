const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`max-w-full max-2xl:px-29 desktop:max-w-desktop desktop:mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
