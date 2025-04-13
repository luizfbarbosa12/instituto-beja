import Clouds from "/public/assets/Ilustracao-6.png";
import Mountains from "/public/assets/Ilustracao-1.png";
import ProudHand from "/public/assets/Ilustracao-4.png";
import MVCard from "./MVCard";

const MissionValueSection = () => {
  return (
    <div className='bg-porcelain relative flex flex-col gap-25 py-100 pb-120'>
      <img src={Clouds} alt='Cloud image' className='absolute right-0 top-0' />

      <MVCard
        title={"Missão"}
        text={
          "Se tornar um Instituto de referência no ecossistema de filantropia, reconhecido por realizar, inspirar e catalisar uma filantropia inovadora, colaborativa e eficaz para destravar alavancas potencializadoras, trazendo impacto real em problemas sistêmicos."
        }
      />

      <div className='flex w-full justify-end relative'>
        <img
          src={ProudHand}
          alt='Proud hand image'
          className='absolute h-[46rem] w-[29rem] left-0 top-10'
        />

        <MVCard
          title={"Visão"}
          text={
            "Promover o impacto positivo no campo da filantropia fomentando a inovação, colaboração, eficácia e engajamento da sociedade civil, do setor privado e do governo para resolução de problemas sistêmicos."
          }
        />
      </div>

      <div className='flex w-full'>
        <MVCard
          title={"Valores"}
          text={
            "O respeito, a escuta, a empatia, o pertencimento, o acolhimento, a resiliência, a responsabilidade, o sonho, o afeto, a curiosidade e a inovação, atuando em todas essas frentes, interseccionadas com o protagonismo pessoal, mediante o desenvolvimento de autoconsciência e autoconfiança."
          }
        />
      </div>

      <img
        src={Mountains}
        alt='Mountains image'
        className='absolute left-0 bottom-0'
      />
    </div>
  );
};

export default MissionValueSection;
