import nuvens from "/assets/ilustracao-nuvens.svg";
import logo_beja_completo from "/assets/logo-beja-completo-svg.svg";
import logo_pipa from "/assets/logo-pipa.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const KnowledgeSection = () => {
  return (
    <>
      <div className='h-screen bg-rose flex justify-center items-center relative'>
        <img
          src={logo_beja_completo}
          alt='logo da beja no topo esquerdo'
          className='h-15 absolute top-20 left-20'
        />
        <h1 className='text-9xl editorial relative z-2 pb-10'>Conhecimento</h1>
        <img
          src={nuvens}
          alt='nuvens douradas no fundo'
          className='absolute -bottom-50'
        />
        {/* semicircle */}
        <div className='absolute w-full -top-90 flex items-center justify-center -z-4'>
          <div className='w-full aspect-[2/1] overflow-hidden'>
            <div className='w-full h-[400%] rounded-full bg-[var(--rose)] '></div>
          </div>
        </div>
      </div>
      {/* pipa */}

      <div className='h-screen pt-20'>
        <div className='flex items-center gap-4 justify-end mr-27'>
          <p className='editorial text-3xl'>Conhecimento</p>
          <img
            src={nuvens}
            alt='nuvens no canto superior direito'
            className='h-10'
          />
        </div>

        <div className=' pl-32'>
          <img src={logo_pipa} alt='logo da pipa' />
        </div>
        <div className='flex flex-col justify-start items-center gap-4'>
          <h1 className='editorial text-6xl'>PIPA</h1>
          <p className='w-[472px]'>
            A <strong>PIPA</strong> é uma organização criada para democratizar o
            acesso ao investimento social privado e à filantropia no Brasil. Sua
            missão é ser uma ponte eficaz entre financiadores e coletivos,
            movimentos e organizações de base situados em favelas e periferias,
            historicamente excluídos dos centros de poder. Por meio de
            diagnósticos, ferramentas e ações, a PIPA trabalha para assegurar
            que esses recursos cheguem aos territórios de maneira ampla e
            equitativa, considerando as dimensões de raça, gênero e classe.
          </p>
        </div>
        {/* slider */}
        <div className='w-full max-w-6xl ml-auto mt-10 px-4  mb-40'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={true}
            modules={[Pagination]}
            className=' max-w-[990px]'
          >
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              “PIPA, porque deriva da autonomia e liberdade do ser e viver nas
              periferias, do esforço de se manter no alto e do impacto do seu
              voo. PIPA porque é sobre mãos negras e periféricas sustentando o
              país, promovendo mudanças e futuros possíveis.
            </SwiperSlide>
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              No entanto, enfrentam muitos desafios no acesso ao investimento
              social privado no Brasil, que opera a partir de desigualdades
              estruturais. A capacidade de movimentar recursos de forma ágil
              para movimentos de base no Brasil é essencial para a criar
              estratégias resilientes e efetivas para lidar com crises e
              diminuir desigualdades no país.{" "}
            </SwiperSlide>
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              A partir dessa constatação, queremos contribuir para mudar as
              estruturas, as práticas e a cultura de investimento social privado
              no Brasil, impulsionando a democratização do repasse destes
              recursos.”
              <cite>- PIPA</cite>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex gap-12 px-20">
          <div className='h-screen text-retro-ochre editorial flex flex-col w-[860px] gap-4'>
            <p className='text-3xl self-end'>“As periferias têm respostas.”</p>
            <cite className='text-2xl self-end'>- PIPA</cite>
            <img
              src={nuvens}
              alt='ilustração de nuvens douradas'
              className='w-[912px] -mt-25'
            />
          </div>
          <p className='flex w-[472px]'>
            A atuação da PIPA concentra-se na criação de ferramentas que
            conectem coletivos e movimentos periféricos brasileiros a
            investimentos sociais privados e à filantropia em âmbito global. A
            organização também trabalha ativamente na construção de parcerias e
            na incidência junto a organizações filantrópicas e investidores
            sociais privados, promovendo a reavaliação de suas estruturas e
            práticas de financiamento para torná-las mais inclusivas e eficazes.
            A PIPA também desempenha um papel fundamental na racialização do
            debate, destacando as periferias como protagonistas na construção de
            soluções planejadas pela filantropia e pelos investimentos sociais
            privados no Brasil, trazendo maior reconhecimento às especificidades
            e necessidades desses territórios.
          </p>
        </div>
      </div>
    </>
  );
};

export default KnowledgeSection;
