import { calcClamp } from "../../data/Utils";

const LabSection = ({
  children,
  title,
  section,
  sectionImg,
  sectionImgStyle,
  bgColor,
  topImg,
  topImgStyle,
  topImgCss,
}) => {
  return (
    <div
      className={`${bgColor} flex flex-col pb-25 gap-16 w-full max-640:gap-8 max-640:pb-15`}
    >
      <div className='flex flex-col relative w-full py-25 max-sm:py-8'>
        <div className='flex justify-end items-end gap-2 w-full px-32 max-1280:px-16 max-896:px-8 max-640:px-5'>
          <h1
            style={{
              fontSize: `clamp(${calcClamp(12, 36)})`,
              lineHeight: `clamp(${calcClamp(12 * 1.5, 36 * 1.5)})`,
            }}
            className='text-bourdeaux editorial pt-4 max-sm:pt-0'
          >
            {section}
          </h1>

          <img
            src={sectionImg}
            alt={`${section} logo`}
            className={`object-center`}
            style={{
              width: `clamp(${calcClamp(sectionImgStyle.w, sectionImgStyle.maxW)})`,
              height: `clamp(${calcClamp(sectionImgStyle.h, sectionImgStyle.maxH)})`,
            }}
          />
        </div>

        <img
          src={topImg}
          alt={`Sessão ${title}`}
          className={`relative max-768:-left-10 ${topImgCss}`}
          style={{
            width: `clamp(${calcClamp(topImgStyle.w, topImgStyle.maxW)})`,
            height: `clamp(${calcClamp(topImgStyle.h, topImgStyle.maxH)})`,
          }}
        />
      </div>

      <div className='flex flex-col gap-16 w-full items-end px-32 max-1280:px-16 max-896:px-8 max-640:px-5 '>
        <div className='flex flex-col gap-18 w-[66rem] max-[1325px]:w-full max-640:gap-8'>
          <h1
            style={{
              fontSize: `clamp(${calcClamp(24, 64)})`,
              lineHeight: `clamp(${calcClamp(24 * 1.3, 64 * 1.3)})`,
            }}
            className='editorial flex-wrap w-full leading-20 max-[1100px]:w-full max-md:leading-15 max-sm:leading-7'
          >
            {title}
          </h1>

          {children}
        </div>
      </div>
    </div>
  );
};

export default LabSection;
