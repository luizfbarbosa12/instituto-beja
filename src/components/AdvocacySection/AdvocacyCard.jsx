const ProudHand = "/assets/Ilustracao-4.png";

const AdvocacyCard = ({ title, mainImg, img, subtitle }) => {
  const subImgMap = Array.isArray(img)
    ? img.map((item, index) => (
        <img
          key={item}
          src={item}
          alt={`Sub imagem ${index + 1}`}
          className='h-6 w-fit max-sm:h-3'
        />
      ))
    : null;

  return (
    <div className='flex flex-col w-full'>
      <div className='flex gap-4 justify-end items-center w-full py-25 max-sm:py-8 max-sm:gap-2'>
        <h1 className='text-4xl text-bourdeaux editorial pt-4 max-sm:text-sm max-sm:pt-0'>
          Advocacy
        </h1>
        <img
          src={ProudHand}
          alt='Proud Hand'
          className='w-13 h-21 max-sm:w-4 max-sm:h-8'
        />
      </div>

      <div className='flex flex-col gap-3 w-fit max-sm:gap-2'>
        <h1 className='text-[20px] uppercase max-sm:text-[12px]'>{title}</h1>

        <img
          src={mainImg}
          alt='Pela democracia'
          className='max-w-40 max-sm:w-30'
        />

        <div className='w-1/2 h-[1px] bg-gold' />

        <div className='flex flex-col gap-2 max-sm:w-30'>{subImgMap}</div>

        <p className='font-bold text-[14px] uppercase max-sm:text-[10px]'>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AdvocacyCard;
