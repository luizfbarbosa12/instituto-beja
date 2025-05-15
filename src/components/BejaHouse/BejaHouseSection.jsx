import { useContext } from "react";
import Wrapper from "../ui/Wrapper";
import { Trans } from "react-i18next";
import { Images } from "../../assets/Index";
import { NoticeColumn } from "../ui/NoticeColumn";
import ImageSlider from "../Animations/ImageSlider";
import { NoticeContainer } from "../ui/NoticeContainer";
import { GlobalContext } from "../../context/GlobalContext";

const BejaHouseSection = () => {
  const { language } = useContext(GlobalContext);

  return (
    <div className='flex flex-col relative rounded-[70px]'>
      <img
        src={Images.BejaHouse.EspacoBeja1}
        alt='Espaço Beja image'
        className='object-center w-full aspect-video max-h-210 object-cover'
      />

      <Wrapper>
        <div className='flex flex-col gap-6 text-bourdeaux tablet:gap-16 pt-5 tablet:pt-20 pb-5 tablet:pb-60 max-640:gap-0 max-640:pb-15'>
          <h1 className='editorial text-[28px] leading-[65px] tablet:text-8xl tablet:leading-none'>
            <Trans i18nKey='bejaHouse.title' />
          </h1>

          <NoticeContainer className='max-w-[980px] self-end'>
            <NoticeColumn>
              <p>
                <Trans i18nKey='bejaHouse.p1' />
              </p>
            </NoticeColumn>
            <NoticeColumn>
              <p>
                <Trans i18nKey='bejaHouse.p2' />
              </p>
              <p>
                <Trans i18nKey='bejaHouse.p3' />
              </p>
            </NoticeColumn>
          </NoticeContainer>
        </div>
      </Wrapper>

      <div className='flex-center relative flex-col w-full bg-retro-ochre gap-8 tablet:gap-24 py-26 tablet:py-50'>
        <h1 className='text-lg leading-relaxed tablet:leading-none tablet:text-5xl text-porcelain editorial'>
          <Trans i18nKey='bejaHouse.final' />
        </h1>
        <ImageSlider
          arr={[
            Images.BejaHouse.EspacoBeja1,
            Images.BejaHouse.EspacoBeja2,
            Images.BejaHouse.BejaHouseCard1,
            Images.BejaHouse.BejaHouseCard2,
            Images.BejaHouse.BejaHouseCard3,
            Images.BejaHouse.BejaHouseCard4,
            Images.BejaHouse.BejaHouseCard5,
            Images.BejaHouse.BejaHouseCard6,
            Images.BejaHouse.BejaHouseCard7,
          ]}
          translateYMiddleImg={"80"}
          imgStyle={{ borderRadius: "40px", overflow: "hidden" }}
          ButtonStyle={"text-retro-ochre bg-porcelain"}
          buttonsClassName={"w-2/3 tablet:w-2/5"}
        />
      </div>
    </div>
  );
};

export default BejaHouseSection;
