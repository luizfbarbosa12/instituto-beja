import { PropTypes } from "prop-types";
const ProudHand = "/assets/Ilustracao-4.png";

const AdvocacyCard = ({ title, mainImg, img, subtitle }) => {
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
    <div className='flex flex-col w-full px-32 pb-25'>
      <div className='flex gap-4 justify-end items-center w-full py-25'>
        <h1 className='text-4xl text-bourdeaux editorial pt-4 '>Advocacy</h1>
        <img src={ProudHand} alt='Proud Hand' className='w-13 h-21' />
      </div>

      <div className='flex flex-col gap-3 w-fit'>
        <h1 className='text-[20px] uppercase'>{title}</h1>

        <img src={mainImg} alt='Pela democracia' className='max-w-40' />

        <div className='w-1/2 h-[1px] bg-gold' />

        <div className='flex flex-col gap-2 '>{subImgMap}</div>

        <p className='font-bold text-[14px] uppercase'>{subtitle}</p>
      </div>
    </div>
  );
};

AdvocacyCard.propTypes = {
  title: PropTypes.string.isRequired,
  mainImg: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default AdvocacyCard;
