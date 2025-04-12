import nuvens from "/assets/ilustracao-nuvens.svg";
import logo_beja_completo from "/assets/logo-beja-completo-svg.svg";
import logo_pipa from "/assets/logo-pipa.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import FilantropiaSubCard from "/public/assets/FilantropiaSubCard.png";
import JusticaRacial from "/public/assets/JusticaRacial.png";
import EquidadeGenero from "/public/assets/EquidadeGenero.png";
import Ag from "/public/assets/agbara_logo.png";
import SupportSectionCard from "./SupportSectionCard";
import arrowRight from "/assets/icons/arrow-right.svg";
import { NoticeContainer } from "./ui/NoticeContainer";
import { NoticeColumn } from "./ui/NoticeColumn";
import { Blockquote } from "./ui/Blockote";

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
          <div className='min-h-screen text-retro-ochre editorial flex flex-col w-[860px] gap-4'>
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

      <div className='flex items-center gap-4 justify-end mr-27 py-24'>
        <p className='editorial text-3xl'>Conhecimento</p>
        <img
          src={nuvens}
          alt='nuvens no canto superior direito'
          className='h-10'
        />
      </div>

      <SupportSectionCard
        title='Associação'
        mainImg={Ag}
        img={[JusticaRacial, EquidadeGenero, FilantropiaSubCard]}
        subtitle='Vigência - 2024 - 2027'
      />

      {/* Componente de folha de jornal */}
      <div className='flex justify-end px-32'>
        <div className='flex flex-col items-end max-w-250 gap-16'>
          <h1 className='editorial text-5xl w-full'>
            Fundo Agbara – apoio ao Núcleo de Pesquisa e Memória da Mulher Negra
            (NUPEMN)
          </h1>

          <NoticeContainer>
            <NoticeColumn>
              <p>
                Uma pesquisa global realizada pelo{" "}
                <strong>Black Feminist Fund</strong> revelou que mulheres negras
                recebem apenas 0,1% a 0,3% dos recursos provenientes da
                filantropia e do investimento social privado em todo o mundo. No
                Brasil, a situação não é diferente. Com esse cenário em mente, o{" "}
                <strong>Fundo Agbara</strong> foi criado em setembro de 2020,
                tornando-se o primeiro fundo de mulheres negras no Brasil. Esta
                iniciativa de impacto social busca fortalecer mulheres negras e
                suas comunidades por meio do apoio a projetos que promovam
                igualdade étnico-racial, justiça econômica, social e climática.
              </p>
              <p>
                Com foco em iniciativas que contribuam para a construção de um
                Brasil onde a população negra possa viver plenamente emancipada
                e com o bem-estar assegurado, o <strong>Fundo Agbara</strong>{" "}
                concentra seus esforços em apoiar organizações de base lideradas
                por mulheres negras. Assim, atua como uma ferramenta de
                resistência contra as exclusões e desigualdades enfrentadas
                historicamente por essa população.
              </p>

              <div className=''>
                <h4 className='font-serif text-gold text-2xl leading-relaxed'>
                  Conheça o estudo completo e compartilhe-o.
                </h4>
                <a
                  href='https://google.com.br'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex gap-1 items-center hover:underline text-sm leading-relaxed'
                >
                  <span>Acessar aqui o Estudo Completo</span>
                  <img src={arrowRight} alt='Seta para direita acima' />
                </a>
              </div>
            </NoticeColumn>

            <NoticeColumn>
              <p>
                O{" "}
                <strong>
                  Núcleo de Pesquisa e Memória da Mulher Negra (NUPEMN)
                </strong>
                , vinculado ao <strong>Fundo Agbara</strong>, tem por objetivo
                pesquisar e fortalecer a filantropia voltada para as mulheres
                negras e apoiar iniciativas que influenciem políticas públicas.
                Isso inclui democratizar o acesso ao investimento social
                privado, priorizando o recorte racial na alocação de recursos e
                promovendo o desenvolvimento de uma filantropia mais inclusiva e
                representativa.
              </p>
              <p>
                Como parte desse compromisso, o <strong>NUPEMN</strong> lançou
                um diagnóstico inédito sobre filantropia e raça no Brasil. O
                estudo mapeou mais de 800 organizações negras e apresentou
                análises profundas sobre justiça social e reparação histórica.
                Com contribuições de especialistas como{" "}
                <strong>Cida Bento</strong> e um curta-metragem exclusivo, o
                material é um convite à reflexão e à ação para transformar o
                cenário da filantropia no país.
              </p>
              <p>
                Temos orgulho de ser parceiros dessa pesquisa transformadora,
                reforçando nosso compromisso com a equidade racial e de oxigenar
                o ecossistema filantrópico.
              </p>
            </NoticeColumn>
          </NoticeContainer>

          <Blockquote
            text={`“A gente recebe muito esse tipo de questionamento de outros
              doadores: ‘Ah! Mas outros Institutos já fazem pesquisa, porque
              vocês querem fazer também?’ Mas não bastam dois institutos de
              pessoas negras, isso não representa tudo. Institutos de pessoas
              brancas têm aos montes.”`}
            author='ALINE ODARA, Diretora Executiva'
          />

          <NoticeContainer>
            <NoticeColumn>
              <p>
                O <strong>Fundo Agbara</strong> fortalece nossas parcerias
                baseadas na confiança e na colaboração, destacando o valor do
                investimento de apoio institucional. Esse modelo permite que as
                instituições beneficiadas canalizem menos esforços para
                preocupações com o futuro imediato e mais energia para ampliar
                sua criatividade e potência para impactar a vida das mulheres
                negras. O tempo antes consumido em captação de recursos, agora é
                direcionado para transformar realidades e fortalecer comunidades
              </p>
            </NoticeColumn>

            <NoticeColumn>
              <p>
                <strong>Agbara</strong> desempenha um papel fundamental na
                filantropia brasileira, contribuindo para a democratização
                desses espaços historicamente excludentes. A organização busca
                atrair outras instituições negras para ocupar essas esferas:
                &quot;... porque é um tanto constrangedor sermos as únicas
                mulheres negras neste espaço.” Isso reposiciona o{" "}
                <strong>Fundo Agbara</strong> no ecossistema da filantrópico de
                maneira inovadora
              </p>
            </NoticeColumn>
          </NoticeContainer>
          <Blockquote
            text={`“Mulheres negras produzindo conhecimento e salvaguardando a nossa memória também é um importante instrumento emancipatório. As soluções são produzidas por mulheres negras há muito tempo.”`}
            author='ALINE ODARA, Diretora Executiva'
          />
          <NoticeContainer>
            <NoticeColumn>
              <p>
                Propõe-se a redução das ações, mantendo, porém, a diversidade
                das frentes de atuação. Essa abordagem tem como objetivo
                aumentar o número de pessoas atendidas e aprimorar os processos
                de comunicação, ampliando o impacto alcançado enquanto concentra
                esforços na otimização da equipe.
              </p>
            </NoticeColumn>

            <NoticeColumn>
              <p>
                Adicionalmente, busca-se intensificar as interações entre os
                agentes de parceria, incentivando um diálogo permanente e uma
                convivência harmoniosa e colaborativa. Tal abordagem contribui
                para o fortalecimento das iniciativas, baseando-se em práticas
                de escuta ativa e no reconhecimento recíproco.
              </p>
            </NoticeColumn>
          </NoticeContainer>
        </div>
      </div>
    </>
  );
};

export default KnowledgeSection;
