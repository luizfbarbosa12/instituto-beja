import { SPCardData } from "../data/StrategicPillarData";
import Pillars from "../../public/assets/PilaresEstrategicos.png";
import ScrollTriggerList from "./ScrollTriggerCard/ScrollTriggerList";
import Wrapper from "./Wrapper";

const StrategicPillarSection = () => {
  return (
    <Wrapper className={"flex flex-col gap-30"}>
      <div className='flex flex-col gap-38 w-full pt-80'>
        <h1 className='editorial text-8xl w-full max-w-[60rem] leading-32 '>
          Pilares Estratégicos
        </h1>

        <div className='flex items-start justify-end w-full gap-[9rem]'>
          <img src={Pillars} alt='Pilares Estratégicos' />
          <p className='w-[29.5rem] text-base'>
            Nossos três pilares estratégicos – advocacy, conhecimento e
            laboratórios – são as forças motrizes que orientaram nossas ações ao
            longo de 2024. Funcionaram como lentes de estudos, práticas e
            experimentações, sustentando as reflexões do Beja sobre os modos de
            fazer diferente. Sem restringir abordagens, esses pilares condensam
            instrumentos para nossos exercícios de ação e inovação.
          </p>
        </div>
      </div>
      <div className='flex flex-col w-full  gap-10'>
        <ScrollTriggerList arr={SPCardData} />
      </div>
    </Wrapper>
  );
};

export default StrategicPillarSection;
