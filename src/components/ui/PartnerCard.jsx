import { calcClamp } from "../../data/Utils";

const PartnerCard = ({
  section,
  sectionImg,
  sectionImgStyle,
  title,
  partnerImg,
  subCards,
  subtitle,
}) => {
  const subImgMap = Array.isArray(subCards) ? subCards : null;

  return (
    <div className='flex flex-col w-full'>
      <div className='flex gap-4 justify-end items-center w-full py-25 max-640:py-8 max-sm:gap-2'>
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

      <div className='flex flex-col gap-3 w-fit max-sm:gap-2'>
        <h1
          style={{
            fontSize: `clamp(${calcClamp(12, 20)})`,
            lineHeight: `clamp(${calcClamp(12 * 1.5, 20 * 1.5)})`,
          }}
          className='text-[20px] uppercase max-sm:text-[12px]'
        >
          {title}
        </h1>

        <div className='flex gap-4'>
          {partnerImg?.map((item, index) => {
            const isIgapare = typeof item === 'string' && item.includes('IgapareLogo.svg');
            const width = isIgapare ? calcClamp(160, 220) : calcClamp(86, 128);
            // Para Igapare, remover clamp de altura e limitar altura máxima
            const height = isIgapare ? undefined : `clamp(${calcClamp(62, 80)})`;
            const style = isIgapare
              ? {
                  width: `clamp(${width})`,
                  maxHeight: '80px', // limita altura máxima
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                }
              : {
                  width: `clamp(${width})`,
                  height: height,
                };
            return (
              <img
                key={index}
                src={item}
                alt='Pela democracia'
                style={style}
              />
            );
          })}
        </div>

        <div className='w-1/2 h-[1px] bg-gold' />

        <div className={`flex flex-col gap-2 max-sm:w-30`}>
          {subImgMap?.map((Component, index) => (
            <div key={index}>{Component}</div>
          ))}
        </div>

        <p
          style={{
            fontSize: `clamp(${calcClamp(10, 14)})`,
            lineHeight: `clamp(${calcClamp(10 * 1.5, 14 * 1.5)})`,
          }}
          className='font-bold uppercase'
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;
