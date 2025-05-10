import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { calcClamp } from "../../data/Utils";
import { Images } from "./../../assets/Index";

const AnimatedLetter = ({ text }) => {
  const letterContainerRef = useRef(null);

  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia(letterContainerRef);

      matchMedia.add("screen and (max-width: 900px)", () => {
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
              start: "0px 90%",
              end: "0px 20%",
              scrub: 2,
            },
          },
        );

        gsap.fromTo(
          ".letter",
          {
            scale: 0.9,
            transformOrigin: "center top",
          },
          {
            scale: 1,
            scrollTrigger: {
              trigger: ".letter",
              start: "top 90%",
              end: "top 0%",
              scrub: 2,
            },
          },
        );

        gsap.fromTo(
          ".letter-bg",
          {
            height: "350px",
            transformOrigin: "top",
          },
          {
            height: "100%",
            scrollTrigger: {
              trigger: ".letter",
              start: "top 50%",
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
              start: "top 50%",
              end: "top 0%",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          ".beja-logo",
          {
            top: "14rem",
            rotate: "-90deg",
          },
          {
            top: "90%",
            rotate: "270deg",
            delay: 1,
            scrollTrigger: {
              trigger: ".letter",
              start: "top 50%",
              end: "top 0%",
              scrub: 2,
            },
          },
        );
      });

      matchMedia.add("screen and (min-width: 901px)", () => {
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
              start: "0px 30%",
              end: "0px 20%",
              scrub: 2,
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
              start: "top 25%",
              end: "top 0%",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          ".beja-logo",
          {
            bottom: "65%",
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
      });
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
