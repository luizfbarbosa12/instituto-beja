import { useRef } from "react";
import { motion } from "framer-motion";
import { calcClamp } from "./../../../data/Utils";
import useMediaQuery from "./../../../hooks/useMediaQuery";
import { cn } from "./../../../lib/utils";

const PESTCard = ({ cssOverride, idx, data }) => {
  const container = useRef(null);

  const mdScreen = useMediaQuery("(max-width:900px)");

  return (
    <motion.div
      layout
      ref={container}
      className='sticky top-0 w-full'
      style={{
        top: !mdScreen
          ? `calc(0% + ${idx * 12}rem)`
          : `calc(0% + ${idx * 7}rem)`,
      }}
    >
      <motion.div
        layout
        className={cn(
          `flex flex-col overflow-hidden relative w-full rounded-[4rem] p-22.5 gap-6.5 max-tablet:p-5 max-tablet:pt-10 max-tablet:rounded-3xl`,
          cssOverride,
        )}
        style={{
          backgroundColor: data.bgColor,
          color: data.textColor,
        }}
      >
        <h1
          className='editorial'
          style={{
            fontSize: `clamp(${calcClamp(28, 64)})`,
            lineHeight: `clamp(${calcClamp(28 * 1.5, 64 * 1.5)})`,
          }}
        >
          {data.title}
        </h1>

        <motion.div
          layout
          className='flex w-full gap-20 max-tablet:flex-col max-tablet:gap-5'
        >
          <p
            className='editorial w-full leading-12 max-768:leading-8'
            style={{
              fontSize: `clamp(${calcClamp(18 * 1.5, 32 * 1.5)})`,
              lineHeight: `clamp(${calcClamp(18 * 1.5, 32 * 1.5)})`,
            }}
          >
            {data.subtitle}
          </p>

          <motion.p
            layout
            className='w-full leading-6 z-10'
            style={{
              fontSize: `clamp(${calcClamp(12, 18)})`,
              lineHeight: `clamp(${calcClamp(12 * 1.5, 18 * 1.5)})`,
            }}
          >
            {data.text}
          </motion.p>
        </motion.div>

        <div className='flex flex-col gap-7 w-full editorial'>
          <div
            className='h-0.5 w-1/3 z-10'
            style={{ backgroundColor: data.lineColor }}
          />

          <ul
            style={{ "--tw-marker-color": data.lineColor }}
            className={`flex flex-col gap-7 text-2xl tablet:pr-20 list-disc list-inside marker:text-4xl w-fit z-10 max-tablet:gap-3 tablet:max-w-1/2`}
          >
            {data.list.map((item, index) => (
              <li
                key={index}
                style={{
                  fontSize: `clamp(${calcClamp(12, 32)})`,
                  lineHeight: `clamp(${calcClamp(12 * 1.5, 32 * 1.5)})`,
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={data.img}
          alt='Imagem de uma mão'
          className='relative max-tablet:-mb-5 tablet:absolute object-contain bottom-0 right-0 h-80 tablet:w-2/5 tablet:h-auto tablet:max-h-1/2'
        />
      </motion.div>
    </motion.div>
  );
};

export default PESTCard;
