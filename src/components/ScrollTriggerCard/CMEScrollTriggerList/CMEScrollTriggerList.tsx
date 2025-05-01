import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import CMESTCard from "./CMESTCard";

type CMEScrollTriggerListProps = {
  arr: any[];
  title?: string;
  paddingTop: string;
  imgSize: string;
};
const CMEScrollTriggerList = ({
  arr,
  title,
  paddingTop,
  imgSize,
}: CMEScrollTriggerListProps) => {
  const container = useRef(null);
  const mapContainer = useRef(null);

  const MapIsInView = useInView(mapContainer, {
    once: false,
  });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const cardMap = arr.map((item, index) => {
    const targetScale = 1 - (arr.length - index) * 0.07;

    return (
      <CMESTCard
        key={index}
        idx={index}
        cssOverride={item}
        range={[index * (1 / arr.length), 1]}
        targetScale={targetScale}
        targetProgress={scrollYProgress}
        data={item}
        paddingTop={paddingTop}
        imgSize={imgSize}
      />
    );
  });

  return (
    <div ref={container} className='relative'>
      <div
        className={`${MapIsInView ? "sticky top-0" : "static"} z-10 py-10 transition-all bg-peach w-full duration-300`}
      >
        <h1 className={`text-hot-coral text-5xl font-bold w-200 leading-20`}>
          {title}
        </h1>
      </div>

      <motion.div ref={mapContainer} layout className='flex flex-col'>
        {cardMap}
      </motion.div>
    </div>
  );
};

export default CMEScrollTriggerList;
