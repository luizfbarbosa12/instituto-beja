import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
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

      <div className='vent-container min-h-screen z-1 relative mt-80'>
        <div className='flex justify-end relative w-full text-porcelain pb-45 pl-32'>
          <LogoFirstSection
            style={"fill-porcelain w-65 h-21 relative top-20 left-0"}
          />

          <h1 className='flex items-center text-9xl editorial h-screen'>
            Advocacy
          </h1>

          <img
            src={ProudHand}
            alt=''
            className='relative w-170 h-270 -bottom-46'
          />
        </div>
      </div>
    </div>
  );
}
