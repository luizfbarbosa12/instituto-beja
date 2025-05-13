import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
const nuvens = "/assets/ilustracao-6-5.webp";
const logo_desenho_beja = "/assets/logo-desenho-beja.svg";

const FounderLetter = () => {
  const letterContainerRef = useRef(null);
  const [t] = useTranslation();

  const paragraphs = t("letter.paragraphs", {
    returnObjects: true,
  }) as string[];

  console.log(paragraphs);

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
              start: "0px 50%",
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
              start: "top 50%",
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
            top: "18rem",
            rotate: "-90deg",
          },
          {
            top: "90%",
            rotate: "270deg",
            delay: 1,
            scrollTrigger: {
              trigger: ".letter",
              start: "top 30%",
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
      });
    },
    {
      scope: letterContainerRef,
    },
  );

  return (
    <>
      <div
        ref={letterContainerRef}
        className='relative flex overflow-clip min-h-screen'
      >
        <div className='content not-tablet:pt-80 tablet:py-16 px-0 tablet:px-5 bg-rose flex-1 relative mx-auto'>
          <img
            src={nuvens}
            alt={t("letter.cloudsAlt")}
            className='absolute w-full h-auto -top-20 right-0'
          />
          <div className='letter overflow-hidden max-w-[1028px] h-auto flex flex-col gap-8 mx-auto z-2 px-6 tablet:px-21 pt-21 pb-21 relative'>
            <div className='-z-1 inset-0 bg-porcelain absolute letter-bg rounded-3xl'></div>
            <div className='editorial text-xl text-right leading-6 absolute right-8 tablet:right-20'>
              <span>
                (O)
                <br /> {t("letter.since")}
              </span>
            </div>
            <h1 className='font-bold text-4xl w-50 not-tablet:leading-10 tablet:text-8xl editorial mt-27.5 tablet:mt-50 tablet:w-2/3'>
              {t("letter.title")}
            </h1>
            <div className='letter-text text-sm leading-[160%] tablet:text-base flex flex-col gap-8 tablet:w-2/3 not-tablet:pb-50'>
              {paragraphs.map((text) => (
                <p>{text}</p>
              ))}
              <p className='flex flex-col'>
                {t("letter.signature")}
                <span className='text-base tablet:text-xl'>
                  {t("letter.author")}
                </span>
              </p>
            </div>
            <img
              src={logo_desenho_beja}
              alt={t("letter.logoAlt")}
              className='beja-logo h-12 tablet:h-32 absolute right-8 tablet:right-20'
            />
            <img
              src='/assets/bicicletinha.svg'
              alt={t("letter.bikeAlt")}
              className='bike-mobile tablet:hidden absolute h-50 left-0 bottom-0 z-1'
            />
          </div>
        </div>
        <img
          src='/assets/bicicletinha.svg'
          alt={t("letter.bikeAlt")}
          className='absolute h-100 bottom-0 z-1 not-tablet:hidden'
        />
      </div>
    </>
  );
};

export default FounderLetter;
