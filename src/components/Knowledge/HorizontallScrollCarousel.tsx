import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";

export function KnowledgeSectionHorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 50%", "end 50%"],
  });

  const translatedX = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  const { t } = useTranslation();

  const phaseList = t("knowledge.extra.phases", {
    returnObjects: true,
  });

  return (
    <div ref={targetRef} className='py-12 h-[220vh] w-full'>
      <div className='sticky top-20 tablet:top-20 flex items-start overflow-hidden'>
        <motion.div
          style={{ x: translatedX }}
          className='pl-70 flex flex-row gap-6 px-4'
        >
          {phaseList.map((fase, index) => (
            <div
              key={index}
              className='top-0 bg-transparent border border-gray-300 rounded-3xl w-[320px] tablet:w-[630px] p-4 tablet:p-16 shadow-sm flex-shrink-0'
            >
              <h3 className='text-base leading-relaxed tablet:text-3xl font-serif mb-4'>
                <span dangerouslySetInnerHTML={{ __html: fase.title }} />
              </h3>
              <p className='text-xs leading-relaxed tablet:text-base text-bourdeaux'>
                {fase.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
