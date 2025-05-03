import PartnerCard from "../ui/PartnerCard";
import { calcClamp } from "../../data/Utils";

const PartnerSection = ({
  children,
  partnerName,
  section,
  sectionImg,
  sectionImgStyle,
  title,
  mainImg,
  cardsImg,
  subtitle,
}) => {
  return (
    <div className='flex flex-col gap-16 w-full px-32 items-end max-[1280px]:px-16 max-[880px]:px-8 max-[650px]:px-5 max-sm:gap-8 pt-10'>
      <PartnerCard
        section={section}
        sectionImg={sectionImg}
        sectionImgStyle={sectionImgStyle}
        title={title}
        mainImg={mainImg}
        img={cardsImg}
        subtitle={subtitle}
      />

      <div className='flex flex-col gap-18 w-[66rem] max-[1325px]:w-full max-[650px]:gap-4'>
        <h1
          style={{
            fontSize: `clamp(${calcClamp(24, 64)})`,
            lineHeight: `clamp(${calcClamp(24 * 1.3, 64 * 1.3)})`,
          }}
          className='editorial flex-wrap w-full leading-20 max-[1100px]:w-full max-md:leading-15 max-sm:leading-7'
        >
          {partnerName}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default PartnerSection;
