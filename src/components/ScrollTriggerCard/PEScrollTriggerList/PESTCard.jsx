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
      className='h-screen flex-center py-20 sticky top-0 w-full'
    >
      <motion.div
        layout
        className={`flex flex-col relative w-full h-190 rounded-[4rem] p-22.5 gap-6.5 ${cssOverride}`}
        style={{
          top: `calc(-10% + ${idx * 4}rem)`,
          scale: cardScale,
          backgroundColor: data.bgColor,
          color: data.textColor,
        }}
      >
        <h1 className='editorial text-6xl'>{data.title}</h1>

        <motion.div layout className='flex w-full gap-8'>
          <p className='editorial text-3xl w-full leading-12'>
            {data.subtitle}
          </p>
          <motion.p layout className='text-base w-full leading-6 z-10'>
            {data.text}
          </motion.p>
        </motion.div>

        <div className='flex flex-col gap-7 w-full editorial'>
          <div
            className='h-0.5 w-1/3 z-10'
            style={{ backgroundColor: data.lineColor }}
          />

          <ul
            className={`flex flex-col gap-7 text-2xl list-disc list-inside marker:text-4xl w-fit z-10`}
            style={{ "--tw-marker-color": data.lineColor }}
          >
            {data.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <img
          src={data.img}
          alt='Imagem de uma mão'
          className='absolute bottom-0 right-40  w-fit h-[24rem]'
        />
      </motion.div>
    </motion.div>
  );
};

export default PESTCard;
