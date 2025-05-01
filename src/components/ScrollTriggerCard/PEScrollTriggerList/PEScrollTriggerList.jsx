import PESTCard from "./PESTCard";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const PEScrollTriggerList = ({ arr }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const cardMap = arr.map((item, index) => {
    const targetScale = 1 - (arr.length - index) * 0.07;

    return (
      <PESTCard
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

export default PEScrollTriggerList;
