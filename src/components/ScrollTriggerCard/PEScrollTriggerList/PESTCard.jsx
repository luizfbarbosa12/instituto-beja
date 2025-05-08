import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { calcClamp } from "./../../../data/Utils";
import useMediaQuery from "./../../../hooks/useMediaQuery";
import { cn } from "./../../../lib/utils";

const PESTCard = ({
  cssOverride,
  idx,
  data,
  targetScale,
  targetProgress,
  range,
}) => {
  const container = useRef(null);

  const mdScreen = useMediaQuery("(max-width:900px)");

  const cardScale = useTransform(targetProgress, range, [1, targetScale]);

  return (
    <motion.div
      layout
      ref={container}
      className='sticky top-0 w-full pt-2'
      style={{
        scale: cardScale,
        top: !mdScreen
          ? `calc(0% + ${idx * 3}rem)`
          : `calc(0% + ${idx * 2}rem)`,
      }}
    >
      <motion.div
        layout
        className={cn(
          `flex flex-col overflow-hidden relative w-full rounded-[60px] gap-6.5 h-200 max-1280:h-185 max-950:rounded-4xl max-768:h-160 max-640:rounded-2xl`,
          cssOverride,
        )}
        style={{
          paddingLeft: `clamp(${calcClamp(28, 64)})`,
          paddingRight: `clamp(${calcClamp(28, 64)})`,
          paddingTop: `clamp(${calcClamp(28, 64)})`,
          paddingBottom: `clamp(${calcClamp(28, 64)})`,

          backgroundColor: data.bgColor,
          color: data.textColor,
        }}
      >
        <h1
          className='editorial'
          style={{
            fontSize: `clamp(${calcClamp(20, 48)})`,
            lineHeight: `clamp(${calcClamp(20 * 1.3, 48 * 1.3)})`,
          }}
        >
          {data.title}
        </h1>

        <motion.div
          layout
          className='flex w-full gap-20 max-768:flex-col max-768:gap-5'
        >
          <p
            className='editorial w-full leading-12 max-768:leading-8'
            style={{
              fontSize: `clamp(${calcClamp(14, 28)})`,
              lineHeight: `clamp(${calcClamp(14 * 1.3, 28 * 1.3)})`,
            }}
          >
            {data.subtitle}
          </p>

          <motion.p
            layout
            className='w-full leading-6 z-10'
            style={{
              fontSize: `clamp(${calcClamp(12, 16)})`,
              lineHeight: `clamp(${calcClamp(12 * 1.3, 16 * 1.3)})`,
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
            className={`flex flex-col gap-2 list-disc list-inside w-fit z-10`}
          >
            {data.list.map((item, index) => (
              <li
                key={index}
                style={{
                  fontSize: `clamp(${calcClamp(12, 28)})`,
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
          className='absolute object-contain -bottom-5 right-0 max-1280:opacity-75'
          style={{
            height: `clamp(${calcClamp(188, 422)})`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default PESTCard;
