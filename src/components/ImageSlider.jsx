import { useState } from "react";
import * as Icon from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";

const ImageSlider = ({
  arr,
  translateYMiddleImg: translateYMiddle,
  ImgWidth,
  ImgHeight,
}) => {
  const [startIndex, setStartIndex] = useState(arr.length % 2);
  const visibleCount = 11;

  let extendedArr = [...arr];

  while (extendedArr.length < 5) {
    extendedArr = [...extendedArr, ...arr];
  }

  const next = () => {
    setStartIndex((prev) => prev + 1);
    console.log(startIndex);
  };

  const prev = () => {
    console.log(startIndex);
    setStartIndex((prev) => prev - 1);
  };

  const mod = (n, m) => ((n % m) + m) % m;

  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = mod(startIndex + i, extendedArr.length);
    visibleImages.push(extendedArr[index]);
  }

  return (
    <motion.div
      layout
      className={`flex flex-col w-full pb-1 flex-center justify-center items-center overflow-hidden`}
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
                className={`shrink-0 ${!isMiddle && "brightness-75"} object-center object-fill`}
                style={{ width: ImgWidth, height: ImgHeight }}
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
          className='flex-center size-16 p-3 rounded-full bg-bourdeaux shrink-0 text-porcelain z-50'
        >
          <Icon.ArrowLeft className='size-full' />
        </button>
        <button
          onClick={next}
          className='flex-center size-16 p-3 rounded-full bg-bourdeaux shrink-0 text-porcelain z-50'
        >
          <Icon.ArrowRight className='size-full' />
        </button>
      </div>
    </motion.div>
  );
};

export default ImageSlider;
