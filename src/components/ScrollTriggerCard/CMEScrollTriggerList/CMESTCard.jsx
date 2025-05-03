import { useRef } from "react";
import { motion } from "framer-motion";
import { calcClamp } from "./../../../data/Utils";

const CMESTCard = ({ cssOverride, idx, data, paddingTop, imgSize }) => {
  const container = useRef(null);

  return (
    <motion.div
      layout
      ref={container}
      className={`h-200 ${paddingTop} flex-center sticky top-0 w-full`}
    >
      <motion.div
        layout
        className={`flex flex-col relative w-full min-h-183 rounded-[4rem] gap-7 ${cssOverride} shrink-0`}
        style={{
          top: `calc(-10% + ${idx * 9}rem)`,
          color: data.textColor,
        }}
      >
        <div className='flex flex-col gap-4 h-82'>
          <div
            className={`flex flex-col gap-10 ${data.bgColor} px-21 py-13 rounded-[3.75rem]`}
          >
            <h1
              className={`uppercase ${data.title.color} font-bold`}
              style={{
                fontSize: `clamp(${calcClamp(20, 48)})`,
                lineHeight: `clamp(${calcClamp(20 * 1.5, 48 * 1.5)})`,
              }}
            >
              {data.title.name}
            </h1>

            <div className='flex w-full justify-between items-center gap-20'>
              <div className='w-full flex flex-col gap-8'>
                {Array.isArray(data.text) ? (
                  data.text.map((item, index) => <p key={index}>{item}</p>)
                ) : (
                  <p
                    style={{
                      fontSize: `clamp(${calcClamp(12, 16)})`,
                      lineHeight: `clamp(${calcClamp(12 * 1.5, 16 * 1.5)})`,
                    }}
                  >
                    {data.text}
                  </p>
                )}
              </div>

              <div className='flex justify-center items-center w-full'>
                <img src={data.img} alt='Logo' className={`${imgSize}`} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CMESTCard;
