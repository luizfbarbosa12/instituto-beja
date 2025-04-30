import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const GoldenDot = "/assets/golden-dot.png";
gsap.registerPlugin(useGSAP);
export function EcosystemEndSection() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(".dot-container", { opacity: 0, y: 10 });
      gsap.set(".dot-container-reverse", { opacity: 0, y: -10 });
      const line1 = document.querySelector(".path-1");
      const length1 = line1.getTotalLength();
      gsap.set(".path-1", {
        opacity: 1,
        strokeDasharray: length1,
        strokeDashoffset: length1,
      });
      const line2 = document.querySelector(".path-2");
      const length2 = line2.getTotalLength();
      gsap.set(".path-2", {
        opacity: 1,
        strokeDasharray: length2,
        strokeDashoffset: length2,
      });
      const line3 = document.querySelector(".path-3");
      const length3 = line3.getTotalLength();
      gsap.set(".path-3", {
        opacity: 1,
        strokeDasharray: length3,
        strokeDashoffset: length3,
      });

      gsap.to(".path-1", {
        opacity: 1,
        strokeDashoffset: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-1-1", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-1-2", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-1-3", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.9,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-1-4", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 1.4,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".path-2", {
        opacity: 1,
        strokeDashoffset: 0,
        duration: 1.5,
        delay: 1.3,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-2-1", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-2-2", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 1.3,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-2-3", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 1.7,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-2-4", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 2.1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".path-3", {
        opacity: 1,
        strokeDashoffset: 0,
        duration: 1.5,
        delay: 2.8,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-3-1", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 2.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-3-2", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 2.8,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-3-3", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 3.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".dot-3-4", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 3.8,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <div
      id='end-section'
      ref={container}
      className='end-section mx-auto max-w-desktop relative flex flex-col gap-14'
    >
      <div className='sticky top-1/3 flex flex-col w-full'>
        <div className='px-12 desktop:px-[194px] mb-50'>
          <div className='relative flex flex-col'>
            <svg
              className='w-full relative top-0 left-0'
              viewBox='0 0 1097 279'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid meet'
            >
              <path
                className='timeline-path path-1'
                d='M120 10L347 200L824 60L938 270'
                stroke='#1E0301'
                strokeWidth='3'
              />

              <image
                href={GoldenDot}
                className='dot-1-1 dot-container'
                x='110'
                y='0'
                width='28'
                height='28'
              />

              <image
                href={GoldenDot}
                className='dot-1-2 dot-container'
                x='333'
                y='185'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-1-3 dot-container'
                x='809'
                y='47'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-1-4 dot-container-reverse'
                x='920'
                y='250'
                width='28'
                height='28'
              />
              <path
                className='timeline-path path-2'
                d='M2 139H1097'
                stroke='#9D7D4C'
                strokeWidth='3'
              />

              <image
                href={GoldenDot}
                className='dot-2-1 dot-container'
                x='0'
                y='125'
                width='28'
                height='28'
              />

              <image
                href={GoldenDot}
                className='dot-2-2 dot-container'
                x='360'
                y='125'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-2-3 dot-container'
                x='700'
                y='125'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-2-4 dot-container'
                x='1069'
                y='125'
                width='28'
                height='28'
              />
              <path
                className='timeline-path path-3'
                d='M45.5 114.338C102 46.3376 254.9 -55.2624 414.5 82.3376C574.1 219.938 615.5 241.838 706 214.338C810.5 163.838 944 24.8379 1041 84.8379'
                stroke='#D594B6'
                strokeWidth='3'
              />

              <image
                href={GoldenDot}
                className='dot-3-1 dot-container'
                x='41'
                y='92'
                width='28'
                height='28'
              />

              <image
                href={GoldenDot}
                className='dot-3-2 dot-container'
                x='320'
                y='19'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-3-3 dot-container'
                x='687'
                y='198'
                width='28'
                height='28'
              />
              <image
                href={GoldenDot}
                className='dot-3-4 dot-container'
                x='1020'
                y='68'
                width='28'
                height='28'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
