import { calcClamp } from "../data/Utils";

const FilantropandoCardStar = ({ className }) => {
  return (
    <svg
      width='47'
      height='54'
      viewBox='0 0 47 54'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${className}`}
      style={{
        width: `clamp(${calcClamp(22.5, 45)})`,
        height: `clamp(${calcClamp(25.5, 51)})`,
      }}
    >
      <path d='M24 53L20 34L1 40.5L16 27L1 14L20 20.5L24 1L28 20.5L46.5 14L31.5 27L46.5 40L27.5 33.5L24 53Z' />
    </svg>
  );
};

export default FilantropandoCardStar;
