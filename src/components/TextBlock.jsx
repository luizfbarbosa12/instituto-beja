const TextBlock = ({ firstBlock, secondBlock }) => {
  return (
    <div className='flex justify-end'>
      <div className='flex gap-12 max-w-264 max-xl:flex-col text-base'>
        {firstBlock && (
          <>
            {firstBlock.map(({ key, content }) => (
              <div className='flex flex-col w-full gap-8' key={key}>
                {content}
              </div>
            ))}
          </>
        )}

        {secondBlock && (
          <>
            {secondBlock.map(({ key, content }) => (
              <div className='flex flex-col w-full gap-8' key={key}>
                {content}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TextBlock;
