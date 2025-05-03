import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { calcClamp } from "./../../data/Utils";

const logo_beja_completo = "/assets/logo-beja-completo-svg.svg";
const nuvens = "/assets/ilustracao-6-2.png";

export function KnowledgeSectionVentTransition() {
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
    },
    { scope: container },
  );

  return (
    <div
      className='flex flex-col w-full overflow-hidden relative'
      ref={container}
    >
      <div className='ball rounded-t-[100vw] absolute w-full h-full bg-rose'></div>
      <div className='vent-container min-h-screen z-1 relative mt-80 justify-center items-center flex'>
        <img
          src={logo_beja_completo}
          alt='logo da beja no topo esquerdo'
          className='h-15 absolute top-20 left-20'
        />
        <h1
          style={{ fontSize: `clamp(${calcClamp(36, 128)})` }}
          className='editorial relative z-2'
        >
          Conhecimento
        </h1>
        <img
          src={nuvens}
          alt='nuvens douradas no fundo'
          className='absolute -bottom-1/10  w-full'
        />
      </div>
    </div>
  );
}
