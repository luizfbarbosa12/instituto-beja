import PESTCard from "./PESTCard";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";

const PEScrollTriggerList = ({ arr }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const mdScreen = useMediaQuery("(max-width:768px)");

  const cardMap = arr.map((item, index) => {
    const targetScale =
      index === arr.length - 1 ? 1 : 1 - (arr.length - index - 1) * 0.03;

    return (
      <PESTCard
        key={index}
        idx={index}
        cssOverride={item}
        range={[
          (index + (!mdScreen ? 1.6 : 1.9)) / arr.length,
          (index + (!mdScreen ? 1.8 : 2.1)) / arr.length,
        ]}
        targetScale={targetScale}
        targetProgress={scrollYProgress}
        data={item}
      />
    );
  });

  return (
    <motion.div layout ref={container} className='flex flex-col gap-10'>
      {cardMap}
    </motion.div>
  );
};

export default PEScrollTriggerList;
