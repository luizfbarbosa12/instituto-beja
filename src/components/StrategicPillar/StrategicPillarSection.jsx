import Wrapper from "../Wrapper";
const Pillars = "/assets/PilaresEstrategicos.png";
import { SPCardData } from "./../../data/StrategicPillarData";
import PEScrollTriggerList from "./../ScrollTriggerCard/PEScrollTriggerList/PEScrollTriggerList";

const StrategicPillarSection = () => {
  return (
    <div className={"flex flex-col gap-80"}>
      <Wrapper>
        <div className='flex flex-col gap-7 tablet:gap-38 pt-22.5 tablet:pt-80'>
          <h1 className='editorial text-[28px] leading-[65px] tablet:text-8xl max-w-[60rem] tablet:leading-32 '>
            Pilares Estratégicos
          </h1>

          <div className='flex flex-col tablet:flex-row items-start justify-end gap-12 tablet:gap-[9rem]'>
            <img src={Pillars} alt='Pilares Estratégicos' />
            <p className='tablet:max-w-[29.5rem] text-base'>
              Nossos três pilares estratégicos –{" "}
              <strong>Advocacy, Conhecimento e Laboratórios</strong> – são as
              forças motrizes que orientaram nossas ações ao longo de 2024.
              Funcionaram como lentes de estudos, práticas e experimentações,
              sustentando as reflexões do Beja sobre os modos de fazer
              diferente. Sem restringir abordagens, esses pilares condensam
              instrumentos para nossos exercícios de ação e inovação.
            </p>
          </div>
        </div>
      </Wrapper>

      <div className='flex flex-col w-full gap-10 pb-8 px-16 max-950:px-4 max-640:px-0'>
        <PEScrollTriggerList arr={SPCardData} />
      </div>
    </div>
  );
};

export default StrategicPillarSection;
