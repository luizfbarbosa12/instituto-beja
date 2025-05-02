const Clouds = "/assets/ilustracao-nuvens.png";
const Mountains = "/assets/Ilustracao-1.webp";
const ProudHand = "/assets/Ilustracao-4.png";
import MVCard from "./MVCard";
import Wrapper from "../Wrapper";

const MissionValueSection = () => {
  return (
    <div className='relative not-tablet:pt-20 tablet:pt-40'>
      <img src={Clouds} alt='Cloud image' className='absolute z-10 right-0' />

      <Wrapper className='mx-6'>
        <div className='flex flex-col relative bg-porcelain gap-25 py-40 tablet:pt-100'>
          <MVCard
            title={"Missão"}
            text={
              "Se tornar um Instituto de referência no ecossistema de filantropia, reconhecido por realizar, inspirar e catalisar uma filantropia inovadora, colaborativa e eficaz para destravar alavancas potencializadoras, trazendo impacto real em problemas sistêmicos."
            }
          />

          <div className='flex justify-end'>
            <MVCard
              title={"Visão"}
              text={
                "Promover o impacto positivo no campo da filantropia fomentando a inovação, colaboração, eficácia e engajamento da sociedade civil, do setor privado e do governo para resolução de problemas sistêmicos."
              }
            ></MVCard>
          </div>

          <div className='flex  relative'>
            <img
              src={ProudHand}
              alt='Proud hand image'
              className='absolute h-68 tablet:h-[46rem] left-0 top-6 tablet:top-12 -translate-y-1/1'
            />

            <MVCard
              title={"Valores"}
              text={
                "O respeito, a escuta, a empatia, o pertencimento, o acolhimento, a resiliência, a responsabilidade, o sonho, o afeto, a curiosidade e a inovação, atuando em todas essas frentes, interseccionadas com o protagonismo pessoal, mediante o desenvolvimento de autoconsciência e autoconfiança."
              }
            />
          </div>
        </div>
      </Wrapper>

      <img src={Mountains} alt='Mountains image' className='right-0 bottom-0' />
    </div>
  );
};

export default MissionValueSection;
