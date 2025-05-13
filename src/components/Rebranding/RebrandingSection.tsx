import Wrapper from "../ui/Wrapper";
import { NoticeColumn } from "../ui/NoticeColumn";
import { SectionTitle } from "../ui/SectionTitle";
import ImageSlider from "../Animations/ImageSlider";
import { NoticeContainer } from "../ui/NoticeContainer";
import {
  Carousel,
  CarouselItem,
  CarouselDots,
  CarouselContent,
} from "../ui/carousel";
import {
  keywordImg,
  bejaCoverImgs,
  bejaCoverImgsMobile,
} from "@/data/RebrandingData";
import { Trans, useTranslation } from "react-i18next";

const Logo = "/assets/beja-logo-animada-marrom.gif";
const RebrandingSection = () => {
  const [t] = useTranslation();
  const bejaCoverImagesMap = bejaCoverImgs.map((item, index) => (
    <img className='select-none' key={index} src={item} alt='' />
  ));

  return (
    <div className='flex flex-col gap-8 tablet:gap-30 mt-22.5 tablet:mt-75 w-full overflow-hidden bg-porcelain'>
      <div className='flex flex-col w-full gap-6 tablet:gap-44'>
        <div className='flex mx-6 flex-col gap-[4rem] tablet:mx-25'>
          <SectionTitle title='Rebranding' />

          <div className='flex tablet:items-center flex-col tablet:flex-row gap-10 tablet:gap-40 w-full justify-end'>
            <NoticeContainer className='max-w-250 self-end'>
              <NoticeColumn>
                <img
                  src={Logo}
                  alt={t("rebranding.logoAlt")}
                  className='self-center size-60 tablet:size-80'
                />
              </NoticeColumn>
              <NoticeColumn>
                <p>
                  <Trans i18nKey='rebranding.block1.0' />
                </p>
                <p>
                  <Trans i18nKey='rebranding.block1.1' />
                </p>
              </NoticeColumn>
            </NoticeContainer>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-14 tablet:gap-65 w-full'>
        <div className='w-full flex flex-col tablet:items-center editorial h-fit gap-14 tablet:gap-10'>
          <h1 className='text-2xl not-tablet:max-w-75 not-tablet:px-6 leading-[160%] tablet:text-4xl'>
            <Trans i18nKey='rebranding.key' />
          </h1>

          <ImageSlider
            arr={keywordImg}
            translateYMiddleImg={80}
            ImgWidth={"43rem"}
            ImgHeight={"23rem"}
            ButtonStyle={"bg-bourdeaux text-porcelain"}
            className='not-tablet:hidden'
          />
        </div>

        <div className='flex justify-between flex-col tablet:flex-row w-full gap-12 mx-auto'>
          <Carousel className='tablet:hidden' opts={{ align: "center" }}>
            <CarouselContent className='w-full'>
              {bejaCoverImgsMobile.map((item, index) => (
                <CarouselItem
                  className='items-center justify-center flex'
                  key={index}
                >
                  <img src={item} alt='' />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>

          <div className='flex w-full gap-4 justify-center'>
            <div className='hidden tablet:grid tablet:grid-cols-3 desktop:grid-cols-3 grid-rows-2 [&>img]:h-full [&>img]:w-full [&>img]:object-cover '>
              {bejaCoverImagesMap}
            </div>
            <div className='flex flex-col relative right-0 text-xs leading-[160%] tablet:text-lg mx-6 tablet:w-[28.5rem] gap-10 text-bourdeaux'>
              <p>
                <Trans i18nKey='rebranding.block2.0' />
              </p>
              <p>
                <Trans i18nKey='rebranding.block2.1' />
              </p>
              <p>
                <Trans i18nKey='rebranding.block2.2' />
              </p>
            </div>
          </div>
        </div>
      </div>

      <Wrapper>
        <div className='flex w-full justify-end pb-30'>
          <p className='tablet:w-[56rem] text-lg leading-[160%] tablet:text-[2.5rem] editorial text-rose'>
            <Trans i18nKey='rebranding.final' />
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default RebrandingSection;
