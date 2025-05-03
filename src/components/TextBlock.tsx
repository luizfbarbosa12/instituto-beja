import { JSX } from "react";
import { calcClamp } from "./../data/Utils";

type TextBlockProps = {
  firstBlock?: { key: string; content: JSX.Element }[];
  secondBlock?: { key: string; content: JSX.Element }[];
  className?: string;
};

const TextBlock = ({ firstBlock, secondBlock, className }: TextBlockProps) => {
  return (
    <div
      className={`flex justify-end gap-12 max-w-264 max-[650px]:flex-col max-[650px]:gap-8 max-sm:gap-4 ${className}`}
    >
      {firstBlock && (
        <div
          style={{
            fontSize: `clamp(${calcClamp(12, 16)})`,
            lineHeight: `clamp(${calcClamp(12 * 1.5, 32 * 1.5)})`,
          }}
          className='w-1/2  max-[650px]:w-full'
        >
          {firstBlock.map(({ key, content }) => (
            <div
              style={{
                fontSize: `clamp(${calcClamp(12, 16)})`,
                lineHeight: `clamp(${calcClamp(12 * 1.5, 16 * 1.5)})`,
              }}
              className='flex flex-col w-full gap-8'
              key={key}
            >
              {content}
            </div>
          ))}
        </div>
      )}

      {secondBlock && (
        <div
          style={{
            fontSize: `clamp(${calcClamp(12, 16)})`,
            lineHeight: `clamp(${calcClamp(12 * 1.5, 16 * 1.5)})`,
          }}
          className='w-1/2  max-[650px]:w-full '
        >
          {secondBlock.map(({ key, content }) => (
            <div
              style={{
                fontSize: `clamp(${calcClamp(12, 16)})`,
                lineHeight: `clamp(${calcClamp(12 * 1.5, 16 * 1.5)})`,
              }}
              className='flex flex-col w-full gap-8'
              key={key}
            >
              {content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextBlock;
