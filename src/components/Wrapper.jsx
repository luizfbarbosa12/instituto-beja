const Wrapper = ({ children, className }) => {
  return (
    <div className={`max-w-screen-2xl max-2xl:px-29 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
