import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const GoldenDot = "/assets/golden-dot.png";

export function EcosystemCapitalProviders() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set("#capital-providers .dot-container", { opacity: 0, y: -10 });
    gsap.set("#capital-providers .text-item", { opacity: 0, y: 20 });
    const line = document.querySelector(".timeline-path");
    const length = line.getTotalLength();
    gsap.set("#capital-providers .timeline-path", {
      opacity: 1,
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Linhas
    gsap.to("#capital-providers .timeline-path", {
      opacity: 1,
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: ".animation-container-capital",
        start: "top 58%",
        end: "bottom 1200px",
        scrub: true,
      },
    });

    // Criar animações individuais para cada elemento
    // Primeiro ponto e texto
    gsap.to("#capital-providers .dot-1", {
      opacity: 1,
      y: 0,
      ease: "circ.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".animation-container-capital",
        start: "top 560px",
        end: "top 460px",
        scrub: true,
      },
    });

    gsap.to("#capital-providers .text-1", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".animation-container-capital",
        start: "top 560px",
        end: "top 460px",
        scrub: true,
      },
    });

    // Segundo ponto e texto
    gsap.to("#capital-providers .dot-2", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".animation-container-capital",
        start: "top 240px",
        end: "top 140px",
        scrub: true,
      },
    });

    gsap.to("#capital-providers .text-2", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".animation-container-capital",
        start: "top 240px",
        end: "top 140px",
        scrub: true,
      },
    });

    // Terceiro ponto e texto
    gsap.to("#capital-providers .dot-3", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".animation-container-capital",
        start: "top -580px",
        end: "top -680px",
        scrub: true,
      },
    });

    gsap.to("#capital-providers .text-3", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".animation-container-capital",
        start: "top -580px",
        end: "top -680px",
        scrub: true,
      },
    });

    // Quarto ponto e texto
    gsap.to("#capital-providers .dot-4", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".animation-container-capital",
        start: "top -1300px",
        end: "top -1400px",
        scrub: true,
      },
    });

    gsap.to("#capital-providers .text-4", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".animation-container-capital",
        start: "top -1300px",
        end: "top -1400px",
        scrub: true,
      },
    });
  });

  return (
    <div
      id='capital-providers'
      className='animation-container-capital h-[3000px] mx-auto max-w-desktop relative flex flex-col gap-14'
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
