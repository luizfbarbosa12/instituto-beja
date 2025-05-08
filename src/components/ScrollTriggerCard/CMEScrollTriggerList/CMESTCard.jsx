import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { calcClamp } from "./../../../data/Utils";
import useMediaQuery from "../../../hooks/useMediaQuery";

const CMESTCard = ({
  cssOverride,
  idx,
  data,
  paddingTop,
  targetProgress,
  range,
  targetScale,
  imgSize,
}) => {
  const container = useRef(null);

  const mdScreen = useMediaQuery("(max-width:900px)");

  const cardScale = useTransform(targetProgress, range, [1, targetScale]);

  return (
    <motion.div
      layout
      ref={container}
      className={`h-200 ${paddingTop} flex-center sticky top-0 w-full`}
    >
      <motion.div
        layout
        className={`flex flex-col relative w-full min-h-183  gap-7 ${cssOverride} shrink-0  `}
        style={{
          scale: cardScale,
          color: data.textColor,
          top: !mdScreen
            ? `calc(0% + ${idx * 3}rem)`
            : `calc(0% + ${idx * 2}rem)`,
        }}
      >
        <div className='flex flex-col gap-4 h-82'>
          <div
            style={{
              paddingLeft: `clamp(${calcClamp(28, 64)})`,
              paddingRight: `clamp(${calcClamp(28, 64)})`,
              paddingTop: `clamp(${calcClamp(28, 48)})`,
              paddingBottom: `clamp(${calcClamp(28, 48)})`,
            }}
            className={`flex flex-col ${data.bgColor} gap-4 px-21 py-13 rounded-[60px] max-950:rounded-4xl max-768:gap-4 max-640:rounded-2xl`}
          >
            <h1
              className={`uppercase ${data.title.color} font-bold`}
              style={{
                fontSize: `clamp(${calcClamp(18, 30)})`,
                lineHeight: `clamp(${calcClamp(16 * 1.3, 30 * 1.3)})`,
              }}
            >
              {data.title.name}
            </h1>

            <div className='flex w-full justify-between max-768:flex-col max-768:gap-10'>
              <div
                className='w-full flex flex-col gap-8'
                style={{
                  fontSize: `clamp(${calcClamp(12, 16)})`,
                  lineHeight: `clamp(${calcClamp(12 * 1.3, 16 * 1.3)})`,
                }}
              >
                {Array.isArray(data.text) ? (
                  data.text.map((item, index) => <p key={index}>{item}</p>)
                ) : (
                  <p>{data.text}</p>
                )}
              </div>

              <div className='flex justify-center items-center w-4/5 max-768:w-full'>
                <img
                  src={data.img}
                  alt='Logo'
                  className={`${imgSize}`}
                  style={{
                    width: `clamp(${calcClamp(141, 166)})`,
                    height: `clamp(${calcClamp(130, 153)})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CMESTCard;
