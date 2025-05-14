import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
const GoldenDot = "/assets/golden-dot.png";

export function EcosystemIntermediates() {
  const container = useRef(null);
  const [t] = useTranslation();

  useGSAP(
    () => {
      gsap.set(".dot-container", { opacity: 0, y: -10 });
      gsap.set(".text-item", { opacity: 0, y: 20 });
      const line = container.current.querySelector(".timeline-path");
      const length = line.getTotalLength();
      gsap.set(".timeline-path", {
        opacity: 1,
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(".timeline-path", {
        opacity: 1,
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      gsap.to(".dot-1", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".text-1", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".dot-2", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "13% 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".text-2", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "13% 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".dot-3", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "35% 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".text-3", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "35% 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".dot-4", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "65% 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".text-4", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "65% 50%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container },
  );

  return (
    <div
      id='intermediates'
      ref={container}
      className='animation-container-capital h-250 tablet:h-[2000px] mx-auto max-w-desktop relative flex flex-col gap-14'
    >
      <div className='sticky top-1/3 tablet:top-20 mb-16 tablet:mb-64 w-full overflow-x-hidden flex flex-col'>
        <div className='relative flex flex-col items-end  self-end gap-4 tablet:w-fit w-3/4'>
          <h3 className='tablet:mr-[175px] font-serif text-bourdeaux text-left text-xl self-start leading-none tablet:text-5xl not-tablet:max-w-49'>
            {t("interactionEcosystem.intermediates.title")}
          </h3>
          <span className='bg-retro-ochre h-4 tablet:h-8 w-full' />
        </div>

        <div className='max-w-9/10 desktop:px-[194px] mt-20 tablet:mt-50 mb-25 tablet:mb-50'>
          <div className='relative flex mx-12'>
            <svg
              className='w-full relative top-0 left-0'
              viewBox='0 0 750 60'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid meet'
            >
              <path
                d='M10 35H750'
                className='timeline-path'
                stroke='#9D7D4C'
                strokeWidth='3'
              />

              <image
                href={GoldenDot}
                className='dot-1 dot-container'
                x='0'
                y='20'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-2 dot-container'
                x='250'
                y='20'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-3 dot-container'
                x='500'
                y='20'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-4 dot-container'
                x='722'
                y='20'
                width='28'
                height='28'
              />
            </svg>

            {/* Textos */}
            <div className='text-item text-1 absolute top-2 tablet:top-0 -left-[2%] w-full max-w-4/10 tablet:max-w-7/20'>
              <h2 className='ts-10/32 tablet:text-3xl -translate-y-1/1 leading-relaxed font-serif text-retro-ochre'>
                {t("interactionEcosystem.intermediates.texts.0")}
              </h2>
            </div>

            <div className='text-item text-2 absolute -bottom-4 tablet:-bottom-14 left-4/20 w-full max-w-4/10 tablet:max-w-5/10'>
              <h2 className='ts-10/32 tablet:text-3xl leading-relaxed font-serif text-retro-ochre'>
                {t("interactionEcosystem.intermediates.texts.1")}
              </h2>
            </div>

            <div className='text-item text-3 absolute top-2 tablet:-top-0 left-6/10 tablet:left-5/10 max-w-3/10 tablet:max-w-12/30'>
              <h2 className='ts-10/32 tablet:text-3xl -translate-y-1/1 leading-relaxed font-serif text-retro-ochre'>
                {t("interactionEcosystem.intermediates.texts.2")}
              </h2>
            </div>

            <div className='text-item text-4 absolute -bottom-4 tablet:-bottom-14 left-20/30 tablet:23/30 w-full max-w-3/10 tablet:max-w-4/10'>
              <h2 className='ts-10/32 tablet:text-3xl translate-x-1/2 leading-relaxed font-serif text-retro-ochre'>
                {t("interactionEcosystem.intermediates.texts.3")}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
