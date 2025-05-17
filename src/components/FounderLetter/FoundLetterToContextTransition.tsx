import gsap from "gsap";
import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import { useGSAP } from "@gsap/react";
import { SectionTitle } from "../ui/SectionTitle";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
import { Trans, useTranslation } from "react-i18next";

export function FoundLetterToContextTransition() {
  const container = useRef(null);
  const svgLineRef = useRef(null);
  const [t] = useTranslation();

  useGSAP(
    () => {
      gsap.fromTo(
        ".ball",
        { scale: 1, transformOrigin: "center top" },
        {
          scale: 2,
          scrollTrigger: {
            trigger: container.current,
            start: "top 50%",
            end: "top 0%",
            scrub: 1,
          },
        },
      );
      if (svgLineRef.current) {
        const path = svgLineRef.current as SVGPathElement;

        const pathLength = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: path,
            start: "top 80%",
            end: "bottom 10%",
            scrub: true,
          },
        });
      }
    },
    { scope: container },
  );

  return (
    <>
      <div className='bg-retro-ochre pb-58 flex-1 editorial flex items-start pt-30 justify-start text-left relative'>
        <p className='max-w-68 text-3xl leading-[160%] tablet:text-6xl tablet:max-w-[1084px] mx-7 tablet:mx-32 flex flex-col gap-8 text-porcelain'>
          {t("context.invite.0")} <br className='hidden tablet:inline' />
          {t("context.invite.1")} <br className='hidden tablet:inline' />{" "}
          {t("context.invite.2")}
        </p>
      </div>
      <div
        className='flex flex-col overflow-hidden relative bg-retro-ochre'
        ref={container}
      >
        <div className='ball rounded-t-[100vw] absolute w-full h-full bg-porcelain overflow-hidden' />

        <div className='vent-container mb-9 tablet:mb-16 min-h-screen z-1 relative mt-60 tablet:mt-140 overflow-hidden flex flex-col mx-4.5 tablet:mx-25'>
          <SectionTitle title={t("context.title")} className='tablet:pb-14' />

          <h3 className='py-7.5 px-2.5 text-base tablet:text-4xl text-rose editorial flex self-end flex-col max-w-250 tablet:ml-55 tablet:pb-22.5'>
            {t("context.subtitle")}
          </h3>
          <NoticeContainer className='max-w-250 self-end'>
            <NoticeColumn>
              <p>
                <ReactMarkdown>{t('context.block1.0')}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t('context.block1.1')}</ReactMarkdown>
              </p>
            </NoticeColumn>
            <NoticeColumn>
              <p>
                <ReactMarkdown>{t('context.block1.2')}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t('context.block1.2')}</ReactMarkdown>
              </p>
            </NoticeColumn>
          </NoticeContainer>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1000'
            height='250'
            viewBox='0 0 1000 250'
            fill='none'
            className='not-desktop:hidden w-full max-w-250 self-end -translate-x-1/6'
          >
            <path
              d='M914 0V93.4271H1V249H146.185'
              stroke='#1E0301'
              strokeWidth='2'
              ref={svgLineRef}
            />
          </svg>
          <NoticeContainer className='desktop:-mt-12 max-w-250 self-end'>
            <NoticeColumn>
              <p>
                <ReactMarkdown>{t('context.block2.0')}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t('context.block2.1')}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t('context.block2.2')}</ReactMarkdown>
              </p>
            </NoticeColumn>
            <NoticeColumn>
              <p>
                <ReactMarkdown>{t('context.block2.3')}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t('context.block2.4')}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t('context.block2.5')}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t('context.block2.6')}</ReactMarkdown>
              </p>
              <p>
                <Trans i18nKey='context.block2.7' />
              </p>
            </NoticeColumn>
          </NoticeContainer>
        </div>
      </div>
    </>
  );
}
