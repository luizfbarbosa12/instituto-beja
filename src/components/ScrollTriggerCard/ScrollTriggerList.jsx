import STCard from "./STCard";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollTriggerList = ({ arr }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const cardMap = arr.map((item, index) => {
    const targetScale = 1 - (arr.length - index) * 0.07;

    return (
      <STCard
        key={index}
        idx={index}
        cssOverride={item}
        range={[index * (1 / arr.length), 1]}
        targetScale={targetScale}
        targetProgress={scrollYProgress}
        data={item}
      />
    );
  });

  return (
    <motion.div layout ref={container} className=''>
      {cardMap}
    </motion.div>
  );
};

export default ScrollTriggerList;
