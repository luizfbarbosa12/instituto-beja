const PinkBox = ({ children }) => {
  return (
    <div className='w-full flex justify-end relative'>
      <div className='bg-rose p-15 w-180 flex flex-col max-sm:gap-4 gap-8 max-md:text-sm max-md:leading-6 max-sm:text-[10px] max-sm:leading-4 max-md:relative max-md:-right-8 max-md:p-8 '>
        {children}
      </div>
    </div>
  );
};

export default PinkBox;
