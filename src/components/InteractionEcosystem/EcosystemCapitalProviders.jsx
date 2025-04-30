import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
const GoldenDot = "/assets/golden-dot.png";
gsap.registerPlugin(useGSAP);
export function EcosystemCapitalProviders() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
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
          end: "bottom 100%",
          scrub: true,
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
          start: "10% 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".text-2", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "10% 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".dot-3", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "40% 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".text-3", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "40% 50%",
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
      id='capital-providers'
      ref={container}
      className='animation-container-capital h-[2000px] mx-auto max-w-desktop relative flex flex-col gap-14'
    >
      <div className='sticky top-20 mb-64 w-full'>
        <div className='relative flex flex-col items-start gap-4 w-fit'>
          <h3 className='ml-[175px] font-serif text-bourdeaux text-5xl'>
            Provedores de capital
          </h3>
          <span className='bg-bourdeaux h-8 w-full' />
        </div>

        <div className='px-12 desktop:px-[194px] mt-[87px] mb-50'>
          <div className='relative flex'>
            <svg
              className='w-full max-w-[80%] relative top-20 left-0'
              viewBox='0 0 832 279'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid meet'
            >
              <path
                className='timeline-path'
                d='M56 24L233 200L710 60L820 260'
                stroke='#1E0301'
                strokeWidth='3'
              />

              <image
                href={GoldenDot}
                className='dot-1 dot-container'
                x='50'
                y='17'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-2 dot-container'
                x='221'
                y='184'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-3 dot-container'
                x='695'
                y='47'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-4 dot-container'
                x='798'
                y='235'
                width='28'
                height='28'
              />
            </svg>

            {/* Textos */}
            <div className='text-item text-1 absolute top-[0%] left-[0%] max-w-[396px]'>
              <h2 className='text-3xl leading-relaxed font-serif text-[#1a0505]'>
                Filantropos nacionais e internacionais
              </h2>
            </div>

            <div className='text-item text-2 absolute top-[100%] left-[15%] max-w-[351px]'>
              <h2 className='text-3xl leading-relaxed font-serif text-[#1a0505]'>
                Potenciais filantropos
              </h2>
            </div>

            <div className='text-item text-3 absolute top-[20%] right-[20%] max-w-[400px]'>
              <h2 className='text-3xl leading-relaxed font-serif text-[#1a0505]'>
                Empresários e investidores
              </h2>
            </div>

            <div className='text-item text-4 absolute top-[125%] right-[0%] max-w-[468px]'>
              <h2 className='text-3xl leading-relaxed font-serif text-[#1a0505]'>
                Fundações, Institutos e organizações provedoras de capital
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
