import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LineCME = ({ style }: { style: string }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className='relative -left-10'>
      <svg
        width='915'
        height='250'
        viewBox='0 0 915 250'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={style}
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

export default LineCME;
