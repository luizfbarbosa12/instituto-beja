import { useRef } from "react";
import { motion } from "framer-motion";
import { Divide } from "lucide-react";

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
        className={`flex flex-col relative w-full h-190 rounded-[4rem] py-22.5 gap-6.5 ${cssOverride}`}
        style={{
          top: `calc(-10% + ${idx * 6.5}rem)`,
          color: data.textColor,
        }}
      >
        <div className='flex flex-col gap-4 h-82'>
          <div
            className={`flex flex-col gap-5 ${data.bgColor} px-21 py-13 rounded-[3.75rem]`}
          >
            <h1 className={`uppercase text-3xl ${data.title.color} font-bold`}>
              {data.title.name}
            </h1>

            <div className='flex w-full justify-between items-center'>
              <div className='w-150 flex flex-col gap-3'>
                {Array.isArray(data.text) ? (
                  data.text.map((item, index) => (
                    <Divide key={index}>{item}</Divide>
                  ))
                ) : (
                  <div>{data.text}</div>
                )}
              </div>

              <img src={data.img} alt='Logo' className={`${imgSize}`} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CMESTCard;
