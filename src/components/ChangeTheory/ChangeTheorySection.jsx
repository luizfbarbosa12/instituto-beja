import { useContext } from "react";
import Wrapper from "../ui/Wrapper";
import { Trans } from "react-i18next";
const Image = "/assets/Ilustracao-8.png";
import { NoticeColumn } from "../ui/NoticeColumn";
import { ArrowRightLink } from "../ui/ArrowRightLink";
import { NoticeContainer } from "../ui/NoticeContainer";
import { GlobalContext } from "../../context/GlobalContext";

const ChangeTheorySection = () => {
  const { language } = useContext(GlobalContext);
  return (
    <Wrapper className={"pt-60 max-640:pt-15"}>
      <div className='flex flex-col items-end gap-16 relative max-640:gap-8'>
        <h1 className='self-start editorial tablet:max-w-200 max-w-60 text-[28px] leading-relaxed tablet:leading-none tablet:text-8xl'>
          <Trans i18nKey='changeTheory.title' />
        </h1>

        <div className='flex flex-col gap-7 tablet:gap-14 tablet:justify-self-end max-w-250'>
          <div className='flex flex-col gap-5 items-end font-serif text-base leading-relaxed tablet:text-3xl text-gold tablet:leading-12'>
            <p>
              <Trans i18nKey='changeTheory.quotes.quote1.text' />
            </p>
            <p className='text-end text-sm leading-relaxed tablet:text-[1.75rem]'>
              <Trans i18nKey='changeTheory.quotes.quote1.cite' />
            </p>
          </div>

          <NoticeContainer>
            <NoticeColumn>
              <p className='text-base'>
                <Trans i18nKey='changeTheory.block.block1.p1' />
              </p>
            </NoticeColumn>
            <NoticeColumn>
              <p>
                <Trans i18nKey='changeTheory.block.block1.p2' />
              </p>
            </NoticeColumn>
          </NoticeContainer>

          <div className='flex flex-col gap-2'>
            <p className='text-gold font-serif text-sm leading-relaxed tablet:text-2xl w-full max-w-[43.75rem] tablet:leading-10'>
              <Trans i18nKey='changeTheory.extra.siteTitle' />
            </p>

            <ArrowRightLink href='https://institutobeja.org/wp-content/uploads/2024/02/Relatório-Anual-Instituto-Beja-2023-PT.pdf'>
              <Trans i18nKey='changeTheory.extra.siteCallback' />
            </ArrowRightLink>
          </div>
        </div>
      </div>

      <img
        src={Image}
        alt='Ilustração'
        className='relative h-86 tablet:h-[42rem] -translate-x-1/2 tablet:translate-x-1/2 pt-8 pb-6 tablet:pt-25 tablet:pb-25 '
      />
    </Wrapper>
  );
};

export default ChangeTheorySection;
