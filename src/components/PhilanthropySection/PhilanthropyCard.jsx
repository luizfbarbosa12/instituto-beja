import * as Icon from "@phosphor-icons/react";
import FilantropandoCardStar from "./../../../public/assets/FilantropandoCardStar";

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
      className={`flex flex-col gap-7 ${bgColor} px-15 py-12 rounded-[60px] w-110 relative`}
    >
      <FilantropandoCardStar
        className={`absolute right-10 top-8 fill-${starColor}`}
      />

      <h1 className='uppercase text-2xl font-bold'>{title}</h1>

      <h2 className='text-3xl font-bold'>{subtitle}</h2>

      <div className='flex flex-col gap-3'>
        <div className='[&>p]:text-lg [&>p]:leading-5'>{text}</div>

        <div className='flex items-center gap-2'>
          <a href={link} className='font-bold'>
            Assistia aqui
          </a>
          <div className={`size-4 flex-center bg-aged-oak p-0.5 rounded-full`}>
            <Icon.ArrowRight className={`text-gold-ember rotate-335`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilanthropyCard;
