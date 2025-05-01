import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
const GoldenDot = "/assets/golden-dot.png";

export function EcosystemIntermediates() {
  const container = useRef(null);

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
      className='intermediates h-[2000px] mx-auto max-w-desktop relative flex flex-col gap-14'
    >
      <div className='sticky top-20 flex flex-col mb-64 w-full'>
        <div className='relative flex flex-col items-end self-end gap-4 w-fit'>
          <h3 className='mr-[175px] font-serif text-bourdeaux text-left text-5xl'>
            Intermediários e Parceiros Estratégicos
          </h3>
          <span className='bg-retro-ochre h-8 w-full' />
        </div>

        <div className='px-12 desktop:px-[194px] mt-[calc(169px+40px)] mb-50'>
          <div className='relative flex flex-col'>
            <svg
              className='w-full max-w-[90%] relative top-0 left-0'
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
            <div className='text-item text-1 absolute -top-14 lg:-top-20 -left-[2%] max-w-[160px] lg:max-w-[272px]'>
              <h2 className='text-xl lg:text-3xl leading-relaxed font-serif text-retro-ochre'>
                Associações e redes de filantropia
              </h2>
            </div>

            <div className='text-item text-2 absolute -bottom-10 lg:-bottom-10 left-[15%] max-w-[351px]'>
              <h2 className='text-xl lg:text-3xl leading-relaxed font-serif text-retro-ochre'>
                Articuladores do setor
              </h2>
            </div>

            <div className='text-item text-3 absolute -top-14 lg:-top-20 right-3/10 lg:right-[15%] max-w-[180px] lg:max-w-[400px]'>
              <h2 className='text-xl lg:text-3xl leading-relaxed font-serif text-retro-ochre'>
                Influenciadores e meios de comunicação
              </h2>
            </div>

            <div className='text-item text-4 absolute -bottom-10 right-[0%] max-w-[468px]'>
              <h2 className='text-xl lg:text-3xl leading-relaxed font-serif text-retro-ochre'>
                Poder Público
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
