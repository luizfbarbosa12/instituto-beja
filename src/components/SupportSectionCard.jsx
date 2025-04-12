import { PropTypes } from "prop-types";

export function SupportSectionCard({ title, mainImg, img, subtitle }) {
  const mainImgMap = Array.isArray(mainImg)
    ? mainImg.map((item, index) => (
        <img
          key={item}
          src={item}
          alt={`imagem ${index + 1}`}
          className='max-w-40 max-h-20 object-contain'
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

        <div className='flex gap-4 items-center'>{mainImgMap}</div>

        <div className='w-1/2 h-[1px] bg-gold' />

        <div className='flex flex-col gap-2 '>{subImgMap}</div>

        <p className='font-bold text-[14px] uppercase'>{subtitle}</p>
      </div>
    </div>
  );
}
SupportSectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  mainImg: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SupportSectionCard;
