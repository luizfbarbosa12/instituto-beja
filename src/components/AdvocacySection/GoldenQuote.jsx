const GoldenQuote = ({ text, autor }) => {
  return (
    <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12 pt-16 max-md:text-lg max-md:leading-8 max-sm:text-base max-sm:leading-6'>
      <p>&quot;{text}&quot;</p>

      <p className='w-[55%] text-end max-lg:w-full'>{autor}</p>
    </div>
  );
};

export default GoldenQuote;
