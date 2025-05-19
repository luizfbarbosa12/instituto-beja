import { useContext, useRef } from "react";
import TextBlock from "../ui/TextBlock.js";
import { calcClamp } from "@/data/Utils.js";
import { Images } from "../../assets/Index";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedHorizontalScroll from "./../ui/AnimatedHorizontalScroll";
import CMEScrollTriggerList from "../ScrollTriggerCard/CMEScrollTriggerList/CMEScrollTriggerList.jsx";
import { ArrowRightLink } from "../ui/ArrowRightLink.js";
import { NoticeContainer } from "../ui/NoticeContainer.js";
import { NoticeColumn } from "../ui/NoticeColumn.js";
import { Trans } from "react-i18next";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import { useCmeData } from "../../hooks/useCmeData.jsx";

const CMESection = () => {
  const { AEPIE, VTCME, getCMEPartners, cmeActionList, OSList } = useCmeData();

  const targetRef1 = useRef(null);

  const { language } = useContext(GlobalContext);

  const scroll1 = useScroll({
    target: targetRef1,
    offset: ["start end", "end start"],
  });

  const heightAnimation1 = useTransform(
    scroll1.scrollYProgress,
    [0.25, 0.75],
    ["0%", "75%"],
  );

  const targetRef2 = useRef(null);

  const scroll2 = useScroll({
    target: targetRef2,
    offset: ["start end", "end start"],
  });

  const heightAnimation2 = useTransform(
    scroll2.scrollYProgress,
    [0.4, 1],
    ["0%", "75%"],
  );

  const VTCMEmap = VTCME.map((item, index) => (
    <div
      key={index}
      style={{ width: `clamp(${calcClamp(270, 480)})` }}
      className={`flex flex-col ${item.bgColor} gap-3 px-8 py-10 rounded-[2.75rem]`}
    >
      <h1
        style={{ fontSize: `clamp(${calcClamp(14, 20)})` }}
        className='font-bold uppercase'
      >
        {item.title}
      </h1>

      <p style={{ fontSize: `clamp(${calcClamp(12, 16)})` }}>{item.text}</p>
    </div>
  ));

  return (
    <div className='flex flex-col bg-peach w-full gap-50 pb-50 max-1280:gap-25 max-768:gap-20'>
      <div className='flex w-full items-center relative py-0 px-32 max-1280:px-16 max-896:px-8 max-640:px-5 max-768:justify-center max-768:items-start overflow-hidden'>
        <img
          src={Images.CME.CentroME}
          alt='Centro de mudanças exponencias'
          style={{
            width: `clamp(${calcClamp(291, 582)})`,
            height: `clamp(${calcClamp(54, 108)})`,
          }}
          className='block m-0 p-0 max-768:relative max-768:-right-55 max-640:-right-52.5 max-460:-right-50 max-420:-right-45 max-380:-right-40 max-360:-right-36'
        />

        <img
          src={Images.CME.CMEWheel}
          alt='Roda CME'
          className='block m-0 p-0 relative -right-35 max-1280:-right-15 max-1080:-right-0 max-768:top-60 max-768:right-10 max-640:right-20 max-460:right-25'
          style={{
            width: `clamp(${calcClamp(851, 1171)})`,
            height: `clamp(${calcClamp(771, 1062)})`,
          }}
        />
      </div>

      <div className='flex flex-col items-end w-full gap-15 px-32 max-1280:px-16 max-896:px-8 max-640:px-5 max-768:gap-5'>
        <h1
          style={{ fontSize: `clamp(${calcClamp(32, 64)})` }}
          className='text-hot-coral editorial w-full'
        >
          <Trans i18nKey='cme.title' />
        </h1>

        <NoticeContainer className='max-w-250 self-end'>
          <NoticeColumn>
            <p>
              <Trans i18nKey='cme.p1' />
            </p>
          </NoticeColumn>
          <NoticeColumn>
            <p>
              <Trans i18nKey='cme.p2' />
            </p>

            <p>
              <Trans i18nKey='cme.p3' />
            </p>
          </NoticeColumn>
        </NoticeContainer>

        <div className='flex flex-col gap-30 w-[66rem] max-[1325px]:w-full'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
              <div
                style={{ width: `clamp(${calcClamp(220, 580)})` }}
                className='h-0.5 bg-hot-coral'
              />
              <h1
                className='font-bold text-hot-coral'
                style={{ fontSize: `clamp(${calcClamp(16, 32)})` }}
              >
                <Trans i18nKey='cme.list.title' />
              </h1>
            </div>

            <ul className='flex flex-col gap-8 list-disc'>
              {cmeActionList.map((item, index) => (
                <div key={index} className='flex gap-4 items-center'>
                  <div className='rounded-full size-4 bg-hot-coral max-768:size-3' />
                  <p
                    className='marker:text-hot-coral marker:text-5xl w-4/5'
                    style={{
                      fontSize: `clamp(${calcClamp(12, 24)})`,
                      lineHeight: `clamp(${calcClamp(12, 24)})`,
                    }}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='flex-center px-64 max-1366:px-32 max-950:px-16 max-896:px-8 max-640:px-5'>
        <div className='flex flex-col items-center p-30 relative border-4 border-hot-coral w-full rounded-3xl max-768:p-15 max-640:rounded-2xl max-640:border-3 max-640:px-10 max-380:px-8'>
          <p
            style={{
              fontSize: `clamp(${calcClamp(14, 32)})`,
            }}
            className='uppercase absolute -top-9 py-2 px-3 bg-peach font-bold text-hot-coral max-1366:-top-8 max-1080:-top-7 max-768:-top-6 max-640:-top-5'
          >
            <Trans i18nKey='cme.strategic.initial' />
          </p>

          <div className='flex flex-col items-center'>
            <p style={{ fontSize: `clamp(${calcClamp(14, 24)})` }}>
              <Trans i18nKey='cme.strategic.title' />
            </p>

            <p
              style={{ fontSize: `clamp(${calcClamp(12, 20)})` }}
              className='text-center'
            >
              <Trans i18nKey='cme.strategic.p1' />
            </p>
          </div>

          <div ref={targetRef1} className='h-60 relative'>
            <motion.div
              style={{ height: heightAnimation1 }}
              className='absolute top-10 w-[1px] rounded origin-top bg-hot-coral'
            >
              <div
                style={{
                  clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                }}
                className='absolute -left-[5.5px] bottom-0 size-3 bg-hot-coral'
              />
            </motion.div>
          </div>

          <p
            style={{ fontSize: `clamp(${calcClamp(14, 24)})` }}
            className='text-center'
          >
            <Trans i18nKey='cme.strategic.p2' />
          </p>

          <div ref={targetRef2} className='h-60 relative'>
            <motion.div
              style={{ height: heightAnimation2 }}
              className='absolute top-10 w-[1px] bg-hot-coral rounded origin-top'
            >
              <div
                style={{
                  clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                }}
                className='absolute -left-[5.5px] bottom-0 size-3 bg-hot-coral'
              />
            </motion.div>
          </div>

          <p
            className='text-center'
            style={{ fontSize: `clamp(${calcClamp(14, 24)})` }}
          >
            <Trans i18nKey='cme.strategic.p3' />
          </p>
        </div>
      </div>

      <div className='flex flex-col w-full px-32 max-1280:px-16 max-896:px-8 max-768:px-5'>
        <CMEScrollTriggerList
          arr={AEPIE}
          title={<Trans i18nKey='cme.orchestrating.title' />}
          paddingTop={
            "pt-90 max-1280:pt-80 max-360:pt-60 max-460:pt-55 max-950:pt-60"
          }
        />
      </div>

      <div className='px-32 max-1280:px-16 max-896:px-8 max-640:px-5'>
        <h1
          style={{ fontSize: `clamp(${calcClamp(24, 48)})` }}
          className={`text-cyan font-bold w-full`}
        >
          <Trans i18nKey='cme.transformationVision.title' />,
        </h1>

        <AnimatedHorizontalScroll map={VTCMEmap} />
      </div>

      <div className='flex flex-col items-end w-full gap-15 pt-20 px-32 max-1280:px-16 max-896:px-8 max-640:px-5 max-768:gap-5'>
        <h1
          style={{
            fontSize: `clamp(${calcClamp(24, 48)})`,
            lineHeight: `clamp(${calcClamp(24 * 1.2, 48 * 1.2)})`,
          }}
          className={`text-cyan font-bold w-full`}
        >
          <Trans i18nKey='cme.exponentialJourney.title' />,
        </h1>

        <div className='flex flex-col gap-30 w-[66rem] max-[1325px]:w-full'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      <Trans i18nKey='cme.exponentialJourney.p1' />,
                    </p>

                    <p>
                      <Trans i18nKey='cme.exponentialJourney.p2' />,
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
                    <div className='flex flex-col gap-1'>
                      <h1
                        style={{
                          fontSize: `clamp(${calcClamp(14, 24)})`,
                          lineHeight: `clamp(${calcClamp(14 * 1.3, 24 * 1.3)})`,
                        }}
                        className={`text-cyan font-bold`}
                      >
                        <Trans i18nKey='cme.exponentialJourney.extra.siteTitle' />
                      </h1>

                      <ArrowRightLink
                        href={
                          "https://centreforexponentialchange.org/pt-br/brazil/"
                        }
                      >
                        <Trans i18nKey='cme.exponentialJourney.extra.siteCallback' />
                        ,
                      </ArrowRightLink>
                    </div>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>

      <div className='flex flex-col gap-10 px-32 max-1280:px-16 max-896:px-8 max-640:px-5 max-640:hidden'>
        <h1
          style={{ fontSize: `clamp(${calcClamp(24, 48)})` }}
          className={`text-cyan font-bold w-full`}
        >
          <Trans i18nKey='cme.exponentialJourney.title2' />
        </h1>

        {language ? (
          <img src={Images.CME.CMEGrafico} alt='CME Grafico' />
        ) : (
          <img src={Images.CME.EngCmeGrafico} alt='CME Grafico' />
        )}
      </div>

      <div className='flex flex-col gap-10 px-32 max-1280:px-16 max-896:px-8 max-640:px-5 max-768:gap-5'>
        <h1
          style={{
            fontSize: `clamp(${calcClamp(24, 48)})`,
            lineHeight: `clamp(${calcClamp(24 * 1.2, 48 * 1.2)})`,
          }}
          className={`text-cyan font-bold w-full`}
        >
          <Trans i18nKey='cme.systemOrchestrating.title' />
        </h1>

        <div className='flex justify-between gap-10 max-1080:flex-col'>
          <div
            style={{
              fontSize: `clamp(${calcClamp(12, 16)})`,
              lineHeight: `clamp(${calcClamp(12 * 1.5, 16 * 1.5)})`,
            }}
            className='flex flex-col w-[462px] gap-4 max-1080:w-full'
          >
            <p>
              <Trans i18nKey='cme.systemOrchestrating.p1' />
            </p>

            <p>
              <Trans i18nKey='cme.systemOrchestrating.p2' />
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <h1
              className='font-bold text-cyan'
              style={{ fontSize: `clamp(${calcClamp(12, 20)})` }}
            >
              <Trans i18nKey='cme.systemOrchestrating.subtitle' />
            </h1>

            <div className='flex gap-4 max-768:gap-2'>
              {OSList.map((item, index) => (
                <div
                  style={{
                    width: `clamp(${calcClamp(105, 231)})`,
                    height: `clamp(${calcClamp(81, 177)})`,
                  }}
                  key={index}
                  className='bg-porcelain flex-center rounded-3xl p-4 max-768:rounded-xl'
                >
                  <img src={item} alt='Logo' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full px-32 max-1280:px-16 max-896:px-8 max-640:px-0'>
        <CMEScrollTriggerList arr={getCMEPartners()} />
      </div>
    </div>
  );
};

export default CMESection;
