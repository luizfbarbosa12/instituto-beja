import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedHorizontalScroll = ({ map }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const translatedX = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <div ref={targetRef} className=' h-[200vh] w-full'>
      <div className='sticky top-1/3 flex items-center overflow-hidden'>
        <motion.div
          style={{ x: translatedX }}
          className='pl-70 py-10 flex flex-row gap-6 px-4 max-1280:pl-50 max-1080:pl-0'
        >
          {map}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedHorizontalScroll;
