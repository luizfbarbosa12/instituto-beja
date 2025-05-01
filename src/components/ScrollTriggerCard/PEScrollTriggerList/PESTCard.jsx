import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { calcClamp } from "./../../../data/Utils";
import useMediaQuery from "./../../../hooks/useMediaQuery";

const PESTCard = ({
  cssOverride,
  idx,
  range,
  targetScale,
  targetProgress,
  data,
}) => {
  const container = useRef(null);

  // const cardScale = useTransform(targetProgress, range, [1, targetScale]);

  const mdScreen = useMediaQuery("(max-width:1081px)");

  return (
    <motion.div
      layout
      ref={container}
      className='h-screen flex-center pt-55 sticky top-0 w-full'
    >
      <motion.div
        layout
        className={`flex flex-col relative w-full h-244 rounded-[4rem] p-22.5 gap-6.5 ${cssOverride} max-1080:p-5 max-1080:pt-10 max-1080:rounded-3xl`}
        style={{
          top: !mdScreen
            ? `calc(-10% + ${idx * 12}rem)`
            : `calc(-10% + ${idx * 7}rem)`,
          backgroundColor: data.bgColor,
          color: data.textColor,
        }}
      >
        <h1
          className='editorial'
          style={{ fontSize: `clamp(${calcClamp(28, 64)})` }}
        >
          {data.title}
        </h1>

        <motion.div
          layout
          className='flex w-full gap-20 max-1080:flex-col max-1080:gap-5'
        >
          <p
            className='editorial w-full leading-12 max-768:leading-8'
            style={{ fontSize: `clamp(${calcClamp(18, 32)})` }}
          >
            {data.subtitle}
          </p>

          <motion.p
            layout
            className='w-full leading-6 z-10'
            style={{ fontSize: `clamp(${calcClamp(12, 18)})` }}
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
            className={`flex flex-col gap-7 text-2xl list-disc list-inside marker:text-4xl w-fit z-10 max-1080:gap-3`}
          >
            {data.list.map((item, index) => (
              <li
                key={index}
                style={{ fontSize: `clamp(${calcClamp(12, 32)})` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={data.img}
          alt='Imagem de uma mão'
          className='absolute bottom-0 right-0  w-fit h-[24rem] max-1080:brightness-50'
        />
      </motion.div>
    </motion.div>
  );
};

export default PESTCard;
