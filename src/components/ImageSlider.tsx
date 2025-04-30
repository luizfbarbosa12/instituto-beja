import { useState } from "react";
import * as Icon from "@phosphor-icons/react";
import { AnimatePresence, motion, MotionStyle } from "framer-motion";

interface ImageSliderProps {
  arr: string[];
  translateYMiddleImg: number;
  ImgWidth: number | string;
  ImgHeight: number | string;
  imgStyle?: MotionStyle;
  ButtonStyle?: string;
  className?: string;
}

const ImageSlider = ({
  arr,
  translateYMiddleImg: translateYMiddle,
  ImgWidth,
  ImgHeight,
  imgStyle,
  ButtonStyle,
  className,
}: ImageSliderProps) => {
  const [startIndex, setStartIndex] = useState(arr.length % 2);
  const visibleCount = 11;

  let extendedArr = [...arr];

  while (extendedArr.length < 5) {
    extendedArr = [...extendedArr, ...arr];
  }

  const next = () => {
    setStartIndex((prev) => prev + 1);
  };

  const prev = () => {
    setStartIndex((prev) => prev - 1);
  };

  const mod = (n: number, m: number): number => ((n % m) + m) % m;

  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = mod(startIndex + i, extendedArr.length);
    visibleImages.push(extendedArr[index]);
  }

  return (
    <motion.div
      layout
      className={`${className} flex flex-col w-full pb-1 tablet:flex-center justify-center items-center overflow-hidden `}
      style={{ paddingTop: `${translateYMiddle}px` }}
    >
      <motion.div layout className='flex gap-4 justify-center'>
        <AnimatePresence>
          {visibleImages.map((item, idx) => {
            const isMiddle = idx === Math.floor(visibleCount / 2);

            return (
              <motion.img
                layout
                key={startIndex + idx}
                initial={{ x: isMiddle ? 80 : 0 }}
                animate={{ y: isMiddle ? -translateYMiddle : 0, x: 0 }}
                src={item}
                alt='Rebranding'
                className={`shrink-0 ${!isMiddle && "brightness-75"} object-fill`}
                style={{ width: ImgWidth, height: ImgHeight, ...imgStyle }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>

      <div
        className='flex justify-between'
        style={{ marginTop: `-${translateYMiddle / 1.3}px`, width: ImgWidth }}
      >
        <button
          onClick={prev}
          className={`flex-center size-16 p-3 rounded-full ${ButtonStyle} shrink-0 z-50 hover:opacity-90 transition-opacity cursor-pointer`}
        >
          <Icon.ArrowLeft className='size-full' />
        </button>
        <button
          onClick={next}
          className={`flex-center size-16 p-3 rounded-full ${ButtonStyle} shrink-0 z-50 hover:opacity-90 transition-opacity cursor-pointer`}
        >
          <Icon.ArrowRight className='size-full' />
        </button>
      </div>
    </motion.div>
  );
};

export default ImageSlider;
