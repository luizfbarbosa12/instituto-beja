import gsap from "gsap";
import Axle from "./Axle";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import TextBlock from "../ui/TextBlock";
import { Images } from "../../assets/Index";
import { calcClamp } from "../../data/Utils";
import ImageSlider from "../Animations/ImageSlider";
import ExternalLinkContainer from "./../ui/ExternalLinkContainer";
import { Trans, useTranslation } from "react-i18next";

const PhilanthropySection = () => {
  const axisContainer = useRef(null);
  const [t] = useTranslation();

  useGSAP(
    () => {
      gsap.fromTo(
        ".axis-1 .axis-line",
        {
          transformOrigin: "center top",
          scaleY: 0.2,
        },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: ".axis-1",
            start: "top 30%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        },
      );
      gsap.fromTo(
        ".axis-2 .axis-line",
        {
          transformOrigin: "center top",
          scaleY: 0.2,
        },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: ".axis-2",
            start: "top 30%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        },
      );
    },
    { scope: axisContainer },
  );

  const firstCardList = [
    {
      title: t("philanthropy.cards.0.title"),
      subtitle: t("philanthropy.cards.0.subtitle"),
      text: t("philanthropy.cards.0.text"),
      link: "https://www.youtube.com/watch?v=Dj_hPbwo090",
      bgColor: "bg-gold-ember",
      starColor: "fill-copper",
    },
    {
      title: t("philanthropy.cards.1.title"),
      subtitle: t("philanthropy.cards.1.subtitle"),
      text: t("philanthropy.cards.1.text"),
      link: "https://www.youtube.com/watch?v=qhl6yX23MKs",
      bgColor: "bg-copper",
      starColor: "fill-gold-ember",
    },
  ];
  const secondCardList = [
    {
      title: t("philanthropy.cards.2.title"),
      subtitle: t("philanthropy.cards.2.subtitle"),
      text: t("philanthropy.cards.2.text"),
      link: "https://www.youtube.com/watch?v=QvbkvITW3cM",
      bgColor: "bg-gold-ember",
      starColor: "fill-copper",
    },
  ];

  return (
    <div className='flex flex-col bg-light-peach'>
      <img
        src={Images.Filantropando.FilantropandoBanner}
        alt={t("philanthropy.bannerAlt")}
        className='w-full'
      />

      <div className='flex flex-col justify-start gap-15 w-full pt-15 pb-30 px-32 max-1280:px-16 max-1280:gap-14 max-896:px-8 max-896:gap-12 max-640:px-5 max-640:gap-4 max-640:pt-10 max-640:pb-15'>
        <h1
          className='editorial'
          style={{ fontSize: `clamp(${calcClamp(28, 96)})` }}
        >
          Filantropando
        </h1>

        <div className='w-full flex justify-end'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      <Trans i18nKey={"philanthropy.block1.0"} />
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: (
                  <>
                    <p>
                      <Trans i18nKey={"philanthropy.block1.1"} />
                    </p>

                    <p>
                      <Trans i18nKey={"philanthropy.block1.2"} />
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>

      <div className='flex items-center relative flex-col bg-gold-ember w-full px-32 max-1280:px-16 max-896:px-8 max-640:px-5'>
        <div className='w-full flex justify-center relative overflow-hidden'>
          <img
            src={Images.Filantropando.BubblesFilantropando}
            alt={t("philanthropy.bubblesAlt")}
            className='object-contain rotate-10 -top-30 relative'
            style={{
              width: `clamp(${calcClamp(506 / 2, 506)})`,
              height: `clamp(${calcClamp(400 / 2, 400)})`,
            }}
          />
        </div>

        <div
          style={{ gap: `clamp(${calcClamp(5, 50)})` }}
          className='flex justify-between items-center w-full'
        >
          <div
            style={{
              fontSize: `clamp(${calcClamp(14, 48)})`,
              lineHeight: `clamp(${calcClamp(14 * 1.2, 48 * 1.2)})`,
            }}
            className='flex flex-col gap-10'
          >
            <p className='editorial'>
              <Trans i18nKey={"philanthropy.phrases.0"} />
            </p>
            <p className='editorial'>
              <Trans i18nKey={"philanthropy.phrases.1"} components={{ i: <i /> }} />
            </p>
            <p className='editorial'>
              <Trans i18nKey={"philanthropy.phrases.2"} />
            </p>
          </div>

          <div className='flex flex-col'>
            <img
              src={Images.Filantropando.FilantropandoCCF}
              alt={t("philanthropy.ccfAlt")}
              className='shrink-0'
              style={{
                width: `clamp(${calcClamp(190, 568)})`,
                height: `clamp(${calcClamp(100, 307)})`,
              }}
            />
            <img
              src={Images.Filantropando.FilantropandoBoasAcoes}
              alt={t("philanthropy.goodActionsAlt")}
              className='shrink-0'
              style={{
                width: `clamp(${calcClamp(91, 360)})`,
                height: `clamp(${calcClamp(28, 110)})`,
              }}
            />
          </div>
        </div>

        <div
          style={{ height: `clamp(${calcClamp(400 / 2, 400)})` }}
          className='w-full flex justify-center relative'
        >
          <img
            src={Images.Filantropando.BubblesFilantropando}
            alt={t("philanthropy.bubblesAlt")}
            className='object-contain rotate-240 -left-[30%] -bottom-8 absolute'
            style={{
              width: `clamp(${calcClamp(506 / 2, 506)})`,
              height: `clamp(${calcClamp(400 / 2, 400)})`,
            }}
          />

          <img
            style={{
              width: `clamp(${calcClamp(34, 110)})`,
              height: `clamp(${calcClamp(34, 110)})`,
            }}
            src={Images.Filantropando.FilantropandoStar}
            alt=''
            className='relative right-20 top-10 max-640:right-0'
          />
        </div>
      </div>

      <div
        ref={axisContainer}
        style={{ gap: `clamp(${calcClamp(30, 120)})` }}
        className='flex flex-col gap-30 py-8 px-32 max-1280:px-12 max-896:px-6 max-640:px-3 max-768:py-6 max-640:py-4'
      >
        <h1
          style={{
            fontSize: `clamp(${calcClamp(18, 32)})`,
            lineHeight: `clamp(${calcClamp(18 * 1.2, 32 * 1.2)})`,
          }}
          className='editorial text-3xl'
        >
          <Trans i18nKey={"philanthropy.editionIntro"} />
        </h1>

        <Axle
          axle={t("philanthropy.axis.0.axis")}
          title={t("philanthropy.axis.0.title")}
          subtitle={t("philanthropy.axis.0.subtitle")}
          text={[
            t("philanthropy.axis.0.texts.0"),
            t("philanthropy.axis.0.texts.1"),
          ]}
          data={firstCardList}
        />

        <Axle
          axle={t("philanthropy.axis.1.axis")}
          title={t("philanthropy.axis.1.title")}
          subtitle={t("philanthropy.axis.1.subtitle")}
          text={[
            {
              i18nKey: "philanthropy.axis.1.texts.0",
              components: { i: <i /> },
            },
            t("philanthropy.axis.1.texts.1"),
            {
              i18nKey: "philanthropy.axis.1.texts.2",
              components: { strong: <strong /> },
            },
          ]}
          data={secondCardList}
        />
      </div>

      <div className='flex items-center relative flex-col bg-gold-ember w-full'>
        <div className='w-full flex justify-center relative overflow-hidden  px-32 max-1280:px-16 max-896:px-8 max-640:px-5'>
          <img
            src={Images.Filantropando.BubblesFilantropando}
            alt={t("philanthropy.bubblesAlt")}
            className='object-contain rotate-10 -top-30 relative'
            style={{
              width: `clamp(${calcClamp(506 / 2, 506)})`,
              height: `clamp(${calcClamp(400 / 2, 400)})`,
            }}
          />
        </div>

        <div className='flex flex-col gap-26 w-full'>
          <ImageSlider
            arr={[
              Images.Filantropando.FilantropiaSlider1,
              Images.Filantropando.FilantropiaSlider2,
              Images.Filantropando.FilantropiaSlider3,
              Images.Filantropando.FilantropandoCard2,
              Images.Filantropando.FilantropandoCard3,
              Images.Filantropando.FilantropandoCard4,
              Images.Filantropando.FilantropandoCard5,
              Images.Filantropando.FilantropandoCard6,
              Images.Filantropando.FilantropandoCard7,
            ]}
            translateYMiddleImg={"60"}
            ImgWidth={"35rem"}
            ImgHeight={"23rem"}
            ButtonStyle={"bg-aged-oak text-gold-ember"}
          />

          <div className='px-32 max-1280:px-16 max-896:px-8 max-640:px-5'>
            <ExternalLinkContainer
              title={t("philanthropy.externalLink.title")}
              subtitle={t("philanthropy.externalLink.subtitle")}
              className='text-bourdeaux!'
              link={"https://relatorio.filantropando.org/"}
            />
          </div>
        </div>

        <div
          style={{ height: `clamp(${calcClamp(400 / 2, 400)})` }}
          className='w-full flex justify-center relative px-32 max-1280:px-16 max-896:px-8 max-640:px-5'
        >
          <img
            src={Images.Filantropando.BubblesFilantropando}
            alt={t("philanthropy.bubblesAlt")}
            className='object-contain rotate-240 -left-[30%] -bottom-8 absolute'
            style={{
              width: `clamp(${calcClamp(506 / 2, 506)})`,
              height: `clamp(${calcClamp(400 / 2, 400)})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PhilanthropySection;
