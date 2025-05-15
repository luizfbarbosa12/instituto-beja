import { useRef, useState, useLayoutEffect } from "react";
import { CardWithImageAndDescription } from "./CardWithImageAndDescription";
import { motion, useScroll, useTransform } from "framer-motion";
import { Trans } from "react-i18next";

export function HorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"], // Ajustado para iniciar no centro
  });

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setMaxX(totalWidth - viewportWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const translatedX = useTransform(
    scrollYProgress,
    [0, 1], // de 0 a 1 agora com a nova faixa de offset
    [0, -maxX - 400],
    { clamp: true },
  );

  return (
    <div ref={targetRef} className='py-12 h-[200vh] w-full'>
      <div className='sticky top-1/3 flex items-center overflow-hidden'>
        <motion.div
          ref={carouselRef}
          style={{ x: translatedX }}
          className='flex flex-row gap-6 px-4'
        >
          <CardWithImageAndDescription
            title='POSITIVE VENTURES'
            imageSrc='/assets/positive-ventures.svg'
            imageAlt='Positive Ventures Logo'
          >
            <p className='text-sm md:text-base'>
              <Trans i18nKey='finalSection.card1' />
            </p>
          </CardWithImageAndDescription>

          <CardWithImageAndDescription
            title='YUNUS NEGÓCIOS SOCIAIS BRASIL'
            imageSrc='/assets/yunus-logo.svg'
            imageAlt='Yunus Negócios Sociais Brasil Logo'
          >
            <p className='text-sm md:text-base'>
              <Trans i18nKey='finalSection.card2' />
            </p>
          </CardWithImageAndDescription>

          <CardWithImageAndDescription
            title='ZUNNE'
            imageSrc='/assets/zunne-logo.svg'
            imageAlt='Zunne Logo'
          >
            <p className='text-sm md:text-base'>
              <Trans i18nKey='finalSection.card3' />
            </p>
          </CardWithImageAndDescription>
        </motion.div>
      </div>
    </div>
  );
}
