const PinkBox = ({ children }) => {
  return (
    <div className='w-full flex justify-end'>
      <div className='bg-rose p-15 w-180 flex flex-col gap-8'>{children}</div>
    </div>
  );
};

export default PinkBox;
