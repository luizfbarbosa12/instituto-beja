import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Images } from "../assets/Index";
import { calcClamp } from "../data/Utils";

const AnimatedLetter = ({ text }) => {
  const letterContainerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".letter",
        {
          opacity: 0.7,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: letterContainerRef.current,
            start: "0px 50%",
            end: "0px 20%",
            scrub: 2,
          },
        },
      );

      gsap.fromTo(
        ".content",
        {
          paddingLeft: "32px",
          paddingRight: "32px",
        },
        {
          paddingLeft: "0px",
          paddingRight: "0px",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".letter",
            start: "top 30%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".letter-bg",
        {
          height: "500px",
          transformOrigin: "top",
        },
        {
          height: "100%",
          scrollTrigger: {
            trigger: ".letter",
            start: "top 30%",
            end: "top 0%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".bike-mobile",
        {
          y: 300,
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: ".letter",
            start: "top 30%",
            end: "top 0%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".letter-text p",
        {
          transformOrigin: "top",
          opacity: 0,
          y: "100%",
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".letter",
            start: "top 30%",
            end: "top 0%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".beja-logo",
        {
          bottom: "78%",
          rotate: "-90deg",
        },
        {
          bottom: "2.5rem",
          rotate: "270deg",
          scrollTrigger: {
            trigger: ".letter",
            start: "top 30%",
            end: "top 0%",
            scrub: 2,
          },
        },
      );
    },
    {
      scope: letterContainerRef,
    },
  );

  return (
    <div
      ref={letterContainerRef}
      className='relative flex-center overflow-clip min-h-screen bg-retro-ochre w-full py-10 editorial'
    >
      <div className='letter overflow-hidden h-auto flex flex-col gap-8 z-2 relative w-[1080px] px-12 pb-25 max-640:px-5'>
        <div className='-z-1 inset-0 bg-porcelain absolute letter-bg rounded-3xl'></div>

        <div className='flex w-full justify-between items-center py-10'>
          <img
            style={{
              width: `clamp(${calcClamp(48, 107)})`,
              height: `clamp(${calcClamp(29, 58)})`,
            }}
            src={Images.Logos.BejaLabsLogo}
          />

          <p style={{ fontSize: `clamp(${calcClamp(12, 28)})` }}>
            (O) <br /> Desde 2021
          </p>
        </div>

        <div className='letter-text text-sm leading-[160%] flex flex-col gap-8  w-[70%] max-768:w-full'>
          {text.map((item, index) => (
            <p
              style={{
                fontSize: `clamp(${calcClamp(14, 30)})`,
                lineHeight: `clamp(${calcClamp(14 * 1.3, 32 * 1.3)})`,
              }}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>

        <img
          src={"/assets/logo-desenho-beja.svg"}
          alt='Logo da Beja'
          style={{
            width: `clamp(${calcClamp(43, 146)})`,
            height: `clamp(${calcClamp(43, 146)})`,
          }}
          className='beja-logo absolute bottom-10 right-8 '
        />
      </div>
    </div>
  );
};

export default AnimatedLetter;
