import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import FastTravelCard from "./FastTravelCard";
import { Images } from "../../assets/Index";
import { useTranslation } from "react-i18next";

export function PortfolioToAdvocacyVentTransition() {
  const container = useRef(null);
  const [t] = useTranslation();

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
    <div
      className='flex flex-col overflow-hidden relative w-full'
      ref={container}
    >
      <div className='ball rounded-t-[100vw] absolute w-full h-full bg-retro-ochre'></div>
      <div className='vent-container min-h-screen z-1 relative mt-80'>
        <div className='vent-container z-1 relative mt-40 tablet:mt-80 bg-retro-ochre'>
          <div
            className='flex gap w-full min-h-screen items-center justify-center mt-20 tablet:mt-80 bg-retro-ochre gap-10 py-40
                    max-1280:px-10
                    max-1160:px-8
                    max-1024:flex-col max-1024:py-16
                    max-640:px-5 max-420:px-2 max-640:gap-4 max-640:justify-start'
          >
            <FastTravelCard
              title={t("advocacy.cards.advocacy")}
              img={Images.Ilustracoes.ProudHand}
              className={"bg-bourdeaux text-porcelain"}
              imgConfig={
                "w-40 h-75 absolute bottom-0 right-10 max-1080:h-60 max-1080:right-0 max-1024:right-20 max-768:w-35 max-768:h-55 max-640:w-20 max-640:h-25 max-500:right-10"
              }
            />

            <FastTravelCard
              title={t("advocacy.cards.knowledge")}
              img={Images.Ilustracoes.Clouds}
              className={"bg-rose text-bourdeaux"}
              imgConfig={
                "max-w-none h-50 absolute bottom-0 max-1080:h-60 max-1080:right-0 max-950:h-50 max-844:h-40 max-640:h-20 max-460:h-15 max-460:w-50"
              }
            />

            <FastTravelCard
              title={t("advocacy.cards.labs")}
              img={Images.Ilustracoes.Bush}
              className={"bg-porcelain text-bourdeaux"}
              imgConfig={
                "max-w-none h-60 absolute bottom-0 max-1080:right-20 max-950:h-50 max-844:h-40 max-768:right-10 max-640:h-30 max-460:right-5 max-380:h-25"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
