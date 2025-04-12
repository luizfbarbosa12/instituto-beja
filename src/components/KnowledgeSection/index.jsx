import nuvens from "/assets/ilustracao-nuvens.svg";
import logo_beja_completo from "/assets/logo-beja-completo-svg.svg";
import logo_pipa from "/assets/logo-pipa.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import conector_de_textos from "/assets/conector-de-textos.svg";
import { AgbaraFundAssociation } from "./AgbaraFundAssociation";
import { IEAEvent } from "./IEAEvent";
import { LautProject } from "./LautProject";
import { IdBRProject } from "./IdBRProject";
import { IgarapeProject } from "./IgarapeProject";
import { MoreInCommonProject } from "./MoreInCommonProject";
import { CriaAndTHPSupport } from "./CriaAndTHPSupport";

const KnowledgeSection = () => {
  return (
    <>
      <div className='min-h-screen bg-rose flex justify-center items-center relative'>
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

      <div className='min-h-screen pt-20'>
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
        <div className='flex gap-12 px-20'>
          <div className='text-retro-ochre editorial flex flex-col w-[860px] gap-4'>
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
        <div className='w-full flex items-center justify-center'>
          <img
            src={conector_de_textos}
            alt='linha conectando textos'
            className=''
          />
        </div>
        <div className='flex justify-end  gap-12 -mt-3'>
          <p className='flex flex-col gap-12 w-[472px]'>
            <span>
              Em 2024, a <strong>PIPA</strong> ampliou sua equipe e implementou
              políticas de cuidado que incentivam o desenvolvimento profissional
              e pessoal dos colaboradores. Entre as iniciativas, destacam-se
              auxílios complementares para infraestrutura, terapia pessoal e
              aprendizado de idiomas.
            </span>
            <span>
              Nesse período, a <strong>PIPA</strong> estruturou seu ciclo de
              avaliação interna, capacitando os profissionais para o uso de
              softwares de gestão de tarefas e projetos, além de elaborar planos
              de desenvolvimento individual para cada colaborador. Em parceria
              com o Instituto <strong>ACP</strong>, articulou a participação de
              integrantes de sua equipe em mentorias de gestão e liderança da{" "}
              <strong>ACP</strong>. A colaboração com o Instituto também
              resultou na criação do primeiro{" "}
              <strong>
                Fundo de Desenvolvimento Institucional para Organizações
                Periféricas (Fundo POP)
              </strong>
              , voltado para o fortalecimento institucional de organizações e
              centros de mobilização social localizados nas favelas e periferias
              de todo o Brasil.
            </span>
          </p>
          <p className='w-[472px]'>
            Outro marco importante foi o lançamento, em maio, do Guia das
            periferias para doadores, um material estruturado para orientar
            empresas, instituições, financiadores e fundações interessados em
            reduzir os impactos da desigualdade nos sistemas de doação no
            Brasil. Organizado em três eixos principais - transparência,
            pluralidade e desenvolvimento institucional - o guia reflete o
            compromisso da PIPA em transformar as práticas de doação, promovendo
            inclusão e justiça social no acesso a recursos.
          </p>
        </div>
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
              &quot;Na aproximação com o Beja, estávamos querendo fortalecer a
              nossa comunicação, o que culminou com a ativação do GUIA e o nosso
              processo de construção de narrativas da periferia. Para além de
              peças audiovisuais, da comunicação e do fortalecimento interno da
              nossa comunicação, o objetivo era também trazer os atores e
              projetos que já atuam nas periferias do Brasil para o debate da
              discussão de democratização da filantropia.
            </SwiperSlide>
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              A Pipa roda por cinco regiões do Brasil e traz as narrativas
              dessas pessoas que estão tocando seus projetos nas suas
              periferias, nas suas comunidades, para o grande centro de debate
              da filantropia. Essa aproximação estabelece o apoio institucional
              dentro do guia.”
              <cite>- PIPA</cite>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <AgbaraFundAssociation />
      <IEAEvent />
      <LautProject />
      <IdBRProject />
      <IgarapeProject />
      <MoreInCommonProject />
      <CriaAndTHPSupport />
    </>
  );
};

export default KnowledgeSection;
