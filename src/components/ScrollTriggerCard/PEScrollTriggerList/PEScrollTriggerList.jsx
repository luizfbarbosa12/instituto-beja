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
    // A escala do card atual deve ser reduzida quando o PRÓXIMO card chegar na metade
    const targetScale =
      index === arr.length - 1 ? 1 : 1 - (arr.length - index - 1) * 0.03; // Ajuste progressivo

    return (
      <PESTCard
        key={index}
        idx={index}
        cssOverride={item}
        range={[
          (index + (!mdScreen ? 1.6 : 1.9)) / arr.length, // Início: quando próximo card entra
          (index + (!mdScreen ? 1.8 : 2.1)) / arr.length, // Fim: quando próximo card está na metade
        ]}
        targetScale={targetScale}
        targetProgress={scrollYProgress}
        data={item}
      />
    );
  });

  return (
    <motion.div layout ref={container}>
      {cardMap}
    </motion.div>
  );
};

export default PEScrollTriggerList;
