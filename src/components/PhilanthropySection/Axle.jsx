import { useRef } from "react";
import { calcClamp } from "../../data/Utils";
import PhilanthropyCard from "./PhilanthropyCard";
import { motion, useScroll, useTransform } from "framer-motion";

const Axle = ({ axle, title, subtitle, cards, text, link }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const heightAnimation = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0%", "100%"],
  );

  return (
    <div
      ref={targetRef}
      className='relative flex flex-col'
      style={{ gap: `clamp(${calcClamp(16, 64)})` }}
    >
      <div className='flex flex-col'>
        <h2
          style={{ fontSize: `clamp(${calcClamp(24, 36)})` }}
          className='editorial'
        >
          {axle}
        </h2>
        <div
          className='w-70 h-7'
          style={{
            backgroundImage: "url('/assets/GoldenBG.png')",
            width: `clamp(${calcClamp(120, 295)})`,
            height: `clamp(${calcClamp(12, 29)})`,
          }}
        ></div>
      </div>

      <div className='flex justify-end'>
        <div
          className='flex flex-col w-[58rem]'
          style={{ gap: `clamp(${calcClamp(22, 48)})` }}
        >
          <div
            className='flex flex-col relative'
            style={{ gap: `clamp(${calcClamp(22, 48)})` }}
          >
            <motion.div
              style={{ height: heightAnimation }}
              className='absolute -left-3 top-0 w-[1px] bg-bourdeaux rounded origin-top'
            >
              <div className='absolute -left-[3px] bottom-0 size-2 rounded-full bg-bourdeaux' />
            </motion.div>

            <h1
              style={{ fontSize: `clamp(${calcClamp(16, 36)})` }}
              className='editorial'
            >
              {title}
            </h1>
            <p
              style={{ fontSize: `clamp(${calcClamp(14, 24)})` }}
              className='editorial'
            >
              {subtitle}
            </p>
          </div>

          <div
            className='flex max-768:flex-col'
            style={{ gap: `clamp(${calcClamp(22, 48)})` }}
          >
            <div
              className='flex min-768:flex-col max-768:justify-between max-768:w-full max-768:flex-col'
              style={{ gap: `clamp(${calcClamp(12, 24)})` }}
            >
              {cards.map((item, index) => (
                <PhilanthropyCard
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  bgColor={item.bgColor}
                  starColor={item.starColor}
                  text={item.text}
                  link={link}
                />
              ))}
            </div>

            <div
              className='flex flex-col'
              style={{
                gap: `clamp(${calcClamp(16, 32)})`,
                fontSize: `clamp(${calcClamp(12, 16)})`,
              }}
            >
              {text.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Axle;
