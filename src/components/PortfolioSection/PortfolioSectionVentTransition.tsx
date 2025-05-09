import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";

const BejaLogo = "/assets/LOGO-16.png";
const SeedingGold = "/assets/seeding-gold.png";

export function PortfolioSectionVentTransition() {
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
    <div className='flex flex-col overflow-hidden relative' ref={container}>
      <div className='ball rounded-t-[100vw] absolute w-full h-full bg-retro-ochre'></div>
      <div className='vent-container min-h-screen z-1 relative mt-80'>
        <img
          src={BejaLogo}
          alt='Logo da Beja'
          className='absolute h-[158px] left-0 top-0'
        />
        <div className='seeding w-full flex justify-center absolute -bottom-2 -translate-x-1/2'>
          <img src={SeedingGold} alt='Muda dourada' />
        </div>
        <TextAnimate className='absolute top-1/2 left-1/2 w-full flex justify-center -translate-x-1/2 -translate-y-1/2 font-serif text-white lg:text-8xl text-6xl desktop:text-9xl leading-[160%]'>
          Beja Labs / Laboratórios
        </TextAnimate>
      </div>
    </div>
  );
}
