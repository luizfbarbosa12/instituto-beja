interface SupportSectionCardProps {
  title: string;
  mainImg: string[];
  img: string[];
  subtitle: string;
}

export function SupportSectionCard({
  title,
  mainImg,
  img,
  subtitle,
}: SupportSectionCardProps) {
  const mainImgMap = Array.isArray(mainImg)
    ? mainImg.map((item, index) => (
        <img
          key={item}
          src={item}
          alt={`imagem ${index + 1}`}
          className='h-full object-contain'
        />
      ))
    : null;

  const subImgMap = Array.isArray(img)
    ? img.map((item, index) => (
        <img
          key={item}
          src={item}
          alt={`Sub imagem ${index + 1}`}
          className='h-6 w-fit'
        />
      ))
    : null;

  return (
    <div className='flex flex-col w-full px-32 py-10'>
      <div className='flex flex-col gap-3 w-fit'>
        <h1 className='text-[20px] uppercase'>{title}</h1>

        <div className='gap-4 grid grid-flow-col max-w-100'>{mainImgMap}</div>

        <div className='flex relative flex-col gap-2 w-fit items-start'>
          <hr className='w-full border-t-1 bg-gold' />
          {subImgMap}
        </div>

        <p className='font-bold text-[14px] uppercase'>{subtitle}</p>
      </div>
    </div>
  );
}

export default SupportSectionCard;
