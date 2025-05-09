import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedLine = ({ style, className }) => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 50%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <svg
      ref={containerRef}
      viewBox='0 0 915 250'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${style} ${className} not-tablet:hidden w-full self-end -translate-x-1/6`}
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
  );
};

export default AnimatedLine;
