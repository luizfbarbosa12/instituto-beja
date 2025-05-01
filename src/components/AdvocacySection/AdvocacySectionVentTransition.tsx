import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import LogoFirstSection from "../LogoFirstSection";

const ProudHand = "/assets/Ilustracao-4.png";

export function AdvocacySectionVentTransition() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".seeding", {
        x: "50%",
        y: "100%",
      });

      gsap.to(".ball", {
        transformOrigin: "center top",
        scale: 2,
        scrollTrigger: {
          trigger: ".ball",
          start: "top 50%",
          end: "top 0%",
          scrub: 1,
        },
      });

      gsap.to(".seeding", {
        y: -10,
        scrollTrigger: {
          trigger: ".vent-container",
          start: "50% 80%",
          end: "top 50%",
          scrub: 4,
        },
      });
    },
    { scope: container },
  );

  return (
    <div
      className='flex w-full flex-col overflow-hidden relative bg-retro-ochre'
      ref={container}
    >
      <div className='ball rounded-t-[100vw] absolute w-full h-full bg-bourdeaux'></div>

      <div className='vent-container z-1 relative mt-80'>
        <div className='flex flex-col gap-30 relative justify-center w-full'>
          <div className='w-full pl-14 pt-25 max-768:pl-5 max-768:pt-15'>
            <LogoFirstSection
              className='fill-porcelain w-66 h-21
                        max-1280:w-[264px] max-1280:h-[84px]
                        max-1024:w-[231px] max-1024:h-[73px]
                        max-768:w-[198px] max-768:h-[63px]
                        max-640:w-[132px] max-640:h-[42px]
                        max-460:w-[99px] max-460:h-[32px]
            '
            />
          </div>

          <div className='flex justify-center w-full relative h-280 max-1160:h-180 max-950:h-150 max-460:h-80'>
            <h1
              className='editorial text-porcelain text-9xl leading-normal z-10 pr-80
                          max-1280:text-8xl
                          max-1024:text-7xl
                          max-768:text-6xl max-768:pr-30
                          max-640:text-4xl
                          max-460:text-3xl'
            >
              Advocacy
            </h1>

            <img
              src={ProudHand}
              className='absolute -right-30 bottom-0 max-1366:-right-40 max-1160:w-[50%] max-1160:right-0'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
