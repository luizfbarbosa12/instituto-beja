import AdvocacyCard from "./AdvocacyCard";

const PartnerSection = ({
  children,
  partnerName,
  title,
  mainImg,
  cardsImg,
  subtitle,
}) => {
  return (
    <div className='flex flex-col gap-16 w-full px-32 items-end max-[1280px]:px-16 max-[880px]:px-8 max-[650px]:px-5 max-sm:gap-8'>
      <AdvocacyCard
        title={title}
        mainImg={mainImg}
        img={cardsImg}
        subtitle={subtitle}
      />

      <div className='flex flex-col gap-18 w-[66rem] max-[1325px]:w-full max-[650px]:gap-4'>
        <h1 className='editorial text-6xl flex-wrap w-[70%] leading-20 max-[1100px]:w-full max-md:text-5xl max-md:leading-15 max-sm:text-2xl max-sm:leading-7'>
          {partnerName}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default PartnerSection;
