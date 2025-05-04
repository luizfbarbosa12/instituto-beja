import * as Icon from "@phosphor-icons/react";
import FilantropandoCardStar from "../FilantropandoCardStar";
import { calcClamp } from "../../data/Utils";

const PhilanthropyCard = ({
  title,
  subtitle,
  text,
  link,
  bgColor,
  starColor,
}) => {
  return (
    <div
      style={{
        gap: `clamp(${calcClamp(12, 18)})`,
      }}
      className={`flex flex-col gap-7 ${bgColor} px-15 py-12 rounded-[60px] w-110 max-896:w-90 max-896:px-10 max-896:py-8 max-896:rounded-3xl max relative max-768:w-full max-580:px-7 max-580:py-6 max-768:rounded-3xl`}
    >
      <FilantropandoCardStar
        className={`absolute right-10 top-8 ${starColor} max-640:top-4 max-640:right-5`}
      />

      <h1
        style={{ fontSize: `clamp(${calcClamp(14, 24)})` }}
        className='uppercase font-bold'
      >
        {title}
      </h1>

      <h2
        style={{
          fontSize: `clamp(${calcClamp(14, 30)})`,
          lineHeight: `clamp(${calcClamp(14 * 1.2, 30 * 1.2)})`,
        }}
        className='font-bold'
      >
        {subtitle}
      </h2>

      <div className='flex flex-col gap-3'>
        <div
          style={{
            fontSize: `clamp(${calcClamp(12, 18)})`,
            lineHeight: `clamp(${calcClamp(12 * 1.2, 18 * 1.2)})`,
          }}
        >
          {text}
        </div>

        <a
          target='_blank'
          href={link}
          className='flex gap-1 items-center cursor-pointer'
        >
          <p
            style={{
              fontSize: `clamp(${calcClamp(12, 18)})`,
              lineHeight: `clamp(${calcClamp(12 * 1.2, 18 * 1.2)})`,
            }}
          >
            Assista aqui
          </p>
          <div className={`size-4 flex-center bg-aged-oak p-0.5 rounded-full`}>
            <Icon.ArrowRight className={`text-gold-ember rotate-335`} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default PhilanthropyCard;
