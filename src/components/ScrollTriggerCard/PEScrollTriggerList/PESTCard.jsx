import { useRef } from "react";
import { motion, useTransform } from "framer-motion";

const PESTCard = ({
  cssOverride,
  idx,
  range,
  targetScale,
  targetProgress,
  data,
}) => {
  const container = useRef(null);

  const cardScale = useTransform(targetProgress, range, [1, targetScale]);

  return (
    <motion.div
      layout
      ref={container}
      className='flex-center not-first:pt-10 not-first:tablet:pt-20 not-last:tablet:pb-20 not-last:pb-10 sticky top-0 w-full'
    >
      <motion.div
        layout
        className={`min-h-screen flex flex-col relative w-full rounded-[4rem] overflow-hidden p-22.5 gap-3.5 tablet:gap-6.5 ${cssOverride}`}
        style={{
          top: `calc(-10% + ${idx * 4}rem)`,
          scale: cardScale,
          backgroundColor: data.bgColor,
          color: data.textColor,
        }}
      >
        <h1 className='editorial text-[28px] not-tablet:leading-[65px] text-6xl'>
          {data.title}
        </h1>

        <motion.div layout className='flex not-tablet:flex-col w-full gap-8'>
          <p className='editorial text-lg tablet:text-3xl w-full tablet:leading-12'>
            {data.subtitle}
          </p>
          <motion.p
            layout
            className='tablet:text-base text-xs leading-relaxed w-full tablet:leading-6 z-10'
          >
            {data.text}
          </motion.p>
        </motion.div>

        <div className='flex flex-col gap-7 w-full editorial not-tablet:pb-80'>
          <div
            className='h-0.5 w-1/3 z-10'
            style={{ backgroundColor: data.lineColor }}
          />

          <ul
            className={`flex flex-col gap-7 text-2xl list-disc list-inside marker:text-4xl w-fit z-10`}
            style={{ "--tw-marker-color": data.lineColor }}
          >
            {data.list.map((item, index) => (
              <div key={index} className='flex gap-4 items-center'>
                <span
                  className='size-2 tablet:size-5 rounded-full shrink-0'
                  style={{ backgroundColor: data.lineColor }}
                />
                <li
                  className='list-none text-xs leading-relaxed tablet:text-3xl'
                  key={index}
                >
                  {item}
                </li>
              </div>
            ))}
          </ul>
        </div>

        <img
          src={data.img}
          alt='Imagem de uma mão'
          className='absolute object-contain bottom-0 right-0 h-80 tablet:w-2/5 tablet:h-auto tablet:max-h-1/2'
        />
      </motion.div>
    </motion.div>
  );
};

export default PESTCard;
