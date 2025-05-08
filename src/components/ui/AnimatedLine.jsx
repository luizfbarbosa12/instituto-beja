import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedLine = ({ style }) => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className='relative w-full px-32 max-1280:px-16 max-896:px-8 max-640:px-5'
    >
      <svg
        viewBox='0 0 915 250'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`${style} w-full pb-15`}
      >
        <motion.path
          ref={pathRef}
          d='M914 0V93.4271H1V249H146.0'
          stroke='#1E0301'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

export default AnimatedLine;
