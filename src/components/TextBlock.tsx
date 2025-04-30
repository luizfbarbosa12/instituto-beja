import { JSX } from "react";

type TextBlockProps = {
  firstBlock?: { key: string; content: JSX.Element }[];
  secondBlock?: { key: string; content: JSX.Element }[];
};

const TextBlock = ({ firstBlock, secondBlock }: TextBlockProps) => {
  return (
    <div className='flex justify-end gap-12 max-w-264 max-[650px]:flex-col max-[650px]:gap-8 max-sm:gap-4'>
      {firstBlock && (
        <div className='w-1/2 text-base max-[650px]:w-full max-sm:text-[12px]'>
          {firstBlock.map(({ key, content }) => (
            <div className='flex flex-col w-full gap-8' key={key}>
              {content}
            </div>
          ))}
        </div>
      )}

      {secondBlock && (
        <div className='w-1/2 text-base max-[650px]:w-full max-sm:text-[12px]'>
          {secondBlock.map(({ key, content }) => (
            <div className='flex flex-col w-full gap-8' key={key}>
              {content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextBlock;
