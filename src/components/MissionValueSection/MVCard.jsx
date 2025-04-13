const MVCard = ({ className, title, text }) => {
  return (
    <div
      className={`flex-center flex-col size-[38.75rem] bg-bourdeaux rounded-full text-porcelain gap-5 px-20 z-10 ${className}`}
    >
      <h1 className='editorial text-6xl'>{title}</h1>
      <p className='text-xl text-center'>{text}</p>
    </div>
  );
};

export default MVCard;
