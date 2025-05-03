import { calcClamp } from "../../data/Utils";

const PinkBox = ({ children }) => {
  return (
    <div className='w-full flex justify-end relative'>
      <div
        style={{
          fontSize: `clamp(${calcClamp(10, 16)})`,
          lineHeight: `clamp(${calcClamp(10 * 1.5, 16 * 1.5)})`,
        }}
        className='bg-rose p-15 w-180 flex flex-col max-sm:gap-4 gap-8 max-md:relative max-md:-right-8 max-md:p-8 '
      >
        {children}
      </div>
    </div>
  );
};

export default PinkBox;
