const Wrapper = ({ children, className }) => {
  return (
    <div className={`max-w-full max-2xl:px-29 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
