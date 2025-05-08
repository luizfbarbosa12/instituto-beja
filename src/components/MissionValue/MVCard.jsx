const MVCard = ({ className, title, text, children }) => {
  return (
    <div
      className={`flex-center flex-col size-77 tablet:size-[38.75rem] bg-bourdeaux rounded-full text-porcelain gap-5 px-8 tablet:px-20 z-10 ${className}`}
    >
      <h1 className='editorial text-[28px] leading-[160%] tablet:text-6xl'>
        {title}
      </h1>
      <p className='text-xs leading-relaxed tablet:text-xl text-center'>
        {text}
      </p>
      {children}
    </div>
  );
};

export default MVCard;
