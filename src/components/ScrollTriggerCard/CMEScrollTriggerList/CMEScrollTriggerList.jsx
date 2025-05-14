import { useRef } from "react";
import CMESTCard from "./CMESTCard";
import { motion, useInView, useScroll } from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { calcClamp } from "../../../data/Utils";

const CMEScrollTriggerList = ({ arr, title, paddingTop }) => {
  const container = useRef(null);
  const mapContainer = useRef(null);

  const mdScreen = useMediaQuery("(max-width:768px)");

  const MapIsInView = useInView(mapContainer, {
    once: false,
  });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const cardMap = arr.map((item, index) => {
    const targetScale =
      index === arr.length - 1 ? 1 : 1 - (arr.length - index - 1) * 0.03;

    return (
      <CMESTCard
        key={index}
        idx={index}
        cssOverride={item}
        range={[
          (index + (!mdScreen ? 1.7 : 1.7)) / arr.length,
          (index + (!mdScreen ? 1.8 : 1.9)) / arr.length,
        ]}
        targetScale={targetScale}
        targetProgress={scrollYProgress}
        data={item}
        paddingTop={paddingTop}
      />
    );
  });

  return (
    <div ref={container} className='relative'>
      {title && (
        <div
          className={`${MapIsInView ? "sticky top-0" : "static"} z-10 py-5 transition-all bg-peach w-full duration-300`}
        >
          <h1
            style={{ fontSize: `clamp(${calcClamp(24, 48)})` }}
            className={`text-hot-coral font-bold w-full`}
          >
            {title}
          </h1>
        </div>
      )}

      <motion.div ref={mapContainer} layout className='flex flex-col'>
        {cardMap}
      </motion.div>
    </div>
  );
};

export default CMEScrollTriggerList;
