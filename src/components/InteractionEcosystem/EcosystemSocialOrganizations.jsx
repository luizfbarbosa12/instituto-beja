import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

export function EcosystemSocialOrganizations() {
  const GoldenDot = "/assets/golden-dot.png";
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
          start: "37% 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".text-3", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "37% 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".dot-4", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "70% 50%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".text-4", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "70% 50%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container },
  );

  return (
    <div
      id='social-organizations'
      ref={container}
      className='social-organizations h-[3000px] mx-auto max-w-desktop relative flex flex-col gap-14'
    >
      <div className='sticky top-20 flex flex-col mb-64 w-full'>
        <div className='relative flex flex-col items-start self-start gap-4 w-fit'>
          <h3 className='ml-[175px] font-serif text-bourdeaux text-left text-5xl'>
            Organizações Sociais
          </h3>
          <span className='bg-rose h-8 w-full' />
        </div>

        <div className='px-12 desktop:px-[194px] mt-[calc(169px+40px)] mb-50 max-w-9/10'>
          <div className='relative flex flex-col'>
            <svg
              className='w-full max-w-9/10 relative top-0 left-0'
              viewBox='0 0 998 214'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid meet'
            >
              <path
                className='timeline-path'
                d='M3.4 100.002C58 34.0017 210.9 -67.5983 370.5 70.0017C530.1 207.602 571.5 229.502 662 202.002C766.5 151.502 900 12.502 997 72.502'
                stroke='#D594B6'
                strokeWidth='3'
              />

              <image
                href={GoldenDot}
                className='dot-1 dot-container'
                x='0'
                y='78'
                width='28'
                height='28'
              />

              <image
                href={GoldenDot}
                className='dot-2 dot-container'
                x='300'
                y='16'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-3 dot-container'
                x='660'
                y='182'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-4 dot-container'
                x='970'
                y='53'
                width='28'
                height='28'
              />
            </svg>

            {/* Textos */}
            <div className='text-item text-1 absolute top-2/4 -left-[2%] max-w-[160px] lg:max-w-[272px]'>
              <h2 className='text-xl lg:text-3xl leading-relaxed font-serif text-rose'>
                Associações e redes de filantropia
              </h2>
            </div>

            <div className='text-item text-2 absolute -top-1/3 left-1/5 max-w-[479px]'>
              <h2 className='text-xl lg:text-3xl leading-relaxed font-serif text-rose'>
                Inovadores e empreendedores sociais
              </h2>
            </div>

            <div className='text-item text-3 absolute top-10/9 right-2/10 max-w-[180px] lg:max-w-[400px]'>
              <h2 className='text-xl lg:text-3xl leading-relaxed font-serif text-rose'>
                Negócios de impacto
              </h2>
            </div>

            <div className='text-item text-4 absolute top-1/2 left-8/10 max-w-[208px]'>
              <h2 className='text-xl lg:text-3xl leading-relaxed font-serif text-rose'>
                Organizações sociais de base
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
