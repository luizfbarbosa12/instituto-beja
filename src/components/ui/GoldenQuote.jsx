import { calcClamp } from "../../data/Utils";

const GoldenQuote = ({ text, autor }) => {
  return (
    <div className='flex flex-col gap-8 items-end editorial text-retro-ochre py-10'>
      <p
        style={{
          fontSize: `clamp(${calcClamp(16, 32)})`,
          lineHeight: `clamp(${calcClamp(24 * 1.1, 48 * 1.3)})`,
        }}
      >
        &quot;{text}&quot;
      </p>

      <cite
        style={{
          fontSize: `clamp(${calcClamp(14, 28)})`,
          lineHeight: `clamp(${calcClamp(14 * 1.3, 28 * 1.3)})`,
        }}
        className='w-[55%] text-end max-lg:w-full'
      >
        {autor}
      </cite>
    </div>
  );
};

export default GoldenQuote;
